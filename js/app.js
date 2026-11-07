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
  const unitNumber = u => C.units.indexOf(u) + 1; // the alphabet isn't in C.units, so it's Unit 0

  // The optional alphabet ("Unit 0") has its own short chain of lessons. It never
  // locks the main course and only shows for players who said they can't read Cyrillic yet.
  const ABC = C.alphabet;
  if (ABC) {
    ABC.lessons.forEach(l => { l.unit = ABC; });
    ABC.planned = false;
    ABC.words = ABC.lessons.flatMap(l => l.words || []);
    ABC.sentences = [];
  }
  const isAbc = l => !!ABC && l.unit === ABC;

  // ⚡ Speed Quiz: an optional round of 30 questions against a 90-second clock at the end of each unit. It sits beside
  // the lessons (never in LESSONS), so it can't lock anything or change lesson progress.
  const QUIZ_SECONDS = 90; // was 60, which was too short for Ollie
  const QUIZ_QUESTIONS = 30;
  const QUIZ_STARS = [9, 18, 27]; // right answers needed for 1, 2 and 3 stars: 3 can be wrong for ⭐⭐⭐
  (ABC ? [ABC] : []).concat(C.units).forEach(u => {
    if (!u.planned) u.quiz = { id: `${u.id}quiz`, type: 'quiz', title: 'Speed Quiz', unit: u };
  });
  const isQuiz = l => l.type === 'quiz';
  const starsFor = score => QUIZ_STARS.filter(t => score >= t).length;
  const starText = n => '⭐'.repeat(n) + '☆'.repeat(3 - n);

  // ================= Saved progress =================
  // Children's progress is the most precious thing in the game. Rules:
  //  • Never rename a lesson, word or unit id: progress is saved against them.
  //    If one really must change, add it to RENAMED so saves follow it.
  //  • A change to the shape of the save bumps SAVE_VERSION and adds a step to upgradeSave().
  const SAVE_VERSION = 1;
  const BACKUP_KEY = `${STORE_KEY}-backup`;
  const RENAMED = {}; // oldId: 'newId'

  const freshState = () => ({
    version: SAVE_VERSION, dogName: null, xp: 0, streak: 0, lastDay: null,
    done: {},     // lessonId -> { best: accuracy %, plays }
    words: {},    // wordId -> { right, wrong }
    muted: false,
    speaking: true,  // "Say it!" exercises
    learnLetters: null, // true = show the alphabet unit; null = never asked (saves from before it existed)
    quiz: {},           // unitId -> { best, plays } for the Speed Quiz
    playerName: null,   // asked first on the cover; saves from before it existed were Ollie's
    week: null,         // { start: Monday (UTC), xp } – XP earned this week, for the league
    league: null        // set once a grown-up OKs joining the weekly league
  });

  let saveLocked = false; // true if the save came from a NEWER version of the game – never overwrite it
  let state = loadState();
  const playerName = () => state.playerName || 'Ollie';
  // "Ollie's" – or "James's"; an empty name gives "Your".
  const possessive = name => name ? `${name}'s` : 'Your';

  // Brings any older save up to date. Each future version adds one step here.
  function upgradeSave(s) {
    // e.g. if (s.version === 1) { …change the shape…; s.version = 2; }
    for (const [from, to] of Object.entries(RENAMED)) {
      ['done', 'words', 'quiz'].forEach(k => {
        if (s[k] && s[k][from] && !s[k][to]) { s[k][to] = s[k][from]; delete s[k][from]; }
      });
    }
    return Object.assign(freshState(), s, { version: SAVE_VERSION });
  }

  // A spare copy of yesterday's save, kept once a day, in case an update ever goes wrong.
  function keepBackup(raw) {
    try {
      const b = JSON.parse(localStorage.getItem(BACKUP_KEY) || 'null');
      const d = new Date(); const day = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      if (!b || b.day !== day) localStorage.setItem(BACKUP_KEY, JSON.stringify({ day, save: raw }));
    } catch (e) { /* ignore */ }
  }

  function loadState() {
    let raw = null;
    try { raw = localStorage.getItem(STORE_KEY); } catch (e) { return freshState(); }
    if (!raw) return freshState();
    let s;
    try { s = JSON.parse(raw); } catch (e) { s = null; }
    if (s && typeof s.version === 'number' && s.version <= SAVE_VERSION) {
      keepBackup(raw);
      return upgradeSave(s);
    }
    // Unreadable or from a newer game: keep it safe instead of starting over on top of it.
    try { localStorage.setItem(`${STORE_KEY}-unreadable-${Date.now()}`, raw); } catch (e) { /* ignore */ }
    saveLocked = s && s.version > SAVE_VERSION;
    return freshState();
  }

  function saveState() {
    if (saveLocked) return;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  const dayKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const today = () => dayKey(new Date());
  const yesterday = () => dayKey(new Date(Date.now() - 864e5));

  function currentStreak() {
    return (state.lastDay === today() || state.lastDay === yesterday()) ? state.streak : 0;
  }

  const level = () => Math.floor(state.xp / XP_PER_LEVEL) + 1;

  // Weeks start on Monday (UTC), the same as the league's.
  function weekStart() {
    const d = new Date();
    d.setUTCHours(0, 0, 0, 0);
    d.setUTCDate(d.getUTCDate() - (d.getUTCDay() + 6) % 7);
    return d.toISOString().slice(0, 10);
  }
  const weekXp = () => state.week && state.week.start === weekStart() ? state.week.xp : 0;
  function addXp(n) {
    state.xp += n;
    state.week = { start: weekStart(), xp: weekXp() + n };
  }

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
  // Stops whatever is talking – a recording or the computer voice – so sounds never overlap.
  function stopSpeech() {
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }
  function speak(text, audioFile, slow) {
    if (state.muted || !text) return;
    stopSpeech();
    if (audioFile) {
      const a = currentAudio = new Audio(audioFile);
      // Safari resets playbackRate when a file loads, so set the default rate too.
      a.defaultPlaybackRate = a.playbackRate = slow ? 0.6 : 1;
      a.preservesPitch = a.webkitPreservesPitch = true;
      a.play().catch(() => { if (currentAudio === a) speakTTS(text, slow); });
      return;
    }
    speakTTS(text, slow);
  }
  function speakTTS(text, slow) {
    if (!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'bg-BG';
    if (bgVoice) u.voice = bgVoice;
    u.rate = slow ? 0.4 : 0.85;
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

  // A question says its word a moment after it appears – unless you've already moved on.
  const sayLater = (q, fn) => setTimeout(() => { if (S && S.q === q) fn(); }, 250);
  const sayWord = (id, slow) => { const w = word(id); speak(w.tts || w.bg, w.audio, slow); };
  const saySentence = (id, slow) => { const s = sentence(id); speak(s.tts || s.bg, s.audio, slow); };

  // ================= Listening to Ollie =================
  // Safari (iPad/iPhone) and Chrome have a built-in speech recogniser. If it
  // can't do Bulgarian, we fall back to "record & compare".
  const Recognizer = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognitionWorks = !!Recognizer;
  const speakingOn = () => state.speaking !== false;
  const showSay = () => state.showSay !== false;
  const abcOn = () => !!ABC && state.learnLetters === true;

  // Recognisers often write numbers as digits ("35"), so turn them back into words.
  const ONES = ['нула', 'едно', 'две', 'три', 'четири', 'пет', 'шест', 'седем', 'осем', 'девет'];
  const TEENS = ['десет', 'единадесет', 'дванадесет', 'тринадесет', 'четиринадесет', 'петнадесет', 'шестнадесет', 'седемнадесет', 'осемнадесет', 'деветнадесет'];
  const TENS = ['', '', 'двадесет', 'тридесет', 'четиридесет', 'петдесет', 'шестдесет', 'седемдесет', 'осемдесет', 'деветдесет'];
  function numberWords(n) {
    if (n < 10) return ONES[n];
    if (n < 20) return TEENS[n - 10];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ' и ' + ONES[n % 10] : '');
    return n === 100 ? 'сто' : String(n);
  }
  function cleanSpeech(t) {
    return norm(t)
      .replace(/\d+/g, d => numberWords(+d))
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
  // Like el.append, but skips empty (null/false) parts instead of printing "null".
  const add = (el, ...kids) => el.append(...kids.flat().filter(k => k != null && k !== false));

  function show(...nodes) {
    app.replaceChildren(...nodes);
    window.scrollTo(0, 0);
  }

  // ---------- Welcome, part 1: what's your name? ----------
  const coverTitle = kicker => h('div', { class: 'cover-title' },
    kicker,
    h('h1', {}, 'Bulgarian', h('br'), 'Adventure'),
    h('p', { class: 'tagline' }, 'Words, games and a puppy sidekick. Learn real Bulgarian one level at a time!')
  );

  function renderWelcome() {
    document.title = 'Bulgarian Adventure';
    const input = h('input', { class: 'name-input dark', maxlength: 16, placeholder: 'Type your name…', 'aria-label': 'Your name', autocomplete: 'off' });
    const kicker = h('div', { class: 'kicker' }, possessive(''));
    // The title becomes theirs as they type.
    input.addEventListener('input', () => { kicker.textContent = possessive(input.value.trim()); });
    const next = () => {
      const name = input.value.trim();
      if (!name) { input.focus(); input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 400); return; }
      state.playerName = name;
      saveState();
      sfx.tap();
      renderDogName();
    };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') next(); });

    const totalWords = Object.keys(C.words).length;
    show(h('section', { class: 'screen welcome' },
      h('div', { class: 'flag-stripe', 'aria-hidden': 'true' }, h('i'), h('i'), h('i')),
      coverTitle(kicker),
      h('div', { class: 'pills' },
        h('span', { class: 'pill' }, `${C.units.filter(u => !u.planned).length} units`),
        h('span', { class: 'pill' }, `${Math.floor(totalWords / 10) * 10}+ words`),
        h('span', { class: 'pill' }, '🎤 Speaking'),
        h('span', { class: 'pill' }, '🏆 Boss rounds')
      ),
      h('label', { class: 'sidekick-label', for: 'player-name' }, "What's your name?"),
      Object.assign(input, { id: 'player-name' }),
      h('button', { class: 'btn big start', onclick: next }, 'Next →')
    ));
    input.focus();
  }

  // ---------- Welcome, part 2: name the dog ----------
  function renderDogName() {
    const input = h('input', { class: 'name-input dark', maxlength: 16, placeholder: 'Type a name…', 'aria-label': 'Dog name' });
    const chips = h('div', { class: 'chips' });
    const go = () => {
      const name = input.value.trim();
      if (!name) { input.focus(); input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 400); return; }
      state.dogName = name;
      saveState();
      sfx.tap();
      renderReadingChoice(name);
    };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    input.addEventListener('input', () => chips.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.textContent === input.value)));

    ['Рекс', 'Макс', 'Шаро', 'Ракета', 'Тайфун'].forEach(n => chips.append(
      h('button', { class: 'chip', onclick: () => { input.value = n; input.dispatchEvent(new Event('input')); sfx.tap(); } }, n)));

    show(h('section', { class: 'screen welcome' },
      h('div', { class: 'flag-stripe', 'aria-hidden': 'true' }, h('i'), h('i'), h('i')),
      coverTitle(h('div', { class: 'kicker' }, possessive(playerName()))),
      h('div', { class: 'sidekick' },
        h('div', { class: 'sidekick-dog' }, dog('happy', 110)),
        h('div', {},
          h('div', { class: 'sidekick-label' }, 'Choose your sidekick'),
          h('p', { class: 'sidekick-text' }, `Every adventure needs a partner, ${playerName()}. Your dog speaks Bulgarian, so give it a name!`)
        )
      ),
      input,
      chips,
      h('button', { class: 'btn big start', onclick: go }, 'Start the adventure →')
    ));
  }

  // ---------- Welcome, part 2: can you read the letters yet? ----------
  function renderReadingChoice(name) {
    const choose = learn => {
      state.learnLetters = learn;
      saveState();
      sfx.win();
      confetti();
      renderPath(learn
        ? `Бау! I'm ${name}, your sidekick. Let's start with the letters – you'll be reading in no time! ✏️`
        : `Бау! I'm ${name}, your sidekick. Let's do this, ${playerName()}! 💪`);
    };
    const option = (emoji, title, text, learn) => h('button', { class: 'read-option', onclick: () => choose(learn) },
      h('span', { class: 'read-emoji', 'aria-hidden': 'true' }, emoji),
      h('span', {}, h('span', { class: 'read-title' }, title), h('span', { class: 'read-text' }, text)));

    show(h('section', { class: 'screen welcome' },
      h('div', { class: 'flag-stripe', 'aria-hidden': 'true' }, h('i'), h('i'), h('i')),
      h('div', { class: 'sidekick' },
        h('div', { class: 'sidekick-dog' }, dog('happy', 110)),
        h('div', {},
          h('div', { class: 'sidekick-label' }, `${name} has a question`),
          h('p', { class: 'sidekick-text' }, 'Can you read Bulgarian letters like these? Куче, топка, футбол.')
        )
      ),
      option('📖', 'Yes, I can read them', 'Jump straight into Unit 1.', false),
      option('✏️', "No, I'm new to these letters", 'Start with the alphabet: 30 letters in 6 quick lessons.', true),
      h('p', { class: 'read-note' }, 'You can change this any time in Settings ⚙️')
    ));
  }

  // ---------- Home: the lesson path ----------
  const greetings = () => [
    `Бау! Ready, ${playerName()}?`,
    `Next mission's waiting. Let's go!`,
    `One lesson a day keeps the streak alive 🔥`,
    `New words to unlock. Pick a lesson!`,
    `Здравей, ${playerName()}! Let's level up 💪`
  ];

  // Where Ollie is up to: the first playable lesson he hasn't finished (-1 = all done).
  const firstOpenIndex = () => LESSONS.findIndex(l => !state.done[l.id]);

  function lessonStatus(l) {
    if (isQuiz(l)) {
      const boss = l.unit.lessons.find(x => x.type === 'boss');
      return !state.done[boss.id] ? 'locked' : state.quiz[l.unit.id] ? 'done' : 'available';
    }
    if (isPlanned(l)) return 'planned';
    if (state.done[l.id]) return 'done';
    if (isAbc(l)) { const i = ABC.lessons.indexOf(l); return i === 0 || state.done[ABC.lessons[i - 1].id] ? 'available' : 'locked'; }
    const first = firstOpenIndex();
    return first === -1 || LESSONS.indexOf(l) <= first ? 'available' : 'locked';
  }

  const STATUS_LABEL = { done: 'Done', available: 'Ready to play', locked: 'Locked', planned: 'Coming soon' };
  // Tips written as "a – b · c – d" read best as a list.
  const tipBody = text => text.includes(' · ')
    ? h('ul', { class: 'tip-list' }, text.split(' · ').map(t => h('li', {}, t)))
    : h('p', { class: 'tip-text' }, text);

  const lessonIcon = l => isQuiz(l) ? '⚡' : l.type === 'boss' ? '🏆' : l.type === 'sentences' ? '💬' : '⭐';
  const QUIZ_LOCKED = 'Beat the Boss to unlock the Speed Quiz! ⚡';
  // The Speed Quiz shows its best score instead of plain "Done".
  const quizLabel = (l, st) => !isQuiz(l) ? null
    : st === 'locked' ? 'Beat the Boss to unlock'
    : st === 'done' ? `Best: ${state.quiz[l.unit.id].best} ${starText(starsFor(state.quiz[l.unit.id].best))}`
    : `${QUIZ_QUESTIONS} questions · ${QUIZ_SECONDS} seconds`;

  function renderPath(message) {
    document.title = `${possessive(playerName())} Bulgarian Adventure`;
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
      LEAGUE ? h('button', { class: 'icon-btn', 'aria-label': 'Weekly league', onclick: () => renderLeague() }, '🏆') : null,
      h('button', { class: 'icon-btn', 'aria-label': 'Settings', onclick: renderSettings }, '⚙️')
    );

    const firstOpen = firstOpenIndex();
    // New letter-learners start with the alphabet (Unit 1 stays open too). Anyone
    // already into the main course keeps continuing from where they are.
    const mainStarted = LESSONS.some(l => state.done[l.id]);
    const next = (abcOn() && !mainStarted && ABC.lessons.find(l => !state.done[l.id])) || LESSONS[firstOpen];
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

      // Planned units are a compact grid of cards, each opening its outline.
      const plannedGrid = list => h('div', { class: 'planned-grid' }, list.map(u =>
        h('button', { class: 'unit-card planned', onclick: () => renderUnit(u), 'aria-label': `Unit ${unitNumber(u)}: ${u.title} – coming soon. See what it will teach.` },
          h('span', { class: 'unit-card-emoji', 'aria-hidden': 'true' }, u.emoji),
          h('span', {}, h('span', { class: 'unit-label' }, `Unit ${unitNumber(u)}`), h('span', { class: 'unit-card-title' }, u.title))
        )));

      if (comingSoon) {
        path.append(plannedGrid(units));
        return;
      }

      // Finished units shrink to small cards, so the next lesson isn't buried under old ones.
      let doneCards = null;
      const flushDone = () => { if (doneCards) path.append(doneCards); doneCards = null; };
      const drawUnit = u => {
        const unitDone = !u.planned && u.lessons.every(l => isPlanned(l) || state.done[l.id]);
        if (unitDone) {
          const q = state.quiz[u.id];
          doneCards = doneCards || h('div', { class: 'done-grid' });
          doneCards.append(h('button', { class: `unit-card done c-${u.color}`, onclick: () => renderUnit(u),
            'aria-label': `Unit ${unitNumber(u)}: ${u.title} – done. Open it to play again.` },
            h('span', { class: 'unit-card-emoji', 'aria-hidden': 'true' }, u.emoji),
            h('span', {}, h('span', { class: 'unit-label' }, `✅ Unit ${unitNumber(u)}`), h('span', { class: 'unit-card-title' }, u.title),
              h('span', { class: 'unit-card-quiz' }, q ? starText(starsFor(q.best)) : '⚡ Quiz to play'))
          ));
          return;
        }
        flushDone();
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

        u.lessons.concat(u.quiz || []).forEach(l => {
          const st = lessonStatus(l);
          const current = l === next;
          const shift = offsets[n++ % offsets.length] * 48;
          path.append(h('div', { class: 'node-row', style: `transform:translateX(${shift}px)` },
            current ? h('div', { class: 'start-tag' }, 'START') : null,
            h('button', {
              class: `node c-${u.color} ${st} ${current ? 'current' : ''} ${l.type === 'boss' ? 'boss' : ''} ${isQuiz(l) ? 'quiz' : ''}`,
              'aria-label': `${l.title} – ${quizLabel(l, st) || STATUS_LABEL[st]}`,
              onclick: () => st === 'planned' ? renderUnit(u) : st === 'locked' ? lockedMessage(isQuiz(l) ? QUIZ_LOCKED : null) : startLesson(l)
            }, st === 'done' && !isQuiz(l) ? '✓' : st === 'locked' ? '🔒' : st === 'planned' ? '🕒' : lessonIcon(l)),
            h('div', { class: 'node-title' }, l.title,
              isQuiz(l) && st === 'done' ? h('span', { class: 'node-stars' }, starText(starsFor(state.quiz[u.id].best))) : null)
          ));
        });
      };
      if (si === 0 && abcOn()) drawUnit(ABC);
      units.filter(u => !u.planned).forEach(drawUnit);
      flushDone();

      const later = units.filter(u => u.planned);
      if (later.length) {
        path.append(h('div', { class: 'planned-head' }, h('span', { class: 'tag planned' }, '🕒 Coming soon in this section')), plannedGrid(later));
      }
    });

    if (firstOpen === -1) {
      path.append(h('div', { class: 'more-soon' }, C.units.some(u => u.planned)
        ? '🎉 You finished every lesson that\'s ready! More units are on the way…'
        : `🏆 You finished the WHOLE course, ${playerName()}! Браво! Keep your streak going with the ⚡ Speed Quizzes.`));
    }

    // Continue where you left off, or practise earlier words.
    const actions = h('div', { class: 'home-actions' },
      next ? h('button', { class: 'continue-card', onclick: () => startLesson(next) },
        h('span', { class: 'continue-label' }, Object.keys(state.done).length ? 'Your next lesson' : 'Start here'),
        h('span', { class: 'continue-title' }, `${next.unit.emoji} Unit ${unitNumber(next.unit)} · ${next.title}`),
        h('span', { class: 'continue-go', 'aria-hidden': 'true' }, '▶')
      ) : null,
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
          h('span', { class: 'lesson-status' }, quizLabel(l, st) || STATUS_LABEL[st]),
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
        h('ol', { class: 'lesson-list' }, u.lessons.concat(u.quiz || []).map(lessonRow))
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
      (u.facts || []).length ? h('div', { class: 'fact' },
        h('strong', {}, '🇧🇬 Did you know?'),
        h('ul', { class: 'fact-list' }, u.facts.map(f => h('li', {}, f)))
      ) : null
    ));
    heading.focus();
  }

  function lockedMessage(msg) {
    sfx.wrong();
    const hero = document.getElementById('hero');
    if (hero) {
      hero.querySelector('.bubble').textContent = msg || 'That one is locked! 🔒 Finish the lesson before it first.';
      hero.classList.remove('shake'); void hero.offsetWidth; hero.classList.add('shake');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ================= Building a lesson =================
  // Words Ollie has met up to (and including) this lesson — used for distractors.
  function knownWordsUpTo(lesson) {
    if (isAbc(lesson)) {
      const i = ABC.lessons.indexOf(lesson);
      return lesson.type === 'words' ? ABC.lessons.slice(0, i + 1).flatMap(l => l.words || []) : ABC.words;
    }
    const idx = LESSONS.indexOf(lesson);
    const met = LESSONS.slice(0, idx + 1).flatMap(l => l.words || []);
    // Boss and sentence lessons can use the whole unit; word lessons only what's been taught.
    return [...new Set(lesson.type === 'words' ? met : met.concat(lesson.unit.words))];
  }

  function distractors(correctId, pool, n) {
    const c = word(correctId);
    let cands = pool.filter(id => id !== correctId && word(id).en !== c.en && word(id).pic !== c.pic);
    if (cands.length < n) {
      // Letters only ever mix with letters, and words with words.
      cands = cands.concat(Object.keys(C.words).filter(id => id !== correctId && !cands.includes(id) && word(id).pic !== c.pic && !word(id).letter === !c.letter));
    }
    // Mostly pick words from the same lesson (other days, other numbers…) so you can't guess by topic.
    const siblings = LESSONS.concat(ABC ? ABC.lessons : []).filter(l => (l.words || []).includes(correctId)).flatMap(l => l.words);
    const close = shuffle(cands.filter(id => siblings.includes(id))).slice(0, n - 1);
    return close.concat(shuffle(cands.filter(id => !close.includes(id))).slice(0, n - close.length));
  }

  const WORD_TYPES = ['picture', 'listen', 'bg2en', 'en2bg'];
  // Words a picture can't really show (please, why…) skip picture-only questions.
  const typesFor = id => word(id).picQuiz === false ? WORD_TYPES.filter(t => t !== 'picture') : WORD_TYPES;

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
        const types = shuffle(typesFor(id));
        if (firstTime) qs.push({ type: 'teach', id });
        qs.push(wordQuestion(types[0], id, pool));
        later.push(wordQuestion(types[1], id, pool));
      });
      const mixed = shuffle(later).slice(0, 3);
      mixed.splice(1, 0, pairsQuestion(shuffle(lesson.words), pool));
      if (speakingOn() && !isAbc(lesson)) mixed.push({ type: 'speak', id: pick(lesson.words) });
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
      shuffle(u.words).slice(0, isAbc(lesson) ? 12 : 7).forEach(id => qs.push(wordQuestion(pick(typesFor(id)), id, pool)));
      shuffle(u.sentences).slice(0, 3).forEach(sid => qs.push(tilesQuestion(sid, lesson)));
      // Bring back a few words from earlier units too.
      const earlier = pool.filter(id => !u.words.includes(id));
      shuffle(earlier).slice(0, 3).forEach(id => qs.push(wordQuestion(pick(typesFor(id)), id, pool)));
      if (speakingOn() && !isAbc(lesson)) qs.push({ type: 'speak', id: pick(u.words) });
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


  // ================= Playing a lesson =================
  let S = null; // the current lesson session

  function startLesson(lesson) {
    if (isQuiz(lesson)) return startQuiz(lesson);
    sfx.tap();
    if (lesson.type === 'boss') toast('🏆 Boss challenge! Show what you know!');
    S = { lesson, queue: buildQuestions(lesson), done: 0, right: 0, wrong: 0, combo: 0, q: null };
    nextQuestion();
  }

  function nextQuestion() {
    stopSpeech();
    if (S.quiz && (S.over || Date.now() >= S.endsAt)) return finishQuiz();
    S.q = S.queue.shift();
    if (!S.q) return S.quiz ? finishQuiz() : finishLesson();
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
    const checkBtn = h('button', { class: `btn big primary ${S.quiz ? 'hidden' : ''}`, disabled: true }, 'Check');
    footer.append(checkBtn);
    if (S.quiz) footer.append(h('div', { class: 'footer-hint' }, 'Tap the answer – quick!'));

    const ctx = {
      // In the Speed Quiz, tapping an answer checks it straight away.
      ready(on = true) { checkBtn.disabled = !on; if (on && S.quiz) setTimeout(() => ctx.onCheck && ctx.onCheck()); },
      onCheck: null,
      footer, checkBtn
    };
    checkBtn.addEventListener('click', () => ctx.onCheck && ctx.onCheck());

    const body = h('div', { class: 'qbody' });
    const screen = h('section', { class: 'screen lesson' },
      h('div', { class: 'lesson-top' },
        h('button', { class: 'icon-btn', 'aria-label': 'Quit lesson', onclick: quitLesson }, '✕'),
        h('div', { class: 'progress-wrap' },
          S.combo >= 3 ? h('div', { class: 'combo-tag' }, `🔥 COMBO ×${S.combo}`) : null,
          S.quiz
            ? h('div', { class: 'progress quiz-timer' }, h('div', { class: 'progress-fill quiz-timer-fill', style: `width:${quizLeft() / (QUIZ_SECONDS * 10)}%` }))
            : h('div', { class: `progress ${S.combo >= 5 ? 'gold' : ''}` }, h('div', { class: 'progress-fill', style: `width:${pct}%` }))),
        S.quiz ? h('div', { class: 'quiz-count', 'aria-label': 'Question' }, `${S.right + S.wrong + 1}/${QUIZ_QUESTIONS}`) : null,
        S.quiz ? h('div', { class: 'quiz-score', 'aria-label': 'Right answers' }, `⚡${S.right}`) : null,
      ),
      body, footer
    );

    RENDER[q.type](q, body, ctx);
    if (q.retry) body.prepend(h('div', { class: 'retry-tag' }, '🔁 Have another go!'));
    show(screen);
  }

  // Shows the green/red bar, then waits for "Continue".
  function feedback(ctx, correct, answerText, then) {
    const f = ctx.footer;
    f.replaceChildren();
    f.classList.add(correct ? 'good' : 'bad');
    if (S && S.quiz) {
      // Speed Quiz: a quick flash, then straight on to the next question.
      const q = S.q;
      add(f, h('div', { class: 'fb' }, h('div', {},
        h('div', { class: 'fb-title' }, correct ? '✅ Yes!' : 'Not quite!'),
        correct ? null : h('div', { class: 'fb-answer' }, `Answer: ${answerText}`))));
      setTimeout(() => { if (S && S.quiz && S.q === q) nextQuestion(); }, correct ? 450 : 1500);
      return;
    }
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
    } else {
      sfx.wrong();
      S.wrong++; S.combo = 0;
      // Try it again later in the lesson (the Speed Quiz just moves on).
      if (!S.quiz) S.queue.push(Object.assign({}, S.q, { retry: true, options: S.q.options && shuffle(S.q.options), tiles: S.q.tiles && shuffle(S.q.tiles) }));
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

  // Pictures made of two emoji (🐶🍼) are drawn a bit smaller so they fit.
  const isMultiPic = pic => (window.Intl && Intl.Segmenter
    ? [...new Intl.Segmenter().segment(pic)].length
    : [...pic].length) > 1 && !/^\d+$/.test(pic);
  const picClass = (base, pic) => isMultiPic(pic) ? `${base} multi` : base;
  const picLabel = id => h('span', { class: picClass('pic', word(id).pic) }, word(id).pic);
  const picEnLabel = id => [h('span', { class: picClass('pic', word(id).pic) }, word(id).pic), h('span', { class: 'en' }, word(id).en)];
  const enLabel = id => h('span', { class: 'en' }, word(id).en);
  const bgLabel = id => h('span', { class: 'bgw' }, word(id).bg);

  const RENDER = {
    // A new word: picture, sound, meaning and memory trick.
    teach(q, body, ctx) {
      const w = word(q.id);
      add(body, 
        h('div', { class: 'q-label new' }, w.letter ? '✏️ New letter!' : '✨ New word!'),
        h('div', { class: 'teach-card' },
          h('div', { class: picClass('teach-pic', w.pic) }, w.pic),
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
      sayLater(q, () => sayWord(q.id));
    },

    teachSentence(q, body, ctx) {
      const s = sentence(q.sid);
      add(body, 
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
      sayLater(q, () => saySentence(q.sid));
    },

    // A short grammar note.
    tip(q, body, ctx) {
      const t = C.tips[q.tid];
      add(body, 
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
      add(body, 
        h('div', { class: 'q-label' }, 'Tap the right picture'),
        h('div', { class: 'prompt' }, h('span', { class: 'prompt-bg' }, w.bg), speakerButtons(slow => sayWord(q.id, slow)))
      );
      const grid = choiceGrid(q.options, picLabel, ctx, null, 'pics');
      add(body, grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.bg} = ${w.en}`, [q.id]); };
      sayLater(q, () => sayWord(q.id));
    },

    // Hear it (no text), tap the meaning.
    listen(q, body, ctx) {
      const w = word(q.id);
      add(body, 
        h('div', { class: 'q-label' }, w.letter ? '👂 Which letter do you hear?' : '👂 What do you hear?'),
        h('div', { class: 'prompt' }, h('button', { class: 'btn-speaker huge', 'aria-label': 'Play sound', onclick: () => sayWord(q.id) }, '🔊'),
          h('button', { class: 'btn-speaker', 'aria-label': 'Play slowly', onclick: () => sayWord(q.id, true) }, '🐢'))
      );
      const grid = w.letter ? choiceGrid(q.options, bgLabel, ctx, null, 'list') : choiceGrid(q.options, picEnLabel, ctx);
      add(body, grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.bg} = ${w.en}`, [q.id]); };
      sayLater(q, () => sayWord(q.id));
    },

    // Bulgarian → English.
    bg2en(q, body, ctx) {
      const w = word(q.id);
      add(body, 
        h('div', { class: 'q-label' }, w.letter ? 'What sound does this letter make?' : 'What does this mean?'),
        h('div', { class: 'prompt' }, h('span', { class: 'prompt-bg' }, w.bg), speakerButtons(slow => sayWord(q.id, slow)))
      );
      const grid = choiceGrid(q.options, enLabel, ctx, null, 'list');
      add(body, grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.bg} = ${w.en}`, [q.id]); };
      sayLater(q, () => sayWord(q.id));
    },

    // English → Bulgarian. Tapping an option says it.
    en2bg(q, body, ctx) {
      const w = word(q.id);
      add(body, 
        h('div', { class: 'q-label' }, w.letter ? 'Which letter makes this sound?' : 'How do you say this in Bulgarian?'),
        h('div', { class: 'prompt' }, h('span', { class: picClass('prompt-pic', w.pic) }, w.pic), h('span', { class: 'prompt-en' }, w.en))
      );
      const grid = choiceGrid(q.options, bgLabel, ctx, id => sayWord(id), 'list');
      add(body, grid);
      ctx.onCheck = () => { const ok = grid.chosen() === q.id; grid.lock(q.id); scored(ctx, ok, `${w.en} = ${w.bg}`, [q.id]); };
    },

    // Match five pairs.
    pairs(q, body, ctx) {
      add(body, h('div', { class: 'q-label' }, '🧩 Match the pairs'));
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
      add(body, h('div', { class: 'pairs' }, left, right));
      ctx.footer.replaceChildren(h('div', { class: 'footer-hint' }, word(q.ids[0]).letter ? 'Tap a letter, then its sound' : 'Tap a Bulgarian word, then its meaning'));
    },

    // Build the sentence from word tiles.
    tiles(q, body, ctx) {
      const s = sentence(q.sid);
      const target = tokens(s.bg);
      const line = h('div', { class: 'tile-line' });
      const bank = h('div', { class: 'tile-bank' });

      add(body, 
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

      add(body, 
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
      sayLater(q, () => say(false));
    },

    // Fill the missing word.
    gap(q, body, ctx) {
      const s = sentence(q.sid);
      const blank = h('span', { class: 'blank' }, '____');
      // Blank out the gap as a whole word only, so 'а' doesn't hit the 'а' inside 'брат'.
      let blanked = false;
      const shown = h('div', { class: 'gap-sentence' }, s.bg.split(' ').flatMap((w, i) => {
        const core = w.replace(/[.,!?]/g, '');
        const piece = !blanked && core === s.gap ? (blanked = true, [blank, w.slice(core.length)]) : [w];
        return i ? [' ', ...piece] : piece;
      }));

      add(body, 
        h('div', { class: 'q-label' }, '✏️ Fill the gap'),
        h('div', { class: 'prompt column' }, shown, h('span', { class: 'prompt-en small' }, s.en))
      );
      const grid = choiceGrid(q.options, t => h('span', { class: 'bgw' }, t), ctx, t => { blank.textContent = t; speak(t); }, 'list');
      add(body, grid);
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

  // Playing anything today keeps the streak going. The day's first finish earns the 🔥 screen.
  let streakToShow = false;
  function playedToday() {
    const t = today();
    if (state.lastDay !== t) {
      state.streak = state.lastDay === yesterday() ? state.streak + 1 : 1;
      state.lastDay = t;
      streakToShow = true;
    }
  }
  const leaveFinish = () => { S = null; if (streakToShow) renderStreak(); else renderPath(); };

  function renderStreak() {
    streakToShow = false;
    const n = state.streak;
    sfx.level();
    confetti();
    show(h('section', { class: 'screen finish streak-screen' },
      h('div', { class: 'streak-flame', 'aria-hidden': 'true' }, '🔥'),
      h('div', { class: 'streak-num' }, String(n)),
      h('div', { class: 'streak-label' }, n === 1 ? 'day streak!' : 'days in a row!'),
      dogSays(n === 1
        ? `Day one, ${playerName()}! Play again tomorrow and watch your flame grow.`
        : n % 7 === 0 ? `${n / 7} whole week${n === 7 ? '' : 's'} in a row! Бау-бау, you're a star! 🌟`
        : `Бау! Great work, ${playerName()}. Come back tomorrow to make it ${n + 1}! 🔥`, 'happy party', 84),
      h('button', { class: 'btn big primary', onclick: () => renderPath() }, 'Continue')
    ));
  }

  // ================= ⚡ Speed Quiz =================
  // Quick-fire questions on the unit's words, plus a few tricky words from earlier units.
  function quizQuestions(u) {
    const pool = knownWordsUpTo(u.lessons.find(l => l.type === 'boss'));
    const tricky = u === ABC ? [] : reviewableWords().filter(id => !u.words.includes(id)).slice(0, 3);
    const qs = shuffle(u.words.concat(tricky)).map(id => wordQuestion(pick(typesFor(id)), id, pool));
    while (qs.length < QUIZ_QUESTIONS) shuffle(u.words).forEach(id => qs.push(wordQuestion(pick(typesFor(id)), id, pool)));
    return qs.slice(0, QUIZ_QUESTIONS);
  }

  let quizTimer = null;
  const quizLeft = () => Math.max(0, S.endsAt - Date.now());

  function startQuiz(quiz) {
    sfx.tap();
    toast(`⚡ ${QUIZ_QUESTIONS} questions, ${QUIZ_SECONDS} seconds – go!`);
    S = { lesson: quiz, quiz: true, queue: quizQuestions(quiz.unit), done: 0, right: 0, wrong: 0, combo: 0, q: null,
          endsAt: Date.now() + QUIZ_SECONDS * 1000 };
    clearInterval(quizTimer);
    quizTimer = setInterval(() => {
      if (!S || !S.quiz) return clearInterval(quizTimer);
      const fill = document.querySelector('.quiz-timer-fill');
      if (fill) fill.style.width = `${quizLeft() / (QUIZ_SECONDS * 10)}%`;
      if (quizLeft() === 0) finishQuiz();
    }, 250);
    nextQuestion();
  }

  function finishQuiz() {
    if (!S || S.over) return;
    S.over = true;
    clearInterval(quizTimer);
    const u = S.lesson.unit;
    const prev = state.quiz[u.id] || { best: 0, plays: 0 };
    const score = S.right;
    const newBest = score > prev.best;
    // 1 XP per right answer (up to 20) plus 10 for a new best – about one lesson's worth.
    const earned = Math.min(score, 20) + (newBest ? 10 : 0);

    const oldLevel = level();
    addXp(earned);
    state.quiz[u.id] = { best: Math.max(prev.best, score), plays: prev.plays + 1 };
    playedToday();
    saveState();
    leagueSync();

    const levelUp = level() > oldLevel;
    const stars = starsFor(score);
    (levelUp ? sfx.level : sfx.win)();
    if (newBest) confetti();

    show(h('section', { class: 'screen finish' },
      h('h1', {}, newBest && prev.plays ? '⚡ New best score!' : S.queue.length ? "⚡ Time's up!" : '⚡ Quiz complete!'),
      dog('happy party', 140),
      h('div', { class: 'quiz-stars', 'aria-label': `${stars} of 3 stars` }, starText(stars)),
      h('p', { class: 'lead' }, stars === 3
        ? `${state.dogName}: "Lightning fast! Бау-бау!"`
        : `${state.dogName}: "Get ${QUIZ_STARS[stars]} right for ${'⭐'.repeat(stars + 1)}. Go again?"`),
      levelUp ? h('div', { class: 'levelup' }, `⬆️ LEVEL UP! You're now level ${level()}!`) : null,
      h('div', { class: 'stats' },
        h('div', { class: 'stat-card c-green' }, h('div', { class: 'stat-top' }, 'Score'), h('div', { class: 'stat-val' }, `⚡${score}/${QUIZ_QUESTIONS}`)),
        h('div', { class: 'stat-card c-blue' }, h('div', { class: 'stat-top' }, 'Best'), h('div', { class: 'stat-val' }, String(state.quiz[u.id].best))),
        h('div', { class: 'stat-card c-yellow' }, h('div', { class: 'stat-top' }, 'XP'), h('div', { class: 'stat-val' }, `+${earned}`))
      ),
      h('div', { class: 'finish-actions' },
        h('button', { class: 'btn big', onclick: () => startQuiz(u.quiz) }, '⚡ Play again'),
        h('button', { class: 'btn big primary', onclick: leaveFinish }, 'Continue'))
    ));
  }

  // ================= Lesson complete =================
  // Each lesson in a unit shows a different fact, and replays move on to the next one.
  function pickFact(l) {
    const facts = l.unit.facts || [];
    if (!facts.length) return null;
    if (l.type === 'review') return pick(facts);
    const slot = l.unit.lessons.indexOf(l) + ((state.done[l.id] || {}).plays || 1) - 1;
    return facts[slot % facts.length];
  }

  function finishLesson() {
    const l = S.lesson;
    const scoredCount = S.right + S.wrong;
    const accuracy = scoredCount ? Math.round((S.right / scoredCount) * 100) : 100;
    const perfect = S.wrong === 0;
    const isReview = l.type === 'review';
    const firstTime = !isReview && !state.done[l.id];
    const earned = isReview ? 5 + (perfect ? 5 : 0) : 10 + (perfect ? 5 : 0) + (l.type === 'boss' ? 10 : 0);

    const oldLevel = level();
    addXp(earned);
    if (!isReview) {
      const prev = state.done[l.id] || { best: 0, plays: 0 };
      state.done[l.id] = { best: Math.max(prev.best, accuracy), plays: prev.plays + 1 };
    }

    playedToday();
    saveState();
    leagueSync();

    const levelUp = level() > oldLevel;
    const fact = pickFact(l);
    const unitDone = l.type === 'boss' && firstTime;

    (levelUp ? sfx.level : sfx.win)();
    confetti();

    const title = unitDone && isAbc(l) ? '✏️ Alphabet complete!' : unitDone ? `🏅 Unit ${unitNumber(l.unit)} complete!` : isReview ? 'Review complete! 🔁' : perfect ? 'Perfect lesson! 🌟' : 'Lesson complete!';
    const dogLine = perfect ? `${state.dogName}: "Wow, no mistakes! Бау-бау!"` : `${state.dogName}: "Great work, ${playerName()}!"`;

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
      fact ? h('div', { class: 'fact' }, h('strong', {}, '🇧🇬 Did you know? '), fact) : null,
      h('button', { class: 'btn big primary', onclick: leaveFinish }, 'Continue')
    ));
  }

  // ================= 🏆 Weekly league =================
  // Opt-in, with a grown-up's OK. Others only ever see a first name or nickname, a flag
  // and this week's XP: no messages, no contact. The database rules are in tools/league-setup.sql.
  const LEAGUE = window.LEAGUE_CONFIG && window.LEAGUE_CONFIG.url ? window.LEAGUE_CONFIG : null;

  const COUNTRIES = [
    ['GB', 'United Kingdom'], ['BG', 'Bulgaria'], ['IE', 'Ireland'], ['US', 'United States'], ['CA', 'Canada'],
    ['AU', 'Australia'], ['NZ', 'New Zealand'], ['ZA', 'South Africa'], ['IT', 'Italy'], ['ES', 'Spain'],
    ['FR', 'France'], ['DE', 'Germany'], ['NL', 'Netherlands'], ['BE', 'Belgium'], ['LU', 'Luxembourg'],
    ['AT', 'Austria'], ['CH', 'Switzerland'], ['PT', 'Portugal'], ['GR', 'Greece'], ['CY', 'Cyprus'],
    ['MT', 'Malta'], ['TR', 'Turkey'], ['RO', 'Romania'], ['MK', 'North Macedonia'], ['RS', 'Serbia'],
    ['HR', 'Croatia'], ['SI', 'Slovenia'], ['MD', 'Moldova'], ['UA', 'Ukraine'], ['PL', 'Poland'],
    ['CZ', 'Czechia'], ['SK', 'Slovakia'], ['HU', 'Hungary'], ['DK', 'Denmark'], ['SE', 'Sweden'],
    ['NO', 'Norway'], ['FI', 'Finland'], ['IS', 'Iceland'], ['EE', 'Estonia'], ['LV', 'Latvia'],
    ['LT', 'Lithuania'], ['IL', 'Israel'], ['AE', 'United Arab Emirates'], ['IN', 'India'], ['SG', 'Singapore'],
    ['JP', 'Japan'], ['KR', 'South Korea'], ['CN', 'China'], ['BR', 'Brazil'], ['AR', 'Argentina'], ['MX', 'Mexico']
  ];
  const flag = cc => cc ? String.fromCodePoint(...[...cc].map(c => 0x1F1A5 + c.charCodeAt(0))) : '🌍';

  // Same rules as the database: letters only (no numbers, so no phone numbers or links), no rude words.
  const RUDE = /(fuck|fuk|shit|bitch|cunt|dick|cock|penis|vagina|pussy|piss|wank|twat|slut|whore|bastard|bollock|arse|nazi|hitler|rape|porn|sex|nigg|fag|retard|хуй|пизд|еба|ебе|курв|педал|шиба|путка|гъз)/;
  const nameOk = n => /^\p{L}[\p{L} '-]{1,19}$/u.test(n) && !RUDE.test(n.toLowerCase());
  const firstName = () => playerName().trim().split(/\s+/)[0];

  const NICK_A = ['Brave', 'Speedy', 'Happy', 'Clever', 'Sunny', 'Mighty', 'Lucky', 'Jolly', 'Super', 'Cosmic', 'Fuzzy', 'Zippy'];
  const NICK_B = ['Fox', 'Bear', 'Hedgehog', 'Owl', 'Wolf', 'Tiger', 'Panda', 'Dolphin', 'Eagle', 'Otter', 'Lynx', 'Stork'];
  const randomNick = () => `${pick(NICK_A)} ${pick(NICK_B)}`;
  const leagueName = lg => lg.useNick ? lg.nick : firstName();

  function randomId() {
    if (crypto.randomUUID) return crypto.randomUUID();
    const b = crypto.getRandomValues(new Uint8Array(16));
    b[6] = (b[6] & 15) | 64; b[8] = (b[8] & 63) | 128;
    const x = [...b].map(v => v.toString(16).padStart(2, '0')).join('');
    return `${x.slice(0, 8)}-${x.slice(8, 12)}-${x.slice(12, 16)}-${x.slice(16, 20)}-${x.slice(20)}`;
  }
  const randomSecret = () => [...crypto.getRandomValues(new Uint8Array(24))].map(v => v.toString(16).padStart(2, '0')).join('');

  async function leagueCall(fn, args) {
    const headers = { 'Content-Type': 'application/json', apikey: LEAGUE.key };
    if (LEAGUE.key.startsWith('eyJ')) headers.Authorization = `Bearer ${LEAGUE.key}`; // older-style Supabase keys
    const res = await fetch(`${LEAGUE.url}/rest/v1/rpc/${fn}`, { method: 'POST', headers, body: JSON.stringify(args) });
    const text = await res.text();
    if (!res.ok) throw new Error(/name not allowed/.test(text) ? 'name' : 'net');
    return text ? JSON.parse(text) : null;
  }

  const submitScore = lg => leagueCall('league_submit',
    { p_id: lg.id, p_secret: lg.secret, p_name: leagueName(lg), p_country: lg.country, p_xp: weekXp() });

  // Sends this week's XP after each lesson. Offline? It catches up next time.
  function leagueSync() {
    if (LEAGUE && state.league) submitScore(state.league).catch(() => {});
  }

  const daysLeft = () => {
    const end = new Date(weekStart() + 'T00:00:00Z').getTime() + 7 * 864e5;
    return Math.max(1, Math.ceil((end - Date.now()) / 864e5));
  };

  function renderLeague() {
    if (!state.league) return renderLeagueJoin();
    const lg = state.league;
    const board = h('div', { class: 'league-board' }, h('p', { class: 'league-msg' }, 'Loading this week\'s league…'));
    const days = daysLeft();

    const load = () => submitScore(lg).catch(() => {}).then(() => leagueCall('league_board', { p_id: lg.id })).then(rows => {
      const me = rows.find(r => r.me);
      const medal = p => ['🥇', '🥈', '🥉'][p - 1] || String(p);
      board.replaceChildren();
      add(board,
        rows.length === 1 && me && me.xp > 0 ? h('p', { class: 'league-msg' }, 'You\'re the first one here this week! 🎉') : null,
        me && !me.xp ? h('p', { class: 'league-msg' }, 'Finish a lesson to get on the board this week!') : null,
        h('ol', { class: 'league-list' }, rows.filter(r => r.xp > 0 || r.me).map(r =>
          h('li', { class: `league-row ${r.me ? 'me' : ''} ${r.pos <= 3 && r.xp > 0 ? 'top' : ''}` },
            h('span', { class: 'league-pos' }, r.xp > 0 ? medal(r.pos) : '–'),
            h('span', { class: 'league-flag', 'aria-hidden': 'true' }, flag(r.country)),
            h('span', { class: 'league-name' }, r.name, r.me ? h('span', { class: 'league-you' }, ' (you)') : null),
            h('span', { class: 'league-xp' }, `${r.xp} XP`))))
      );
      if (me && me.xp > 0 && me.pos <= 3) confetti();
    }).catch(() => {
      board.replaceChildren(
        h('p', { class: 'league-msg' }, '📡 Can\'t reach the league right now. Check the internet and try again.'),
        h('button', { class: 'btn', onclick: () => { board.replaceChildren(h('p', { class: 'league-msg' }, 'Loading…')); load(); } }, '🔄 Try again'));
    });

    const leave = () => {
      if (!confirm('Leave the league? Your name and score will be removed from the board.')) return;
      leagueCall('league_leave', { p_id: lg.id, p_secret: lg.secret })
        .then(() => { state.league = null; saveState(); toast('👋 You\'ve left the league'); renderPath(); })
        .catch(() => toast('📡 Couldn\'t reach the league. Try again when you\'re online.'));
    };

    show(h('section', { class: 'screen league' },
      h('div', { class: 'lesson-top' },
        h('button', { class: 'icon-btn', 'aria-label': 'Back', onclick: () => renderPath() }, '←'),
        h('h2', {}, '🏆 Weekly League')
      ),
      h('div', { class: 'league-head' },
        h('div', { class: 'stat-card c-yellow' }, h('div', { class: 'stat-top' }, 'This week'), h('div', { class: 'stat-val' }, `${weekXp()} XP`)),
        h('div', { class: 'stat-card c-blue' }, h('div', { class: 'stat-top' }, 'Ends in'), h('div', { class: 'stat-val' }, `${days} day${days === 1 ? '' : 's'}`))
      ),
      h('p', { class: 'league-note' }, 'Everyone starts at 0 every Monday. Earn XP in lessons and quizzes to climb!'),
      board,
      h('p', { class: 'league-note' }, `You show as ${leagueName(lg)} ${flag(lg.country)}. Only names, flags and XP are shown – no chatting.`),
      h('div', { class: 'finish-actions' },
        h('button', { class: 'btn', onclick: () => renderLeagueJoin(lg) }, '✏️ Change name or flag'),
        h('button', { class: 'btn danger-outline', onclick: leave }, '🚪 Leave the league'))
    ));
    load();
  }

  // Joining (or changing how you appear): name or nickname, a flag, and a grown-up's OK.
  function renderLeagueJoin(current) {
    const nameFine = nameOk(firstName());
    const pickState = { useNick: current ? current.useNick : !nameFine, nick: (current && current.nick) || randomNick(), country: current ? current.country : '' };
    const fresh = { id: randomId(), secret: randomSecret() }; // the same id if joining needs a retry
    const preview = h('div', { class: 'league-preview' });
    const showPreview = () => { preview.textContent = `You'll show as: ${leagueName(pickState)} ${flag(pickState.country)}`; };

    const nameBtn = h('button', { class: 'read-option', disabled: !nameFine, onclick: () => choose(false) },
      h('span', { class: 'read-emoji', 'aria-hidden': 'true' }, '🧒'),
      h('span', {}, h('span', { class: 'read-title' }, `My name: ${firstName()}`),
        h('span', { class: 'read-text' }, nameFine ? 'Just your first name.' : 'This name can\'t be used here – pick a nickname instead.')));
    const nickTitle = h('span', { class: 'read-title' });
    const nickBtn = h('button', { class: 'read-option', onclick: () => choose(true) },
      h('span', { class: 'read-emoji', 'aria-hidden': 'true' }, '🎭'),
      h('span', {}, nickTitle, h('span', { class: 'read-text' }, 'Stay secret! Tap 🎲 for a different one.')));
    const reroll = h('button', { class: 'btn small', onclick: () => { pickState.nick = randomNick(); choose(true); sfx.tap(); } }, '🎲 New nickname');
    function choose(useNick) {
      pickState.useNick = useNick;
      nickTitle.textContent = `A nickname: ${pickState.nick}`;
      nameBtn.classList.toggle('on', !useNick);
      nickBtn.classList.toggle('on', useNick);
      showPreview();
    }

    const country = h('select', { class: 'league-select', 'aria-label': 'Country',
      onchange: e => { pickState.country = e.target.value; showPreview(); } },
      h('option', { value: '' }, '🌍 Prefer not to say'),
      COUNTRIES.slice().sort((a, b) => a[1].localeCompare(b[1])).map(([cc, n]) => h('option', { value: cc }, `${flag(cc)} ${n}`)));
    country.value = pickState.country;

    const grownUp = h('input', { type: 'checkbox', checked: !!current });
    const join = h('button', { class: 'btn big primary', disabled: !current, onclick: () => {
      const lg = Object.assign(current || fresh, pickState);
      join.disabled = true;
      submitScore(lg).then(() => {
        state.league = lg;
        saveState();
        sfx.win();
        toast(current ? '✅ Saved!' : `🏆 Welcome to the league, ${leagueName(lg)}!`);
        renderLeague();
      }).catch(e => {
        join.disabled = false;
        toast(e.message === 'name' ? '⚠️ That name isn\'t allowed. Try a nickname!' : '📡 Couldn\'t reach the league. Are you online?');
      });
    } }, current ? 'Save' : 'Join the league!');
    grownUp.addEventListener('change', () => { join.disabled = !grownUp.checked; });

    choose(pickState.useNick);
    show(h('section', { class: 'screen league' },
      h('div', { class: 'lesson-top' },
        h('button', { class: 'icon-btn', 'aria-label': 'Back', onclick: () => current ? renderLeague() : renderPath() }, '←'),
        h('h2', {}, current ? '✏️ How you appear' : '🏆 Weekly League')
      ),
      current ? null : dogSays(`Race other Bulgarian learners! Earn XP this week and climb the board. Everyone starts again on Monday.`, 'happy', 84),
      h('h3', { class: 'league-q' }, 'How should others see you?'),
      nameBtn, nickBtn, reroll,
      h('h3', { class: 'league-q' }, 'Where are you playing from?'),
      country,
      preview,
      current ? null : h('div', { class: 'panel league-safe' },
        h('h3', {}, '👩 For grown-ups'),
        h('ul', {},
          h('li', {}, 'Other players only see a first name or nickname, a flag and this week\'s XP.'),
          h('li', {}, 'No messages, chat or contact of any kind. No email or account needed.'),
          h('li', {}, 'Rude names are blocked, and anyone can be removed from the board.'),
          h('li', {}, 'You can leave at any time, which deletes the name and score.'))),
      current ? null : h('label', { class: 'switch league-ok' }, grownUp, ' A grown-up says it\'s OK for me to join'),
      join
    ));
  }

  // ================= Settings =================
  function renderSettings() {
    findVoice();
    const nameInput = h('input', { class: 'name-input', maxlength: 16, value: state.dogName || '' });
    const playerInput = h('input', { class: 'name-input', maxlength: 16, value: playerName(), 'aria-label': 'Your name' });
    const fileInput = h('input', { type: 'file', accept: 'application/json', class: 'hidden' });

    fileInput.addEventListener('change', () => {
      const f = fileInput.files[0];
      if (!f) return;
      f.text().then(txt => {
        const s = JSON.parse(txt);
        if (!s || typeof s.version !== 'number' || s.version > SAVE_VERSION) throw new Error('bad file');
        state = upgradeSave(s);
        saveState();
        toast('✅ Progress restored!');
        renderSettings();
      }).catch(() => toast("⚠️ That file didn't work"));
    });

    const exportProgress = () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = h('a', { href: URL.createObjectURL(blob), download: `${playerName().toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-')}-bulgarian-progress-${today()}.json` });
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
        h('h3', {}, '🧒 Your name'),
        playerInput,
        h('button', { class: 'btn', onclick: () => { const n = playerInput.value.trim(); if (n) { state.playerName = n; saveState(); toast(`Hi, ${n}! 👋`); } } }, 'Save name')
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
        ABC ? h('label', { class: 'switch' },
          h('input', { type: 'checkbox', checked: abcOn(), onchange: e => { state.learnLetters = e.target.checked; saveState(); } }),
          ' ✏️ Show the alphabet unit (Unit 0)') : null,
        h('p', {}, Recognizer
          ? '🎤 Speaking: this device can listen and check what you say (if it understands Bulgarian; otherwise it records you to compare).'
          : '🎤 Speaking: this browser can\'t check speech, so you record yourself and compare with the dog.'),
        voiceInfo,
        h('button', { class: 'btn', onclick: () => speak('Здравей! Как си?') }, '▶️ Test the voice')
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
