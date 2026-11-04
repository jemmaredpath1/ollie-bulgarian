// Ollie's Bulgarian Adventure — game engine.
// Content lives in content.js; this file only knows how to play it.
(() => {
  'use strict';

  const C = window.CONTENT;
  const STORE_KEY = 'ollie-bulgarian-v1';
  const XP_PER_LEVEL = 100;
  const app = document.getElementById('app');

  // Lessons marked status: "planned" are outlines only: never playable, never counted.
  const isPlanned = l => l.status === 'planned';

  // Every playable lesson in play order, each knowing its unit.
  const LESSONS = [];
  C.units.forEach(u => u.lessons.forEach(l => { l.unit = u; if (!isPlanned(l)) LESSONS.push(l); }));

  // Every word list a unit uses (for boss rounds and distractors).
  C.units.forEach(u => {
    const playable = u.lessons.filter(l => !isPlanned(l));
    u.planned = playable.length === 0;
    u.words = playable.flatMap(l => l.words || []);
    u.sentences = playable.flatMap(l => l.sentences || []);
  });
  const unitNumber = u => C.units.indexOf(u) + 1;

  // ================= Saved progress =================
  const freshState = () => ({
    version: 1, dogName: null, xp: 0, streak: 0, lastDay: null,
    done: {},     // lessonId -> { best: accuracy %, plays }
    words: {},    // wordId -> { right, wrong }
    muted: false,
    speaking: true   // "Say it!" exercises
  });

  let state = loadState();

  function loadState() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE_KEY));
      if (s && s.version === 1) return Object.assign(freshState(), s);
    } catch (e) { /* storage unavailable or corrupt */ }
    return freshState();
  }

  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  const dayKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const today = () => dayKey(new Date());
  const yesterday = () => dayKey(new Date(Date.now() - 864e5));

  function currentStreak() {
    return (state.lastDay === today() || state.lastDay === yesterday()) ? state.streak : 0;
  }

  const level = () => Math.floor(state.xp / XP_PER_LEVEL) + 1;

  // ================= Little helpers =================
  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat()) {
      if (kid == null || kid === false) continue;
      el.append(kid.nodeType ? kid : document.createTextNode(kid));
    }
    return el;
  }

  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const word = id => C.words[id];
  const sentence = id => C.sentences[id];
  const tokens = text => text.replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean);
  const norm = t => t.toLocaleLowerCase('bg');

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.remove('show');
    void t.offsetWidth;
    t.classList.add('show');
  }

  // ================= Sound effects =================
  let audioCtx = null;
  function tone(notes) {
    if (state.muted) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      let t = audioCtx.currentTime;
      for (const [freq, dur, type] of notes) {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = type || 'sine';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.18, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + dur);
        o.connect(g).connect(audioCtx.destination);
        o.start(t);
        o.stop(t + dur);
        t += dur * 0.8;
      }
    } catch (e) { /* no audio */ }
  }
  const sfx = {
    right: () => tone([[660, 0.12], [880, 0.2]]),
    wrong: () => tone([[220, 0.25, 'triangle']]),
    tap:   () => tone([[520, 0.05]]),
    win:   () => tone([[523, 0.15], [659, 0.15], [784, 0.15], [1047, 0.35]]),
    level: () => tone([[392, 0.12], [523, 0.12], [659, 0.12], [784, 0.12], [1047, 0.5, 'triangle']])
  };

  // ================= Bulgarian voice =================
  let bgVoice = null;
  function findVoice() {
    if (!('speechSynthesis' in window)) return;
    const voices = speechSynthesis.getVoices();
    bgVoice = voices.find(v => /^bg/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) {
    findVoice();
    speechSynthesis.addEventListener?.('voiceschanged', findVoice);
  }

  let currentAudio = null;
  function speak(text, audioFile, slow) {
    if (state.muted || !text) return;
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (audioFile) {
      currentAudio = new Audio(audioFile);
      currentAudio.playbackRate = slow ? 0.75 : 1;
      currentAudio.play().catch(() => speakTTS(text, slow));
      return;
    }
    speakTTS(text, slow);
  }
  function speakTTS(text, slow) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'bg-BG';
    if (bgVoice) u.voice = bgVoice;
    u.rate = slow ? 0.5 : 0.85;
    speechSynthesis.speak(u);
  }
  // iPad/iPhone only allow speech that starts from a tap, so "warm up" the voice on one.
  let speechUnlocked = false;
  function unlockSpeech() {
    if (speechUnlocked || !('speechSynthesis' in window)) return;
    speechUnlocked = true;
    const u = new SpeechSynthesisUtterance(' ');
    u.volume = 0;
    speechSynthesis.speak(u);
  }
  document.addEventListener('pointerdown', unlockSpeech, { once: true });

  const sayWord = (id, slow) => { const w = word(id); speak(w.bg, w.audio, slow); };
  const saySentence = (id, slow) => { const s = sentence(id); speak(s.bg, s.audio, slow); };

  // ================= Listening to Ollie =================
  // Safari (iPad/iPhone) and Chrome have a built-in speech recogniser. If it
  // can't do Bulgarian, we fall back to "record & compare".
  const Recognizer = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognitionWorks = !!Recognizer;
  const speakingOn = () => state.speaking !== false;
  const showSay = () => state.showSay !== false;

  const DIGITS = ['нула', 'едно', 'две', 'три', 'четири', 'пет', 'шест', 'седем', 'осем', 'девет', 'десет'];
  function cleanSpeech(t) {
    return norm(t)
      .replace(/\b(10|[0-9])\b/g, d => DIGITS[+d])
      .replace(/[.,!?¡¿"'„“”–-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function editDistance(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
    }
    return d[a.length][b.length];
  }

  // 0 → nothing alike, 1 → exactly the same.
  function closeness(heard, target) {
    const a = cleanSpeech(heard), b = cleanSpeech(target);
    if (!a) return 0;
    if (a === b || a.includes(b)) return 1;
    return 1 - editDistance(a, b) / Math.max(a.length, b.length);
  }

  function recognise(onHeard, onFail) {
    if (window.speechSynthesis) speechSynthesis.cancel();
    const r = new Recognizer();
    r.lang = 'bg-BG';
    r.interimResults = false;
    r.continuous = false;
    r.maxAlternatives = 5;
    let got = false;
    r.onresult = e => { got = true; onHeard([...e.results[0]].map(a => a.transcript)); };
    r.onerror = e => { got = true; onFail(e.error); };
    r.onend = () => { if (!got) onFail('no-speech'); };
    try { r.start(); } catch (e) { onFail('start-failed'); }
    return r;
  }

  // Record a few seconds of Ollie's voice so he can compare it with the dog's.
  let micStream = null;
  async function recordClip(seconds = 3) {
    micStream = micStream || await navigator.mediaDevices.getUserMedia({ audio: true });
    const rec = new MediaRecorder(micStream);
    const chunks = [];
    rec.ondataavailable = e => chunks.push(e.data);
    const done = new Promise(res => { rec.onstop = () => res(new Blob(chunks, { type: rec.mimeType })); });
    rec.start();
    setTimeout(() => rec.state !== 'inactive' && rec.stop(), seconds * 1000);
    return { stop: () => rec.state !== 'inactive' && rec.stop(), done };
  }

  function speakerButtons(onSay) {
    return h('div', { class: 'speakers' },
      h('button', { class: 'btn-speaker', 'aria-label': 'Play sound', onclick: () => onSay(false) }, '🔊'),
      h('button', { class: 'btn-speaker small', 'aria-label': 'Play slowly', onclick: () => onSay(true) }, '🐢')
    );
  }

  // ================= The dog mascot =================
  function dog(mood = 'happy', size = 120) {
    const wrap = h('div', { class: `dog ${mood}`, style: `width:${size}px;height:${size}px` });
    wrap.innerHTML = `
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <ellipse cx="60" cy="113" rx="32" ry="5" fill="rgba(0,0,0,.12)"/>
        <g class="dog-head">
          <g class="ear-l"><ellipse cx="26" cy="54" rx="13" ry="25" fill="#7a4a24" transform="rotate(18 26 54)"/></g>
          <g class="ear-r"><ellipse cx="94" cy="54" rx="13" ry="25" fill="#7a4a24" transform="rotate(-18 94 54)"/></g>
          <circle cx="60" cy="60" r="38" fill="#d9954f"/>
          <ellipse cx="76" cy="44" rx="11" ry="9" fill="#b9763a"/>
          <ellipse cx="60" cy="77" rx="24" ry="18" fill="#f6dcb8"/>
          <g class="eyes">
            <circle cx="45" cy="54" r="6" fill="#2b1a10"/><circle cx="47" cy="52" r="2" fill="#fff"/>
            <circle cx="75" cy="54" r="6" fill="#2b1a10"/><circle cx="77" cy="52" r="2" fill="#fff"/>
          </g>
          <ellipse cx="60" cy="68" rx="8" ry="6" fill="#2b1a10"/>
          <path class="mouth" d="M51 78 Q60 85 69 78" stroke="#2b1a10" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path class="tongue" d="M55 81 Q55 95 60 95 Q65 95 65 81 Z" fill="#ef6b7b"/>
        </g>
      </svg>`;
    return wrap;
  }

  function dogSays(text, mood = 'happy', size = 96) {
    return h('div', { class: 'dog-says' }, dog(mood, size), h('div', { class: 'bubble' }, text));
  }

  // ================= Confetti =================
  function confetti() {
    const box = document.getElementById('confetti');
    const colours = ['#00966E', '#D62612', '#FFC800', '#2D9CDB', '#ffffff', '#FF8A3D'];
    for (let i = 0; i < 80; i++) {
      const p = h('i', {
        style: `left:${Math.random() * 100}%;background:${pick(colours)};` +
               `animation-delay:${Math.random() * 0.4}s;animation-duration:${1.6 + Math.random() * 1.4}s;` +
               `transform:rotate(${Math.random() * 360}deg)`
      });
      box.append(p);
      setTimeout(() => p.remove(), 3500);
    }
  }

  // ================= Screens =================
  function show(...nodes) {
    app.replaceChildren(...nodes);
    window.scrollTo(0, 0);
  }

  // ---------- Welcome: name the dog ----------
  function renderWelcome() {
    const input = h('input', { class: 'name-input dark', maxlength: 16, placeholder: 'Type a name…', 'aria-label': 'Dog name' });
    const chips = h('div', { class: 'chips' });
    const go = () => {
      const name = input.value.trim();
      if (!name) { input.focus(); input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 400); return; }
      state.dogName = name;
      saveState();
      sfx.win();
      confetti();
      renderPath(`Бау! I'm ${name}, your sidekick. Let's do this, Ollie! 💪`);
    };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    input.addEventListener('input', () => chips.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.textContent === input.value)));

    ['Рекс', 'Макс', 'Шаро', 'Ракета', 'Тайфун'].forEach(n => chips.append(
      h('button', { class: 'chip', onclick: () => { input.value = n; input.dispatchEvent(new Event('input')); sfx.tap(); } }, n)));

    const totalWords = Object.keys(C.words).length;
    show(h('section', { class: 'screen welcome' },
      h('div', { class: 'flag-stripe', 'aria-hidden': 'true' }, h('i'), h('i'), h('i')),
      h('div', { class: 'cover-title' },
        h('div', { class: 'kicker' }, "Ollie's"),
        h('h1', {}, 'Bulgarian', h('br'), 'Adventure'),
        h('p', { class: 'tagline' }, 'Football, Minecraft, swimming, dogs – learn real Bulgarian your way.')
      ),
      h('div', { class: 'pills' },
        h('span', { class: 'pill' }, `${C.units.length} units`),
        h('span', { class: 'pill' }, `${Math.floor(totalWords / 10) * 10}+ words`),
        h('span', { class: 'pill' }, '🎤 Speaking'),
        h('span', { class: 'pill' }, '🏆 Boss rounds')
      ),
      h('div', { class: 'sidekick' },
        h('div', { class: 'sidekick-dog' }, dog('happy', 110)),
        h('div', {},
          h('div', { class: 'sidekick-label' }, 'Choose your sidekick'),
          h('p', { class: 'sidekick-text' }, 'Every adventure needs a partner. Your dog speaks Bulgarian – give it a name.')
        )
      ),
      input,
      chips,
      h('button', { class: 'btn big start', onclick: go }, 'Start the adventure →')
    ));
  }

  // ---------- Home: the lesson path ----------
  const greetings = () => [
    `Бау! Ready, Ollie?`,
    `Next mission's waiting. Let's go!`,
    `One lesson a day keeps the streak alive 🔥`,
    `New words to unlock. Pick a lesson!`,
    `Здравей, Оли! Let's level up 💪`
  ];

  // Where Ollie is up to: the first playable lesson he hasn't finished (-1 = all done).
  const firstOpenIndex = () => LESSONS.findIndex(l => !state.done[l.id]);

  function lessonStatus(l) {
    if (isPlanned(l)) return 'planned';
    if (state.done[l.id]) return 'done';
    const first = firstOpenIndex();
    return first === -1 || LESSONS.indexOf(l) <= first ? 'available' : 'locked';
  }

  const STATUS_LABEL = { done: 'Done', available: 'Ready to play', locked: 'Locked', planned: 'Coming soon' };
  // Tips written as "a – b · c – d" read best as a list.
  const tipBody = text => text.includes(' · ')
    ? h('ul', { class: 'tip-list' }, text.split(' · ').map(t => h('li', {}, t)))
    : h('p', { class: 'tip-text' }, text);

  const lessonIcon = l => l.type === 'boss' ? '🏆' : l.type === 'sentences' ? '💬' : '⭐';

  function renderPath(message) {
    const streak = currentStreak();
    const lvl = level();
    const xpInLevel = state.xp % XP_PER_LEVEL;

    const top = h('header', { class: 'topbar' },
      h('div', { class: 'stat', title: 'Day streak' }, h('span', { class: 'ico' }, '🔥'), String(streak)),
      h('div', { class: 'stat level', title: 'Level' },
        h('span', { class: 'lvl-badge' }, `Lv ${lvl}`),
        h('div', { class: 'xpbar' }, h('div', { class: 'xpfill', style: `width:${xpInLevel}%` })),
        h('span', { class: 'xp-num' }, `${state.xp} XP`)
      ),
      h('button', { class: 'icon-btn', 'aria-label': 'Settings', onclick: renderSettings }, '⚙️')
    );

    const firstOpen = firstOpenIndex();
    const next = LESSONS[firstOpen];
    const path = h('div', { class: 'path' });
    const offsets = [0, 1, 2, 1, 0, -1, -2, -1];
    let n = 0;

    C.sections.forEach((sec, si) => {
      const units = C.units.filter(u => u.section === sec.id);
      const playable = units.flatMap(u => u.lessons.filter(l => !isPlanned(l)));
      const doneCount = playable.filter(l => state.done[l.id]).length;
      const comingSoon = playable.length === 0;

      path.append(h('div', { class: 'section-head' },
        h('div', { class: 'section-label' }, `Section ${si + 1}`),
        h('h2', {}, sec.title),
        h('p', {}, sec.description),
        comingSoon
          ? h('span', { class: 'tag planned' }, '🕒 Coming soon')
          : h('div', { class: 'section-progress', 'aria-label': `${doneCount} of ${playable.length} lessons done` },
              h('div', { class: 'xpbar' }, h('div', { class: 'xpfill', style: `width:${Math.round(doneCount / playable.length * 100)}%` })),
              h('span', {}, `${doneCount}/${playable.length}`))
      ));

      if (comingSoon) {
        // Planned sections are a compact list of unit cards, each opening its outline.
        path.append(h('div', { class: 'planned-grid' }, units.map(u =>
          h('button', { class: 'unit-card planned', onclick: () => renderUnit(u), 'aria-label': `Unit ${unitNumber(u)}: ${u.title} – coming soon. See what it will teach.` },
            h('span', { class: 'unit-card-emoji', 'aria-hidden': 'true' }, u.emoji),
            h('span', {}, h('span', { class: 'unit-label' }, `Unit ${unitNumber(u)}`), h('span', { class: 'unit-card-title' }, u.title))
          ))));
        return;
      }

      units.forEach(u => {
        const unitDone = !u.planned && u.lessons.every(l => isPlanned(l) || state.done[l.id]);
        path.append(h('button', {
          class: `unit-banner c-${u.color} ${u.planned ? 'planned' : ''}`,
          onclick: () => renderUnit(u),
          'aria-label': `Unit ${unitNumber(u)}: ${u.title} – ${u.description} Open unit details.`
        },
          h('div', { class: 'unit-emoji', 'aria-hidden': 'true' }, u.emoji),
          h('div', { class: 'unit-text' },
            h('div', { class: 'unit-label' }, `Unit ${unitNumber(u)}`),
            h('div', { class: 'unit-title' }, u.title),
            h('div', { class: 'unit-desc' }, u.description)
          ),
          unitDone ? h('div', { class: 'unit-done' }, '🏅') : h('div', { class: 'unit-info', 'aria-hidden': 'true' }, 'ⓘ')
        ));

        u.lessons.forEach(l => {
          const st = lessonStatus(l);
          const current = l === next;
          const shift = offsets[n++ % offsets.length] * 48;
          path.append(h('div', { class: 'node-row', style: `transform:translateX(${shift}px)` },
            current ? h('div', { class: 'start-tag' }, 'START') : null,
            h('button', {
              class: `node c-${u.color} ${st} ${current ? 'current' : ''} ${l.type === 'boss' ? 'boss' : ''}`,
              'aria-label': `${l.title} – ${STATUS_LABEL[st]}`,
              onclick: () => st === 'planned' ? renderUnit(u) : st === 'locked' ? lockedMessage() : startLesson(l)
            }, st === 'done' ? '✓' : st === 'locked' ? '🔒' : st === 'planned' ? '🕒' : lessonIcon(l)),
            h('div', { class: 'node-title' }, l.title)
          ));
        });
      });
    });

    if (firstOpen === -1) {
      path.append(h('div', { class: 'more-soon' }, '🎉 You finished every lesson that\'s ready! More units are on the way…'));
    }

    // Continue where you left off, or practise earlier words.
    const actions = h('div', { class: 'home-actions' },
      next ? h('button', { class: 'continue-card', onclick: () => startLesson(next) },
        h('span', { class: 'continue-label' }, Object.keys(state.done).length ? 'Continue' : 'Start here'),
        h('span', { class: 'continue-title' }, `${next.unit.emoji} Unit ${unitNumber(next.unit)} · ${next.title}`),
        h('span', { class: 'continue-go', 'aria-hidden': 'true' }, '▶')
      ) : null,
      reviewableWords().length >= 4
        ? h('button', { class: 'btn review-btn', onclick: startReview }, '🔁 Review')
        : null
    );

    const hero = dogSays(message || pick(greetings()), 'happy', 84);
    hero.id = 'hero';
    show(h('section', { class: 'screen home' }, top,
      h('div', { class: 'hero-wrap' }, hero, h('div', { class: 'dog-name' }, state.dogName)),
      actions, path));
  }

  // ---------- Unit page: what a unit teaches, and its lessons ----------
  function renderUnit(u) {
    const back = () => { document.removeEventListener('keydown', onKey); renderPath(); };
    const onKey = e => { if (e.key === 'Escape') back(); };
    document.addEventListener('keydown', onKey);

    const sec = C.sections.find(x => x.id === u.section);
    const heading = h('h1', { tabindex: '-1' }, u.title);
    const tips = [...new Set(u.lessons.flatMap(l => l.tips || []))].map(id => C.tips[id]).filter(Boolean);

    const lessonRow = l => {
      const st = lessonStatus(l);
      return h('li', { class: `lesson-row ${st}` },
        h('span', { class: 'lesson-ico', 'aria-hidden': 'true' }, st === 'done' ? '✅' : st === 'locked' ? '🔒' : st === 'planned' ? '🕒' : lessonIcon(l)),
        h('span', { class: 'lesson-info' },
          h('span', { class: 'lesson-name' }, l.title),
          h('span', { class: 'lesson-status' }, STATUS_LABEL[st]),
          l.plan ? h('span', { class: 'lesson-plan' }, l.plan) : null
        ),
        st === 'available' || st === 'done'
          ? h('button', { class: `btn small ${st === 'available' ? 'primary' : ''}`, onclick: () => { document.removeEventListener('keydown', onKey); startLesson(l); } },
              st === 'done' ? 'Play again' : 'Start')
          : null
      );
    };

    show(h('section', { class: 'screen unit-page' },
      h('div', { class: 'lesson-top' },
        h('button', { class: 'icon-btn', 'aria-label': 'Back to the path', onclick: back }, '←'),
        h('span', { class: 'crumb' }, `Section ${C.sections.indexOf(sec) + 1} · ${sec.title}`)
      ),
      h('div', { class: `unit-hero c-${u.color} ${u.planned ? 'planned' : ''}` },
        h('div', { class: 'unit-emoji', 'aria-hidden': 'true' }, u.emoji),
        h('div', {}, h('div', { class: 'unit-label' }, `Unit ${unitNumber(u)}${u.planned ? ' · Coming soon' : ''}`), heading)
      ),
      h('p', { class: 'unit-intro' }, u.description),
      h('div', { class: 'panel' },
        h('h3', {}, 'By the end, you can…'),
        h('ul', { class: 'objectives' }, u.objectives.map(o => h('li', {}, o)))
      ),
      h('div', { class: 'panel' },
        h('h3', {}, 'What you\'ll learn'),
        h('p', {}, h('strong', {}, 'Words: '), u.vocab),
        h('p', {}, h('strong', {}, 'Grammar: '), u.grammar.join(' · '))
      ),
      h('div', { class: 'panel' },
        h('h3', {}, 'Lessons'),
        h('ol', { class: 'lesson-list' }, u.lessons.map(lessonRow))
      ),
      tips.length ? h('div', { class: 'panel' },
        h('h3', {}, '📝 Grammar notes'),
        tips.map(t => h('details', { class: 'tip-details' }, h('summary', {}, t.title), tipBody(t.text)))
      ) : null,
      u.sample ? h('div', { class: 'panel sample' },
        h('h3', {}, 'Sneak preview'),
        h('p', { class: 'muted' }, '⚠️ Sample Bulgarian for a lesson that isn\'t built yet – not checked by a Bulgarian speaker.'),
        h('ul', { class: 'sample-list' },
          u.sample.words.map(([bg, en]) => h('li', {}, h('span', { class: 'bgw' }, bg), ` – ${en}`)),
          u.sample.sentences.map(([bg, en]) => h('li', {}, h('span', { class: 'bgw' }, bg), ` – ${en}`)))
      ) : null,
      u.fact ? h('div', { class: 'fact' }, h('strong', {}, '🇧🇬 Did you know? '), u.fact) : null
    ));
    heading.focus();
  }

  function lockedMessage() {
    sfx.wrong();
    const hero = document.getElementById('hero');
    if (hero) {
      hero.querySelector('.bubble').textContent = 'That one is locked! 🔒 Finish the lesson before it first.';
      hero.classList.remove('shake'); void hero.offsetWidth; hero.classList.add('shake');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ================= Building a lesson =================
  // Words Ollie has met up to (and including) this lesson — used for distractors.
  function knownWordsUpTo(lesson) {
    const idx = LESSONS.indexOf(lesson);
    const met = LESSONS.slice(0, idx + 1).flatMap(l => l.words || []);
    // Boss and sentence lessons can use the whole unit; word lessons only what's been taught.
    return [...new Set(lesson.type === 'words' ? met : met.concat(lesson.unit.words))];
  }

  function distractors(correctId, pool, n) {
    const c = word(correctId);
    let cands = pool.filter(id => id !== correctId && word(id).en !== c.en && word(id).pic !== c.pic);
    if (cands.length < n) {
      cands = cands.concat(Object.keys(C.words).filter(id => id !== correctId && !cands.includes(id) && word(id).pic !== c.pic));
    }
    return shuffle(cands).slice(0, n);
  }

  const WORD_TYPES = ['picture', 'listen', 'bg2en', 'en2bg'];

  function wordQuestion(type, id, pool) {
    return { type, id, options: shuffle([id, ...distractors(id, pool, 3)]) };
  }

  function pairsQuestion(ids, pool) {
    let list = ids.slice(0, 5);
    if (list.length < 5) list = list.concat(shuffle(pool.filter(id => !list.includes(id))).slice(0, 5 - list.length));
    // No two pairs with the same English meaning.
    const seen = new Set();
    list = list.filter(id => !seen.has(word(id).en) && seen.add(word(id).en));
    return { type: 'pairs', ids: list };
  }

  // Single Bulgarian words Ollie has met so far — spare tiles and gap options come from these.
  function knownTokens(lesson) {
    const units = C.units.slice(0, C.units.indexOf(lesson.unit) + 1);
    const fromSentences = units.flatMap(u => u.sentences.flatMap(sid => tokens(sentence(sid).bg)));
    const fromWords = knownWordsUpTo(lesson).map(id => word(id).bg).filter(b => !b.includes(' '));
    return [...new Set(fromSentences.concat(fromWords).map(norm))];
  }

  function tilesQuestion(sid, lesson) {
    const s = sentence(sid);
    const answer = tokens(s.bg);
    const extra = shuffle(knownTokens(lesson))
      .filter(t => !answer.some(a => norm(a) === t));
    const spare = [...new Set(extra.map(norm))].slice(0, 2);
    return { type: 'tiles', sid, tiles: shuffle(answer.concat(spare)) };
  }

  function gapQuestion(sid, lesson) {
    const s = sentence(sid);
    const gap = s.gap;
    const all = knownTokens(lesson).filter(t => t !== norm(gap) && !tokens(s.bg).map(norm).includes(t));
    return { type: 'gap', sid, options: shuffle([norm(gap), ...shuffle(all).slice(0, 3)]) };
  }

  function buildQuestions(lesson) {
    const firstTime = !state.done[lesson.id];
    const pool = knownWordsUpTo(lesson);
    const qs = [];
    if (firstTime) (lesson.tips || []).forEach(tid => qs.push({ type: 'tip', tid }));

    if (lesson.type === 'words') {
      const later = [];
      lesson.words.forEach(id => {
        const types = shuffle(WORD_TYPES);
        if (firstTime) qs.push({ type: 'teach', id });
        qs.push(wordQuestion(types[0], id, pool));
        later.push(wordQuestion(types[1], id, pool));
      });
      const mixed = shuffle(later).slice(0, 3);
      mixed.splice(1, 0, pairsQuestion(shuffle(lesson.words), pool));
      if (speakingOn()) mixed.push({ type: 'speak', id: pick(lesson.words) });
      qs.push(...mixed);
      // Finish with a couple of tiny sentences made from the new words.
      (lesson.sentences || []).forEach(sid => {
        if (firstTime) qs.push({ type: 'teachSentence', sid });
        qs.push(tilesQuestion(sid, lesson));
      });
    } else if (lesson.type === 'sentences') {
      const later = [];
      lesson.sentences.forEach(sid => {
        if (firstTime) qs.push({ type: 'teachSentence', sid });
        qs.push(tilesQuestion(sid, lesson));
        if (sentence(sid).gap) later.push(gapQuestion(sid, lesson));
      });
      qs.push(...shuffle(later));
      if (speakingOn()) {
        const shortest = lesson.sentences.slice().sort((a, b) => sentence(a).bg.length - sentence(b).bg.length)[0];
        qs.push({ type: 'speak', sid: shortest });
      }
    } else { // boss
      const u = lesson.unit;
      shuffle(u.words).slice(0, 7).forEach(id => qs.push(wordQuestion(pick(WORD_TYPES), id, pool)));
      shuffle(u.sentences).slice(0, 3).forEach(sid => qs.push(tilesQuestion(sid, lesson)));
      // Bring back a few words from earlier units too.
      const earlier = pool.filter(id => !u.words.includes(id));
      shuffle(earlier).slice(0, 3).forEach(id => qs.push(wordQuestion(pick(WORD_TYPES), id, pool)));
      if (speakingOn()) qs.push({ type: 'speak', id: pick(u.words) });
      const mixed = shuffle(qs);
      mixed.push(pairsQuestion(shuffle(u.words), pool));
      return mixed;
    }
    return qs;
  }

  // ================= Review: practise earlier words =================
  // Words from finished lessons, trickiest first.
  function reviewableWords() {
    const met = [...new Set(LESSONS.filter(l => state.done[l.id]).flatMap(l => l.type === 'boss' ? [] : (l.words || [])))];
    const score = id => { const w = state.words[id] || { right: 0, wrong: 0 }; return w.wrong * 2 - w.right * 0.5 + Math.random(); };
    return met.sort((a, b) => score(b) - score(a));
  }

  function startReview() {
    const words = reviewableWords();
    const finished = LESSONS.filter(l => state.done[l.id]);
    const context = finished[finished.length - 1];
    const sentences = shuffle([...new Set(finished.flatMap(l => l.sentences || []))]).slice(0, 2);
    const qs = words.slice(0, 8).map(id => wordQuestion(pick(WORD_TYPES), id, words));
    sentences.forEach(sid => qs.push(tilesQuestion(sid, context)));
    const queue = shuffle(qs);
    if (words.length >= 5) queue.push(pairsQuestion(shuffle(words.slice(0, 10)), words));
    sfx.tap();
    toast('🔁 Review time – your trickiest words first!');
    S = { lesson: { id: 'review', type: 'review', title: 'Review', unit: context.unit }, queue, done: 0, right: 0, wrong: 0, combo: 0, q: null };
    nextQuestion();
  }

  // ================= Playing a lesson =================
  let S = null; // the current lesson session

  function startLesson(lesson) {
    sfx.tap();
    if (lesson.type === 'boss') toast('🏆 Boss challenge! Show what you know!');
    S = { lesson, queue: buildQuestions(lesson), done: 0, right: 0, wrong: 0, combo: 0, q: null };
    nextQuestion();
  }

  function nextQuestion() {
    S.q = S.queue.shift();
    if (!S.q) return finishLesson();
    renderQuestion();
  }

  function quitLesson() {
    if (confirm('Leave this lesson? Your progress in it will be lost.')) { S = null; renderPath(); }
  }

  function renderQuestion() {
    const q = S.q;
    const total = S.done + S.queue.length + 1;
    const pct = Math.round((S.done / total) * 100);

    const footer = h('footer', { class: 'qfooter' });
    const checkBtn = h('button', { class: 'btn big primary', disabled: true }, 'Check');
    footer.append(checkBtn);

    const ctx = {
      ready(on = true) { checkBtn.disabled = !on; },
      onCheck: null,
      footer, checkBtn
    };
    checkBtn.addEventListener('click', () => ctx.onCheck && ctx.onCheck());

    const body = h('div', { class: 'qbody' });
    const screen = h('section', { class: 'screen lesson' },
      h('div', { class: 'lesson-top' },
        h('button', { class: 'icon-btn', 'aria-label': 'Quit lesson', onclick: quitLesson }, '✕'),
        h('div', { class: 'progress' }, h('div', { class: 'progress-fill', style: `width:${pct}%` })),
        S.combo >= 3 ? h('div', { class: 'combo' }, `🔥${S.combo}`) : null
      ),
      body, footer
    );

    RENDER[q.type](q, body, ctx);
    show(screen);
  }

  // Shows the green/red bar, then waits for "Continue".
  function feedback(ctx, correct, answerText, then) {
    const f = ctx.footer;
    f.replaceChildren();
    f.classList.add(correct ? 'good' : 'bad');
    const praise = pick(['Браво!', 'Супер!', 'Страхотно!', 'Чудесно!', 'Отлично!']);
    f.append(
      h('div', { class: 'fb' },
        dog(correct ? 'happy' : 'sad', 54),
        h('div', {},
          h('div', { class: 'fb-title' }, correct ? `${praise} ✨` : 'Not quite!'),
          answerText ? h('div', { class: 'fb-answer' }, correct ? answerText : `Answer: ${answerText}`) : null
        )
      ),
      h('button', { class: `btn big ${correct ? 'primary' : 'danger'}`, onclick: then || nextQuestion }, 'Continue')
    );
    f.querySelector('button').focus();
  }

  function scored(ctx, correct, answerText, wordIds = []) {
    wordIds.forEach(id => {
      const w = state.words[id] || (state.words[id] = { right: 0, wrong: 0 });
      correct ? w.right++ : w.wrong++;
    });
    if (correct) {
      sfx.right();
      S.right++; S.done++; S.combo++;
      if (S.combo === 3 || S.combo === 5 || S.combo === 8) toast(`🔥 ${S.combo} in a row!`);
    } else {
      sfx.wrong();
      S.wrong++; S.combo = 0;
      // Try it again later in the lesson.
      S.queue.push(Object.assign({}, S.q, { options: S.q.options && shuffle(S.q.options), tiles: S.q.tiles && shuffle(S.q.tiles) }));
    }
    feedback(ctx, correct, answerText);
  }

  // Multiple-choice helper used by four of the question types.
  function choiceGrid(options, makeLabel, ctx, onPick, cls = '') {
    let chosen = null;
    const grid = h('div', { class: `choices ${cls}` });
    options.forEach(opt => {
      const b = h('button', { class: 'choice' }, makeLabel(opt));
      b.addEventListener('click', () => {
        grid.querySelectorAll('.choice').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        chosen = opt;
        sfx.tap();
        onPick && onPick(opt);
        ctx.ready();
      });
      b.dataset.value = opt;
      grid.append(b);
    });
    grid.chosen = () => chosen;
    grid.lock = correct => grid.querySelectorAll('.choice').forEach(x => {
      x.disabled = true;
      if (x.dataset.value === correct) x.classList.add('right');
      else if (x.dataset.value === chosen) x.classList.add('wrong');
    });
    return grid;
  }

  const picLabel = id => h('span', { class: 'pic' }, word(id).pic);
  const picEnLabel = id => [h('span', { class: 'pic' }, word(id).pic), h('span', { class: 'en' }, word(id).en)];
  const enLabel = id => h('span', { class: 'en' }, word(id).en);
  const bgLabel = id => h('span', { class: 'bgw' }, word(id).bg);

  const RENDER = {
    // A new word: picture, sound, meaning and memory trick.
    teach(q, body, ctx) {
      const w = word(q.id);
      body.append(
        h('div', { class: 'q-label new' }, '✨ New word!'),
        h('div', { class: 'teach-card' },
          h('div', { class: 'teach-pic' }, w.pic),
          h('div', { class: 'teach-bg' }, w.bg),
          showSay() ? h('div', { class: 'teach-say' }, `say: ${w.say}`) : null,
          h('div', { class: 'teach-en' }, w.en),
          speakerButtons(slow => sayWord(q.id, slow))
        ),
        w.hint ? dogSays(`💡 ${w.hint}`, 'happy', 64) : null
      );
      ctx.checkBtn.textContent = 'Got it!';
      ctx.ready();
      ctx.onCheck = () => { sfx.tap(); S.done++; nextQuestion(); };
      setTimeout(() => sayWord(q.id), 250);
    },

    teachSentence(q, body, ctx) {
      const s = sentence(q.sid);
      body.append(
        h('div', { class: 'q-label new' }, '💬 New sentence!'),
        h('div', { class: 'teach-card' },
          h('div', { class: 'teach-bg sentence' }, s.bg),
          h('div', { class: 'teach-en' }, s.en),
          speakerButtons(slow => saySentence(q.sid, slow))
        ),
        dogSays('Listen, then say it out loud with me!', 'happy', 64)
      );
      ctx.checkBtn.textContent = 'Got it!';
      ctx.ready();
      ctx.onCheck = () => { sfx.tap(); S.done++; nextQuestion(); };
      setTimeout(() => saySentence(q.sid), 250);
    },

    // A short grammar note.
    tip(q, body, ctx) {
      const t = C.tips[q.tid];
      body.append(
        h('div', { class: 'q-label new' }, '📝 Grammar tip'),
        h('div', { class: 'teach-card tip-card' },
          h('div', { class: 'tip-title' }, t.title),
          tipBody(t.text)
        )
      );
      ctx.checkBtn.textContent = 'Got it!';
      ctx.ready();
      ctx.onCheck = () => { sfx.tap(); S.done++; nextQuestion(); };
    },

    // See the Bulgarian word, tap the picture.
    picture(q, body, ctx) {
      const w = word(q.id);
      body.append(
        h('div', { class: 'q-label' }, 'Tap the right picture'),
        h('div', { class: 'prompt' }, h('span', { class: 'prompt-bg' }, w.bg), speakerButtons(slow => sayWord(q.id, slow)))
      );
      const grid = choiceGrid(q.options, picLabel, ctx, null, 'pics');
      body.append(grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.bg} = ${w.en}`, [q.id]); };
      setTimeout(() => sayWord(q.id), 250);
    },

    // Hear it (no text), tap the meaning.
    listen(q, body, ctx) {
      const w = word(q.id);
      body.append(
        h('div', { class: 'q-label' }, '👂 What do you hear?'),
        h('div', { class: 'prompt' }, h('button', { class: 'btn-speaker huge', 'aria-label': 'Play sound', onclick: () => sayWord(q.id) }, '🔊'),
          h('button', { class: 'btn-speaker', 'aria-label': 'Play slowly', onclick: () => sayWord(q.id, true) }, '🐢'))
      );
      const grid = choiceGrid(q.options, picEnLabel, ctx);
      body.append(grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.bg} = ${w.en}`, [q.id]); };
      setTimeout(() => sayWord(q.id), 250);
    },

    // Bulgarian → English.
    bg2en(q, body, ctx) {
      const w = word(q.id);
      body.append(
        h('div', { class: 'q-label' }, 'What does this mean?'),
        h('div', { class: 'prompt' }, h('span', { class: 'prompt-bg' }, w.bg), speakerButtons(slow => sayWord(q.id, slow)))
      );
      const grid = choiceGrid(q.options, enLabel, ctx, null, 'list');
      body.append(grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.bg} = ${w.en}`, [q.id]); };
      setTimeout(() => sayWord(q.id), 250);
    },

    // English → Bulgarian. Tapping an option says it.
    en2bg(q, body, ctx) {
      const w = word(q.id);
      body.append(
        h('div', { class: 'q-label' }, 'How do you say this in Bulgarian?'),
        h('div', { class: 'prompt' }, h('span', { class: 'prompt-pic' }, w.pic), h('span', { class: 'prompt-en' }, w.en))
      );
      const grid = choiceGrid(q.options, bgLabel, ctx, id => sayWord(id), 'list');
      body.append(grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.en} = ${w.bg}`, [q.id]); };
    },

    // Match five pairs.
    pairs(q, body, ctx) {
      body.append(h('div', { class: 'q-label' }, '🧩 Match the pairs'));
      const left = h('div', { class: 'pair-col' });
      const right = h('div', { class: 'pair-col' });
      let sel = null; // { side, id, el }
      let matched = 0;
      let mistakes = 0;

      const tapped = (side, id, el) => {
        if (el.classList.contains('matched')) return;
        if (side === 'bg') sayWord(id);
        if (!sel || sel.side === side) {
          if (sel) sel.el.classList.remove('selected');
          sel = { side, id, el };
          el.classList.add('selected');
          if (side === 'en') sfx.tap();
          return;
        }
        if (sel.id === id) {
          [sel.el, el].forEach(x => { x.classList.remove('selected'); x.classList.add('matched'); x.disabled = true; });
          sfx.right();
          if (side === 'en') sayWord(id);
          matched++;
          if (matched === q.ids.length) {
            S.right++; S.done++;
            q.ids.forEach(wid => { const s = state.words[wid] || (state.words[wid] = { right: 0, wrong: 0 }); s.right++; });
            setTimeout(() => feedback(ctx, true, mistakes ? 'All matched!' : 'All matched – no mistakes! 🌟'), 400);
          }
        } else {
          mistakes++;
          sfx.wrong();
          [sel.el, el].forEach(x => { x.classList.remove('selected'); x.classList.add('nope'); setTimeout(() => x.classList.remove('nope'), 450); });
        }
        sel = null;
      };

      shuffle(q.ids).forEach(id => {
        const b = h('button', { class: 'pair bgw' }, word(id).bg);
        b.addEventListener('click', () => tapped('bg', id, b));
        left.append(b);
      });
      shuffle(q.ids).forEach(id => {
        const b = h('button', { class: 'pair' }, `${word(id).pic} ${word(id).en}`);
        b.addEventListener('click', () => tapped('en', id, b));
        right.append(b);
      });
      body.append(h('div', { class: 'pairs' }, left, right));
      ctx.footer.replaceChildren(h('div', { class: 'footer-hint' }, 'Tap a Bulgarian word, then its meaning'));
    },

    // Build the sentence from word tiles.
    tiles(q, body, ctx) {
      const s = sentence(q.sid);
      const target = tokens(s.bg);
      const line = h('div', { class: 'tile-line' });
      const bank = h('div', { class: 'tile-bank' });

      body.append(
        h('div', { class: 'q-label' }, '🧱 Build the sentence in Bulgarian'),
        h('div', { class: 'prompt' }, h('span', { class: 'prompt-en' }, s.en),
          h('button', { class: 'btn-speaker', 'aria-label': 'Hear the sentence', onclick: () => saySentence(q.sid) }, '🔊')),
        line, bank
      );

      q.tiles.forEach(t => {
        const slot = h('button', { class: 'tile' }, t);
        slot.addEventListener('click', () => {
          if (slot.classList.contains('used')) return;
          sfx.tap();
          slot.classList.add('used');
          const placed = h('button', { class: 'tile placed' }, t);
          placed.addEventListener('click', () => {
            placed.remove();
            slot.classList.remove('used');
            ctx.ready(line.children.length > 0);
          });
          line.append(placed);
          ctx.ready(true);
        });
        bank.append(slot);
      });

      ctx.onCheck = () => {
        const built = [...line.children].map(x => norm(x.textContent));
        const ok = built.join(' ') === target.map(norm).join(' ');
        line.classList.add(ok ? 'right' : 'wrong');
        [...bank.children, ...line.children].forEach(x => { x.disabled = true; });
        saySentence(q.sid);
        scored(ctx, ok, s.bg);
      };
    },

    // "Say it!" – Ollie says the word out loud.
    speak(q, body, ctx) {
      const item = q.id ? word(q.id) : sentence(q.sid);
      const say = slow => q.id ? sayWord(q.id, slow) : saySentence(q.sid, slow);
      const status = h('div', { class: 'speak-status' }, 'Listen first, then tap the microphone and say it!');
      const mic = h('button', { class: 'mic', 'aria-label': 'Tap and speak' }, '🎤');
      let tries = 0;

      body.append(
        h('div', { class: 'q-label' }, '🗣️ Say it!'),
        h('div', { class: 'prompt column' },
          q.id ? h('span', { class: 'prompt-pic' }, item.pic) : null,
          h('span', { class: q.id ? 'prompt-bg' : 'prompt-bg sentence' }, item.bg),
          q.id ? (showSay() ? h('span', { class: 'teach-say' }, `say: ${item.say}`) : null) : h('span', { class: 'teach-say' }, item.en),
          speakerButtons(say)
        ),
        mic, status
      );

      const skipBtn = h('button', { class: 'btn big ghost' }, "Can't talk now");
      ctx.footer.replaceChildren(skipBtn);
      skipBtn.addEventListener('click', () => { S.done++; nextQuestion(); });

      const passed = heard => {
        S.right++; S.done++; S.combo++;
        sfx.right();
        feedback(ctx, true, heard ? `I heard: "${heard}"` : 'Great speaking!');
      };
      const notYet = (msg) => {
        tries++;
        mic.classList.remove('listening');
        if (tries >= 3) {
          // Never punish speaking: after a few goes, move on kindly.
          S.done++;
          ctx.footer.classList.add('good');
          ctx.footer.replaceChildren(
            h('div', { class: 'fb' }, dog('happy', 54), h('div', {},
              h('div', { class: 'fb-title' }, 'Good try! 💪'),
              h('div', { class: 'fb-answer' }, 'Keep practising this one.'))),
            h('button', { class: 'btn big primary', onclick: nextQuestion }, 'Continue'));
          return;
        }
        status.textContent = msg;
        sfx.wrong();
      };

      // Fallback: record & compare.
      const recordMode = () => {
        status.textContent = 'Tap the microphone, say it, then compare your voice with mine!';
        mic.onclick = async () => {
          if (mic.classList.contains('listening')) return;
          unlockSpeech();
          let clip;
          try { clip = await recordClip(3); } catch (e) {
            status.textContent = '🎤 The microphone is turned off. Ask a grown-up to allow it, or tap "Can\'t talk now".';
            return;
          }
          mic.classList.add('listening');
          status.textContent = '🔴 Recording… say it now!';
          const blob = await clip.done;
          mic.classList.remove('listening');
          const url = URL.createObjectURL(blob);
          status.replaceChildren(
            h('div', { class: 'compare' },
              h('button', { class: 'btn', onclick: () => say(false) }, `🐶 ${state.dogName}`),
              h('button', { class: 'btn', onclick: () => new Audio(url).play() }, '🧒 Me')
            ),
            h('div', { class: 'compare-q' }, 'Did you sound the same?')
          );
          ctx.footer.replaceChildren(
            h('button', { class: 'btn big primary', onclick: () => passed(null) }, 'Yes, I said it! 👍'),
            h('button', { class: 'btn big ghost', onclick: () => { status.textContent = 'Have another go – tap the microphone!'; ctx.footer.replaceChildren(skipBtn); } }, 'Try again')
          );
          new Audio(url).play().catch(() => {});
        };
      };

      if (!recognitionWorks) recordMode();
      else {
        mic.onclick = () => {
          if (mic.classList.contains('listening')) return;
          mic.classList.add('listening');
          status.textContent = '👂 Listening…';
          recognise(alts => {
            mic.classList.remove('listening');
            const best = alts.map(a => ({ a, score: closeness(a, item.bg) })).sort((x, y) => y.score - x.score)[0];
            if (best.score >= 0.75) passed(best.a);
            else if (best.score >= 0.45) notYet(`So close! I heard "${best.a}". Try again!`);
            else notYet(`I heard "${best.a}". Listen again and have another go!`);
          }, err => {
            mic.classList.remove('listening');
            if (err === 'no-speech' || err === 'aborted') { status.textContent = "I didn't hear anything – tap the microphone and try again!"; return; }
            // Recogniser can't do Bulgarian here (or isn't allowed): switch to record & compare.
            recognitionWorks = false;
            recordMode();
            if (err === 'not-allowed' || err === 'service-not-allowed') {
              status.textContent = '🎤 Speech recognition is turned off on this device. Tap the microphone to record and compare instead!';
            }
          });
        };
      }
      setTimeout(() => say(false), 250);
    },

    // Fill the missing word.
    gap(q, body, ctx) {
      const s = sentence(q.sid);
      const blank = h('span', { class: 'blank' }, '____');
      const parts = s.bg.split(new RegExp(`(${s.gap})`));
      const shown = h('div', { class: 'gap-sentence' }, parts.map(p => p === s.gap ? blank : p));

      body.append(
        h('div', { class: 'q-label' }, '✏️ Fill the gap'),
        h('div', { class: 'prompt column' }, shown, h('span', { class: 'prompt-en small' }, s.en))
      );
      const grid = choiceGrid(q.options, t => h('span', { class: 'bgw' }, t), ctx, t => { blank.textContent = t; speak(t); }, 'list');
      body.append(grid);
      ctx.onCheck = () => {
        const ok = grid.chosen() === norm(s.gap);
        grid.lock(norm(s.gap));
        blank.textContent = s.gap;
        blank.classList.add(ok ? 'right' : 'wrong');
        saySentence(q.sid);
        scored(ctx, ok, s.bg);
      };
    }
  };

  // ================= Lesson complete =================
  function finishLesson() {
    const l = S.lesson;
    const scoredCount = S.right + S.wrong;
    const accuracy = scoredCount ? Math.round((S.right / scoredCount) * 100) : 100;
    const perfect = S.wrong === 0;
    const isReview = l.type === 'review';
    const firstTime = !isReview && !state.done[l.id];
    const earned = isReview ? 5 + (perfect ? 5 : 0) : 10 + (perfect ? 5 : 0) + (l.type === 'boss' ? 10 : 0);

    const oldLevel = level();
    state.xp += earned;
    if (!isReview) {
      const prev = state.done[l.id] || { best: 0, plays: 0 };
      state.done[l.id] = { best: Math.max(prev.best, accuracy), plays: prev.plays + 1 };
    }

    const t = today();
    if (state.lastDay !== t) {
      state.streak = state.lastDay === yesterday() ? state.streak + 1 : 1;
      state.lastDay = t;
    }
    saveState();

    const levelUp = level() > oldLevel;
    const unitDone = l.type === 'boss' && firstTime;

    (levelUp ? sfx.level : sfx.win)();
    confetti();

    const title = unitDone ? `🏅 Unit ${unitNumber(l.unit)} complete!` : isReview ? 'Review complete! 🔁' : perfect ? 'Perfect lesson! 🌟' : 'Lesson complete!';
    const dogLine = perfect ? `${state.dogName}: "Wow, no mistakes! Бау-бау!"` : `${state.dogName}: "Great work, Ollie!"`;

    show(h('section', { class: 'screen finish' },
      h('h1', {}, title),
      dog('happy party', 160),
      h('p', { class: 'lead' }, dogLine),
      levelUp ? h('div', { class: 'levelup' }, `⬆️ LEVEL UP! You're now level ${level()}!`) : null,
      h('div', { class: 'stats' },
        h('div', { class: 'stat-card c-yellow' }, h('div', { class: 'stat-top' }, 'XP'), h('div', { class: 'stat-val' }, `+${earned}`)),
        h('div', { class: 'stat-card c-green' }, h('div', { class: 'stat-top' }, 'Correct'), h('div', { class: 'stat-val' }, `${accuracy}%`)),
        h('div', { class: 'stat-card c-red' }, h('div', { class: 'stat-top' }, 'Streak'), h('div', { class: 'stat-val' }, `🔥${currentStreak()}`))
      ),
      (unitDone || Math.random() < 0.5) && l.unit.fact ? h('div', { class: 'fact' }, h('strong', {}, '🇧🇬 Did you know? '), l.unit.fact) : null,
      h('button', { class: 'btn big primary', onclick: () => { S = null; renderPath(); } }, 'Continue')
    ));
  }

  // ================= Settings =================
  function renderSettings() {
    findVoice();
    const nameInput = h('input', { class: 'name-input', maxlength: 16, value: state.dogName || '' });
    const fileInput = h('input', { type: 'file', accept: 'application/json', class: 'hidden' });

    fileInput.addEventListener('change', () => {
      const f = fileInput.files[0];
      if (!f) return;
      f.text().then(txt => {
        const s = JSON.parse(txt);
        if (!s || s.version !== 1) throw new Error('bad file');
        state = Object.assign(freshState(), s);
        saveState();
        toast('✅ Progress restored!');
        renderSettings();
      }).catch(() => toast("⚠️ That file didn't work"));
    });

    const exportProgress = () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = h('a', { href: URL.createObjectURL(blob), download: `ollie-bulgarian-progress-${today()}.json` });
      document.body.append(a); a.click(); a.remove();
    };

    const reset = () => {
      if (confirm('Delete ALL progress? This cannot be undone.') && confirm('Are you really sure?')) {
        state = freshState();
        saveState();
        renderWelcome();
      }
    };

    const voiceInfo = bgVoice
      ? h('p', { class: 'ok' }, `✅ Bulgarian voice found: ${bgVoice.name}`)
      : h('p', { class: 'warn' }, '⚠️ No Bulgarian voice found on this device. On iPad/iPhone go to Settings → Accessibility → Spoken Content → Voices → Bulgarian and download one.');

    show(h('section', { class: 'screen settings' },
      h('div', { class: 'lesson-top' },
        h('button', { class: 'icon-btn', 'aria-label': 'Back', onclick: () => renderPath() }, '←'),
        h('h2', {}, 'Settings')
      ),
      h('div', { class: 'panel' },
        h('h3', {}, '🐶 Dog name'),
        nameInput,
        h('button', { class: 'btn', onclick: () => { const n = nameInput.value.trim(); if (n) { state.dogName = n; saveState(); toast(`Woof! I'm ${n} now!`); } } }, 'Save name')
      ),
      h('div', { class: 'panel' },
        h('h3', {}, '🔊 Sound'),
        h('label', { class: 'switch' },
          h('input', { type: 'checkbox', checked: !state.muted, onchange: e => { state.muted = !e.target.checked; saveState(); } }),
          ' Sounds and voice on'),
        h('label', { class: 'switch' },
          h('input', { type: 'checkbox', checked: speakingOn(), onchange: e => { state.speaking = e.target.checked; saveState(); } }),
          ' "Say it!" speaking practice'),
        h('label', { class: 'switch' },
          h('input', { type: 'checkbox', checked: showSay(), onchange: e => { state.showSay = e.target.checked; saveState(); } }),
          ' Show pronunciation help ("say: zdra-VEY")'),
        h('p', {}, Recognizer
          ? '🎤 Speaking: this device can listen and check what Ollie says (if it understands Bulgarian; otherwise it records him to compare).'
          : '🎤 Speaking: this browser can\'t check speech, so Ollie records himself and compares with the dog.'),
        voiceInfo,
        h('button', { class: 'btn', onclick: () => speak('Здравей, Оли! Как си?') }, '▶️ Test the voice')
      ),
      h('div', { class: 'panel' },
        h('h3', {}, '👩 For grown-ups'),
        h('p', {}, `Words practised: ${Object.keys(state.words).length} · Lessons done: ${LESSONS.filter(l => state.done[l.id]).length} of ${LESSONS.length} · XP: ${state.xp}`),
        trickyWords(),
        h('div', { class: 'row' },
          h('button', { class: 'btn', onclick: exportProgress }, '💾 Back up progress'),
          h('button', { class: 'btn', onclick: () => fileInput.click() }, '📂 Restore backup'),
          fileInput
        ),
        h('button', { class: 'btn danger-outline', onclick: reset }, '🗑️ Reset all progress')
      )
    ));
  }

  function trickyWords() {
    const tricky = Object.entries(state.words)
      .filter(([id, s]) => word(id) && s.wrong > 0)
      .sort((a, b) => (b[1].wrong - b[1].right / 3) - (a[1].wrong - a[1].right / 3))
      .slice(0, 6);
    if (!tricky.length) return h('p', {}, 'Tricky words: none yet 🎉');
    return h('p', {}, 'Tricky words: ', tricky.map(([id]) => `${word(id).bg} (${word(id).en})`).join(', '));
  }

  // ================= Start =================
  state.dogName ? renderPath() : renderWelcome();
})();
