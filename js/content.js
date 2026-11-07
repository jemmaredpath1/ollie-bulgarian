// ============================================================
//  LESSON CONTENT — edit this file to add or change words.
//  See README.md ("Adding words") for a step-by-step guide.
//
//  Each word:
//    bg    – the Bulgarian word
//    en    – the English meaning
//    pic   – an emoji picture
//    say   – how to say it (CAPITALS = the stressed part)
//    hint  – (optional) a memory trick
//    audio – (optional) a recording, e.g. "audio/kuche.mp3".
//            Without one, the device's Bulgarian voice is used.
//
//    note  – (optional) something a Bulgarian speaker should double-check
//    picQuiz – set to false for words a picture can't really show
//            (please, why…): they skip 'Tap the right picture' questions
//
//  Units belong to a section and have: description, objectives
//  ("By the end, you can…"), vocab and grammar targets, and lessons.
//  A lesson with status: "planned" is an outline only – it can't be
//  played and never counts towards progress. Remove the status (and
//  add words/sentences) to make it playable.
//
//  ⚠️ All content is checked by a Bulgarian speaker before release.
// ============================================================

window.CONTENT = {
  words: {
    // ---- The alphabet (optional Unit 0). tts = what the computer voice says (the letter's name).
    abc_a: { bg: "А а", en: "a (as in car)", pic: "🦈", say: "a", tts: "а", hint: "А for акула – shark!", picQuiz: false, letter: true },
    abc_b: { bg: "Б б", en: "b", pic: "🎈", say: "buh", tts: "бъ", hint: "Б for балон – balloon!", picQuiz: false, letter: true },
    abc_v: { bg: "В в", en: "v", pic: "🚂", say: "vuh", tts: "въ", hint: "Looks like an English B, but it's a V! В for влак – train.", picQuiz: false, letter: true },
    abc_g: { bg: "Г г", en: "g (as in go)", pic: "🍄", say: "guh", tts: "гъ", hint: "Г for гъба – mushroom!", picQuiz: false, letter: true },
    abc_d: { bg: "Д д", en: "d", pic: "🦖", say: "duh", tts: "дъ", hint: "Д for динозавър – dinosaur!", picQuiz: false, letter: true },
    abc_e: { bg: "Е е", en: "e (as in pet)", pic: "🦔", say: "e", tts: "е", hint: "Е for еж – hedgehog!", picQuiz: false, letter: true },
    abc_zh: { bg: "Ж ж", en: "zh (as in treasure)", pic: "🐸", say: "zhuh", tts: "жъ", hint: "Ж looks like a bug with lots of legs. Ж for жаба – frog!", picQuiz: false, letter: true },
    abc_z: { bg: "З з", en: "z", pic: "🦓", say: "zuh", tts: "зъ", hint: "Looks like a 3! З for зебра – zebra.", picQuiz: false, letter: true },
    abc_i: { bg: "И и", en: "ee (as in see)", pic: "🎮", say: "ee", tts: "и", hint: "Looks like a back-to-front N. И for игра – game!", picQuiz: false, letter: true },
    abc_y: { bg: "Й й", en: "y (as in yes)", pic: "🪀", say: "ee KRAT-ko", tts: "и кратко", hint: "И with a little hat! Й for йо-йо – yo-yo.", picQuiz: false, letter: true },
    abc_k: { bg: "К к", en: "k", pic: "🌵", say: "kuh", tts: "къ", hint: "К for кактус – cactus!", picQuiz: false, letter: true },
    abc_l: { bg: "Л л", en: "l", pic: "🍋", say: "luh", tts: "лъ", hint: "Л for лимон – lemon!", picQuiz: false, letter: true },
    abc_m: { bg: "М м", en: "m", pic: "🐜", say: "muh", tts: "мъ", hint: "М for мравка – ant!", picQuiz: false, letter: true },
    abc_n: { bg: "Н н", en: "n", pic: "👃", say: "nuh", tts: "нъ", hint: "Looks like an H, but it's an N! Н for нос – nose.", picQuiz: false, letter: true },
    abc_o: { bg: "О о", en: "o (as in hot)", pic: "🐙", say: "o", tts: "о", hint: "О for октопод – octopus!", picQuiz: false, letter: true },
    abc_p: { bg: "П п", en: "p", pic: "🐧", say: "puh", tts: "пъ", hint: "П looks like a goalpost! П for пингвин – penguin.", picQuiz: false, letter: true },
    abc_r: { bg: "Р р", en: "r (rolled)", pic: "🚀", say: "ruh", tts: "ръ", hint: "Looks like a P, but it's an R! Р for ракета – rocket.", picQuiz: false, letter: true },
    abc_s: { bg: "С с", en: "s", pic: "🦉", say: "suh", tts: "съ", hint: "Looks like a C, but it's an S! С for сова – owl.", picQuiz: false, letter: true },
    abc_t: { bg: "Т т", en: "t", pic: "🐯", say: "tuh", tts: "тъ", hint: "Т for тигър – tiger!", picQuiz: false, letter: true },
    abc_u: { bg: "У у", en: "oo (as in moon)", pic: "👂", say: "oo", tts: "у", hint: "Looks like a Y, but it's OO! У for ухо – ear.", picQuiz: false, letter: true },
    abc_f: { bg: "Ф ф", en: "f", pic: "🦩", say: "fuh", tts: "фъ", hint: "Ф for фламинго – flamingo!", picQuiz: false, letter: true },
    abc_h: { bg: "Х х", en: "h (as in loch)", pic: "🚁", say: "huh", tts: "хъ", hint: "Looks like an X, but it's an H! Х for хеликоптер – helicopter.", picQuiz: false, letter: true },
    abc_ts: { bg: "Ц ц", en: "ts (as in cats)", pic: "🌸", say: "tsuh", tts: "цъ", hint: "Ц for цвете – flower!", picQuiz: false, letter: true },
    abc_ch: { bg: "Ч ч", en: "ch (as in chip)", pic: "☂️", say: "chuh", tts: "чъ", hint: "Ч looks like a 4! Ч for чадър – umbrella.", picQuiz: false, letter: true },
    abc_sh: { bg: "Ш ш", en: "sh (as in ship)", pic: "🍫", say: "shuh", tts: "шъ", hint: "Ш looks like a garden fork. Ш for шоколад – chocolate!", picQuiz: false, letter: true },
    abc_sht: { bg: "Щ щ", en: "sht (as in ashtray)", pic: "😁", say: "shtuh", tts: "щъ", hint: "Ш with a little tail! Щ for щастлив – happy.", picQuiz: false, letter: true },
    abc_uh: { bg: "Ъ ъ", en: "uh (as in sofa)", pic: "🧩", say: "uh", tts: "ъ", hint: "Ъ is in пъзел – puzzle!", picQuiz: false, letter: true },
    abc_soft: { bg: "Ь ь", en: "soft sign (ьо = yo)", pic: "🎭", say: "er MA-luk", tts: "ер малък", hint: "Ь never starts a word. It makes О say YO: актьор – actor.", picQuiz: false, letter: true },
    abc_yu: { bg: "Ю ю", en: "yu (as in you)", pic: "✊", say: "yu", tts: "ю", hint: "Ю for юмрук – fist!", picQuiz: false, letter: true },
    abc_ya: { bg: "Я я", en: "ya (as in yard)", pic: "🍓", say: "ya", tts: "я", hint: "Looks like a back-to-front R. Я for ягода – strawberry!", picQuiz: false, letter: true },
    // ---------- Unit 1: Hello! ----------
    hello:      { bg: "здравей", en: "hello", pic: "😃👋", say: "zdra-VEY", hint: "Shout it like a cheer: hoo-RAY, zdra-VEY!" },
    bye:        { bg: "чао", en: "bye", pic: "👋🚪", say: "CHA-o", hint: "Just like 'ciao' in Italian!" },
    morning:    { bg: "добро утро", en: "good morning", pic: "🌅", say: "dob-RO OO-tro" },
    night:      { bg: "лека нощ", en: "good night", pic: "🌙", say: "LE-ka nosht", hint: "'Nosht' sounds like 'not' – it's NOT daytime!" },
    thanks:     { bg: "благодаря", en: "thank you", pic: "🙏", say: "bla-go-dar-YA", hint: "Blah… go… dare ya… THANKS!", picQuiz: false },
    please:     { bg: "моля", en: "please", pic: "🥺", say: "MO-lya", hint: "Imagine a little mole saying 'MO-lya, please!'", picQuiz: false },
    yes:        { bg: "да", en: "yes", pic: "👍", say: "da", audio: "audio/yes.m4a", hint: "'Da' sounds like 'yeah'. Bulgarians SHAKE their head for yes!" },
    no:         { bg: "не", en: "no", pic: "👎", say: "ne", hint: "'Ne' sounds like 'nay'. Bulgarians NOD their head for no!" },
    iam:        { bg: "аз съм", en: "I am", pic: "🪪", say: "az suhm", picQuiz: false },
    howareyou:  { bg: "как си", en: "how are you", pic: "🙂❓", say: "kak see", picQuiz: false },
    fine:       { bg: "добре", en: "fine / good", pic: "😊", say: "dob-RE" },

    // ---------- Unit 2: My Dog ----------
    dog:        { bg: "куче", en: "dog", pic: "🐕", say: "KOO-che", hint: "A cuddly coochie-coo dog: KOO-che!" },
    puppy:      { bg: "кученце", en: "puppy", pic: "🐶🍼", say: "KOO-chen-tse", hint: "A little куче = кученце." },
    paw:        { bg: "лапа", en: "paw", pic: "🐾", say: "LA-pa", hint: "The dog puts its LA-pa on your lap!" },
    tail:       { bg: "опашка", en: "tail", pic: "〰️", say: "o-PASH-ka", hint: "A wagging tail goes pash-pash-pash!", picQuiz: false },
    bone:       { bg: "кокал", en: "bone", pic: "🦴", say: "KO-kal", hint: "A hungry dog CALLS for a KO-kal." },
    ball:       { bg: "топка", en: "ball", pic: "🎾", say: "TOP-ka", hint: "Throw the TOP-ka over the TOP of the fence!" },
    barks:      { bg: "лае", en: "barks", pic: "🐕💬", say: "LA-e" },
    runs:       { bg: "бяга", en: "runs", pic: "🏃‍♂️💨", say: "ByA-ga", hint: "The dog runs off: BYE-ga!", audio: "audio/runs.m4a" },
    big:        { bg: "голям", en: "big", pic: "🐘", say: "go-LyAM" },
    small:      { bg: "малък", en: "small", pic: "🐭", say: "MA-luhk" },
    walk:       { bg: "разходка", en: "walk", pic: "🌳🚶", say: "raz-HOD-ka" },

    // ---------- Unit 3: Numbers ----------
    one:        { bg: "едно", en: "one", pic: "1️⃣", say: "ed-NO" },
    two:        { bg: "две", en: "two", pic: "2️⃣", say: "dve" },
    three:      { bg: "три", en: "three", pic: "3️⃣", say: "tree", hint: "Sounds like 'tree' – three trees!" },
    four:       { bg: "четири", en: "four", pic: "4️⃣", say: "CHE-ti-ri" },
    five:       { bg: "пет", en: "five", pic: "5️⃣", say: "pet", hint: "Five pets: пет!" },
    six:        { bg: "шест", en: "six", pic: "6️⃣", say: "shest", hint: "Sounds a bit like 'six' with a SH." },
    seven:      { bg: "седем", en: "seven", pic: "7️⃣", say: "SE-dem", hint: "SE-dem → SE-ven. Both start with 'se'!" },
    eight:      { bg: "осем", en: "eight", pic: "8️⃣", say: "O-sem", hint: "Eight is O-sem… awesome!" },
    nine:       { bg: "девет", en: "nine", pic: "9️⃣", say: "DE-vet" },
    ten:        { bg: "десет", en: "ten", pic: "🔟", say: "DE-set", hint: "Ten in a SET: DE-set." },
    zero:       { bg: "нула", en: "zero", pic: "0️⃣", say: "NOO-la", hint: "Zero = NOO-la = NULL = nothing!" },

    // ---------- Unit 4: Football ----------
    football:   { bg: "футбол", en: "football", pic: "⚽", say: "FUT-bol", hint: "Nearly the same as 'football'!" },
    goal:       { bg: "гол", en: "goal", pic: "🥅", say: "gol", hint: "Easy – it's just 'goal'!" },
    team:       { bg: "отбор", en: "team", pic: "👥", say: "ot-BOR" },
    keeper:     { bg: "вратар", en: "goalkeeper", pic: "🧤", say: "vra-TAR", hint: "врата means 'door' – the keeper guards the door!" },
    match:      { bg: "мач", en: "match", pic: "🏟️", say: "mach", hint: "Just like 'match'!" },
    player:     { bg: "играч", en: "player", pic: "🏃⚽", say: "ig-RACH" },
    kick:       { bg: "ритам", en: "I kick", pic: "🦵", say: "REE-tam" },
    win:        { bg: "печеля", en: "I win", pic: "🏆", say: "pe-CHE-lya" },
    referee:    { bg: "съдия", en: "referee", pic: "🟨", say: "suh-DEE-ya" },
    fan:        { bg: "фен", en: "fan", pic: "📣", say: "fen", hint: "Just like 'fan'!" },

    // ---------- Unit 5: My Family ----------
    mum:        { bg: "мама", en: "mum", pic: "👩", say: "MA-ma", hint: "Almost the same as 'mama'!" },
    dad:        { bg: "татко", en: "dad", pic: "👨", say: "TAT-ko" },
    brother:    { bg: "брат", en: "brother", pic: "👬", say: "brat", hint: "'Brother' with the end chopped off: brat!" },
    sister:     { bg: "сестра", en: "sister", pic: "👭", say: "ses-TRA", hint: "Sounds a bit like 'sister'." },
    family:     { bg: "семейство", en: "family", pic: "👨‍👩‍👦", say: "se-MEY-stvo" },
    grandma:    { bg: "баба", en: "grandma", pic: "👵", say: "BA-ba", hint: "Lots of languages call grandma 'baba'!" },
    grandpa:    { bg: "дядо", en: "grandpa", pic: "👴", say: "DyA-do", hint: "Дядо Коледа (Grandpa Christmas) is Father Christmas!" },
    baby:       { bg: "бебе", en: "baby", pic: "👶", say: "BE-be", hint: "BE-be sounds like 'baby'!" },
    friend:     { bg: "приятел", en: "friend", pic: "🤝", say: "pri-YA-tel" },
    love:       { bg: "обичам", en: "I love", pic: "❤️", say: "o-BI-cham" },

    // ---------- Unit 6: Colours ----------
    red:        { bg: "червен", en: "red", pic: "🔴", say: "cher-VEN", hint: "cher-VEN – a red CHERry!" },
    blue:       { bg: "син", en: "blue", pic: "🔵", say: "sin", hint: "The blue sea can be SEEN from far away: син!" },
    green:      { bg: "зелен", en: "green", pic: "🟢", say: "ze-LEN", audio: "audio/green.m4a" },
    yellow:     { bg: "жълт", en: "yellow", pic: "🟡", say: "zhuhlt" },
    white:      { bg: "бял", en: "white", pic: "⚪", say: "byal" },
    black:      { bg: "черен", en: "black", pic: "⚫", say: "CHE-ren" },
    orange:     { bg: "оранжев", en: "orange", pic: "🟠", say: "o-RAN-zhev", hint: "Sounds like 'orange'!" },
    purple:     { bg: "лилав", en: "purple", pic: "🟣", say: "li-LAV", hint: "Like purple LILAC flowers!" },
    pink:       { bg: "розов", en: "pink", pic: "🩷", say: "RO-zov", hint: "Like a ROSE – roses are pink!" },
    brown:      { bg: "кафяв", en: "brown", pic: "🟤", say: "ka-FyAV", hint: "Brown like CAFÉ coffee: ka-FYAV!" },

    // ---------- Unit 7: Swimming ----------
    swim:       { bg: "плувам", en: "I swim", pic: "🏊", say: "PLOO-vam" },
    pool:       { bg: "басейн", en: "pool", pic: "💦", say: "ba-SEYN", hint: "Sounds like 'basin' – a giant basin of water!", picQuiz: false },
    water:      { bg: "вода", en: "water", pic: "💧", say: "vo-DA", hint: "Sounds like 'water' with a V: vo-DA!" },
    fast:       { bg: "бързо", en: "fast", pic: "🏎️", say: "BUHR-zo" },
    slow:       { bg: "бавно", en: "slowly", pic: "🐌", say: "BAV-no" },
    sea:        { bg: "море", en: "sea", pic: "🌊", say: "mo-RE", hint: "Like 'marine' – things in the sea!" },
    goggles:    { bg: "очила", en: "goggles / glasses", pic: "🥽", say: "o-chi-LA", hint: "очи means 'eyes' – очила go on your eyes!" },
    jump:       { bg: "скачам", en: "I jump", pic: "🦘", say: "SKA-cham" },
    fish:       { bg: "риба", en: "fish", pic: "🐟", say: "REE-ba", hint: "A fish swims in the REE-ver!" },
    beach:      { bg: "плаж", en: "beach", pic: "🏖️", say: "plazh", hint: "Like 'plage', the French word for beach." },

    // ---------- Unit 8: Build & Mine ----------
    house:      { bg: "къща", en: "house", pic: "🏠", say: "KUHSH-ta" },
    stone:      { bg: "камък", en: "stone", pic: "🪨", say: "KA-muhk" },
    tree:       { bg: "дърво", en: "tree / wood", pic: "🌳", say: "duhr-VO" },
    sword:      { bg: "меч", en: "sword", pic: "⚔️", say: "mech" },
    pickaxe:    { bg: "кирка", en: "pickaxe", pic: "⛏️", say: "KEER-ka" },
    build:      { bg: "строя", en: "I build", pic: "🧱", say: "stro-YA", hint: "Like 'construct' – stro-YA!" },
    dig:        { bg: "копая", en: "I dig", pic: "🕳️", say: "ko-PA-ya" },
    diamond:    { bg: "диамант", en: "diamond", pic: "💎", say: "di-a-MANT", hint: "Just like 'diamond'!" },
    zombie:     { bg: "зомби", en: "zombie", pic: "🧟", say: "ZOM-bee", hint: "Same as 'zombie'!" },
    cave:       { bg: "пещера", en: "cave", pic: "🦇", say: "pe-SHTE-ra", picQuiz: false },

    // ---------- Unit 9: Animals ----------
    cat:        { bg: "котка", en: "cat", pic: "🐈", say: "KOT-ka", hint: "KOT-ka sounds a bit like 'cat'!" },
    horse:      { bg: "кон", en: "horse", pic: "🐴", say: "kon" },
    cow:        { bg: "крава", en: "cow", pic: "🐄", say: "KRA-va" },
    pig:        { bg: "прасе", en: "pig", pic: "🐷", say: "pra-SE" },
    rabbit:     { bg: "заек", en: "rabbit", pic: "🐰", say: "ZA-ek" },
    bear:       { bg: "мечка", en: "bear", pic: "🐻", say: "MECH-ka", hint: "Мечо is the Bulgarian name for a teddy bear!" },
    wolf:       { bg: "вълк", en: "wolf", pic: "🐺", say: "vuhlk", hint: "Sounds like 'wolf' backwards-ish: vuhlk!" },
    bird:       { bg: "птица", en: "bird", pic: "🐦", say: "PTEE-tsa" },
    lion:       { bg: "лъв", en: "lion", pic: "🦁", say: "luhv", hint: "Everyone LOVES a lion: luhv!" },
    monkey:     { bg: "маймуна", en: "monkey", pic: "🐒", say: "may-MOO-na" },

    // ---------- Unit 10: Food & Drink ----------
    bread:      { bg: "хляб", en: "bread", pic: "🍞", say: "hlyab" },
    milk:       { bg: "мляко", en: "milk", pic: "🥛", say: "MLyA-ko", hint: "Sounds a bit like 'milk'!" },
    apple:      { bg: "ябълка", en: "apple", pic: "🍎", say: "YA-buhl-ka", hint: "Sounds a bit like 'apple-ka'!" },
    banana:     { bg: "банан", en: "banana", pic: "🍌", say: "ba-NAN", hint: "A banana with the end bitten off!" },
    cheese:     { bg: "сирене", en: "cheese", pic: "🧀", say: "SI-re-ne", hint: "Bulgarian white cheese – a bit like feta." },
    banitsa:    { bg: "баница", en: "banitsa (cheese pastry)", pic: "🥧", say: "BA-ni-tsa", hint: "A yummy Bulgarian pastry – many Bulgarians eat it for breakfast!" },
    pizza:      { bg: "пица", en: "pizza", pic: "🍕", say: "PEE-tsa", hint: "Just pizza!" },
    icecream:   { bg: "сладолед", en: "ice cream", pic: "🍦", say: "sla-do-LED", hint: "сладък (sweet) + лед (ice) = sweet ice!" },
    want:       { bg: "искам", en: "I want", pic: "🤲", say: "EES-kam", picQuiz: false },
    tasty:      { bg: "вкусно", en: "tasty", pic: "😋", say: "VKOOS-no" },

    // ---------- Unit 11: All about me ----------
    callme:     { bg: "казвам се", en: "my name is", pic: "📛", say: "KAZ-vam se", hint: "Word for word it means 'I call myself'." },
    boy:        { bg: "момче", en: "boy", pic: "🧒", say: "mom-CHE" },
    girl:       { bg: "момиче", en: "girl", pic: "👧", say: "mo-MEE-che", hint: "момче + и = момиче. Boy and girl differ by one letter!" },
    youare:     { bg: "ти си", en: "you are", pic: "👉", say: "tee see", picQuiz: false },
    years:      { bg: "години", en: "years (old)", pic: "🎂", say: "go-DEE-ni" },
    from:       { bg: "от", en: "from", pic: "📍", say: "ot", picQuiz: false },
    england:    { bg: "Англия", en: "England", pic: "💂", say: "AN-gli-ya", note: "Assumes the player lives in England – each language version should swap this." },
    bulgaria:   { bg: "България", en: "Bulgaria", pic: "🇧🇬", say: "buhl-GA-ri-ya" },
    live:       { bg: "живея", en: "I live", pic: "🏡", say: "zhi-VE-ya" },
    speak:      { bg: "говоря", en: "I speak", pic: "🗣️", say: "go-vo-RyA" },

    // ---------- Unit 12: Asking questions ----------
    who:        { bg: "кой", en: "who", pic: "🕵️", say: "koy", picQuiz: false },
    what:       { bg: "какво", en: "what", pic: "❓", say: "kak-VO", picQuiz: false },
    where:      { bg: "къде", en: "where", pic: "🗺️", say: "kuh-DE", picQuiz: false },
    when:       { bg: "кога", en: "when", pic: "⏰", say: "ko-GA", picQuiz: false },
    why:        { bg: "защо", en: "why", pic: "🤷", say: "zash-TO", picQuiz: false },
    howmany:    { bg: "колко", en: "how many / how much", pic: "🧮", say: "KOL-ko", picQuiz: false },
    this:       { bg: "това", en: "this", pic: "👇", say: "to-VA", picQuiz: false },
    know:       { bg: "знам", en: "I know", pic: "💡", say: "znam", picQuiz: false },
    understand: { bg: "разбирам", en: "I understand", pic: "🧠", say: "raz-BEE-ram", picQuiz: false },
    youhave:    { bg: "имаш", en: "you have", pic: "🫴", say: "EE-mash", hint: "имам = I have, имаш = you have.", picQuiz: false },

    // ---------- Unit 13: Everyday things ----------
    bag:        { bg: "чанта", en: "bag", pic: "🎒", say: "CHAN-ta" },
    book:       { bg: "книга", en: "book", pic: "📕", say: "KNEE-ga" },
    pencil:     { bg: "молив", en: "pencil", pic: "✏️", say: "MO-liv" },
    phone:      { bg: "телефон", en: "phone", pic: "📱", say: "te-le-FON", hint: "Just like 'telephone'!" },
    clock:      { bg: "часовник", en: "watch / clock", pic: "⌚", say: "cha-SOV-nik", hint: "час means 'hour' – a часовник shows the hours." },
    chair:      { bg: "стол", en: "chair", pic: "🪑", say: "stol", hint: "Sounds like 'stool' – a stool is a kind of chair!" },
    door:       { bg: "врата", en: "door", pic: "🚪", say: "vra-TA", hint: "Remember вратар, the goalkeeper who guards the врата?" },
    window:     { bg: "прозорец", en: "window", pic: "🪟", say: "pro-ZO-rets" },
    bed:        { bg: "легло", en: "bed", pic: "🛏️", say: "leg-LO", hint: "You lie in your bed: leg-LO – put your LEGs LOw!", audio: "audio/bed.m4a" },
    key:        { bg: "ключ", en: "key", pic: "🔑", say: "klyuch" },

    // ---------- Unit 14: Numbers 11–20 ----------
    n11:        { bg: "единадесет", en: "eleven", pic: "11", say: "e-di-NA-de-set", hint: "един-на-десет = 'one on ten'!" },
    n12:        { bg: "дванадесет", en: "twelve", pic: "12", say: "dva-NA-de-set", hint: "два-на-десет = 'two on ten'." },
    n13:        { bg: "тринадесет", en: "thirteen", pic: "13", say: "tri-NA-de-set" },
    n14:        { bg: "четиринадесет", en: "fourteen", pic: "14", say: "che-ti-ri-NA-de-set" },
    n15:        { bg: "петнадесет", en: "fifteen", pic: "15", say: "pet-NA-de-set" },
    n16:        { bg: "шестнадесет", en: "sixteen", pic: "16", say: "shest-NA-de-set" },
    n17:        { bg: "седемнадесет", en: "seventeen", pic: "17", say: "se-dem-NA-de-set" },
    n18:        { bg: "осемнадесет", en: "eighteen", pic: "18", say: "o-sem-NA-de-set" },
    n19:        { bg: "деветнадесет", en: "nineteen", pic: "19", say: "de-vet-NA-de-set" },
    n20:        { bg: "двадесет", en: "twenty", pic: "20", say: "DVA-de-set", hint: "два-десет = 'two tens'." },

    // ---------- Unit 15: At the café ----------
    juice:      { bg: "сок", en: "juice", pic: "🧃", say: "sok", hint: "Sounds like 'soak' – soak up the juice!" },
    tea:        { bg: "чай", en: "tea", pic: "🍵", say: "chay", hint: "Just like 'chai'!" },
    hotchoc:    { bg: "горещ шоколад", en: "hot chocolate", pic: "☕", say: "go-RESHT sho-ko-LAD", hint: "горещ = hot, шоколад = chocolate." },
    cake:       { bg: "торта", en: "cake", pic: "🍰", say: "TOR-ta", hint: "Like a 'torte' – a fancy cake!" },
    sandwich:   { bg: "сандвич", en: "sandwich", pic: "🥪", say: "SAND-vich", hint: "Just 'sandwich'!" },
    canihave:   { bg: "може ли", en: "can I have…? / may I…?", pic: "🤚", say: "MO-zhe lee", hint: "The polite way to ask: Може ли менюто? – Can I have the menu?", picQuiz: false },
    bill:       { bg: "сметка", en: "bill", pic: "🧾", say: "SMET-ka" },
    menu:       { bg: "меню", en: "menu", pic: "📋", say: "me-NyU", hint: "Just like 'menu'!" },
    waiter:     { bg: "сервитьор", en: "waiter", pic: "🤵", say: "ser-vi-TyOR", hint: "He SERVes you: ser-vi-TYOR!" },
    drink:      { bg: "пия", en: "I drink", pic: "🥤", say: "PEE-ya" },

    // ---------- Unit 16: My home ----------
    room:       { bg: "стая", en: "room", pic: "🧸", say: "STA-ya", hint: "Your стая is where your toys STAY!", picQuiz: false, audio: "audio/room.m4a" },
    kitchen:    { bg: "кухня", en: "kitchen", pic: "🍳", say: "KOOH-nya", hint: "Sounds a bit like 'cook-nya' – where you cook!" },
    bathroom:   { bg: "баня", en: "bathroom", pic: "🛁", say: "BA-nya", hint: "Sounds like 'banya' – a bath!" },
    livingroom: { bg: "хол", en: "living room", pic: "🛋️", say: "hol", hint: "Like a 'hall' where the family sits." },
    garden:     { bg: "градина", en: "garden", pic: "🌻", say: "gra-DEE-na", hint: "Sounds a bit like 'garden-a'!" },
    under:      { bg: "под", en: "under", pic: "⬇️", say: "pod", picQuiz: false, audio: "audio/under.m4a" },
    above:      { bg: "над", en: "above / over", pic: "⬆️", say: "nad", picQuiz: false },
    nextto:     { bg: "до", en: "next to", pic: "↔️", say: "do", picQuiz: false, audio: "audio/nextto.m4a" },
    behind:     { bg: "зад", en: "behind", pic: "🫣", say: "zad", hint: "зад sounds like 'sad' – hiding behind something!", picQuiz: false, audio: "audio/behind.m4a" },
    between:    { bg: "между", en: "between", pic: "⏸️", say: "MEZH-doo", hint: "Like 'middle' – between two things.", picQuiz: false },

    // ---------- Unit 17: Clothes & shopping ----------
    tshirt:     { bg: "тениска", en: "T-shirt", pic: "🎽", say: "TE-nis-ka", hint: "Tennis players wear a тениска!", audio: "audio/tshirt.m4a" },
    shoes:      { bg: "обувки", en: "shoes", pic: "👟", say: "o-BOOV-ki" },
    jacket:     { bg: "яке", en: "jacket", pic: "🧥", say: "YA-ke", hint: "YA-ke sounds like 'jacket' with the end chopped off!" },
    hat:        { bg: "шапка", en: "hat / cap", pic: "🧢", say: "SHAP-ka", hint: "Your шапка gives your head a SHAPE!" },
    trousers:   { bg: "панталон", en: "trousers", pic: "👖", say: "pan-ta-LON", hint: "Like 'pantaloons' – or 'pants'!" },
    ilike:      { bg: "харесва ми", en: "I like it", pic: "😍", say: "ha-RES-va mee" },
    idontlike:  { bg: "не ми харесва", en: "I don't like it", pic: "😖", say: "ne mee ha-RES-va" },
    newword:    { bg: "нов", en: "new", pic: "🆕", say: "nov", hint: "Sounds like 'new' – and like 'novel', something new!" },
    old:        { bg: "стар", en: "old", pic: "🏚️", say: "star", hint: "Stars are very, very OLD!" },
    size:       { bg: "размер", en: "size", pic: "📏", say: "raz-MER" },

    // ---------- Unit 18: Numbers & money ----------
    n30:        { bg: "тридесет", en: "thirty", pic: "30", say: "TREE-de-set", hint: "три + десет = three tens." },
    n40:        { bg: "четиридесет", en: "forty", pic: "40", say: "che-TEE-ri-de-set", note: "Check the stress." },
    n50:        { bg: "петдесет", en: "fifty", pic: "50", say: "pet-de-SET", hint: "пет + десет = five tens." },
    n60:        { bg: "шестдесет", en: "sixty", pic: "60", say: "shest-de-SET" },
    n100:       { bg: "сто", en: "a hundred", pic: "100", say: "sto", hint: "100 cents in a euro – сто!" },
    euro:       { bg: "евро", en: "euro", pic: "💶", say: "EV-ro", hint: "Just like 'euro'!" },
    cent:       { bg: "цент", en: "cent", pic: "🪙", say: "tsent", hint: "Just like 'cent'!" },
    money:      { bg: "пари", en: "money", pic: "💰", say: "pa-REE", hint: "Save your пари for a trip to Paris!" },
    costs:      { bg: "струва", en: "it costs", pic: "🏷️", say: "STROO-va" },
    expensive:  { bg: "скъпо", en: "expensive", pic: "💸", say: "SKUH-po" },
    cheap:      { bg: "евтино", en: "cheap", pic: "😌", say: "EV-ti-no", picQuiz: false },

    // ---------- Unit 19: Days & time ----------
    monday:     { bg: "понеделник", en: "Monday", pic: "Mon", say: "po-ne-DEL-nik", hint: "It comes after неделя (Sunday): по-неделя-ник!" },
    tuesday:    { bg: "вторник", en: "Tuesday", pic: "Tue", say: "FTOR-nik", hint: "From втори – the second day." },
    wednesday:  { bg: "сряда", en: "Wednesday", pic: "Wed", say: "SRyA-da", hint: "сряда means 'middle' – the middle of the week!" },
    thursday:   { bg: "четвъртък", en: "Thursday", pic: "Thu", say: "chet-VUHR-tuhk", hint: "From четири – the fourth day." },
    friday:     { bg: "петък", en: "Friday", pic: "Fri", say: "PE-tuhk", hint: "From пет – the fifth day." },
    saturday:   { bg: "събота", en: "Saturday", pic: "Sat", say: "SUH-bo-ta", hint: "Sounds a bit like 'Saturday' – S…b…t!" },
    sunday:     { bg: "неделя", en: "Sunday", pic: "Sun", say: "ne-DE-lya", hint: "Think 'no work day' – the day off!" },
    today:      { bg: "днес", en: "today", pic: "📅", say: "dnes", picQuiz: false },
    tomorrow:   { bg: "утре", en: "tomorrow", pic: "🌄", say: "OO-tre", hint: "Like утро (morning) – tomorrow morning!", picQuiz: false },
    yesterday:  { bg: "вчера", en: "yesterday", pic: "⏮️", say: "FCHE-ra", picQuiz: false },
    hour:       { bg: "час", en: "hour / o'clock", pic: "🕐", say: "chas", hint: "Remember часовник (watch)? It shows the час!" },
    half:       { bg: "половина", en: "half", pic: "½", say: "po-lo-VEE-na" },
    week:       { bg: "седмица", en: "week", pic: "🗓️", say: "SED-mi-tsa", hint: "From седем – seven days!" },

    // ---------- Unit 20: My day ----------
    getup:      { bg: "ставам", en: "I get up", pic: "🛏️⬆️", say: "STA-vam", hint: "STAnd up – ставам!" },
    breakfast:  { bg: "закусвам", en: "I have breakfast", pic: "🥣", say: "za-KOOS-vam", hint: "Have a little 'snack' first thing – za-KOOS-vam!" },
    wash:       { bg: "мия се", en: "I wash (myself)", pic: "🧼", say: "MEE-ya se" },
    getdressed: { bg: "обличам се", en: "I get dressed", pic: "👔", say: "ob-LEE-cham se" },
    teeth:      { bg: "мия си зъбите", en: "I brush my teeth", pic: "🪥", say: "MEE-ya si ZUH-bi-te", hint: "Word for word: 'I wash my teeth'." },
    study:      { bg: "уча", en: "I study / I learn", pic: "📚", say: "OO-cha" },
    play:       { bg: "играя", en: "I play", pic: "🎲", say: "ig-RA-ya", hint: "A player is an играч – and he играе!" },
    watch:      { bg: "гледам", en: "I watch", pic: "📺", say: "GLE-dam", hint: "GLE-dam – I GLance at the TV!" },
    dinner:     { bg: "вечерям", en: "I have dinner", pic: "🍝", say: "ve-CHE-ryam", hint: "From вечер (evening) – the evening meal." },
    gotobed:    { bg: "лягам си", en: "I go to bed", pic: "😴", say: "LyA-gam si" },

    // ---------- Unit 21: Likes & hobbies ----------
    draw:       { bg: "рисувам", en: "I draw", pic: "🎨", say: "ri-SOO-vam" },
    read:       { bg: "чета", en: "I read", pic: "📖", say: "che-TA" },
    music:      { bg: "музика", en: "music", pic: "🎵", say: "MOO-zi-ka", hint: "Just like 'music'!" },
    bike:       { bg: "колело", en: "bike", pic: "🚲", say: "ko-le-LO", hint: "колело also means 'wheel' – a bike is all about wheels!" },
    game:       { bg: "игра", en: "game", pic: "🕹️", say: "ig-RA", hint: "играя = I play, игра = a game." },
    dance:      { bg: "танцувам", en: "I dance", pic: "💃", say: "tan-TSOO-vam", hint: "Sounds like 'dance'!" },
    sing:       { bg: "пея", en: "I sing", pic: "🎤", say: "PE-ya" },
    hobby:      { bg: "хоби", en: "hobby", pic: "🎯", say: "HO-bi", hint: "Same as 'hobby'!", picQuiz: false, audio: "audio/hobby.m4a" },
    fun:        { bg: "забавно", en: "fun", pic: "🤪", say: "za-BAV-no" },
    boring:     { bg: "скучно", en: "boring", pic: "🥱", say: "SKOOCH-no" },

    // ---------- Unit 22: Jobs ----------
    teacher:    { bg: "учител", en: "teacher", pic: "🧑‍🏫", say: "oo-CHEE-tel", hint: "From уча (I learn) – the person who helps you learn!" },
    doctor:     { bg: "лекар", en: "doctor", pic: "🩺", say: "LE-kar" },
    firefighter:{ bg: "пожарникар", en: "firefighter", pic: "🧑‍🚒", say: "po-zhar-ni-KAR", hint: "From пожар – a big fire!" },
    footballer: { bg: "футболист", en: "footballer", pic: "⚽⭐", say: "fut-bo-LEEST", hint: "футбол + ист = a football person!" },
    chef:       { bg: "готвач", en: "cook / chef", pic: "🧑‍🍳", say: "got-VACH", hint: "From готвя – I cook." },
    police:     { bg: "полицай", en: "police officer", pic: "👮", say: "po-li-TSAY", hint: "Sounds like 'police'!" },
    vet:        { bg: "ветеринар", en: "vet", pic: "🐕‍🦺", say: "ve-te-ri-NAR", hint: "Like 'veterinary' – a vet!" },
    pilot:      { bg: "пилот", en: "pilot", pic: "🧑‍✈️", say: "pi-LOT", hint: "Same as 'pilot'!" },
    work:       { bg: "работя", en: "I work", pic: "💼", say: "ra-BO-tya", hint: "Sounds a bit like 'robot' – robots work hard!" },
    become:     { bg: "стана", en: "(to) become", pic: "🦋", say: "STA-na", hint: "Used after да: искам да стана… – I want to become…", picQuiz: false },

    // ---------- Unit 23: Around town ----------
    shop:       { bg: "магазин", en: "shop", pic: "🏪", say: "ma-ga-ZEEN", hint: "Looks like 'magazine' – but it's a shop!" },
    park:       { bg: "парк", en: "park", pic: "🏞️", say: "park", hint: "Same as 'park'!" },
    hospital:   { bg: "болница", en: "hospital", pic: "🏥", say: "BOL-ni-tsa", hint: "From болен (ill) – where ill people go." },
    station:    { bg: "гара", en: "station", pic: "🚉", say: "GA-ra", hint: "Sounds like 'garage' – where trains park!" },
    library:    { bg: "библиотека", en: "library", pic: "🏛️", say: "bib-li-o-TE-ka", hint: "Like 'bibliography' – a place full of books." },
    going:      { bg: "отивам", en: "I'm going", pic: "🚶➡️", say: "o-TEE-vam" },
    school:     { bg: "училище", en: "school", pic: "🏫", say: "oo-CHEE-li-shte", hint: "From уча – the place where you learn!" },
    cinema:     { bg: "кино", en: "cinema", pic: "🎬", say: "KEE-no", hint: "Like 'cinema' – кино!" },
    thereis:    { bg: "има", en: "there is / there are", pic: "✅", say: "EE-ma", hint: "The same word as 'he / she has'!", picQuiz: false },
    thereisnt:  { bg: "няма", en: "there isn't / there aren't", pic: "🚫", say: "NyA-ma", hint: "не + има = няма.", picQuiz: false },

    // ---------- Unit 24: Directions ----------
    left:       { bg: "наляво", en: "(to the) left", pic: "⬅️", say: "na-LyA-vo", hint: "ляв means 'left'." },
    right:      { bg: "надясно", en: "(to the) right", pic: "➡️", say: "na-DyAS-no", hint: "десен means 'right'." },
    straight:   { bg: "направо", en: "straight on", pic: "🔼", say: "na-PRA-vo", hint: "прав means 'straight'." },
    corner:     { bg: "ъгъл", en: "corner", pic: "📐", say: "UH-guhl", hint: "Sounds like 'angle' – a corner is an angle!", picQuiz: false },
    street:     { bg: "улица", en: "street", pic: "🛣️", say: "OO-li-tsa" },
    excuseme:   { bg: "извинете", en: "excuse me", pic: "🙇", say: "iz-vi-NE-te", hint: "The polite way to stop someone and ask.", picQuiz: false },
    turn:       { bg: "завий", en: "turn!", pic: "↩️", say: "za-VEEY" },
    gocmd:      { bg: "върви", en: "walk! / go!", pic: "👣", say: "vuhr-VEE" },
    stop:       { bg: "спри", en: "stop!", pic: "🛑", say: "spree", hint: "Stop your shopping SPREE!" },
    opposite:   { bg: "срещу", en: "opposite", pic: "🪞", say: "sresh-TOO", picQuiz: false },

    // ---------- Unit 25: Getting about ----------
    bus:        { bg: "автобус", en: "bus", pic: "🚌", say: "av-to-BOOS", hint: "Like 'autobus' – a bus!" },
    train:      { bg: "влак", en: "train", pic: "🚆", say: "vlak" },
    metro:      { bg: "метро", en: "underground / metro", pic: "🚇", say: "met-RO", hint: "Like 'metro'!" },
    taxi:       { bg: "такси", en: "taxi", pic: "🚕", say: "tak-SEE", hint: "Same as 'taxi'!" },
    tram:       { bg: "трамвай", en: "tram", pic: "🚋", say: "tram-VAY", hint: "Like 'tramway' – a tram!" },
    busstop:    { bg: "спирка", en: "stop (bus / tram)", pic: "🚏", say: "SPEER-ka", hint: "From спри (stop!) – the bus stops here!" },
    onfoot:     { bg: "пеша", en: "on foot", pic: "🥾", say: "pe-SHA", hint: "Like 'pedestrian' – someone on foot." },
    car:        { bg: "кола", en: "car", pic: "🚗", say: "ko-LA", hint: "Not the drink – a car!" },
    drive:      { bg: "карам", en: "I drive / I ride", pic: "🚙💨", say: "KA-ram", hint: "Think 'car' – карам!" },
    wait:       { bg: "чакам", en: "I wait", pic: "⏳", say: "CHA-kam", hint: "CHAt while you wait – CHA-kam!" },

    // ---------- Unit 26: Travel & tickets ----------
    suitcase:   { bg: "куфар", en: "suitcase", pic: "🧳", say: "KOO-far" },
    passport:   { bg: "паспорт", en: "passport", pic: "🛂", say: "PAS-port", hint: "Same as 'passport'!" },
    holiday:    { bg: "ваканция", en: "holiday", pic: "🏝️", say: "va-KAN-tsi-ya", hint: "Like 'vacation'!" },
    photo:      { bg: "снимка", en: "photo", pic: "📷", say: "SNEEM-ka" },
    sunglasses: { bg: "слънчеви очила", en: "sunglasses", pic: "😎", say: "SLUHN-che-vi o-chi-LA", hint: "слънце (sun) + очила (glasses)!" },
    ticket:     { bg: "билет", en: "ticket", pic: "🎫", say: "bi-LET" },
    plane:      { bg: "самолет", en: "plane", pic: "✈️", say: "sa-mo-LET", hint: "сам (by itself) + лети (flies) – it flies by itself!" },
    airport:    { bg: "летище", en: "airport", pic: "🛫", say: "le-TEE-shte", hint: "From лети (flies) – where planes fly from." },
    travel:     { bg: "пътувам", en: "I travel", pic: "🌍", say: "puh-TOO-vam", hint: "From път – a road or a journey." },
    city:       { bg: "град", en: "town / city", pic: "🌆", say: "grad", hint: "Like Belgrade – the 'white city'!" },

    // ---------- Unit 27: At the hotel ----------
    hotel:      { bg: "хотел", en: "hotel", pic: "🏨", say: "ho-TEL", hint: "Same as 'hotel'!" },
    booking:    { bg: "резервация", en: "booking", pic: "🗒️", say: "re-zer-VA-tsi-ya", hint: "Like 'reservation'!", picQuiz: false },
    reception:  { bg: "рецепция", en: "reception", pic: "🛎️", say: "re-TSEP-tsi-ya", hint: "Like 'reception'!", audio: "audio/reception.m4a" },
    lift:       { bg: "асансьор", en: "lift", pic: "🛗", say: "a-san-SyOR", hint: "Like 'ascend' – it goes up!" },
    floor:      { bg: "етаж", en: "floor (level)", pic: "🏢", say: "e-TAZH", picQuiz: false },
    hotelbreakfast: { bg: "закуска", en: "breakfast", pic: "🥐", say: "za-KOOS-ka", hint: "Remember закусвам (I have breakfast)?" },
    pillow:     { bg: "възглавница", en: "pillow", pic: "☁️", say: "vuhz-GLAV-ni-tsa", hint: "From глава (head) – where you put your head!", picQuiz: false },
    shower:     { bg: "душ", en: "shower", pic: "🚿", say: "doosh" },
    view:       { bg: "гледка", en: "view", pic: "🖼️", say: "GLED-ka", hint: "From гледам (I watch) – something to look at.", picQuiz: false },
    quiet:      { bg: "тихо", en: "quiet", pic: "🤫", say: "TEE-ho", hint: "Shh – тихо!" },

    // ---------- Unit 28: Weather & seasons ----------
    sun:        { bg: "слънце", en: "sun", pic: "☀️", say: "SLUHN-tse", hint: "Remember слънчеви очила (sunglasses)?" },
    rain:       { bg: "дъжд", en: "rain", pic: "🌧️", say: "duhzhd" },
    snow:       { bg: "сняг", en: "snow", pic: "❄️", say: "snyag", hint: "Sounds a bit like 'snow'!" },
    wind:       { bg: "вятър", en: "wind", pic: "🌬️", say: "VyA-tuhr" },
    cloud:      { bg: "облак", en: "cloud", pic: "🌥️", say: "OB-lak" },
    spring:     { bg: "пролет", en: "spring", pic: "🌷", say: "PRO-let" },
    summer:     { bg: "лято", en: "summer", pic: "🍉", say: "LyA-to" },
    autumn:     { bg: "есен", en: "autumn", pic: "🍂", say: "E-sen" },
    winter:     { bg: "зима", en: "winter", pic: "⛄", say: "ZEE-ma" },
    hot:        { bg: "горещо", en: "hot", pic: "🥵", say: "go-RESH-to", hint: "Remember горещ шоколад (hot chocolate)?" },
    cold:       { bg: "студено", en: "cold", pic: "🥶", say: "stoo-DE-no" },

    // ---------- Unit 29: Making plans ----------
    letsgo:     { bg: "хайде", en: "let's / come on", pic: "🙌", say: "HAY-de", hint: "HAY-de – 'Hey, let's go!'", picQuiz: false },
    together:   { bg: "заедно", en: "together", pic: "👫", say: "za-ED-no" },
    free:       { bg: "свободен", en: "free (not busy)", pic: "🕊️", say: "svo-BO-den", picQuiz: false },
    meetup:     { bg: "среща", en: "meeting / meet-up", pic: "🫂", say: "SRESH-ta", picQuiz: false },
    later:      { bg: "после", en: "later / afterwards", pic: "⏭️", say: "POS-le", hint: "Like 'post-' – after!", picQuiz: false },
    ofcourse:   { bg: "разбира се", en: "of course", pic: "👌", say: "raz-BEE-ra se", picQuiz: false },
    maybe:      { bg: "може би", en: "maybe", pic: "❔", say: "MO-zhe bee", hint: "може (can) + би (would) = maybe!", picQuiz: false },
    sorry:      { bg: "съжалявам", en: "sorry", pic: "😔", say: "suh-zha-LyA-vam", hint: "Say it with a sad face: suh-zha-LYA-vam." },
    busy:       { bg: "зает", en: "busy", pic: "🗂️", say: "za-ET", picQuiz: false },
    great:      { bg: "страхотно", en: "great!", pic: "🤩", say: "stra-HOT-no" },

    // ---------- Unit 30: Asking for help ----------
    help:       { bg: "помощ", en: "help", pic: "🛟", say: "PO-mosht" },
    policecar:  { bg: "полиция", en: "the police", pic: "🚓", say: "po-LEE-tsi-ya", hint: "Like 'police'!" },
    problem:    { bg: "проблем", en: "problem", pic: "⚠️", say: "prob-LEM", hint: "Same as 'problem'!" },
    lost:       { bg: "изгубен", en: "lost", pic: "😵‍💫", say: "iz-GOO-ben" },
    careful:    { bg: "внимание", en: "careful! / attention", pic: "🚧", say: "vni-MA-ni-e" },
    ilost:      { bg: "изгубих", en: "I lost", pic: "🫥", say: "iz-GOO-bih", hint: "изгубих = I lost, изгубен = lost.", picQuiz: false },
    ifound:     { bg: "намерих", en: "I found", pic: "🔎", say: "na-ME-rih", hint: "Remember 'Намерих диамант!' from Build & Mine?" },
    helpme:     { bg: "помогнете ми", en: "help me (polite)", pic: "🆘", say: "po-mog-NE-te mee" },
    scared:     { bg: "страх ме е", en: "I'm scared", pic: "😨", say: "STRAH me e", hint: "Word for word: 'fear is me'." },
    call:       { bg: "обаждам се", en: "I call (on the phone)", pic: "☎️", say: "o-BAZH-dam se" },
    // Units 31–35
    head:        { bg: "глава", en: "head", pic: "🙆", say: "gla-VA" },
    hand:        { bg: "ръка", en: "hand / arm", pic: "✋", say: "ruh-KA", hint: "One word for both hand and arm!" },
    leg:         { bg: "крак", en: "leg / foot", pic: "🦶", say: "KRAK", hint: "One word for both leg and foot!" },
    tooth:       { bg: "зъб", en: "tooth", pic: "🦷", say: "ZUB" },
    mouth:       { bg: "уста", en: "mouth", pic: "👄", say: "us-TA" },
    hurts:       { bg: "боли", en: "it hurts", pic: "🤕", say: "bo-LEE", hint: "Боли ме… – it hurts me…", picQuiz: false },
    sick:        { bg: "болен", en: "ill / sick", pic: "🤒", say: "BO-len", hint: "болен (a boy) / болна (a girl)" },
    fever:       { bg: "температура", en: "temperature (fever)", pic: "🌡️", say: "tem-pe-ra-TOO-ra", hint: "Same as 'temperature'!" },
    pharmacy:    { bg: "аптека", en: "pharmacy", pic: "⚕️", say: "ap-TE-ka", hint: "Like 'apothecary', an old word for a chemist!" },
    medicine:    { bg: "лекарство", en: "medicine", pic: "💊", say: "le-KAR-stvo", hint: "Лекар gives you лекарство!" },
    hair:        { bg: "коса", en: "hair", pic: "💇", say: "ko-SA" },
    eyes:        { bg: "очи", en: "eyes", pic: "👀", say: "o-CHEE", hint: "One eye is око, two are очи." },
    beard:       { bg: "брада", en: "beard", pic: "🧔", say: "bra-DA" },
    tall:        { bg: "висок", en: "tall", pic: "🦒", say: "vi-SOK", hint: "висок / висока / високо / високи – it changes to match!" },
    shortp:      { bg: "нисък", en: "short (not tall)", pic: "🤏", say: "NEE-suk", hint: "The opposite of висок.", picQuiz: false },
    long:        { bg: "дълъг", en: "long", pic: "🐍", say: "DUH-lug", hint: "дълъг / дълга / дълго / дълги" },
    shorth:      { bg: "къс", en: "short (not long)", pic: "✂️", say: "KUS", hint: "For hair and things: къса коса – short hair.", picQuiz: false },
    blond:       { bg: "рус", en: "blond", pic: "👱", say: "ROOS", hint: "руса коса – blond hair" },
    moustache:   { bg: "мустаци", en: "moustache", pic: "🥸", say: "mus-TA-tsi", hint: "Like 'moustache'!" },
    strong:      { bg: "силен", en: "strong", pic: "🏋️", say: "SEE-len" },
    happy:       { bg: "щастлив", en: "happy", pic: "😄", say: "shtast-LEEV", hint: "щастлив (a boy) / щастлива (a girl)" },
    sad:         { bg: "тъжен", en: "sad", pic: "😢", say: "TUH-zhen", hint: "тъжен / тъжна" },
    tired:       { bg: "уморен", en: "tired", pic: "😩", say: "u-mo-REN" },
    angry:       { bg: "ядосан", en: "angry", pic: "😠", say: "ya-DO-san" },
    frightened:  { bg: "уплашен", en: "frightened", pic: "😱", say: "up-LA-shen" },
    surprised:   { bg: "изненадан", en: "surprised", pic: "😲", say: "iz-ne-NA-dan" },
    proud:       { bg: "горд", en: "proud", pic: "🦚", say: "GORD", hint: "Proud as a peacock!", picQuiz: false },
    calm:        { bg: "спокоен", en: "calm", pic: "🧘", say: "spo-KO-en" },
    bored:       { bg: "отегчен", en: "bored", pic: "😑", say: "o-teg-CHEN", hint: "Kids often say Скучно ми е – I'm bored." },
    because:     { bg: "защото", en: "because", pic: "🔗", say: "za-SHTO-to", hint: "Защо? = Why? · Защото = because!", picQuiz: false },
    ican:        { bg: "мога", en: "I can", pic: "🦸", say: "MO-ga", hint: "Мога да… – I can…", picQuiz: false },
    icant:       { bg: "не мога", en: "I can't", pic: "🙅", say: "ne MO-ga", picQuiz: false },
    must:        { bg: "трябва", en: "must / have to", pic: "❗", say: "TRyAB-va", hint: "Трябва да… – I must / I have to…", picQuiz: false },
    homework:    { bg: "домашно", en: "homework", pic: "📓", say: "do-MASH-no", hint: "From дом – home. Home-work!" },
    forbidden:   { bg: "забранено", en: "not allowed", pic: "⛔", say: "za-bra-NE-no" },
    iclean:      { bg: "почиствам", en: "I clean / I tidy", pic: "🧹", say: "po-CHEEST-vam" },
    ifeed:       { bg: "храня", en: "I feed", pic: "🍖", say: "HRA-nya", hint: "Храня кучето. – I feed the dog." },
    walkdog:     { bg: "разхождам", en: "I walk (the dog)", pic: "🐕🚶", say: "raz-HOZH-dam", hint: "Разхождам кучето. Remember разходка – a walk?" },
    ihelp:       { bg: "помагам", en: "I help", pic: "🙋", say: "po-MA-gam", hint: "Помощ! means Help!" },
    allowed:     { bg: "разрешено", en: "allowed", pic: "✔️", say: "raz-re-SHE-no", hint: "The opposite of забранено.", picQuiz: false },
    now:         { bg: "сега", en: "now", pic: "⏱️", say: "se-GA", hint: "Сега играя! – I'm playing now!", picQuiz: false },
    ido:         { bg: "правя", en: "I do / I make", pic: "🛠️", say: "PRA-vya", hint: "Какво правиш? – What are you doing?", picQuiz: false },
    listen:      { bg: "слушам", en: "I listen", pic: "🎧", say: "SLOO-sham" },
    iwrite:      { bg: "пиша", en: "I write", pic: "✍️", say: "PEE-sha" },
    cook:        { bg: "готвя", en: "I cook", pic: "👩‍🍳", say: "GOT-vya" },
    think:       { bg: "мисля", en: "I think", pic: "🤔", say: "MEES-lya", hint: "Мисля, че… – I think that…" },
    playmusic:   { bg: "свиря", en: "I play (music)", pic: "🎸", say: "SVEE-rya", hint: "For instruments: свиря на китара. For games and sport: играя!" },
    cry:         { bg: "плача", en: "I cry", pic: "😭", say: "PLA-cha" },
    lookfor:     { bg: "търся", en: "I look for", pic: "🔦", say: "TUR-sya", hint: "Търся топката. – I'm looking for the ball." },
    laugh:       { bg: "смея се", en: "I laugh", pic: "😂", say: "SME-ya se" },
    // Units 36–40
    iwas:        { bg: "бях", en: "I was", pic: "◀️", say: "ByAH", hint: "Past forms often end in -х: бях, играх, спах.", picQuiz: false },
    iplayed:     { bg: "играх", en: "I played", pic: "🎮⏪", say: "ee-GRAH", hint: "играя – I play · играх – I played" },
    iwent:       { bg: "ходих", en: "I went", pic: "🚶⏪", say: "HO-dih", picQuiz: false },
    isaw:        { bg: "видях", en: "I saw", pic: "👁️", say: "vi-DyAH" },
    iate:        { bg: "ядох", en: "I ate", pic: "🍽️", say: "YA-doh" },
    iwatched:    { bg: "гледах", en: "I watched", pic: "🍿", say: "GLE-dah", hint: "гледам – I watch · гледах – I watched" },
    islept:      { bg: "спах", en: "I slept", pic: "💤", say: "SPAH" },
    ibought:     { bg: "купих", en: "I bought", pic: "🛍️", say: "KOO-pih" },
    imade:       { bg: "направих", en: "I did / I made", pic: "🏗️", say: "na-PRA-vih", picQuiz: false },
    lastweek:    { bg: "миналата седмица", en: "last week", pic: "📅⏪", say: "MEE-na-la-ta SED-mi-tsa", picQuiz: false },
    will:        { bg: "ще", en: "will", pic: "🔮", say: "SHTE", hint: "ще + verb: ще играя – I will play", picQuiz: false },
    wont:        { bg: "няма да", en: "won't", pic: "✖️", say: "NyA-ma da", hint: "няма да + verb: няма да ходя – I won't go", picQuiz: false },
    soon:        { bg: "скоро", en: "soon", pic: "⌛", say: "SKO-ro", picQuiz: false },
    nextweek:    { bg: "следващата седмица", en: "next week", pic: "📅⏩", say: "SLED-va-shta-ta SED-mi-tsa", picQuiz: false },
    dayaftertomorrow: { bg: "вдругиден", en: "the day after tomorrow", pic: "📆", say: "VDROO-gi-den", hint: "утре – tomorrow · вдругиден – the day after!", picQuiz: false },
    camp:        { bg: "лагер", en: "camp", pic: "⛺", say: "LA-ger" },
    hope:        { bg: "надявам се", en: "I hope", pic: "🤞", say: "na-DyA-vam se" },
    dream:       { bg: "мечтая", en: "I dream (of)", pic: "💭", say: "mech-TA-ya", hint: "мечта – a dream" },
    trip:        { bg: "екскурзия", en: "school trip / outing", pic: "🚍", say: "eks-KOOR-zi-ya", hint: "Like 'excursion'!" },
    rest:        { bg: "почивам си", en: "I rest / I relax", pic: "⛱️", say: "po-CHEE-vam si" },
    bigger:      { bg: "по-голям", en: "bigger", pic: "🐳", say: "PO go-LyAM", tts: "по голям", hint: "по- means 'more': голям → по-голям", picQuiz: false },
    smaller:     { bg: "по-малък", en: "smaller", pic: "🐣", say: "PO MA-luk", tts: "по малък", picQuiz: false },
    faster:      { bg: "по-бърз", en: "faster", pic: "🐆", say: "PO BURZ", tts: "по бърз", picQuiz: false },
    slower:      { bg: "по-бавен", en: "slower", pic: "🦥", say: "PO BA-ven", tts: "по бавен", picQuiz: false },
    taller:      { bg: "по-висок", en: "taller", pic: "🦕", say: "PO vi-SOK", tts: "по висок", picQuiz: false },
    best:        { bg: "най-добър", en: "the best", pic: "🥇", say: "nay-do-BUR", hint: "най- means 'most': най-добър – the best", picQuiz: false },
    better:      { bg: "по-добър", en: "better", pic: "📈", say: "PO do-BUR", tts: "по добър", picQuiz: false },
    worst:       { bg: "най-лош", en: "the worst", pic: "🗑️", say: "nay-LOSH", picQuiz: false },
    same:        { bg: "същият", en: "the same", pic: "🟰", say: "SUSH-ti-yat", hint: "същият / същата / същото – it changes to match!", picQuiz: false },
    different:   { bg: "различен", en: "different", pic: "🔀", say: "raz-LEE-chen", picQuiz: false },
    prefer:      { bg: "предпочитам", en: "I prefer", pic: "⚖️", say: "pred-po-CHEE-tam", picQuiz: false },
    thatswhy:    { bg: "затова", en: "that's why / so", pic: "↪️", say: "za-to-VA", hint: "затова = so · защото = because", picQuiz: false },
    choose:      { bg: "избирам", en: "I choose", pic: "👈", say: "iz-BEE-ram" },
    decide:      { bg: "решавам", en: "I decide", pic: "🧭", say: "re-SHA-vam", picQuiz: false },
    instead:     { bg: "вместо", en: "instead of", pic: "🔄", say: "VMES-to", picQuiz: false },
    interesting: { bg: "интересно", en: "interesting", pic: "🧐", say: "in-te-RES-no", hint: "Like 'interesting'!" },
    difficult:   { bg: "трудно", en: "difficult", pic: "🧗", say: "TROOD-no" },
    easy:        { bg: "лесно", en: "easy", pic: "🧁", say: "LES-no", hint: "Лесно е! – It's easy (peasy)!" },
    dangerous:   { bg: "опасно", en: "dangerous", pic: "🌋", say: "o-PAS-no" },
    useful:      { bg: "полезно", en: "useful", pic: "🧰", say: "po-LEZ-no", picQuiz: false },
    but:         { bg: "но", en: "but", pic: "🔃", say: "NO", picQuiz: false },
    or:          { bg: "или", en: "or", pic: "🌓", say: "EE-li", hint: "Чай или сок? – Tea or juice?", picQuiz: false },
    whenlink:    { bg: "когато", en: "when (joining ideas)", pic: "🕰️", say: "ko-GA-to", hint: "кога? asks 'when?' · когато joins: Когато вали…", picQuiz: false },
    that:        { bg: "че", en: "that (I think that…)", pic: "💬", say: "CHE", hint: "Мисля, че… – I think that…", picQuiz: false },
    andwhile:    { bg: "а", en: "and / while (a contrast)", pic: "🆚", say: "A", hint: "Аз чета, а брат ми спи. – I read, while my brother sleeps.", picQuiz: false },
    before:      { bg: "преди", en: "before", pic: "🔙", say: "pre-DEE", picQuiz: false },
    after:       { bg: "след", en: "after", pic: "🔜", say: "SLED", picQuiz: false },
    whilst:      { bg: "докато", en: "while (during)", pic: "🤹", say: "DO-ka-to", picQuiz: false },
    first:       { bg: "първо", en: "first", pic: "☝️", say: "PUR-vo", picQuiz: false },
    finally:     { bg: "накрая", en: "at the end / finally", pic: "🏁", say: "na-KRA-ya", picQuiz: false },
    // Units 41–48
    onceupon:    { bg: "имало едно време", en: "once upon a time", pic: "🏰", say: "EE-ma-lo ed-NO VRE-me", hint: "Every Bulgarian fairy tale starts like this!", picQuiz: false },
    suddenly:    { bg: "изведнъж", en: "suddenly", pic: "⚡", say: "iz-ved-NUSH", picQuiz: false },
    once:        { bg: "веднъж", en: "once / one time", pic: "🔂", say: "ved-NUSH", hint: "веднъж – once · два пъти – twice", picQuiz: false },
    afterthat:   { bg: "след това", en: "after that", pic: "🪜", say: "SLED to-VA", picQuiz: false },
    fairytale:   { bg: "приказка", en: "fairy tale", pic: "🧚", say: "PREE-kaz-ka" },
    tell:        { bg: "разказвам", en: "I tell (a story)", pic: "📜", say: "raz-KAZ-vam", hint: "разказвам приказка – I tell a fairy tale" },
    ishouted:    { bg: "извиках", en: "I shouted", pic: "📢", say: "iz-VEE-kah" },
    igotscared:  { bg: "уплаших се", en: "I got scared", pic: "🙀", say: "oo-PLA-shih se" },
    ranaway:     { bg: "избяга", en: "(he / she / it) ran away", pic: "🐕💨", say: "iz-ByA-ga" },
    happened:    { bg: "случи се", en: "(it) happened", pic: "💥", say: "SLOO-chi se", hint: "Какво се случи? – What happened?", picQuiz: false },
    usually:     { bg: "обикновено", en: "usually", pic: "🔁", say: "o-bik-NO-ve-no", picQuiz: false },
    always:      { bg: "винаги", en: "always", pic: "♾️", say: "VEE-na-gi", picQuiz: false },
    sometimes:   { bg: "понякога", en: "sometimes", pic: "🌗", say: "po-NyA-ko-ga", picQuiz: false },
    never:       { bg: "никога", en: "never", pic: "🚷", say: "NEE-ko-ga", hint: "никога не – never: Никога не закъснявам.", picQuiz: false },
    often:       { bg: "често", en: "often", pic: "🔄🔄", say: "CHES-to", picQuiz: false },
    everyday:    { bg: "всеки ден", en: "every day", pic: "🔆", say: "VSE-ki DEN", picQuiz: false },
    iwrote:      { bg: "написах", en: "I wrote (and finished)", pic: "📝✅", say: "na-PEE-sah", hint: "пиша – I write · написах – I wrote it (all done!)", picQuiz: false },
    iateall:     { bg: "изядох", en: "I ate (it all) up", pic: "🍜", say: "iz-YA-doh", hint: "ям – I eat · изядох – I ate it all!" },
    iread:       { bg: "прочетох", en: "I read (to the end)", pic: "📗", say: "pro-CHE-toh", hint: "чета – I read · прочетох – I read it all", picQuiz: false },
    ifinished:   { bg: "свърших", en: "I finished", pic: "🔚", say: "SVUR-shih", hint: "Свърших! – Done!", picQuiz: false },
    maths:       { bg: "математика", en: "maths", pic: "➗", say: "ma-te-MA-ti-ka", hint: "Like 'mathematics'!" },
    english:     { bg: "английски", en: "English", pic: "🇬🇧", say: "an-GLEES-ki", picQuiz: false },
    history:     { bg: "история", en: "history", pic: "🏺", say: "is-TO-ri-ya", hint: "Like 'history'! It also means 'a story'." },
    geography:   { bg: "география", en: "geography", pic: "🌐", say: "ge-o-GRA-fi-ya" },
    breaktime:   { bg: "междучасие", en: "break time", pic: "🔔", say: "mezh-doo-CHA-si-e", hint: "между (between) + час (lesson)" },
    mark:        { bg: "оценка", en: "mark / grade", pic: "🅰️", say: "o-TSEN-ka", picQuiz: false },
    test:        { bg: "контролно", en: "test (at school)", pic: "🖊️", say: "kon-TROL-no", picQuiz: false },
    textbook:    { bg: "учебник", en: "textbook", pic: "📘", say: "oo-CHEB-nik" },
    timetable:   { bg: "програма", en: "timetable", pic: "📑", say: "pro-GRA-ma", picQuiz: false },
    desk:        { bg: "чин", en: "school desk", pic: "🧑‍🎓", say: "CHIN" },
    computer:    { bg: "компютър", en: "computer", pic: "💻", say: "kom-PyOO-tur" },
    message:     { bg: "съобщение", en: "message", pic: "✉️", say: "su-ob-SHTE-ni-e" },
    internet:    { bg: "интернет", en: "internet", pic: "📡", say: "IN-ter-net" },
    password:    { bg: "парола", en: "password", pic: "🔐", say: "pa-RO-la" },
    battery:     { bg: "батерия", en: "battery", pic: "🔋", say: "ba-TE-ri-ya" },
    screen:      { bg: "екран", en: "screen", pic: "🖥️", say: "ek-RAN" },
    charge:      { bg: "зареждам", en: "I charge (a phone)", pic: "🔌", say: "za-REZH-dam" },
    video:       { bg: "видео", en: "video", pic: "📹", say: "VEE-de-o" },
    tablet:      { bg: "таблет", en: "tablet", pic: "📲", say: "tab-LET" },
    download:    { bg: "изтеглям", en: "I download", pic: "⏬", say: "iz-TEG-lyam", picQuiz: false },
    forest:      { bg: "гора", en: "forest", pic: "🌲", say: "go-RA" },
    mountain:    { bg: "планина", en: "mountain(s)", pic: "⛰️", say: "pla-ni-NA" },
    river:       { bg: "река", en: "river", pic: "🛶", say: "re-KA" },
    lake:        { bg: "езеро", en: "lake", pic: "🦢", say: "E-ze-ro" },
    waterfall:   { bg: "водопад", en: "waterfall", pic: "🏞️💧", say: "vo-do-PAD", hint: "вода (water) + пада (falls)!" },
    peak:        { bg: "връх", en: "peak / summit", pic: "🏔️", say: "VRUH" },
    meadow:      { bg: "поляна", en: "meadow", pic: "🌼", say: "po-LyA-na" },
    tent:        { bg: "палатка", en: "tent", pic: "🏕️", say: "pa-LAT-ka" },
    hike:        { bg: "поход", en: "hike", pic: "🧗‍♂️", say: "PO-hod" },
    campfire:    { bg: "огън", en: "fire / campfire", pic: "🔥", say: "O-gun" },
    film:        { bg: "филм", en: "film", pic: "🎥", say: "FILM" },
    song:        { bg: "песен", en: "song", pic: "🎶", say: "PE-sen" },
    concert:     { bg: "концерт", en: "concert", pic: "🎻", say: "kon-TSERT" },
    theatre:     { bg: "театър", en: "theatre", pic: "🎪", say: "te-A-tur" },
    cartoon:     { bg: "анимация", en: "cartoon / animation", pic: "🦄", say: "a-ni-MA-tsi-ya" },
    singer:      { bg: "певец", en: "singer", pic: "👩‍🎤", say: "pe-VETS", hint: "певец – singer (man) · певица – singer (woman)" },
    band:        { bg: "група", en: "band / group", pic: "🥁", say: "GROO-pa" },
    actor:       { bg: "актьор", en: "actor", pic: "🎞️", say: "ak-TyOR" },
    series:      { bg: "сериал", en: "TV series", pic: "📼", say: "se-ri-AL" },
    stage:       { bg: "сцена", en: "stage", pic: "🎙️", say: "STSE-na", hint: "на сцената – on stage" },
    celebration: { bg: "празник", en: "holiday / celebration", pic: "🎊", say: "PRAZ-nik" },
    martenitsa:  { bg: "мартеница", en: "martenitsa (red & white charm)", pic: "🧶", say: "mar-TE-ni-tsa" },
    christmas:   { bg: "Коледа", en: "Christmas", pic: "🎄", say: "KO-le-da" },
    easter:      { bg: "Великден", en: "Easter", pic: "🥚", say: "ve-LEEK-den" },
    newyear:     { bg: "Нова година", en: "New Year", pic: "🎆", say: "NO-va go-DEE-na" },
    present:     { bg: "подарък", en: "present / gift", pic: "🎁", say: "po-DA-ruk" },
    candle:      { bg: "свещ", en: "candle", pic: "🕯️", say: "SVESHT" },
    horo:        { bg: "хоро", en: "horo (circle dance)", pic: "🫶", say: "ho-RO", hint: "We 'play' it: играем хоро!" },
    nameday:     { bg: "имен ден", en: "name day", pic: "💐", say: "EE-men DEN", picQuiz: false },
    wish:        { bg: "пожелавам", en: "I wish (someone something)", pic: "🌠", say: "po-zhe-LA-vam", picQuiz: false },
    inmyopinion: { bg: "според мен", en: "in my opinion", pic: "🗨️", say: "spo-RED MEN", picQuiz: false },
    agree:       { bg: "съгласен съм", en: "I agree", pic: "🤜🤛", say: "sug-LA-sen sum", hint: "A girl says: съгласна съм", picQuiz: false },
    disagree:    { bg: "не съм съгласен", en: "I don't agree", pic: "🙅‍♂️", say: "ne sum sug-LA-sen", picQuiz: false },
    youreright:  { bg: "прав си", en: "you're right", pic: "💯", say: "PRAV si", hint: "Прав си – to a boy · Права си – to a girl", picQuiz: false },
    actually:    { bg: "всъщност", en: "actually", pic: "😮", say: "VSUSHT-nost", picQuiz: false },
    sure:        { bg: "сигурен", en: "sure", pic: "🫡", say: "SEE-goo-ren", hint: "Сигурен ли си? – Are you sure?", picQuiz: false },
    important:   { bg: "важно", en: "important", pic: "🚨", say: "VAZH-no", picQuiz: false },
    however:     { bg: "обаче", en: "however / but", pic: "🫤", say: "o-BA-che", picQuiz: false },
    really:      { bg: "наистина", en: "really / truly", pic: "‼️", say: "na-EES-ti-na", picQuiz: false },
    true:        { bg: "вярно", en: "true / right", pic: "☑️", say: "VyAR-no", hint: "Вярно ли? – Really? Is that true?", picQuiz: false }
  },

  // Sentences: "gap" is the word hidden in fill-the-gap questions.
  sentences: {
    s_hi:       { bg: "Здравей! Аз съм Ники.", en: "Hi! I am Niki.", gap: "съм" },
    s_how:      { bg: "Как си?", en: "How are you?" },
    s_fine:     { bg: "Добре, благодаря.", en: "Fine, thank you.", gap: "благодаря" },
    s_night:    { bg: "Лека нощ, мамо!", en: "Good night, mum!", gap: "нощ" },

    s_havedog:  { bg: "Аз имам куче.", en: "I have a dog.", gap: "куче", audio: "audio/s_havedog.m4a" },
    s_barks:    { bg: "Кучето лае.", en: "The dog barks.", gap: "лае" },
    s_runs:     { bg: "Кучето бяга бързо.", en: "The dog runs fast.", gap: "бяга", audio: "audio/s_runs.m4a" },
    s_bone:     { bg: "Кучето иска кокал.", en: "The dog wants a bone.", gap: "кокал" },

    s_score:    { bg: "Резултатът е две на едно.", en: "The score is two–one.", gap: "две" },
    s_number:   { bg: "Моят номер е седем.", en: "My number is seven.", gap: "седем" },
    s_twodogs:  { bg: "Имам две кучета.", en: "I have two dogs.", gap: "две", audio: "audio/s_twodogs.m4a" },
    s_threeballs: { bg: "Имам три топки.", en: "I have three balls.", gap: "три", audio: "audio/s_threeballs.m4a" },
    s_kick:     { bg: "Аз ритам топката.", en: "I kick the ball.", gap: "ритам" },
    s_play:     { bg: "Аз играя футбол.", en: "I play football.", gap: "футбол" },
    s_winning:  { bg: "Гол! Ние печелим!", en: "Goal! We are winning!", gap: "печелим" },
    s_best:     { bg: "Нашият отбор е най-добрият.", en: "Our team is the best.", gap: "отбор", audio: "audio/s_best.m4a" },
    // Tiny sentences mixed into word lessons
    t_hisharo:  { bg: "Здравей, Шаро!", en: "Hello, Sharo!" },
    t_thanksmum:{ bg: "Благодаря, мамо!", en: "Thank you, mum!" },
    t_yesplease:{ bg: "Да, моля.", en: "Yes, please.", audio: "audio/t_yesplease.m4a" },
    t_nothanks: { bg: "Не, благодаря.", en: "No, thank you." },
    t_hasbone:  { bg: "Кучето има кокал.", en: "The dog has a bone." },
    t_paw:      { bg: "Това е лапа.", en: "This is a paw." },
    t_ball:     { bg: "Къде е топката?", en: "Where is the ball?" },
    t_bigdog:   { bg: "Кучето е голямо.", en: "The dog is big." },
    t_onedog:   { bg: "Едно куче.", en: "One dog." },
    t_twoballs: { bg: "Две топки.", en: "Two balls." },
    t_ten:      { bg: "Аз съм на десет.", en: "I am ten." },
    t_nilnil:   { bg: "Нула на нула.", en: "Nil–nil." },
    t_goalteam: { bg: "Гол за моя отбор!", en: "A goal for my team!" },
    t_keeper:   { bg: "Вратарят е добър.", en: "The goalkeeper is good." },
    t_player:   { bg: "Аз съм играч.", en: "I am a player." },
    t_winmatch: { bg: "Ние печелим мача!", en: "We are winning the match!" },
    t_thismum:  { bg: "Това е мама.", en: "This is mum." },
    t_mybrother:{ bg: "Това е моят брат.", en: "This is my brother." },
    t_lovegran: { bg: "Обичам баба.", en: "I love grandma." },
    t_friend:   { bg: "Той е мой приятел.", en: "He is my friend." },
    t_redball:  { bg: "Топката е червена.", en: "The ball is red." },
    t_bluesky:  { bg: "Небето е синьо.", en: "The sky is blue." },
    t_blackdog: { bg: "Кучето е черно.", en: "The dog is black." },
    t_browndog: { bg: "Кучето е кафяво.", en: "The dog is brown." },
    t_swimfast: { bg: "Аз плувам бързо.", en: "I swim fast." },
    t_coldwater:{ bg: "Водата е студена.", en: "The water is cold." },
    t_jumpin:   { bg: "Аз скачам във водата.", en: "I jump into the water." },
    t_fishsea:  { bg: "Рибата плува в морето.", en: "The fish swims in the sea." },
    t_myhouse:  { bg: "Това е моята къща.", en: "This is my house." },
    t_sword:    { bg: "Имам меч.", en: "I have a sword." },
    t_buildhouse:{ bg: "Аз строя къща.", en: "I am building a house." },
    t_founddiamond:{ bg: "Намерих диамант!", en: "I found a diamond!" },
    t_catsleeps:{ bg: "Котката спи.", en: "The cat is sleeping." },
    t_cowmoo:   { bg: "Кравата казва му!", en: "The cow says moo!" },
    t_bigbear:  { bg: "Мечката е голяма.", en: "The bear is big." },
    t_birdflies:{ bg: "Птицата лети.", en: "The bird flies.", audio: "audio/t_birdflies.m4a" },
    t_lovebananas:{ bg: "Обичам банани.", en: "I love bananas." },
    t_milkplease:{ bg: "Мляко, моля.", en: "Milk, please." },
    t_wantpizza:{ bg: "Искам пица!", en: "I want pizza!" },
    t_tastyice: { bg: "Сладоледът е вкусен.", en: "The ice cream is tasty." },

    // Unit 5–10 sentence lessons
    s_brosis:   { bg: "Аз имам брат и сестра.", en: "I have a brother and a sister.", gap: "сестра" },
    s_granbanitsa:{ bg: "Моята баба прави баница.", en: "My grandma makes banitsa.", gap: "баба" },
    s_lovefamily:{ bg: "Обичам моето семейство.", en: "I love my family.", gap: "семейство" },
    s_dadfootball:{ bg: "Татко играе футбол с мен.", en: "Dad plays football with me.", gap: "Татко", audio: "audio/s_dadfootball.m4a" },
    s_redteam:  { bg: "Моят отбор е червен.", en: "My team is red.", gap: "червен" },
    s_grass:    { bg: "Тревата е зелена.", en: "The grass is green.", gap: "зелена" },
    s_bluekit:  { bg: "Имам син екип.", en: "I have a blue kit.", gap: "син", audio: "audio/s_bluekit.m4a" },
    s_sun:      { bg: "Слънцето е жълто.", en: "The sun is yellow.", gap: "жълто" },

    s_loveswim: { bg: "Обичам да плувам.", en: "I love to swim.", gap: "плувам" },
    s_bigpool:  { bg: "Басейнът е голям.", en: "The pool is big.", gap: "голям" },
    s_swimsea:  { bg: "Аз плувам в морето.", en: "I swim in the sea.", gap: "морето" },
    s_goggles:  { bg: "Къде са моите очила?", en: "Where are my goggles?", gap: "очила", audio: "audio/s_goggles.m4a" },
    s_digpick:  { bg: "Аз копая с кирка.", en: "I dig with a pickaxe.", gap: "кирка" },
    s_zombienight:{ bg: "Зомбито идва през нощта.", en: "The zombie comes at night.", gap: "нощта", audio: "audio/s_zombienight.m4a" },
    s_stonehouse:{ bg: "Къщата е от камък.", en: "The house is made of stone.", gap: "камък" },
    s_cavediamonds:{ bg: "В пещерата има диаманти.", en: "There are diamonds in the cave.", gap: "диаманти" },

    s_dogcat:   { bg: "Имам куче и котка.", en: "I have a dog and a cat.", gap: "котка" },
    s_lion:     { bg: "Лъвът е много силен.", en: "The lion is very strong.", gap: "силен" },
    s_wolf:     { bg: "Вълкът тича в гората.", en: "The wolf runs in the forest.", gap: "гората" },
    s_monkey:   { bg: "Маймуната яде банан.", en: "The monkey eats a banana.", gap: "банан" },

    s_wantbanitsa:{ bg: "Искам баница, моля.", en: "I want banitsa, please.", gap: "моля" },
    s_eatapple: { bg: "Аз ям ябълка.", en: "I am eating an apple.", gap: "ябълка" },
    s_tastybanitsa:{ bg: "Баба прави вкусна баница.", en: "Grandma makes tasty banitsa.", gap: "вкусна" },
    s_hungry:   { bg: "Гладен съм!", en: "I'm hungry!", gap: "Гладен" },

    // Unit 11
    t_myname:         { bg: "Казвам се Мила.", en: "My name is Mila." },
    t_boy:            { bg: "Аз съм момче.", en: "I am a boy." },
    t_fromeng:        { bg: "Аз съм от Англия.", en: "I am from England." },
    t_speakbg:        { bg: "Говоря малко български.", en: "I speak a little Bulgarian." },
    s_yourname:       { bg: "Как се казваш?", en: "What is your name?", gap: "казваш" },
    s_howold:         { bg: "На колко години си?", en: "How old are you?", gap: "години" },
    s_tenyears:       { bg: "Аз съм на десет години.", en: "I am ten years old.", gap: "десет" },
    s_shefrom:        { bg: "Тя е от България.", en: "She is from Bulgaria.", gap: "от" },

    // Unit 12
    t_wheredog:       { bg: "Къде е кучето?", en: "Where is the dog?" },
    t_whohe:          { bg: "Кой е той?", en: "Who is he?" },
    t_whatthis:       { bg: "Какво е това?", en: "What is this?" },
    t_dontknow:       { bg: "Не знам.", en: "I don't know." },
    s_howmanydogs:    { bg: "Колко кучета имаш?", en: "How many dogs do you have?", gap: "Колко", audio: "audio/s_howmanydogs.m4a" },
    s_whyrun:         { bg: "Защо бягаш?", en: "Why are you running?", gap: "Защо" },
    s_dontunderstand: { bg: "Не разбирам.", en: "I don't understand.", gap: "разбирам" },
    s_havebrother:    { bg: "Имаш ли брат?", en: "Do you have a brother?", gap: "ли" },

    // Unit 13
    t_myphone:        { bg: "Това е моят телефон.", en: "This is my phone." },
    t_bookbag:        { bg: "Книгата е в чантата.", en: "The book is in the bag." },
    t_keychair:       { bg: "Ключът е на стола.", en: "The key is on the chair.", audio: "audio/t_keychair.m4a" },
    t_closedoor:      { bg: "Затвори вратата, моля.", en: "Close the door, please.", audio: "audio/t_closedoor.m4a" },
    s_wherepencil:    { bg: "Къде е моят молив?", en: "Where is my pencil?", gap: "молив" },
    s_underbed:       { bg: "Моливът е под леглото.", en: "The pencil is under the bed.", gap: "под", audio: "audio/s_underbed.m4a" },
    s_twobooks:       { bg: "Имам две книги.", en: "I have two books.", gap: "книги" },
    s_windowopen:     { bg: "Прозорецът е отворен.", en: "The window is open.", gap: "отворен" },

    // Unit 14
    t_eleven:         { bg: "Тя е на единадесет години.", en: "She is eleven years old." },
    t_fifteendogs:    { bg: "Петнадесет кучета!", en: "Fifteen dogs!" },
    t_twentymin:      { bg: "Двадесет минути.", en: "Twenty minutes." },
    t_points:         { bg: "Имам седемнадесет точки.", en: "I have seventeen points." },
    s_tenfive:        { bg: "Десет и пет прави петнадесет.", en: "Ten and five makes fifteen.", gap: "петнадесет", note: "Check: is 'прави' the natural word for sums here?" },
    s_eleventeam:     { bg: "В отбора има единадесет играчи.", en: "There are eleven players in the team.", gap: "единадесет" },
    s_brother13:      { bg: "Брат ми е на тринадесет години.", en: "My brother is thirteen.", gap: "тринадесет" },
    s_sixteenfour:    { bg: "Шестнадесет и четири прави двадесет.", en: "Sixteen and four makes twenty.", gap: "двадесет", note: "Check: is 'прави' the natural word for sums here?" },

    // Unit 15
    t_onejuice:       { bg: "Един сок, моля.", en: "One juice, please." },
    t_tastycake:      { bg: "Тортата е вкусна.", en: "The cake is tasty." },
    t_menuplease:     { bg: "Може ли менюто?", en: "Can I have the menu?" },
    t_drinktea:       { bg: "Искам да пия чай.", en: "I want to drink tea." },
    s_wouldlike:      { bg: "Какво ще желаете?", en: "What would you like?", gap: "Какво", note: "Check: natural for a waiter talking to a child and parent?" },
    s_order:          { bg: "Един горещ шоколад и една торта, моля.", en: "One hot chocolate and one cake, please.", gap: "една" },
    s_howmuchcake:    { bg: "Колко струва тортата?", en: "How much is the cake?", gap: "струва" },
    s_thebill:        { bg: "Може ли сметката, моля?", en: "Can we have the bill, please?", gap: "сметката" },

    // Unit 16
    t_mumkitchen:     { bg: "Мама е в кухнята.", en: "Mum is in the kitchen." },
    t_smallroom:      { bg: "Моята стая е малка.", en: "My room is small.", audio: "audio/t_smallroom.m4a" },
    t_catunder:       { bg: "Котката е под масата.", en: "The cat is under the table." },
    t_lampabove:      { bg: "Лампата е над леглото.", en: "The lamp is above the bed." },
    s_myroom:         { bg: "Това е моята стая.", en: "This is my room.", gap: "стая", audio: "audio/s_myroom.m4a" },
    s_bednext:        { bg: "Леглото е до прозореца.", en: "The bed is next to the window.", gap: "до" },
    s_ballbehind:     { bg: "Топката е зад вратата.", en: "The ball is behind the door.", gap: "зад" },
    s_dogbetween:     { bg: "Кучето спи между стола и леглото.", en: "The dog is sleeping between the chair and the bed.", gap: "между" },

    // Unit 17
    t_bluehat:        { bg: "Моята шапка е синя.", en: "My hat is blue.", audio: "audio/t_bluehat.m4a" },
    t_shoesunder:     { bg: "Обувките са под леглото.", en: "The shoes are under the bed." },
    t_likejacket:     { bg: "Харесва ми якето.", en: "I like the jacket." },
    t_dontlikehat:    { bg: "Не ми харесва тази шапка.", en: "I don't like this hat." },
    s_blueshirt:      { bg: "Харесва ми синята тениска.", en: "I like the blue T-shirt.", gap: "синята", audio: "audio/s_blueshirt.m4a" },
    s_jacketprice:    { bg: "Колко струва якето?", en: "How much is the jacket?", gap: "якето" },
    s_newshoes:       { bg: "Новите ми обувки са червени.", en: "My new shoes are red.", gap: "червени" },
    s_iwantit:        { bg: "Тениската? Искам я!", en: "The T-shirt? I want it!", gap: "я", note: "Check: natural way to say 'I want it' about a T-shirt?", audio: "audio/s_iwantit.m4a" },
    // Unit 18
    t_thirtyfive:     { bg: "Тридесет и пет.", en: "Thirty-five." },
    t_hundredpoints:  { bg: "Сто точки!", en: "A hundred points!" },
    t_fiveeuro:       { bg: "Това струва пет евро.", en: "This costs five euros." },
    t_tooexpensive:   { bg: "Много е скъпо!", en: "It's very expensive!" },
    s_twentyeuro:     { bg: "Имам двадесет евро.", en: "I have twenty euros.", gap: "двадесет" },
    s_ballcosts:      { bg: "Топката струва петнадесет евро.", en: "The ball costs fifteen euros.", gap: "струва" },
    s_cheapshirt:     { bg: "Тази тениска е евтина.", en: "This T-shirt is cheap.", gap: "евтина", audio: "audio/s_cheapshirt.m4a" },
    s_paycard:        { bg: "Може ли да платя с карта?", en: "Can I pay by card?", gap: "карта" },

    // Unit 19
    t_satmatch:       { bg: "В събота имам мач.", en: "On Saturday I have a match." },
    t_lovefriday:     { bg: "Обичам петък!", en: "I love Friday!" },
    t_whattime:       { bg: "Колко е часът?", en: "What time is it?" },
    t_halfthree:      { bg: "Часът е три и половина.", en: "It's half past three." },
    s_todaymonday:    { bg: "Днес е понеделник.", en: "Today is Monday.", gap: "понеделник" },
    s_swimtuesday:    { bg: "Във вторник плувам.", en: "On Tuesday I swim.", gap: "вторник" },
    s_matchfive:      { bg: "Мачът е в пет часа.", en: "The match is at five o'clock.", gap: "часа" },
    s_tomorrowsat:    { bg: "Утре е събота!", en: "Tomorrow is Saturday!", gap: "събота" },

    // Unit 20
    t_upatseven:      { bg: "Ставам в седем часа.", en: "I get up at seven o'clock." },
    t_dressfast:      { bg: "Обличам се бързо.", en: "I get dressed quickly." },
    t_afterschool:    { bg: "След училище играя футбол.", en: "After school I play football." },
    t_bedatnine:      { bg: "Лягам си в девет часа.", en: "I go to bed at nine o'clock." },
    s_getupearly:     { bg: "Ставаш ли рано?", en: "Do you get up early?", gap: "Ставаш" },
    s_brotherwatches: { bg: "Брат ми гледа телевизия.", en: "My brother watches TV.", gap: "гледа" },
    s_dinnerseven:    { bg: "Ние вечеряме в седем.", en: "We have dinner at seven.", gap: "вечеряме" },
    s_dogsleeps:      { bg: "Кучето спи в моята стая.", en: "The dog sleeps in my room.", gap: "спи", audio: "audio/s_dogsleeps.m4a" },
    // Unit 21
    t_lovereading:    { bg: "Обичам да чета.", en: "I love reading." },
    t_bikepark:       { bg: "Карам колело в парка.", en: "I ride my bike in the park." },
    t_sistersings:    { bg: "Сестра ми обича да пее.", en: "My sister loves singing." },
    t_swimfun:        { bg: "Плуването е забавно!", en: "Swimming is fun!" },
    s_likedoing:      { bg: "Какво обичаш да правиш?", en: "What do you like doing?", gap: "правиш" },
    s_playminecraft:  { bg: "Обичам да играя Майнкрафт.", en: "I love playing Minecraft.", gap: "играя" },
    s_nodance:        { bg: "Не обичам да танцувам.", en: "I don't like dancing.", gap: "танцувам" },
    s_favhobby:       { bg: "Футболът е моето любимо хоби.", en: "Football is my favourite hobby.", gap: "любимо", note: "Check: natural? (любимо agrees with хоби, which is neuter)", audio: "audio/s_favhobby.m4a" },
    // Unit 22
    t_mumdoctor:      { bg: "Мама е лекар.", en: "Mum is a doctor." },
    t_goodteacher:    { bg: "Учителят е добър.", en: "The teacher is good." },
    t_dadhospital:    { bg: "Татко работи в болница.", en: "Dad works in a hospital." },
    t_becomevet:      { bg: "Искам да стана ветеринар.", en: "I want to become a vet." },
    s_whatbecome:     { bg: "Какъв искаш да станеш?", en: "What do you want to be?", gap: "станеш" },
    s_wantfootballer: { bg: "Искам да стана футболист.", en: "I want to become a footballer.", gap: "футболист" },
    s_auntteacher:    { bg: "Леля ми е учителка.", en: "My aunt is a teacher.", gap: "учителка", audio: "audio/s_auntteacher.m4a" },
    s_chefpizza:      { bg: "Готвачът прави пица.", en: "The chef makes pizza.", gap: "прави" },

    // Unit 23
    t_bigshop:        { bg: "Магазинът е голям.", en: "The shop is big." },
    t_trainstation:   { bg: "Влакът е на гарата.", en: "The train is at the station." },
    t_goingschool:    { bg: "Отивам на училище.", en: "I'm going to school." },
    t_cinematown:     { bg: "Има кино в града.", en: "There's a cinema in the town." },
    s_shopnearby:     { bg: "Има ли магазин наблизо?", en: "Is there a shop nearby?", gap: "магазин" },
    s_parkdog:        { bg: "Отивам в парка с кучето.", en: "I'm going to the park with the dog.", gap: "парка" },
    s_nolibrary:      { bg: "Тук няма библиотека.", en: "There's no library here.", gap: "няма" },
    s_wherehospital:  { bg: "Къде е болницата?", en: "Where is the hospital?", gap: "болницата" },

    // Unit 24
    t_shopleft:       { bg: "Магазинът е наляво.", en: "The shop is on the left." },
    t_longstreet:     { bg: "Улицата е много дълга.", en: "The street is very long." },
    t_wherepark:      { bg: "Извинете, къде е паркът?", en: "Excuse me, where is the park?" },
    t_stopred:        { bg: "Спри! Червено е!", en: "Stop! It's red!" },
    s_wherestadium:   { bg: "Извинете, къде е стадионът?", en: "Excuse me, where is the stadium?", gap: "стадионът" },
    s_goright:        { bg: "Върви направо и завий надясно.", en: "Go straight on and turn right.", gap: "надясно" },
    s_oncorner:       { bg: "Стадионът е на ъгъла.", en: "The stadium is on the corner.", gap: "ъгъла" },
    s_oppschool:      { bg: "Той е срещу училището.", en: "It's opposite the school.", gap: "срещу" },

    // Unit 25
    t_fasttrain:      { bg: "Влакът е бърз.", en: "The train is fast." },
    t_buscoming:      { bg: "Автобусът идва!", en: "The bus is coming!" },
    t_waitstop:       { bg: "Чакам на спирката.", en: "I'm waiting at the stop." },
    t_mumcar:         { bg: "Мама кара кола.", en: "Mum drives a car." },
    s_walkschool:     { bg: "Ходя на училище пеша.", en: "I walk to school.", gap: "пеша" },
    s_busnine:        { bg: "Чакам автобус номер девет.", en: "I'm waiting for bus number nine.", gap: "девет" },
    s_sofiametro:     { bg: "В София има метро.", en: "There's an underground in Sofia.", gap: "метро" },
    s_seabytrain:     { bg: "Отиваме на море с влак.", en: "We're going to the seaside by train.", gap: "влак" },

    // Unit 26
    t_heavycase:      { bg: "Куфарът е много тежък.", en: "The suitcase is very heavy." },
    t_wherepassport:  { bg: "Къде е паспортът?", en: "Where is the passport?" },
    t_ticketsofia:    { bg: "Един билет за София, моля.", en: "One ticket to Sofia, please." },
    t_flyplane:       { bg: "Летим със самолет!", en: "We're flying by plane!" },
    s_twotickets:     { bg: "Два билета за Варна, моля.", en: "Two tickets to Varna, please.", gap: "билета" },
    s_seasummer:      { bg: "Отиваме на море през лятото.", en: "We're going to the seaside in the summer.", gap: "море" },
    s_bigairport:     { bg: "Летището е много голямо.", en: "The airport is very big.", gap: "голямо" },
    s_loveholiday:    { bg: "Обичам ваканцията!", en: "I love the holidays!", gap: "ваканцията" },

    // Unit 27
    t_hotelsea:       { bg: "Хотелът е до морето.", en: "The hotel is next to the sea." },
    t_thirdfloor:     { bg: "Стаята е на третия етаж.", en: "The room is on the third floor." },
    t_breakfasteight: { bg: "Закуската е в осем часа.", en: "Breakfast is at eight o'clock." },
    t_showerbroken:   { bg: "Душът не работи.", en: "The shower doesn't work." },
    s_havebooking:    { bg: "Имаме резервация.", en: "We have a booking.", gap: "резервация" },
    s_morepillow:     { bg: "Може ли още една възглавница?", en: "Could we have another pillow?", gap: "възглавница" },
    s_seaview:        { bg: "Стаята има гледка към морето.", en: "The room has a view of the sea.", gap: "гледка" },
    s_wherelift:      { bg: "Къде е асансьорът?", en: "Where is the lift?", gap: "асансьорът" },

    // Unit 28
    t_rainingtoday:   { bg: "Днес вали.", en: "It's raining today." },
    t_lotsofsnow:     { bg: "Има много сняг!", en: "There's lots of snow!" },
    t_coldwinter:     { bg: "Зимата е студена.", en: "Winter is cold." },
    t_hotsummer:      { bg: "През лятото е горещо.", en: "It's hot in summer." },
    s_sunnywarm:      { bg: "Днес е слънчево и топло.", en: "Today it's sunny and warm.", gap: "слънчево" },
    s_willrain:       { bg: "Утре ще вали дъжд.", en: "Tomorrow it will rain.", gap: "ще" },
    s_snowman:        { bg: "През зимата правим снежен човек.", en: "In winter we make a snowman.", gap: "зимата", audio: "audio/s_snowman.m4a" },
    s_autumnleaves:   { bg: "През есента листата са жълти.", en: "In autumn the leaves are yellow.", gap: "есента" },

    // Unit 29
    t_letsplay:       { bg: "Хайде да играем!", en: "Let's play!" },
    t_freetoday:      { bg: "Свободен ли си днес?", en: "Are you free today?" },
    t_maybetomorrow:  { bg: "Може би утре.", en: "Maybe tomorrow." },
    t_sorrybusy:      { bg: "Съжалявам, зает съм.", en: "Sorry, I'm busy." },
    s_letspark:       { bg: "Хайде да отидем в парка!", en: "Let's go to the park!", gap: "отидем" },
    s_attime:         { bg: "В колко часа?", en: "At what time?", gap: "колко" },
    s_seeyoufive:     { bg: "Ще се видим в пет.", en: "See you at five.", gap: "видим" },
    s_playtogether:   { bg: "Ще играем футбол заедно.", en: "We'll play football together.", gap: "заедно" },

    // Unit 30
    t_dogranaway:     { bg: "Помощ! Кучето избяга!", en: "Help! The dog ran away!" },
    t_imlost:         { bg: "Изгубен съм.", en: "I'm lost." },
    t_foundkey:       { bg: "Намерих ключа!", en: "I found the key!", audio: "audio/t_foundkey.m4a" },
    t_scareddark:     { bg: "Страх ме е от тъмното.", en: "I'm scared of the dark." },
    s_canyouhelp:     { bg: "Можете ли да ми помогнете?", en: "Can you help me?", gap: "помогнете", audio: "audio/s_canyouhelp.m4a" },
    s_lostphone:      { bg: "Изгубих си телефона.", en: "I've lost my phone.", gap: "телефона" },
    s_callpolice:     { bg: "Обадете се на полицията!", en: "Call the police!", gap: "полицията" },
    s_mumsnumber:     { bg: "Това е номерът на мама.", en: "This is mum's number.", gap: "номерът" },
    // Units 31–35
    t_dogfourlegs:     { bg: "Кучето има четири крака.", en: "The dog has four legs." },
    t_brushteeth:      { bg: "Мия си зъбите.", en: "I'm brushing my teeth." },
    t_headache:        { bg: "Боли ме главата.", en: "My head hurts." },
    t_imsick:          { bg: "Болен съм.", en: "I'm ill." },
    s_legache:         { bg: "Боли ме кракът.", en: "My leg hurts.", gap: "кракът" },
    s_temperature:     { bg: "Имам температура.", en: "I've got a temperature.", gap: "температура" },
    s_gotodoctor:      { bg: "Трябва да отидеш на лекар.", en: "You need to go to the doctor.", gap: "лекар" },
    s_wherepharmacy:   { bg: "Къде е аптеката?", en: "Where is the pharmacy?", gap: "аптеката" },
    t_tallbrother:     { bg: "Брат ми е висок.", en: "My brother is tall." },
    t_longhair:        { bg: "Баба има дълга коса.", en: "Grandma has long hair." },
    t_blondsister:     { bg: "Сестра ми има руса коса.", en: "My sister has blond hair." },
    t_dadmoustache:    { bg: "Татко има мустаци.", en: "Dad has a moustache." },
    s_browneyes:       { bg: "Тя има кафяви очи.", en: "She has brown eyes.", gap: "очи" },
    s_shorthair:       { bg: "Той има къса коса.", en: "He has short hair.", gap: "къса" },
    s_tallplayer:      { bg: "Футболистът е много висок.", en: "The footballer is very tall.", gap: "висок" },
    s_strongdad:       { bg: "Татко ми е висок и силен.", en: "My dad is tall and strong.", gap: "силен" },
    t_veryhappy:       { bg: "Днес съм много щастлив.", en: "Today I'm very happy." },
    t_saddog:          { bg: "Кучето е тъжно.", en: "The dog is sad." },
    t_howfeel:         { bg: "Как се чувстваш?", en: "How do you feel?" },
    t_veryproud:       { bg: "Много съм горд!", en: "I'm very proud!" },
    s_tiredfootball:   { bg: "Уморен съм, защото играх футбол.", en: "I'm tired because I played football.", gap: "защото" },
    s_sadsister:       { bg: "Сестра ми е тъжна, защото е болна.", en: "My sister is sad because she's ill.", gap: "тъжна" },
    s_happywin:        { bg: "Щастлив съм, защото спечелихме!", en: "I'm happy because we won!", gap: "Щастлив" },
    s_boredrain:       { bg: "Скучно ми е, защото вали.", en: "I'm bored because it's raining.", gap: "Скучно" },
    t_canswimfast:     { bg: "Мога да плувам бързо.", en: "I can swim fast." },
    t_cantfindball:    { bg: "Не мога да намеря топката.", en: "I can't find the ball." },
    t_mustbed:         { bg: "Трябва да си легна в девет.", en: "I have to go to bed at nine." },
    t_helpmum:         { bg: "Помагам на мама.", en: "I help mum." },
    s_homework:        { bg: "Трябва да си напиша домашното.", en: "I have to do my homework.", gap: "домашното" },
    s_canplayout:      { bg: "Може ли да играя навън?", en: "Can I play outside?", gap: "играя" },
    s_cleanroom:       { bg: "Трябва да почистя стаята си.", en: "I have to tidy my room.", gap: "стаята" },
    s_noswim:          { bg: "Къпането забранено.", en: "No swimming.", gap: "забранено" },
    t_whatdoing:       { bg: "Какво правиш сега?", en: "What are you doing now?" },
    t_listenmusic:     { bg: "Слушам музика.", en: "I'm listening to music." },
    t_sisterpiano:     { bg: "Сестра ми свири на пиано.", en: "My sister is playing the piano." },
    t_whycry:          { bg: "Защо плачеш?", en: "Why are you crying?" },
    s_watchmatch:      { bg: "Гледам мач по телевизията.", en: "I'm watching a match on TV.", gap: "мач" },
    s_scoresgoal:      { bg: "Петров вкарва гол!", en: "Petrov scores a goal!", gap: "гол" },
    s_singdance:       { bg: "Всички пеят и танцуват.", en: "Everyone is singing and dancing.", gap: "пеят" },
    s_wewait:          { bg: "Ние чакаме автобуса.", en: "We're waiting for the bus.", gap: "чакаме" },
    // Units 36–40
    t_yesterdayfootball: { bg: "Вчера играх футбол.", en: "Yesterday I played football." },
    t_sawbigdog:       { bg: "Видях голямо куче.", en: "I saw a big dog." },
    t_watchedfilm:     { bg: "Гледах филм.", en: "I watched a film." },
    t_slepttill:       { bg: "Спах до десет.", en: "I slept until ten." },
    s_wewereseaside:   { bg: "Бяхме на море.", en: "We were at the seaside.", gap: "Бяхме" },
    s_boughtball:      { bg: "Купих нова топка.", en: "I bought a new ball.", gap: "Купих" },
    s_lastweekpool:    { bg: "Миналата седмица ходих на басейн.", en: "Last week I went to the pool.", gap: "ходих" },
    s_whatweekend:     { bg: "Какво прави през уикенда?", en: "What did you do at the weekend?", gap: "уикенда" },
    t_tomorrowswim:    { bg: "Утре ще плувам.", en: "Tomorrow I will swim." },
    t_summersoon:      { bg: "Лятото идва скоро.", en: "Summer is coming soon." },
    t_hopewin:         { bg: "Надявам се да спечелим.", en: "I hope we win." },
    t_wellgocamp:      { bg: "Ще ходим на лагер.", en: "We will go to camp." },
    s_wontschool:      { bg: "Утре няма да ходя на училище.", en: "Tomorrow I won't go to school.", gap: "няма" },
    s_nextweekmatch:   { bg: "Следващата седмица ще играем мач.", en: "Next week we will play a match.", gap: "ще" },
    s_dreamfootballer: { bg: "Мечтая да стана футболист.", en: "I dream of becoming a footballer.", gap: "Мечтая" },
    s_summersea:       { bg: "През лятото ще ходим на море.", en: "In the summer we'll go to the seaside.", gap: "море" },
    t_elephantbigger:  { bg: "Слонът е по-голям от кучето.", en: "The elephant is bigger than the dog." },
    t_snailslower:     { bg: "Охлювът е по-бавен от мен.", en: "The snail is slower than me." },
    t_youbest:         { bg: "Ти си най-добрият!", en: "You're the best!" },
    t_shoesdifferent:  { bg: "Тези обувки са различни.", en: "These shoes are different." },
    s_lionstronger:    { bg: "Лъвът е по-силен от котката.", en: "The lion is stronger than the cat.", gap: "по-силен" },
    s_bestfootballer:  { bg: "Кой е най-добрият футболист?", en: "Who is the best footballer?", gap: "най-добрият" },
    s_carfaster:       { bg: "Колата е по-бърза от колелото.", en: "The car is faster than the bike.", gap: "по-бърза", tts: "Колата е по бърза от колелото." },
    s_sameball:        { bg: "Имаме същата топка!", en: "We have the same ball!", gap: "същата" },
    t_preferswim:      { bg: "Предпочитам плуване.", en: "I prefer swimming." },
    t_chooseblue:      { bg: "Избирам синия екип.", en: "I choose the blue kit." },
    t_mathshard:       { bg: "Математиката е трудна.", en: "Maths is difficult." },
    t_thatseasy:       { bg: "Това е лесно!", en: "That's easy!" },
    s_preferfun:       { bg: "Предпочитам плуване, защото е забавно.", en: "I prefer swimming because it's fun.", gap: "Предпочитам" },
    s_rainsohome:      { bg: "Вали, затова играем вкъщи.", en: "It's raining, so we're playing at home.", gap: "затова" },
    s_pizzainstead:    { bg: "Ще взема пица вместо паста.", en: "I'll have pizza instead of pasta.", gap: "вместо" },
    s_whychoose:       { bg: "Защо избра това? Защото е интересно.", en: "Why did you choose this? Because it's interesting.", gap: "интересно" },
    t_footballnottennis: { bg: "Обичам футбол, но не обичам тенис.", en: "I love football, but I don't love tennis." },
    t_teaorjuice:      { bg: "Чай или сок?", en: "Tea or juice?" },
    t_firstbreakfast:  { bg: "Първо закуска, после училище.", en: "First breakfast, then school." },
    t_washbeforelunch: { bg: "Мия си ръцете преди обяд.", en: "I wash my hands before lunch." },
    s_whenrains:       { bg: "Когато вали, играя Майнкрафт.", en: "When it rains, I play Minecraft.", gap: "Когато" },
    s_thinkwin:        { bg: "Мисля, че ще спечелим.", en: "I think we'll win.", gap: "че" },
    s_afterschool:     { bg: "След училище разхождам кучето.", en: "After school I walk the dog.", gap: "След" },
    s_ireadhesleeps:   { bg: "Аз чета, а брат ми спи.", en: "I'm reading, while my brother is sleeping.", gap: "а" },
    // Units 41–48
    t_onceupondog:     { bg: "Имало едно време едно куче.", en: "Once upon a time there was a dog." },
    t_suddenlyrain:    { bg: "Изведнъж заваля.", en: "Suddenly it started to rain." },
    t_shoutedname:     { bg: "Извиках името му.", en: "I shouted his name." },
    t_whathappened:    { bg: "Какво се случи?", en: "What happened?" },
    s_firstpark:       { bg: "Първо отидохме в парка.", en: "First we went to the park.", gap: "отидохме" },
    s_dogranaway:      { bg: "Изведнъж кучето избяга!", en: "Suddenly the dog ran away!", gap: "избяга" },
    s_lookedeverywhere: { bg: "След това го търсихме навсякъде.", en: "After that we looked for him everywhere.", gap: "търсихме" },
    s_foundbench:      { bg: "Накрая го намерихме под пейката.", en: "In the end we found him under the bench.", gap: "намерихме" },
    t_usuallybanitsa:  { bg: "Обикновено ям баница.", en: "I usually eat banitsa." },
    t_atewhole:        { bg: "Изядох цялата баница!", en: "I ate the whole banitsa!" },
    t_alwayswalk:      { bg: "Винаги разхождам кучето.", en: "I always walk the dog." },
    t_finishedhomework: { bg: "Свърших домашното!", en: "I finished my homework!" },
    s_everydayread:    { bg: "Всеки ден чета книга.", en: "Every day I read a book.", gap: "чета" },
    s_readwhole:       { bg: "Вчера прочетох цялата книга.", en: "Yesterday I read the whole book.", gap: "прочетох" },
    s_sometimespizza:  { bg: "Понякога ядем пица.", en: "Sometimes we eat pizza.", gap: "Понякога" },
    s_nevertired:      { bg: "Кучето никога не е уморено.", en: "The dog is never tired.", gap: "никога" },
    t_mathslesson:     { bg: "Имам час по математика.", en: "I have a maths lesson." },
    t_goodenglish:     { bg: "Добър съм по английски.", en: "I'm good at English." },
    t_lovebreak:       { bg: "Обичам междучасието!", en: "I love break time!" },
    t_newtextbook:     { bg: "Това е новият ми учебник.", en: "This is my new textbook." },
    s_gotsix:          { bg: "Получих шестица по история!", en: "I got a six in history!", gap: "шестица" },
    s_testgeography:   { bg: "Утре имаме контролно по география.", en: "Tomorrow we have a geography test.", gap: "контролно" },
    s_forgottextbook:  { bg: "Забравих си учебника.", en: "I forgot my textbook.", gap: "учебника" },
    s_firstlesson:     { bg: "Първият час е английски.", en: "The first lesson is English.", gap: "час" },
    t_writeme:         { bg: "Пиши ми после.", en: "Message me later." },
    t_nobattery:       { bg: "Телефонът ми няма батерия.", en: "My phone has no battery." },
    t_videotablet:     { bg: "Гледам видео на таблета.", en: "I'm watching a video on the tablet." },
    t_passwordsecret:  { bg: "Паролата е тайна!", en: "The password is a secret!" },
    s_callme:          { bg: "Обади ми се довечера.", en: "Call me this evening.", gap: "Обади" },
    s_downloadedgame:  { bg: "Изтеглих нова игра.", en: "I downloaded a new game.", gap: "Изтеглих" },
    s_nointernet:      { bg: "Няма интернет!", en: "There's no internet!", gap: "интернет" },
    s_chargephone:     { bg: "Трябва да заредя телефона.", en: "I need to charge the phone.", gap: "заредя" },
    t_goingmountains:  { bg: "Отиваме на планина.", en: "We're going to the mountains." },
    t_bearsforest:     { bg: "В гората има мечки.", en: "There are bears in the forest." },
    t_coldlake:        { bg: "Езерото е студено.", en: "The lake is cold." },
    t_warmfire:        { bg: "Огънят е топъл.", en: "The fire is warm." },
    s_sevenlakes:      { bg: "В Рила има седем езера.", en: "There are seven lakes in Rila.", gap: "езера" },
    s_sleeptent:       { bg: "Спим в палатка.", en: "We sleep in a tent.", gap: "палатка" },
    s_climbedpeak:     { bg: "Изкачихме върха!", en: "We climbed to the top!", gap: "върха" },
    s_riverforest:     { bg: "Реката тече през гората.", en: "The river flows through the forest.", gap: "Реката" },
    t_greatfilm:       { bg: "Гледах страхотен филм.", en: "I watched a great film." },
    t_favsong:         { bg: "Това е любимата ми песен.", en: "This is my favourite song." },
    t_listenedmusic:   { bg: "Слушах музика.", en: "I listened to music." },
    t_funnyactor:      { bg: "Актьорът е много смешен.", en: "The actor is very funny." },
    s_concerttonight:  { bg: "Довечера ходим на концерт.", en: "Tonight we're going to a concert.", gap: "концерт" },
    s_favfilm:         { bg: "Кой е любимият ти филм?", en: "What's your favourite film?", gap: "филм" },
    s_bandsong:        { bg: "Групата изпя нова песен.", en: "The band sang a new song.", gap: "песен" },
    s_recommendseries: { bg: "Препоръчвам този сериал!", en: "I recommend this series!", gap: "сериал" },
    t_happybirthday:   { bg: "Честит рожден ден!", en: "Happy birthday!" },
    t_happyholiday:    { bg: "Честит празник!", en: "Happy holiday!" },
    t_merrychristmas:  { bg: "Весела Коледа!", en: "Merry Christmas!" },
    t_happynewyear:    { bg: "Честита Нова година!", en: "Happy New Year!" },
    s_firstmarch:      { bg: "На първи март носим мартеници.", en: "On 1 March we wear martenitsi.", gap: "мартеници" },
    s_eastereggs:      { bg: "На Великден боядисваме яйца.", en: "At Easter we paint eggs.", gap: "яйца" },
    s_everyonehoro:    { bg: "Всички играят хоро.", en: "Everyone is dancing the horo.", gap: "хоро" },
    s_wishhealth:      { bg: "Пожелавам ти здраве и щастие!", en: "I wish you health and happiness!", gap: "Пожелавам" },
    t_footballbest:    { bg: "Според мен футболът е най-хубавият спорт.", en: "In my opinion football is the best sport." },
    t_agreewithyou:    { bg: "Съгласен съм с теб.", en: "I agree with you." },
    t_youreright:      { bg: "Прав си!", en: "You're right!" },
    t_reallygood:      { bg: "Наистина е добре.", en: "It's really good." },
    s_disagreeswim:    { bg: "Не съм съгласен, защото плуването е по-забавно.", en: "I don't agree, because swimming is more fun.", gap: "съгласен" },
    s_actuallyeasy:    { bg: "Всъщност е лесно.", en: "Actually, it's easy.", gap: "Всъщност" },
    s_importantteam:   { bg: "Важно е да играем като отбор.", en: "It's important to play as a team.", gap: "Важно" },
    s_notsure:         { bg: "Не съм сигурен, но мисля, че е вярно.", en: "I'm not sure, but I think it's true.", gap: "сигурен" }
  },

  // Short grammar notes shown at the start of a lesson (and on the unit page).
  tips: {
    tip_abc_easy: { title: "Easy friends", text: "These letters look AND sound like English: А · Е · К · М · О · Т" },
    tip_abc_twins: { title: "Tricky twins", text: "Careful! These look like English letters but make a different sound: В = v · Н = n · Р = r · С = s · У = oo · Х = h" },
    tip_abc_rule: { title: "The golden rule", text: "Bulgarian is read exactly as it's written. Each letter always makes the same sound, so once you know the letters you can read any word!" },
    tip_abc_combo: { title: "One letter, two sounds", text: "Some letters do the job of two English letters: Ж = zh · Ц = ts · Ч = ch · Ш = sh · Щ = sht · Ю = yu · Я = ya" },
    tip_sam: { title: "The verb съм (to be)", text: "аз съм – I am · ти си – you are · той / тя / то е – he / she / it is · ние сме – we are · вие сте – you are (more than one person, or polite) · те са – they are" },
    tip_reading: { title: "Reading help", text: "In the grey 'say' line, CAPITALS show the stressed part: zdra-VEY. ъ sounds like the 'u' in 'but', щ sounds like 'sht', and ж like the 's' in 'treasure'. When you don't need the 'say' line any more, switch it off in Settings." },
    tip_questions: { title: "Question words", text: "кой – who · какво – what · къде – where · кога – when · защо – why · колко – how many / how much. They go at the start of the question, just like in English." },
    tip_ne_li: { title: "не and ли", text: "Put не in front of the verb to say 'not': знам (I know) → не знам (I don't know). For a yes/no question, add ли after the important word: Имаш ли куче? (Do you have a dog?)" },
    tip_gender: { title: "He, she or it?", text: "Every Bulgarian noun is masculine, feminine or neuter. Usually: ends in a consonant → masculine (молив, телефон); ends in -а or -я → feminine (книга, чанта); ends in -о or -е → neuter (легло, куче)." },
    tip_article: { title: "'The' goes on the end!", text: "Bulgarian sticks 'the' onto the END of the word: книга → книгата (the book), легло → леглото (the bed), книги → книгите (the books). Masculine words take -ът or -а: столът / стола (the chair). Good news: Bulgarian nouns don't change their endings for different cases like Russian ones do.", note: "Check: the simplified -ът / -а explanation." },
    tip_teens: { title: "Making 11 to 20", text: "11–19 are built as 'one-on-ten': един-на-десет → единадесет, два-на-десет → дванадесет. 20 is 'two tens': двадесет. In everyday speech people shorten them – единайсет, дванайсет, двайсет – so you'll hear both." },
    tip_one: { title: "One, but which one?", text: "'One' changes to match the word: един сок · една торта · едно кафе. And there's no word for 'a' – you just say the thing: Искам сок (I want a juice)." },
    tip_da: { title: "No 'to' in Bulgarian!", text: "Bulgarian has no 'to drink' or 'to eat'. Instead you say 'I want that I drink': искам да пия. After да, use the normal 'I' form of the verb: искам да ям (I want to eat), искам да играя (I want to play)." },
    tip_my: { title: "'My' matches the word", text: "моят хол – my living room (masculine) · моята стая – my room (feminine) · моето легло – my bed (neuter) · моите книги – my books (plural)" },
    tip_where: { title: "Where is it?", text: "в – in · на – on · под – under · над – above · до – next to · зад – behind · между – between. Then add 'the': под леглото (under the bed), до прозореца (next to the window)." },
    tip_colours2: { title: "Colours match the clothes", text: "син панталон – blue trousers (masculine) · синя шапка – a blue hat (feminine) · синьо яке – a blue jacket (neuter) · сини обувки – blue shoes (plural)" },
    tip_like: { title: "'It pleases me'", text: "харесва ми really means 'it pleases me', so the thing you like does the 'pleasing': Харесва ми якето (I like the jacket). For more than one thing it becomes харесват: Харесват ми обувките (I like the shoes). To say no: Не ми харесва." },
    tip_it: { title: "Short words for 'it'", text: "го – it (masculine or neuter) · я – it (feminine) · ги – them. They go next to the verb: Искам го (I want it – the jacket) · Искам я (I want it – the T-shirt) · Искам ги (I want them – the shoes)." },
    tip_tens: { title: "Counting in tens", text: "Most tens are 'number + десет': тридесет (30) · четиридесет (40) · петдесет (50) · шестдесет (60) · седемдесет (70) · осемдесет (80) · деветдесет (90) · сто (100). For the numbers in between, add и (and): двадесет и едно (21) · тридесет и пет (35)." },
    tip_money: { title: "Talking about money", text: "евро never changes: едно евро · пет евро. Cents take the counting ending: един цент · два цента · петдесет цента. A price like €5.50 is пет евро и петдесет цента.", note: "Check: is 'цента' the usual counting form, and do people say 'цент' or 'евроцент'?" },
    tip_days: { title: "On Monday, on Tuesday…", text: "Days don't take a capital letter in Bulgarian. 'On' a day is в: в понеделник, в събота. Before a word starting with в or ф, в becomes във: във вторник." },
    tip_time: { title: "Telling the time", text: "Колко е часът? – What time is it? · Часът е три. – It's three o'clock. · Три и половина. – Half past three. · в пет часа – at five o'clock" },
    tip_present: { title: "Verbs change for each person", text: "аз ставам – I get up · ти ставаш – you get up · той / тя става – he / she gets up · ние ставаме – we get up · вие ставате – you get up (more than one) · те стават – they get up" },
    tip_se: { title: "Verbs with се and си", text: "Some verbs come with се or си, a bit like 'myself': мия се (I wash), обличам се (I get dressed), лягам си (I go to bed). се / си never starts a sentence: Мия се. or Аз се мия." },
    tip_play: { title: "Another verb pattern", text: "аз играя · ти играеш · той / тя играе · ние играем · вие играете · те играят. And one more: аз уча · ти учиш · той учи · ние учим · вие учите · те учат." },
    tip_love_doing: { title: "I love doing…", text: "To say you love or like DOING something, use обичам да + verb: Обичам да чета (I love reading) · Обичам да играя (I love playing) · Не обичам да танцувам (I don't like dancing)." },
    tip_fun: { title: "Is it fun?", text: "Забавно е! – It's fun! · Скучно е. – It's boring. · Харесва ми да рисувам. – I like drawing. · Кое е твоето любимо хоби? – What's your favourite hobby?" },
    tip_jobs: { title: "Jobs for him and her", text: "Many jobs have a 'he' word and a 'she' word: учител / учителка · готвач / готвачка · лекар / лекарка. And there's no 'a': Мама е лекар. – Mum is a doctor.", note: "Check: is 'лекар' or 'лекарка' more natural for a woman doctor?" },
    tip_become: { title: "What do you want to be?", text: "Какъв искаш да станеш? – asking a boy · Каква искаш да станеш? – asking a girl · Искам да стана пилот. – I want to be a pilot." },
    tip_going: { title: "Going to… в or на?", text: "Use в for places you go into: отивам в парка, в магазина. Use на for events and some places: отивам на училище, на кино, на море, на гарата.", note: "Check: is this simple в / на rule OK for a 10-year-old?" },
    tip_ima: { title: "There is… there isn't", text: "има – there is / there are · няма – there isn't / there aren't · Има ли магазин наблизо? – Is there a shop nearby? · Тук няма парк. – There's no park here." },
    tip_directions: { title: "Which way?", text: "наляво – (to the) left · надясно – (to the) right · направо – straight on · на ъгъла – on the corner · срещу – opposite" },
    tip_command: { title: "Telling someone what to do", text: "Commands are short: завий! (turn!) · върви! (go!) · спри! (stop!). To be polite, or to talk to more than one person, add -те: завийте, вървете, спрете." },
    tip_with: { title: "By bus, by train…", text: "To say how you travel, use с: с автобус · с влак · с метро · с кола. Before a word starting with с or з, it becomes със: със самолет (by plane). Walking is just пеша: ходя пеша (I walk)." },
    tip_drive: { title: "карам – drive or ride", text: "карам кола – I drive a car · карам колело – I ride a bike · Татко кара кола. – Dad drives a car." },
    tip_for: { title: "за – for", text: "билет за Варна – a ticket to Varna (word for word: 'for Varna') · подарък за мама – a present for mum · Два билета за София, моля. – Two tickets to Sofia, please." },
    tip_we: { title: "We're going!", text: "For family plans, use the 'we' form: отиваме – we're going · пътуваме – we travel · летим – we fly. You can leave out ние: Отиваме на море!" },
    tip_have: { title: "имам – to have", text: "имам – I have · имаш – you have · има – he / she has · имаме – we have · имате – you have (more than one) · имат – they have" },
    tip_mayi: { title: "Asking politely", text: "Може ли…? is the polite way to ask for something: Може ли още една възглавница? (Could we have another pillow?) · Може ли ключа? (Can I have the key?) Add моля to be extra polite." },
    tip_weather: { title: "No 'it' needed", text: "Weather sentences don't need 'it': Вали. – It's raining. · Вали сняг. – It's snowing. · Духа вятър. – It's windy. · Слънчево е. – It's sunny. · Студено е. – It's cold." },
    tip_seasons: { title: "In summer, in winter…", text: "Use през + the season with 'the': през пролетта (in spring) · през лятото (in summer) · през есента (in autumn) · през зимата (in winter). Sneak peek: Утре ще вали. – Tomorrow it will rain. (ще = will)" },
    tip_lets: { title: "Let's…!", text: "Хайде да + the 'we' form of a verb = Let's…! · Хайде да играем! – Let's play! · Хайде да отидем в парка! – Let's go to the park!" },
    tip_answers: { title: "Yes, no, maybe", text: "Yes: Да, разбира се! · Добре! · Страхотно! No, politely: Съжалявам, зает съм. (a boy) / заета съм (a girl). Not sure: Може би." },
    tip_help: { title: "When you need help", text: "Помощ! – Help! · Внимание! – Careful! · Извинете, имам проблем. – Excuse me, I have a problem. · Изгубен съм. (a boy) / Изгубена съм. (a girl) – I'm lost." },
    tip_pastpeek: { title: "A peek at the past", text: "изгубих – I lost · намерих – I found · Изгубих си телефона. – I've lost my phone. Short words for 'me' again: Помогнете ми! – Help me! · Обадете ми се. – Call me." },
    tip_counting: { title: "Counting things", text: "After a number, masculine things take a special 'counting' ending: един молив, два молива, пет молива. For people, use the normal plural: пет играчи. If you get it wrong, people will still understand you!", note: "Check: simplified rule for the counting form." },
    // Units 31–35
    tip_hurts: { title: "What hurts?", text: "Боли ме главата. – My head hurts. · Боли ме кракът. – My leg hurts. · Боли ме зъбът. – My tooth hurts. · Word for word it's 'hurts me the head'!" },
    tip_need: { title: "You need to…", text: "трябва да – need to / must: Трябва да пиеш вода. – You need to drink water. · Трябва да почиваш. – You need to rest. · Трябва да отидеш на лекар. – You need to go to the doctor." },
    tip_agree: { title: "Words that match", text: "Describing words change to match who you're talking about: висок брат – a tall brother · висока сестра – a tall sister · високо дете – a tall child · високи хора – tall people" },
    tip_hasfeature: { title: "He has, she has", text: "Use има to describe someone: Той има къса коса. – He has short hair. · Тя има сини очи. – She has blue eyes. · Татко има брада. – Dad has a beard." },
    tip_feelagree: { title: "Boy or girl?", text: "Feelings change for boys and girls: щастлив / щастлива – happy · тъжен / тъжна – sad · уморен / уморена – tired · ядосан / ядосана – angry" },
    tip_because: { title: "Why? Because!", text: "Защо? – Why? · защото – because · Уморен съм, защото играх футбол. – I'm tired because I played football." },
    tip_canmust: { title: "Can and must", text: "Мога да плувам. – I can swim. · Не мога да плувам. – I can't swim. · Трябва да спя. – I must sleep. · Remember: да + verb, never 'to'!" },
    tip_permission: { title: "Can I, please?", text: "Може ли да…? – May I…? / Can I…? · Може ли да играя навън? – Can I play outside? · Answers: Да, може! – Yes, you can! · Не, не може. – No, you can't." },
    tip_now: { title: "Playing or play?", text: "Bulgarian has one present tense for both: играя = I play AND I'm playing. Add сега to make it 'right now': Сега играя. – I'm playing now." },
    tip_presentfull: { title: "Everyone's doing it", text: "играя – I play · играеш – you play · играе – he / she plays · играем – we play · играете – you (all) play · играят – they play" },
    // Units 36–40
    tip_pastx: { title: "Listen for -х!", text: "Most past forms for 'I' end in -х: играх – I played · гледах – I watched · спах – I slept · бях – I was · ходих – I went" },
    tip_pastwe: { title: "We did it!", text: "For 'we', add -ме: играхме – we played · бяхме – we were · видяхме – we saw · ходихме – we went" },
    tip_will: { title: "Will", text: "ще + verb = will: ще играя – I will play · ще играеш – you will play · ще играем – we will play · Утре ще плувам. – Tomorrow I will swim." },
    tip_wont: { title: "Won't", text: "няма да + verb = won't: Няма да ходя. – I won't go. · Няма да вали. – It won't rain. · Утре няма да ходя на училище. – Tomorrow I won't go to school." },
    tip_more: { title: "Bigger, faster", text: "по- = more, and от = than: голям – big · по-голям – bigger · бърз – fast · по-бърз – faster · Лъвът е по-силен от котката. – The lion is stronger than the cat." },
    tip_most: { title: "The best!", text: "най- = most: най-голям – the biggest · най-бърз – the fastest · най-добър – the best · Ти си най-добрият! – You're the best!" },
    tip_prefer: { title: "I prefer…", text: "предпочитам – I prefer: Предпочитам футбол. – I prefer football. · Предпочитам да плувам. – I prefer to swim. · Какво предпочиташ? – What do you prefer?" },
    tip_so: { title: "So or because?", text: "затова – so / that's why: Вали, затова играем вкъщи. – It's raining, so we play at home. · защото – because: Играем вкъщи, защото вали. – We play at home because it's raining." },
    tip_link: { title: "Joining words", text: "и – and · но – but · или – or · а – and / while, for a contrast: Аз чета, а брат ми спи. – I'm reading, while my brother is sleeping." },
    tip_when: { title: "When? When…", text: "кога? – when? (a question) · когато – when (joining two ideas): Когато вали, играя Майнкрафт. · че – that: Мисля, че ще спечелим. – I think (that) we'll win." },
    // Units 41–48
    tip_storyorder: { title: "Story order", text: "първо – first · после / след това – then, after that · изведнъж – suddenly · накрая – in the end" },
    tip_wedid: { title: "We did it!", text: "In a story about 'we', add -ме: отидохме – we went · търсихме – we looked for · намерихме – we found. For he / she / it there's no -х: избяга – he ran away · заваля – it started to rain" },
    tip_aspect: { title: "Verb pairs", text: "Many Bulgarian verbs come in pairs: one for doing something again and again, one for doing it once, right to the end: пиша / напиша – write · чета / прочета – read · ям / изям – eat (all up)" },
    tip_howoften: { title: "How often?", text: "винаги – always · обикновено – usually · често – often · понякога – sometimes · никога не – never: Никога не закъснявам. – I'm never late." },
    tip_po: { title: "A lesson in…", text: "по + subject: час по математика – a maths lesson · контролно по история – a history test · Добър съм по английски. – I'm good at English. (A girl says: Добра съм…) · час means 'hour' AND 'school lesson'." },
    tip_marks: { title: "Top marks", text: "Bulgarian school marks go from 2 to 6: шестица (6) – excellent · петица (5) – very good · четворка (4) – good · двойка (2) – fail. Получих шестица! – I got a six!" },
    tip_writeme: { title: "Write to me!", text: "ми = (to) me: Пиши ми! – Write to me! · Обади ми се! – Call me! · Изпрати ми снимка! – Send me a photo!" },
    tip_safe: { title: "Stay safe online", text: "Никога не казвай паролата си! – Never tell anyone your password! · Не пиши на непознати. – Don't message strangers. · Питай мама или татко. – Ask Mum or Dad." },
    tip_inon: { title: "In or on?", text: "в гората – in the forest · в реката – in the river · в палатката – in the tent · на планина – (off) to the mountains · на поход – on a hike" },
    tip_naturemany: { title: "One, lots", text: "езеро → езера – lakes · планина → планини – mountains · река → реки – rivers · гора → гори – forests" },
    tip_watchedlistened: { title: "Watched & listened", text: "гледам → гледах – I watch → I watched · слушам → слушах – I listen → I listened · Гледах страхотен филм. – I watched a great film." },
    tip_rateit: { title: "Rate it!", text: "Страхотен е! – It's great! · Супер е! – It's super! · Не ми хареса. – I didn't like it. · Беше скучно. – It was boring." },
    tip_chestit: { title: "Честит, честита, честито", text: "Честит changes to match the word after it: Честит рожден ден! (ден – he) · Честита Нова година! (година – she) · Честито! – Congratulations!" },
    tip_onday: { title: "On 1 March", text: "на + date: на първи март – on 1 March · на Коледа – at Christmas · на Великден – at Easter · на рождения ми ден – on my birthday" },
    tip_opinion: { title: "What do you think?", text: "Според мен… – In my opinion… · Мисля, че… – I think that… · Какво мислиш? – What do you think? · Прав си. – You're right." },
    tip_boygirl: { title: "Boy or girl?", text: "съгласен / съгласна – agreeing · прав / права – right · сигурен / сигурна – sure: Съгласна съм. – I agree (girl) · Не съм сигурен. – I'm not sure (boy)" }
  },

  sections: [
    { id: "s1", title: "First steps", description: "Greetings, your favourite things, numbers, family and everyday words." },
    { id: "s2", title: "Everyday essentials", description: "Café, home, clothes, money, time, routines, hobbies and jobs." },
    { id: "s3", title: "Getting around", description: "Town, directions, transport, holidays, weather, plans and getting help." },
    { id: "s4", title: "Building conversations", description: "People, feelings, can and must, now, past, future, comparing and linking ideas." },
    { id: "s5", title: "More independent Bulgarian", description: "Stories, school, technology, nature, culture, traditions and opinions." }
  ],

  // Optional "Unit 0" for players who can't read Cyrillic yet. Only shown if they choose it.
  alphabet: {
    id: "abc", title: "The Alphabet", emoji: "✏️", color: "teal",
    facts: [
      "The Cyrillic alphabet was created in Bulgaria over 1,000 years ago, by students of the brothers Cyril and Methodius.",
      "About 250 million people use Cyrillic letters today, in countries like Bulgaria, Serbia, Ukraine and Russia.",
      "The Bulgarian alphabet has 30 letters – four more than English!",
      "When Bulgaria joined the European Union, Cyrillic became its third alphabet. Look for ЕВРО on euro banknotes!"
    ],
    section: "s1",
    description: "Learn the 30 letters and their sounds, so you can read Bulgarian.",
    objectives: ["Know the sound every letter makes", "Spot the 'tricky twins' that look English but aren't", "Read new words letter by letter"],
    vocab: "The 30 letters of the Bulgarian alphabet",
    grammar: ["Every letter always makes the same sound"],
    lessons: [
      { id: "abc1", title: "Easy friends", type: "words", words: ["abc_a", "abc_e", "abc_k", "abc_m", "abc_o", "abc_t"], tips: ["tip_abc_rule", "tip_abc_easy"] },
      { id: "abc2", title: "Tricky twins", type: "words", words: ["abc_v", "abc_n", "abc_r", "abc_s", "abc_u", "abc_h"], tips: ["tip_abc_twins"] },
      { id: "abc3", title: "New shapes", type: "words", words: ["abc_b", "abc_g", "abc_d", "abc_z", "abc_i", "abc_y"] },
      { id: "abc4", title: "More new shapes", type: "words", words: ["abc_l", "abc_p", "abc_f", "abc_ts", "abc_ch"] },
      { id: "abc5", title: "Super sounds", type: "words", words: ["abc_zh", "abc_sh", "abc_sht", "abc_uh", "abc_soft", "abc_yu", "abc_ya"], tips: ["tip_abc_combo"] },
      { id: "abcboss", title: "Alphabet Boss", type: "boss" }
    ]
  },
  units: [
    {
      id: "u1", title: "Hello!", emoji: "👋", color: "green",
      facts: [
        "In Bulgaria, people NOD their head to say no and SHAKE it to say yes – the opposite of England!",
        "Bulgarian is written in the Cyrillic alphabet, which was created in Bulgaria over 1,000 years ago.",
        "Every year on 24 May, Bulgaria celebrates its alphabet and the brothers Saints Cyril and Methodius.",
        "Bulgarians often greet friends with 'Здрасти!', a short and friendly way to say 'Hi!'"
      ],
      section: "s1",
      description: "Say hello, goodbye, please and thank you.",
      objectives: ["Greet people at any time of day", "Say please, thank you, yes and no", "Ask 'How are you?' and answer"],
      vocab: "Greetings and polite words",
      grammar: ["аз съм – I am", "Questions with как (how)"],
      lessons: [
        { id: "u1l1", title: "Hi & bye", type: "words", words: ["hello", "bye", "morning", "night", "thanks"], sentences: ["t_hisharo", "t_thanksmum"] },
        { id: "u1l2", title: "Yes, no, please", type: "words", words: ["please", "yes", "no", "iam", "howareyou", "fine"], sentences: ["t_yesplease", "t_nothanks"] },
        { id: "u1l3", title: "Chatting", type: "sentences", sentences: ["s_hi", "s_how", "s_fine", "s_night"] },
        { id: "u1boss", title: "Hello Champion", type: "boss" }
      ]
    },
    {
      id: "u2", title: "My Dog", emoji: "🐶", color: "brown",
      facts: [
        "Шаро (Sharo) is a classic Bulgarian name for a dog – a bit like 'Rover' in English.",
        "The Karakachan dog is an ancient Bulgarian breed of big, fluffy sheepdog that protects sheep from wolves and bears.",
        "Bulgarian makes things small and cute with a 'little' ending: куче becomes кученце (puppy), like 'dog' and 'doggy'.",
        "Bulgarians say a dog is a person's best friend too: Кучето е най-добрият приятел на човека."
      ],
      section: "s1",
      description: "Talk about your dog and what it does.",
      objectives: ["Name a dog's body parts and toys", "Say what a dog does", "Say 'I have a dog'"],
      vocab: "Dogs and pets",
      grammar: ["имам – I have", "'The' on the end: куче → кучето"],
      lessons: [
        { id: "u2l1", title: "Meet the dog", type: "words", words: ["dog", "puppy", "paw", "tail", "bone"], sentences: ["t_hasbone", "t_paw"] },
        { id: "u2l2", title: "Fetch!", type: "words", words: ["ball", "barks", "runs", "big", "small", "walk"], sentences: ["t_ball", "t_bigdog"] },
        { id: "u2l3", title: "Dog talk", type: "sentences", sentences: ["s_havedog", "s_barks", "s_runs", "s_bone"] },
        { id: "u2boss", title: "Top Dog", type: "boss" }
      ]
    },
    {
      id: "u3", title: "Numbers", emoji: "🔢", color: "blue",
      facts: [
        "Bulgarians often shorten 'двадесет' (twenty) to 'двайсет' when they talk.",
        "In Bulgarian schools the best mark is 6, not 10! A 2 is a fail and a 6 means excellent.",
        "Bulgaria's phone code is +359, so Bulgarian phone numbers from abroad start with those digits.",
        "Bulgaria is divided into 28 regions, called области."
      ],
      section: "s1",
      description: "Count from 0 to 10 and say football scores.",
      objectives: ["Count from 0 to 10", "Say a football score", "Say how many things you have"],
      vocab: "Numbers 0–10",
      grammar: ["Numbers before nouns: две топки"],
      lessons: [
        { id: "u3l1", title: "1 to 5", type: "words", words: ["one", "two", "three", "four", "five"], sentences: ["t_onedog", "t_twoballs"] },
        { id: "u3l2", title: "6 to 10", type: "words", words: ["six", "seven", "eight", "nine", "ten", "zero"], sentences: ["t_ten", "t_nilnil"] },
        { id: "u3l3", title: "What's the score?", type: "sentences", sentences: ["s_score", "s_number", "s_twodogs", "s_threeballs"] },
        { id: "u3boss", title: "Number Ninja", type: "boss" }
      ]
    },
    {
      id: "u4", title: "Football", emoji: "⚽", color: "red",
      facts: [
        "Bulgarian striker Hristo Stoichkov won the Ballon d'Or in 1994 – the award for the best footballer in the world!",
        "At the 1994 World Cup in the USA, Bulgaria knocked out Germany and finished fourth in the world!",
        "Dimitar Berbatov, a Bulgarian striker, played for Manchester United and Tottenham.",
        "Bulgaria's biggest football rivalry is between two clubs from Sofia: Levski and CSKA."
      ],
      section: "s1",
      description: "Talk about football, goals and teams.",
      objectives: ["Name things on a football pitch", "Say what you do: I kick, I win", "Cheer on your team"],
      vocab: "Football",
      grammar: ["Verbs with аз: аз ритам, аз играя", "ние – we: ние печелим"],
      lessons: [
        { id: "u4l1", title: "On the pitch", type: "words", words: ["football", "goal", "team", "keeper", "match"], sentences: ["t_goalteam", "t_keeper"] },
        { id: "u4l2", title: "Play!", type: "words", words: ["player", "kick", "win", "referee", "fan"], sentences: ["t_player", "t_winmatch"] },
        { id: "u4l3", title: "Match day", type: "sentences", sentences: ["s_kick", "s_play", "s_winning", "s_best"] },
        { id: "u4boss", title: "Golden Boot", type: "boss" }
      ]
    },
    {
      id: "u5", title: "My Family", emoji: "👨‍👩‍👦", color: "pink",
      facts: [
        "In Bulgaria, lots of children spend their summer holidays with баба and дядо in the village!",
        "Bulgarian surnames change for girls: a boy might be Петров and his sister Петрова.",
        "A Bulgarian's middle name usually comes from their dad's first name. If dad is Иван, his children are Иванов or Иванова.",
        "Bulgarian has two words for uncle: чичо is your dad's brother and вуйчо is your mum's brother."
      ],
      section: "s1",
      description: "Introduce your family and friends.",
      objectives: ["Name family members", "Say 'This is my…'", "Say who you love"],
      vocab: "Family and friends",
      grammar: ["Possession: моят брат, моята баба", "обичам – I love"],
      lessons: [
        { id: "u5l1", title: "Meet my family", type: "words", words: ["mum", "dad", "brother", "sister", "family"], sentences: ["t_thismum", "t_mybrother"] },
        { id: "u5l2", title: "Grandma & friends", type: "words", words: ["grandma", "grandpa", "baby", "friend", "love"], sentences: ["t_lovegran", "t_friend"] },
        { id: "u5l3", title: "Family talk", type: "sentences", sentences: ["s_brosis", "s_granbanitsa", "s_lovefamily", "s_dadfootball"] },
        { id: "u5boss", title: "Family Hero", type: "boss" }
      ]
    },
    {
      id: "u6", title: "Colours", emoji: "🎨", color: "purple",
      facts: [
        "The Bulgarian flag is бяло, зелено и червено – white, green and red! Colour words change their ending to match the thing: червен отбор, червена топка.",
        "On the Bulgarian flag, white stands for peace, green for the land and red for courage.",
        "Red and white are the colours of the мартеница, the little woollen decorations Bulgarians wear in March for good health.",
        "Bulgaria's Rose Valley grows pink roses for rose oil, and Bulgaria makes a huge share of the world's rose oil."
      ],
      section: "s1",
      description: "Name colours and describe things.",
      objectives: ["Name 10 colours", "Describe a team kit", "Notice how colour words change their ending"],
      vocab: "Colours",
      grammar: ["Adjective agreement: червен отбор, червена топка, червено куче"],
      lessons: [
        { id: "u6l1", title: "Rainbow 1", type: "words", words: ["red", "blue", "green", "yellow", "white"], sentences: ["t_redball", "t_bluesky"] },
        { id: "u6l2", title: "Rainbow 2", type: "words", words: ["black", "orange", "purple", "pink", "brown"], sentences: ["t_blackdog", "t_browndog"] },
        { id: "u6l3", title: "Team kits", type: "sentences", sentences: ["s_redteam", "s_grass", "s_bluekit", "s_sun"] },
        { id: "u6boss", title: "Colour Master", type: "boss" }
      ]
    },
    {
      id: "u7", title: "Swimming", emoji: "🏊", color: "teal",
      facts: [
        "Bulgaria has a long coast on the Black Sea – Черно море! Famous beaches include Sunny Beach and Golden Sands.",
        "The Black Sea is less salty than most seas, because big rivers like the Danube flow into it.",
        "Bulgaria has hundreds of natural hot springs, and some towns have warm outdoor pools you can swim in all year round.",
        "In 2007, Bulgarian swimmer Petar Stoychev set a record for the fastest swim across the English Channel."
      ],
      section: "s1",
      description: "Talk about swimming, the pool and the sea.",
      objectives: ["Talk about the pool and the beach", "Say how fast you swim", "Say what you do in the water"],
      vocab: "Swimming and the seaside",
      grammar: ["Verbs: плувам, скачам", "в / във – in: във водата"],
      lessons: [
        { id: "u7l1", title: "In the pool", type: "words", words: ["swim", "pool", "water", "fast", "slow"], sentences: ["t_swimfast", "t_coldwater"] },
        { id: "u7l2", title: "At the beach", type: "words", words: ["sea", "goggles", "jump", "fish", "beach"], sentences: ["t_jumpin", "t_fishsea"] },
        { id: "u7l3", title: "Splash!", type: "sentences", sentences: ["s_loveswim", "s_bigpool", "s_swimsea", "s_goggles"] },
        { id: "u7boss", title: "Gold Medal", type: "boss" }
      ]
    },
    {
      id: "u8", title: "Build & Mine", emoji: "⛏️", color: "stone",
      facts: [
        "Bulgaria has thousands of caves! In Magura Cave there are paintings made by people thousands of years ago.",
        "Long ago the Thracians lived in Bulgaria and made amazing gold treasure. The Panagyurishte Treasure weighs over 6 kg!",
        "Some of the oldest gold jewellery in the world was found near Varna, in graves more than 6,000 years old.",
        "Rila Monastery, high in the mountains, has thick stone walls like a fortress."
      ],
      section: "s1",
      description: "Build, dig and explore with Minecraft-style words.",
      objectives: ["Name blocks, tools and creatures", "Say what you build and dig", "Describe a cave adventure"],
      vocab: "Building and mining",
      grammar: ["Past-tense preview: намерих (I found)", "Plurals: диамант → диаманти"],
      lessons: [
        { id: "u8l1", title: "Build it", type: "words", words: ["house", "stone", "tree", "sword", "pickaxe"], sentences: ["t_myhouse", "t_sword"] },
        { id: "u8l2", title: "Mine it", type: "words", words: ["build", "dig", "diamond", "zombie", "cave"], sentences: ["t_buildhouse", "t_founddiamond"] },
        { id: "u8l3", title: "Adventure", type: "sentences", sentences: ["s_digpick", "s_zombienight", "s_stonehouse", "s_cavediamonds"] },
        { id: "u8boss", title: "Diamond Miner", type: "boss" }
      ]
    },
    {
      id: "u9", title: "Animals", emoji: "🦁", color: "green",
      facts: [
        "Bulgarian dogs say 'бау-бау', cats say 'мяу' and roosters say 'кукуригу'!",
        "Brown bears, wolves and golden jackals all live in Bulgaria's forests and mountains.",
        "When Bulgarians see their first stork in spring, tradition says they take off their мартеница and tie it to a tree.",
        "A huge bird migration route passes over Bulgaria's coast, and hundreds of thousands of storks and eagles fly over every year."
      ],
      section: "s1",
      description: "Name animals on the farm and in the wild.",
      objectives: ["Name 10 animals", "Say what animals do", "Describe an animal"],
      vocab: "Farm and wild animals",
      grammar: ["Feminine 'the': котката, мечката", "Adjective agreement: голяма мечка"],
      lessons: [
        { id: "u9l1", title: "On the farm", type: "words", words: ["cat", "horse", "cow", "pig", "rabbit"], sentences: ["t_catsleeps", "t_cowmoo"] },
        { id: "u9l2", title: "In the wild", type: "words", words: ["bear", "wolf", "bird", "lion", "monkey"], sentences: ["t_bigbear", "t_birdflies"] },
        { id: "u9l3", title: "Animal stories", type: "sentences", sentences: ["s_dogcat", "s_lion", "s_wolf", "s_monkey"] },
        { id: "u9boss", title: "Animal Expert", type: "boss" }
      ]
    },
    {
      id: "u10", title: "Food & Drink", emoji: "🍎", color: "orange",
      facts: [
        "Bulgarian yoghurt is famous all over the world. A helpful bacterium in it is even named after Bulgaria: Lactobacillus bulgaricus!",
        "On New Year's Eve, Bulgarians hide little lucky charms inside a banitsa. Whoever finds one gets that luck!",
        "Шопска салата is Bulgaria's famous salad: tomatoes, cucumber, peppers and grated white cheese. Its colours match the flag!",
        "On hot summer days, Bulgarians love таратор, a cold soup made of yoghurt, cucumber and dill."
      ],
      section: "s1",
      description: "Ask for your favourite food and drink.",
      objectives: ["Name snacks and favourite foods", "Ask for food politely", "Say something is tasty"],
      vocab: "Food and drink",
      grammar: ["искам – I want", "Polite asking: …, моля"],
      lessons: [
        { id: "u10l1", title: "Snack time", type: "words", words: ["bread", "milk", "apple", "banana", "cheese"], sentences: ["t_lovebananas", "t_milkplease"] },
        { id: "u10l2", title: "Yummy!", type: "words", words: ["banitsa", "pizza", "icecream", "want", "tasty"], sentences: ["t_wantpizza", "t_tastyice"] },
        { id: "u10l3", title: "At the table", type: "sentences", sentences: ["s_wantbanitsa", "s_eatapple", "s_tastybanitsa", "s_hungry"] },
        { id: "u10boss", title: "Master Chef", type: "boss" }
      ]
    },

    // ===== Section 1 (continued) – playable =====
    {
      id: "u11", title: "All about me", emoji: "🙋", color: "blue",
      section: "s1",
      description: "Say your name, your age and where you're from.",
      objectives: ["Say your name and age", "Say where you're from and where you live", "Ask a new friend their name and age"],
      vocab: "Introducing yourself",
      grammar: ["съм with all the pronouns: аз съм, ти си, той е…", "казвам се – 'I am called'"],
      facts: [
        "Bulgarians celebrate 'name days' (имен ден): a party on the day of the saint who shares your name!",
        "About 8 million people around the world speak Bulgarian.",
        "Иван and Мария are among the most common names in Bulgaria.",
        "Bulgarians say their age as 'I am on ten years': Аз съм на десет години."
      ],
      lessons: [
        { id: "u11l1", title: "My name is…", type: "words", words: ["callme", "boy", "girl", "youare", "years"], sentences: ["t_myname", "t_boy"], tips: ["tip_sam"] },
        { id: "u11l2", title: "Where I'm from", type: "words", words: ["from", "england", "bulgaria", "live", "speak"], sentences: ["t_fromeng", "t_speakbg"], tips: ["tip_reading"] },
        { id: "u11l3", title: "Meet a new friend", type: "sentences", sentences: ["s_yourname", "s_howold", "s_tenyears", "s_shefrom"] },
        { id: "u11boss", title: "Introduction Pro", type: "boss" }
      ]
    },
    {
      id: "u12", title: "Asking questions", emoji: "❓", color: "teal",
      section: "s1",
      description: "Ask who, what, where, when and why – and say when you don't know.",
      objectives: ["Ask questions with кой, какво, къде, кога and защо", "Say 'I don't know' and 'I don't understand'", "Ask yes/no questions with ли"],
      vocab: "Question words and short answers",
      grammar: ["Questions and negation: не знам", "Yes/no questions with ли: Имаш ли…?"],
      facts: [
        "Careful with nodding in Bulgaria – a nod can mean 'no'! If you're not sure, say да or не out loud.",
        "To be polite to grown-ups they don't know, Bulgarians say вие (the 'you' for more than one person) instead of ти.",
        "Most Bulgarian question words start with к (кой, какво, къде, кога, колко), a bit like 'wh' in English.",
        "If a Bulgarian didn't hear you, they might say 'Моля?', which here means 'Pardon?'"
      ],
      lessons: [
        { id: "u12l1", title: "Who, what, where?", type: "words", words: ["who", "what", "where", "when", "why"], sentences: ["t_wheredog", "t_whohe"], tips: ["tip_questions"] },
        { id: "u12l2", title: "I don't know!", type: "words", words: ["howmany", "this", "know", "understand", "youhave"], sentences: ["t_whatthis", "t_dontknow"], tips: ["tip_ne_li"] },
        { id: "u12l3", title: "Twenty questions", type: "sentences", sentences: ["s_howmanydogs", "s_whyrun", "s_dontunderstand", "s_havebrother"] },
        { id: "u12boss", title: "Question Master", type: "boss" }
      ]
    },
    {
      id: "u13", title: "Everyday things", emoji: "🎒", color: "stone",
      section: "s1",
      description: "Name things in your bag and your room, and say where they are.",
      objectives: ["Name 10 everyday things", "Say where something is (in, on, under)", "Tell masculine, feminine and neuter words apart, and add 'the'"],
      vocab: "School bag and bedroom objects",
      grammar: ["Noun gender: masculine, feminine, neuter", "'The' on the end: книгата, леглото, столът", "в, на, под – in, on, under"],
      facts: [
        "In Bulgaria, the school year starts on 15 September – and children bring flowers for their teacher!",
        "Bulgarian has no word for 'a', but it sticks 'the' onto the end of words: книга, книгата.",
        "In Bulgarian primary schools, children usually keep the same class teacher for their first four years.",
        "Телефон sounds almost the same in lots of languages, because it was made from Greek words meaning 'far' and 'sound'."
      ],
      lessons: [
        { id: "u13l1", title: "In my bag", type: "words", words: ["bag", "book", "pencil", "phone", "clock"], sentences: ["t_myphone", "t_bookbag"], tips: ["tip_gender"] },
        { id: "u13l2", title: "In my room", type: "words", words: ["chair", "door", "window", "bed", "key"], sentences: ["t_keychair", "t_closedoor"], tips: ["tip_article"] },
        { id: "u13l3", title: "Where's my pencil?", type: "sentences", sentences: ["s_wherepencil", "s_underbed", "s_twobooks", "s_windowopen"] },
        { id: "u13boss", title: "Treasure Hunter", type: "boss" }
      ]
    },
    {
      id: "u14", title: "Numbers 11–20", emoji: "🔢", color: "orange",
      section: "s1",
      description: "Count from 11 to 20, say ages and do quick sums.",
      objectives: ["Count from 11 to 20", "Say how old people are", "Do simple sums out loud"],
      vocab: "Numbers 11–20",
      grammar: ["How 11–19 are built: един-на-десет", "Counting form: два молива"],
      facts: [
        "Bulgaria started using the euro in January 2026. Before that, money was counted in лева and стотинки.",
        "A football team has единадесет (eleven) players on the pitch.",
        "Bulgaria joined the European Union in 2007.",
        "The Bulgarian alphabet has 30 letters, and you already know them all!"
      ],
      lessons: [
        { id: "u14l1", title: "11 to 15", type: "words", words: ["n11", "n12", "n13", "n14", "n15"], sentences: ["t_eleven", "t_fifteendogs"], tips: ["tip_teens"] },
        { id: "u14l2", title: "16 to 20", type: "words", words: ["n16", "n17", "n18", "n19", "n20"], sentences: ["t_twentymin", "t_points"], tips: ["tip_counting"] },
        { id: "u14l3", title: "Match maths", type: "sentences", sentences: ["s_tenfive", "s_eleventeam", "s_brother13", "s_sixteenfour"] },
        { id: "u14boss", title: "Number Legend", type: "boss" }
      ]
    },

    // ===== Sections 2–5: Units 15–30 are playable; the rest are PLANNED (outlines + unchecked samples) =====
    {
      id: "u15", title: "At the café", emoji: "☕", color: "brown",
      section: "s2",
      description: "Order drinks and snacks politely.",
      objectives: ["Order a drink or a snack politely", "Ask 'Can I have…?'", "Say what you want to eat or drink"],
      vocab: "Drinks, snacks, polite requests",
      grammar: ["Може ли…? – Can I have…?", "един / една / едно – 'one' matches the word", "No 'to': искам да пия (I want to drink)"],
      facts: [
        "When Bulgarians hand you something, they often say 'Заповядайте!' – it means 'Here you are!' or 'Help yourself!'",
        "Bulgarians love айрян, a cold drink of yoghurt mixed with water and a pinch of salt.",
        "Боза is a thick, sweet Bulgarian drink made from grain. Lots of people have it with banitsa for breakfast.",
        "Мурсалски чай is a herbal tea from the Rhodope mountains that Bulgarians drink to stay healthy."
      ],
      lessons: [
        { id: "u15l1", title: "Drinks & snacks", type: "words", words: ["juice", "tea", "hotchoc", "cake", "sandwich"], sentences: ["t_onejuice", "t_tastycake"], tips: ["tip_one"] },
        { id: "u15l2", title: "Can I have…?", type: "words", words: ["canihave", "bill", "menu", "waiter", "drink"], sentences: ["t_menuplease", "t_drinktea"], tips: ["tip_da"] },
        { id: "u15l3", title: "Ordering", type: "sentences", sentences: ["s_wouldlike", "s_order", "s_howmuchcake", "s_thebill"] },
        { id: "u15boss", title: "Café Champion", type: "boss" }
      ]
    },
    {
      id: "u16", title: "My home", emoji: "🏡", color: "green",
      section: "s2",
      description: "Talk about the rooms in your home and where things are.",
      objectives: ["Name rooms and furniture", "Say where things are with в, на, под, до", "Describe your bedroom"],
      vocab: "Rooms and furniture",
      grammar: ["Prepositions: в, на, под, над, до, зад, между", "'The' revisited: стаята, кухнята", "'My' agreement: моят / моята / моето / моите"],
      facts: [
        "Lots of Bulgarian families have a вила – a little holiday house in the countryside or the mountains for weekends.",
        "Many Bulgarians live in tall blocks of flats, called блокове.",
        "In Bulgarian villages, families used to hang strings of red peppers to dry in the sun outside their houses.",
        "Plovdiv's Old Town has colourful houses from the 1800s, with upper floors that stick out over the street."
      ],
      lessons: [
        { id: "u16l1", title: "Rooms", type: "words", words: ["room", "kitchen", "bathroom", "livingroom", "garden"], sentences: ["t_mumkitchen", "t_smallroom"], tips: ["tip_my"] },
        { id: "u16l2", title: "Where is it?", type: "words", words: ["under", "above", "nextto", "behind", "between"], sentences: ["t_catunder", "t_lampabove"], tips: ["tip_where"] },
        { id: "u16l3", title: "My bedroom", type: "sentences", sentences: ["s_myroom", "s_bednext", "s_ballbehind", "s_dogbetween"] },
        { id: "u16boss", title: "Home Hero", type: "boss" }
      ]
    },
    {
      id: "u17", title: "Clothes & shopping", emoji: "👕", color: "pink",
      section: "s2",
      description: "Name clothes, describe them and buy them.",
      objectives: ["Name everyday clothes", "Describe clothes by colour", "Say what you like and ask the price"],
      vocab: "Clothes and shops",
      grammar: ["Adjective agreement revisited: синя шапка, синьо яке, сини обувки", "харесва ми – 'it pleases me'", "Short pronouns: го, я, ги (it, them)"],
      facts: [
        "Bulgarian football fans call Levski Sofia 'сините' (the blues) and CSKA Sofia 'червените' (the reds) – after the colour of their kits!",
        "Traditional Bulgarian folk costumes are covered in bright embroidery, with lots of red.",
        "In Bulgaria you usually take your shoes off in someone's home, and they might give you slippers called пантофи.",
        "Кукери wear huge furry costumes and big bells to scare away bad spirits in winter."
      ],
      lessons: [
        { id: "u17l1", title: "Clothes", type: "words", words: ["tshirt", "shoes", "jacket", "hat", "trousers"], sentences: ["t_bluehat", "t_shoesunder"], tips: ["tip_colours2"] },
        { id: "u17l2", title: "What I like", type: "words", words: ["ilike", "idontlike", "newword", "old", "size"], sentences: ["t_likejacket", "t_dontlikehat"], tips: ["tip_like"] },
        { id: "u17l3", title: "At the shop", type: "sentences", sentences: ["s_blueshirt", "s_jacketprice", "s_newshoes", "s_iwantit"], tips: ["tip_it"] },
        { id: "u17boss", title: "Style Star", type: "boss" }
      ]
    },
    {
      id: "u18", title: "Numbers & money", emoji: "💶", color: "orange",
      section: "s2",
      description: "Count to 100 and talk about prices.",
      objectives: ["Count in tens up to 100", "Understand prices in euro and cents", "Pay and ask how much something costs"],
      vocab: "Numbers 30–100, money and prices",
      grammar: ["Tens with и: двадесет и едно", "Counting form revisited: два цента", "Adjective agreement: евтина тениска"],
      facts: [
        "Bulgarian euro coins have their own designs – one shows the Madara Rider, a horseman carved into a cliff more than 1,000 years ago!",
        "Before the euro, Bulgaria's money was the лев, an old word for 'lion'!",
        "100 стотинки made 1 лев, just like 100 cents make 1 euro.",
        "Bulgaria was founded in the year 681 and has kept the same name ever since."
      ],
      lessons: [
        { id: "u18l1", title: "Counting to 100", type: "words", words: ["n30", "n40", "n50", "n60", "n100"], sentences: ["t_thirtyfive", "t_hundredpoints"], tips: ["tip_tens"] },
        { id: "u18l2", title: "Prices", type: "words", words: ["euro", "cent", "money", "costs", "expensive", "cheap"], sentences: ["t_fiveeuro", "t_tooexpensive"], tips: ["tip_money"] },
        { id: "u18l3", title: "Pocket money", type: "sentences", sentences: ["s_twentyeuro", "s_ballcosts", "s_cheapshirt", "s_paycard"] },
        { id: "u18boss", title: "Money Master", type: "boss" }
      ]
    },
    {
      id: "u19", title: "Days & time", emoji: "📅", color: "blue",
      section: "s2",
      description: "Say the days of the week and tell the time.",
      objectives: ["Say the days of the week", "Tell the time on the hour and half hour", "Say when something happens"],
      vocab: "Days, times, today and tomorrow",
      grammar: ["в / във + day: в събота, във вторник", "Часът е… – It's … o'clock", "Counting form again: в пет часа"],
      facts: [
        "The Bulgarian week starts on Monday – and the day names hide numbers: вторник comes from 'second', четвъртък from 'four' and петък from 'five'!",
        "Bulgaria is two hours ahead of the UK: when it's 12 o'clock in London, it's 2 o'clock in Sofia.",
        "Bulgarians write the date with the day first, like 15.09.2026.",
        "Събота (Saturday) comes from the same old word as 'Sabbath'."
      ],
      lessons: [
        { id: "u19l1", title: "Days of the week", type: "words", words: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], sentences: ["t_satmatch", "t_lovefriday"], tips: ["tip_days"] },
        { id: "u19l2", title: "What time is it?", type: "words", words: ["today", "tomorrow", "yesterday", "hour", "half", "week"], sentences: ["t_whattime", "t_halfthree"], tips: ["tip_time"] },
        { id: "u19l3", title: "My week", type: "sentences", sentences: ["s_todaymonday", "s_swimtuesday", "s_matchfive", "s_tomorrowsat"] },
        { id: "u19boss", title: "Time Lord", type: "boss" }
      ]
    },
    {
      id: "u20", title: "My day", emoji: "⏰", color: "purple",
      section: "s2",
      description: "Describe your daily routine.",
      objectives: ["Describe your morning and evening", "Say when you do things", "Say what someone else does"],
      vocab: "Daily routine verbs",
      grammar: ["Present-tense patterns: аз ставам, ти ставаш, той става…", "Verbs with се / си: мия се, лягам си", "Second pattern: играя / играеш, уча / учиш"],
      facts: [
        "Some Bulgarian schools have two 'shifts' – one group of children goes to school in the morning and another in the afternoon!",
        "Bulgarian summer holidays are long. For many children they last from late June until 15 September!",
        "Before a meal, Bulgarians say 'Добър апетит!', which means 'Enjoy your meal!'",
        "At bedtime Bulgarians say 'Лека нощ!' (Good night) and 'Приятни сънища!' (Sweet dreams)."
      ],
      lessons: [
        { id: "u20l1", title: "Morning", type: "words", words: ["getup", "breakfast", "wash", "getdressed", "teeth"], sentences: ["t_upatseven", "t_dressfast"], tips: ["tip_present"] },
        { id: "u20l2", title: "After school", type: "words", words: ["study", "play", "watch", "dinner", "gotobed"], sentences: ["t_afterschool", "t_bedatnine"], tips: ["tip_se"] },
        { id: "u20l3", title: "My whole day", type: "sentences", sentences: ["s_getupearly", "s_brotherwatches", "s_dinnerseven", "s_dogsleeps"], tips: ["tip_play"] },
        { id: "u20boss", title: "Routine Rocket", type: "boss" }
      ]
    },
    {
      id: "u21", title: "Likes & hobbies", emoji: "🎮", color: "teal",
      section: "s2",
      description: "Talk about what you like doing.",
      objectives: ["Say what you like and don't like", "Talk about your hobbies", "Ask a friend what they like doing"],
      vocab: "Hobbies and free time",
      grammar: ["обичам да + verb: обичам да чета", "харесва ми / не ми харесва", "Neuter adjectives: забавно, скучно, любимо хоби"],
      facts: [
        "Bulgaria's famous folk dance is the хоро – everyone holds hands in a long line and dances together, especially at weddings and festivals!",
        "Bulgarian folk music often uses tricky rhythms with 7 or 11 beats, which makes the dances fast and fun.",
        "A Bulgarian folk song, sung by Valya Balkanska, was sent into space on the Voyager spacecraft in 1977!",
        "Chess is popular in Bulgaria. Veselin Topalov became world chess champion in 2005."
      ],
      lessons: [
        { id: "u21l1", title: "Hobbies", type: "words", words: ["draw", "read", "music", "bike", "game"], sentences: ["t_lovereading", "t_bikepark"], tips: ["tip_love_doing"] },
        { id: "u21l2", title: "I like it!", type: "words", words: ["dance", "sing", "hobby", "fun", "boring"], sentences: ["t_sistersings", "t_swimfun"], tips: ["tip_fun"] },
        { id: "u21l3", title: "Free time chat", type: "sentences", sentences: ["s_likedoing", "s_playminecraft", "s_nodance", "s_favhobby"] },
        { id: "u21boss", title: "Hobby Hero", type: "boss" }
      ]
    },
    {
      id: "u22", title: "Jobs", emoji: "👩‍🚒", color: "red",
      section: "s2",
      description: "Name jobs and say what you want to be.",
      objectives: ["Name common jobs", "Say what family members do", "Say what you want to be"],
      vocab: "Jobs and workplaces",
      grammar: ["Male and female job words: учител / учителка", "No 'a': Мама е лекар.", "искам да стана… – I want to become…"],
      facts: [
        "Hristo Stoichkov was a футболист – and later he became the треньор (coach) of Bulgaria's national team!",
        "Georgi Ivanov became the first Bulgarian in space in 1979.",
        "John Atanasoff, whose father was Bulgarian, helped invent the first electronic digital computer.",
        "Rose pickers in the Rose Valley start work at dawn, because the petals smell strongest early in the morning."
      ],
      lessons: [
        { id: "u22l1", title: "Jobs", type: "words", words: ["teacher", "doctor", "firefighter", "footballer", "chef"], sentences: ["t_mumdoctor", "t_goodteacher"], tips: ["tip_jobs"] },
        { id: "u22l2", title: "What do they do?", type: "words", words: ["police", "vet", "pilot", "work", "become"], sentences: ["t_dadhospital", "t_becomevet"], tips: ["tip_become"] },
        { id: "u22l3", title: "When I grow up", type: "sentences", sentences: ["s_whatbecome", "s_wantfootballer", "s_auntteacher", "s_chefpizza"] },
        { id: "u22boss", title: "Dream Job", type: "boss" }
      ]
    },
    {
      id: "u23", title: "Around town", emoji: "🏙️", color: "stone",
      section: "s3",
      description: "Name places in town and say where you're going.",
      objectives: ["Name places in town", "Say where you're going", "Ask if there's a place nearby"],
      vocab: "Places in town",
      grammar: ["отивам в / на…", "има / няма – there is / there isn't", "Questions with ли revisited: Има ли…?"],
      facts: [
        "Sofia, Bulgaria's capital, is one of the oldest cities in Europe. Its motto is 'Расте, но не старее' – 'It grows, but does not grow old'!",
        "Plovdiv is one of the oldest cities in Europe, and its Roman theatre is still used for concerts.",
        "Sofia sits right next to Vitosha mountain, so people can go hiking and skiing near the capital.",
        "Veliko Tarnovo was once Bulgaria's capital. Its hilltop fortress, Tsarevets, has a sound and light show at night."
      ],
      lessons: [
        { id: "u23l1", title: "Places", type: "words", words: ["shop", "park", "hospital", "station", "library"], sentences: ["t_bigshop", "t_trainstation"], tips: ["tip_going"] },
        { id: "u23l2", title: "Where are you going?", type: "words", words: ["going", "school", "cinema", "thereis", "thereisnt"], sentences: ["t_goingschool", "t_cinematown"], tips: ["tip_ima"] },
        { id: "u23l3", title: "Is there a…?", type: "sentences", sentences: ["s_shopnearby", "s_parkdog", "s_nolibrary", "s_wherehospital"] },
        { id: "u23boss", title: "Town Explorer", type: "boss" }
      ]
    },
    {
      id: "u24", title: "Directions", emoji: "🧭", color: "green",
      section: "s3",
      description: "Ask the way and follow simple directions.",
      objectives: ["Ask the way politely", "Understand left, right and straight on", "Give simple directions"],
      vocab: "Directions",
      grammar: ["Commands: завий, върви, спри (polite: завийте, вървете, спрете)", "Prepositions: на ъгъла, срещу"],
      facts: [
        "Bulgaria's national stadium in Sofia is named after Васил Левски, the country's great national hero.",
        "Vasil Levski is called 'the Apostle of Freedom' and is one of Bulgaria's greatest heroes.",
        "The Danube river makes up much of Bulgaria's northern border with Romania.",
        "Bulgaria's neighbours are Romania, Serbia, North Macedonia, Greece and Turkey."
      ],
      lessons: [
        { id: "u24l1", title: "Left and right", type: "words", words: ["left", "right", "straight", "corner", "street"], sentences: ["t_shopleft", "t_longstreet"], tips: ["tip_directions"] },
        { id: "u24l2", title: "Excuse me, where is…?", type: "words", words: ["excuseme", "turn", "gocmd", "stop", "opposite"], sentences: ["t_wherepark", "t_stopred"], tips: ["tip_command"] },
        { id: "u24l3", title: "Find the stadium", type: "sentences", sentences: ["s_wherestadium", "s_goright", "s_oncorner", "s_oppschool"] },
        { id: "u24boss", title: "Super Navigator", type: "boss" }
      ]
    },
    {
      id: "u25", title: "Getting about", emoji: "🚌", color: "blue",
      section: "s3",
      description: "Talk about buses, trains and how you travel.",
      objectives: ["Name kinds of transport", "Say how you get to places", "Understand stops and bus numbers"],
      vocab: "Public transport",
      grammar: ["с + transport: с автобус, със самолет", "пеша – on foot", "карам – drive / ride"],
      facts: [
        "Sofia's metro opened in 1998 – and while digging the tunnels, builders found the ruins of an ancient Roman town right under the city centre!",
        "The Danube Bridge between Ruse in Bulgaria and Giurgiu in Romania has a road on top and a railway underneath.",
        "A narrow little mountain railway winds through the Rila and Rhodope mountains between Septemvri and Dobrinishte.",
        "Avramovo, on that mountain railway, is the highest railway station in the Balkans."
      ],
      lessons: [
        { id: "u25l1", title: "Transport", type: "words", words: ["bus", "train", "metro", "taxi", "tram"], sentences: ["t_fasttrain", "t_buscoming"], tips: ["tip_with"] },
        { id: "u25l2", title: "How do you get there?", type: "words", words: ["busstop", "onfoot", "car", "drive", "wait"], sentences: ["t_waitstop", "t_mumcar"], tips: ["tip_drive"] },
        { id: "u25l3", title: "On the bus", type: "sentences", sentences: ["s_walkschool", "s_busnine", "s_sofiametro", "s_seabytrain"] },
        { id: "u25boss", title: "Ticket to Ride", type: "boss" }
      ]
    },
    {
      id: "u26", title: "Travel & tickets", emoji: "🎫", color: "purple",
      section: "s3",
      description: "Buy tickets and talk about trips.",
      objectives: ["Buy a ticket", "Say where and when you're travelling", "Name things you pack"],
      vocab: "Travel and luggage",
      grammar: ["за + place: билет за Варна", "'We' forms: отиваме, пътуваме, летим", "Counting form again: два билета"],
      facts: [
        "Varna and Burgas are Bulgaria's big cities on the Black Sea – in summer, lots of Bulgarian families head there for their ваканция!",
        "Nesebar is an ancient town on a tiny peninsula in the Black Sea, full of old churches.",
        "The Seven Rila Lakes sit high in the mountains, and each one has a name, like 'The Eye' and 'The Kidney'.",
        "Bulgaria's busiest airport is in Sofia, and Varna and Burgas have big airports for summer holidays."
      ],
      lessons: [
        { id: "u26l1", title: "Packing", type: "words", words: ["suitcase", "passport", "holiday", "photo", "sunglasses"], sentences: ["t_heavycase", "t_wherepassport"], tips: ["tip_for"] },
        { id: "u26l2", title: "Tickets please", type: "words", words: ["ticket", "plane", "airport", "travel", "city"], sentences: ["t_ticketsofia", "t_flyplane"], tips: ["tip_we"] },
        { id: "u26l3", title: "Off to the seaside", type: "sentences", sentences: ["s_twotickets", "s_seasummer", "s_bigairport", "s_loveholiday"] },
        { id: "u26boss", title: "World Traveller", type: "boss" }
      ]
    },
    {
      id: "u27", title: "At the hotel", emoji: "🏨", color: "teal",
      section: "s3",
      description: "Check in and ask for things on holiday.",
      objectives: ["Say you have a booking", "Ask about your room", "Ask for something you need"],
      vocab: "Hotels and holiday rooms",
      grammar: ["имам in full: имаме резервация", "Може ли…? revisited", "Problems: … не работи (… doesn't work)"],
      facts: [
        "In winter, Bulgarian mountain hotels fill up with skiers – Bansko and Borovets are famous ski resorts!",
        "Borovets is Bulgaria's oldest ski resort. It started more than 100 years ago as a royal hunting spot.",
        "Pamporovo, in the Rhodope mountains, is known as one of the sunniest ski resorts in Bulgaria.",
        "Velingrad is called the spa capital of the Balkans because it has so many warm mineral springs."
      ],
      lessons: [
        { id: "u27l1", title: "Check in", type: "words", words: ["hotel", "booking", "reception", "lift", "floor"], sentences: ["t_hotelsea", "t_thirdfloor"], tips: ["tip_have"] },
        { id: "u27l2", title: "Our room", type: "words", words: ["hotelbreakfast", "pillow", "shower", "view", "quiet"], sentences: ["t_breakfasteight", "t_showerbroken"], tips: ["tip_mayi"] },
        { id: "u27l3", title: "Can we have…?", type: "sentences", sentences: ["s_havebooking", "s_morepillow", "s_seaview", "s_wherelift"] },
        { id: "u27boss", title: "Five-Star Guest", type: "boss" }
      ]
    },
    {
      id: "u28", title: "Weather & seasons", emoji: "☀️", color: "orange",
      section: "s3",
      description: "Describe the weather and the seasons.",
      objectives: ["Describe today's weather", "Name the seasons", "Say what you do in each season"],
      vocab: "Weather and seasons",
      grammar: ["Sentences with no 'it': вали, студено е", "през + season: през лятото", "Preview of ще: утре ще вали"],
      facts: [
        "Bulgaria has four proper seasons – hot summers on the Black Sea and snowy mountain winters. Musala (2,925 m) is the highest peak in the whole Balkans!",
        "The Belogradchik Rocks are giant red rock towers in north-west Bulgaria, shaped by wind and rain over millions of years.",
        "Old stories say the Rhodope mountains were the home of Orpheus, the musician from Greek myths.",
        "Bulgarians say Баба Марта (Granny March) is moody: when she smiles the sun shines, and when she's cross it snows!"
      ],
      lessons: [
        { id: "u28l1", title: "What's the weather?", type: "words", words: ["sun", "rain", "snow", "wind", "cloud"], sentences: ["t_rainingtoday", "t_lotsofsnow"], tips: ["tip_weather"] },
        { id: "u28l2", title: "Seasons", type: "words", words: ["spring", "summer", "autumn", "winter", "hot", "cold"], sentences: ["t_coldwinter", "t_hotsummer"], tips: ["tip_seasons"] },
        { id: "u28l3", title: "Weather report", type: "sentences", sentences: ["s_sunnywarm", "s_willrain", "s_snowman", "s_autumnleaves"] },
        { id: "u28boss", title: "Weather Wizard", type: "boss" }
      ]
    },
    {
      id: "u29", title: "Making plans", emoji: "🗓️", color: "pink",
      section: "s3",
      description: "Suggest things to do and arrange to meet friends.",
      objectives: ["Suggest doing something together", "Say yes or no politely", "Agree a time and place"],
      vocab: "Plans and invitations",
      grammar: ["Хайде да… – Let's…", "ще + verb for plans: ще играем", "Agreement again: зает / заета"],
      facts: [
        "Bulgarians use 'Хайде!' all the time – it can mean 'Let's go!', 'Come on!' and even 'Bye!'",
        "Bulgarians often call a party a купон.",
        "When Bulgarians make a toast, they say 'Наздраве!', which means 'To your health!'",
        "Bulgarians love saying 'Няма проблем!', which means 'No problem!'"
      ],
      lessons: [
        { id: "u29l1", title: "Let's…!", type: "words", words: ["letsgo", "together", "free", "meetup", "later"], sentences: ["t_letsplay", "t_freetoday"], tips: ["tip_lets"] },
        { id: "u29l2", title: "Yes or no", type: "words", words: ["ofcourse", "maybe", "sorry", "busy", "great"], sentences: ["t_maybetomorrow", "t_sorrybusy"], tips: ["tip_answers"] },
        { id: "u29l3", title: "Meet at the park", type: "sentences", sentences: ["s_letspark", "s_attime", "s_seeyoufive", "s_playtogether"] },
        { id: "u29boss", title: "Party Planner", type: "boss" }
      ]
    },
    {
      id: "u30", title: "Asking for help", emoji: "🆘", color: "red",
      section: "s3",
      description: "Ask for help and explain a problem.",
      objectives: ["Ask for help politely", "Say what the problem is", "Understand simple instructions"],
      vocab: "Help and everyday problems",
      grammar: ["Polite commands + short pronoun: помогнете ми", "Past preview: изгубих, намерих", "Agreement: изгубен / изгубена"],
      facts: [
        "In Bulgaria, like everywhere in Europe, you can call 112 in an emergency – for the police, firefighters or an ambulance.",
        "Bulgaria's Mountain Rescue Service helps hikers and skiers who get lost or hurt in the mountains.",
        "Saint Ivan of Rila is the patron saint of Bulgaria.",
        "Pharmacies in Bulgaria have a green cross sign, so they're easy to spot if you need help."
      ],
      lessons: [
        { id: "u30l1", title: "Help!", type: "words", words: ["help", "policecar", "problem", "lost", "careful"], sentences: ["t_dogranaway", "t_imlost"], tips: ["tip_help"] },
        { id: "u30l2", title: "What's wrong?", type: "words", words: ["ilost", "ifound", "helpme", "scared", "call"], sentences: ["t_foundkey", "t_scareddark"], tips: ["tip_pastpeek"] },
        { id: "u30l3", title: "Lost!", type: "sentences", sentences: ["s_canyouhelp", "s_lostphone", "s_callpolice", "s_mumsnumber"] },
        { id: "u30boss", title: "Problem Solver", type: "boss" }
      ]
    },
    {
      id: "u31", title: "Health & the pharmacy", emoji: "💊", color: "green",
      section: "s3",
      description: "Say what hurts and get help at the pharmacy.",
      objectives: ["Name parts of the body", "Say what hurts", "Ask for something at the pharmacy"],
      vocab: "Body, health, pharmacy",
      grammar: ["Боли ме… – it hurts (me)", "трябва да – you need to"],
      facts: [
        "Bulgarian yoghurt is famous for its healthy bacteria, called Lactobacillus bulgaricus – named after Bulgaria!",
        "When someone sneezes, Bulgarians say 'Наздраве!' – 'to your health!' They say it when clinking glasses too.",
        "Bulgaria has hundreds of warm mineral springs. People have bathed in them for their health since Roman times.",
        "When they have a cold, many Bulgarians drink мурсалски чай – a herbal tea from the Rhodope mountains."
      ],
      lessons: [
        { id: "u31l1", title: "My body", type: "words", words: ["head", "hand", "leg", "tooth", "mouth"], sentences: ["t_dogfourlegs", "t_brushteeth"] },
        { id: "u31l2", title: "What hurts?", type: "words", words: ["hurts", "sick", "fever", "pharmacy", "medicine"], sentences: ["t_headache", "t_imsick"], tips: ["tip_hurts"] },
        { id: "u31l3", title: "At the pharmacy", type: "sentences", sentences: ["s_legache", "s_temperature", "s_gotodoctor", "s_wherepharmacy"], tips: ["tip_need"] },
        { id: "u31boss", title: "Health Hero", type: "boss" }
      ]
    },
    {
      id: "u32", title: "Describing people", emoji: "🧑", color: "brown",
      section: "s4",
      description: "Describe what people look like.",
      objectives: ["Describe hair, eyes and height", "Describe a friend or a footballer", "Make describing words match the person"],
      vocab: "Appearance",
      grammar: ["Adjective agreement: висок / висока / високо / високи", "има + feature: има къса коса"],
      facts: [
        "Hristo Stoichkov, Bulgaria's most famous footballer, won the Ballon d'Or in 1994 as the best player in Europe.",
        "Dimitar Berbatov, a tall and very calm Bulgarian striker, played for Tottenham and Manchester United.",
        "Bulgarian describing words have four forms – for a boy, a girl, a thing and many: висок, висока, високо, високи.",
        "In Bulgarian, someone with blond hair is русокос and someone with dark hair is чернокос – 'blond-haired' and 'black-haired'."
      ],
      lessons: [
        { id: "u32l1", title: "Faces", type: "words", words: ["hair", "eyes", "beard", "tall", "shortp"], sentences: ["t_tallbrother", "t_longhair"], tips: ["tip_agree"] },
        { id: "u32l2", title: "Tall or short?", type: "words", words: ["long", "shorth", "blond", "moustache", "strong"], sentences: ["t_blondsister", "t_dadmoustache"] },
        { id: "u32l3", title: "Guess who!", type: "sentences", sentences: ["s_browneyes", "s_shorthair", "s_tallplayer", "s_strongdad"], tips: ["tip_hasfeature"] },
        { id: "u32boss", title: "Guess Who Champion", type: "boss" }
      ]
    },
    {
      id: "u33", title: "Feelings", emoji: "😊", color: "pink",
      section: "s4",
      description: "Say how you feel and why.",
      objectives: ["Say how you feel", "Ask how someone feels", "Say why with защото"],
      vocab: "Feelings",
      grammar: ["Agreement for boys and girls: щастлив / щастлива", "защото – because"],
      facts: [
        "In Bulgarian, 'I miss you' is 'Липсваш ми' – word for word, 'you are missing to me'.",
        "Bulgarian has a handy way to say what you feel like doing: 'Не ми се спи' means 'I don't feel like sleeping'!",
        "On 1 March (Баба Марта), Bulgarians give each other red-and-white martenitsi to wish health and happiness.",
        "When something goes wrong, Bulgarians might say 'Няма страшно!' – 'No worries, it's not scary!'"
      ],
      lessons: [
        { id: "u33l1", title: "Happy or sad?", type: "words", words: ["happy", "sad", "tired", "angry", "frightened"], sentences: ["t_veryhappy", "t_saddog"], tips: ["tip_feelagree"] },
        { id: "u33l2", title: "How do you feel?", type: "words", words: ["surprised", "proud", "calm", "bored", "because"], sentences: ["t_howfeel", "t_veryproud"] },
        { id: "u33l3", title: "Why?", type: "sentences", sentences: ["s_tiredfootball", "s_sadsister", "s_happywin", "s_boredrain"], tips: ["tip_because"] },
        { id: "u33boss", title: "Mood Master", type: "boss" }
      ]
    },
    {
      id: "u34", title: "Can & must", emoji: "💪", color: "orange",
      section: "s4",
      description: "Say what you can do and what you have to do.",
      objectives: ["Say what you can and can't do", "Say what you must do", "Ask for permission"],
      vocab: "Abilities, rules, permission",
      grammar: ["мога да, трябва да, може ли да – Bulgarian uses да + verb instead of 'to …'"],
      facts: [
        "The Bulgarian school year always starts on 15 September, with flowers for the teachers.",
        "The best mark in a Bulgarian school is 6 (Отличен – excellent) and the lowest is 2.",
        "Bulgarian children start first grade at about 7 years old.",
        "The summer holiday in Bulgarian schools is long – younger pupils get about three months off!"
      ],
      lessons: [
        { id: "u34l1", title: "I can!", type: "words", words: ["ican", "icant", "must", "homework", "forbidden"], sentences: ["t_canswimfast", "t_cantfindball"], tips: ["tip_canmust"] },
        { id: "u34l2", title: "I have to…", type: "words", words: ["iclean", "ifeed", "walkdog", "ihelp", "allowed"], sentences: ["t_mustbed", "t_helpmum"] },
        { id: "u34l3", title: "Can I…?", type: "sentences", sentences: ["s_homework", "s_canplayout", "s_cleanroom", "s_noswim"], tips: ["tip_permission"] },
        { id: "u34boss", title: "Can-Do Champion", type: "boss" }
      ]
    },
    {
      id: "u35", title: "Right now", emoji: "▶️", color: "blue",
      section: "s4",
      description: "Say what you and others are doing right now.",
      objectives: ["Say what you're doing now", "Say what others are doing", "Ask 'What are you doing?'"],
      vocab: "Everyday actions",
      grammar: ["One present tense for 'I play' and 'I'm playing'", "Full present: аз играя, ти играеш, той играе, ние играем, вие играете, те играят"],
      facts: [
        "A goal in Bulgarian is гол – the word came from English!",
        "Bulgarian has no '-ing' form: 'I play' and 'I'm playing' are both играя.",
        "Bulgaria's national football stadium is the Vasil Levski Stadium in Sofia.",
        "At the 1994 World Cup in the USA, Bulgaria beat Germany and reached the semi-finals!"
      ],
      lessons: [
        { id: "u35l1", title: "Now!", type: "words", words: ["now", "ido", "listen", "iwrite", "cook"], sentences: ["t_whatdoing", "t_listenmusic"], tips: ["tip_now"] },
        { id: "u35l2", title: "What are they doing?", type: "words", words: ["think", "playmusic", "cry", "lookfor", "laugh"], sentences: ["t_sisterpiano", "t_whycry"], tips: ["tip_presentfull"] },
        { id: "u35l3", title: "Live commentary", type: "sentences", sentences: ["s_watchmatch", "s_scoresgoal", "s_singdance", "s_wewait"] },
        { id: "u35boss", title: "Live Commentator", type: "boss" }
      ]
    },
    {
      id: "u36", title: "What I did", emoji: "⏪", color: "purple",
      section: "s4",
      description: "Talk about things you did.",
      objectives: ["Say what you did yesterday", "Talk about a trip or a match", "Ask 'What did you do?'"],
      vocab: "Past events",
      grammar: ["Common past forms: бях, играх, ходих, видях", "вчера – yesterday"],
      facts: [
        "Bulgaria is one of Europe's oldest countries – it has had the same name since the year 681!",
        "The oldest gold treasure in the world, about 6,500 years old, was found near Varna in Bulgaria.",
        "Plovdiv is one of the oldest cities in Europe – people have lived there for about 6,000 years.",
        "Bulgarian has a special past tense for things you only heard about: 'Той играл' means 'he played (so they say)'."
      ],
      lessons: [
        { id: "u36l1", title: "Yesterday", type: "words", words: ["iwas", "iplayed", "iwent", "isaw", "iate"], sentences: ["t_yesterdayfootball", "t_sawbigdog"], tips: ["tip_pastx"] },
        { id: "u36l2", title: "Where were you?", type: "words", words: ["iwatched", "islept", "ibought", "imade", "lastweek"], sentences: ["t_watchedfilm", "t_slepttill"] },
        { id: "u36l3", title: "My weekend", type: "sentences", sentences: ["s_wewereseaside", "s_boughtball", "s_lastweekpool", "s_whatweekend"], tips: ["tip_pastwe"] },
        { id: "u36boss", title: "Time Traveller", type: "boss" }
      ]
    },
    {
      id: "u37", title: "Future plans", emoji: "⏩", color: "teal",
      section: "s4",
      description: "Say what you will do.",
      objectives: ["Say what you will do", "Talk about the weekend or the summer", "Say what you won't do"],
      vocab: "Plans and the future",
      grammar: ["ще + verb: ще играя", "няма да – won't: няма да ходя"],
      facts: [
        "Bulgaria started using the euro on 1 January 2026, saying goodbye to its old money, the lev.",
        "On New Year's Day, Bulgarian children tap grown-ups on the back with a decorated stick called a сурвачка to wish them luck for the year ahead.",
        "Bulgarians like to say 'Утре е нов ден' – 'Tomorrow is a new day.'",
        "Bulgarian ski resorts like Bansko and Borovets are busy from about December to April."
      ],
      lessons: [
        { id: "u37l1", title: "Tomorrow", type: "words", words: ["will", "wont", "soon", "nextweek", "dayaftertomorrow"], sentences: ["t_tomorrowswim", "t_summersoon"], tips: ["tip_will"] },
        { id: "u37l2", title: "This summer", type: "words", words: ["camp", "hope", "dream", "trip", "rest"], sentences: ["t_hopewin", "t_wellgocamp"] },
        { id: "u37l3", title: "Won't!", type: "sentences", sentences: ["s_wontschool", "s_nextweekmatch", "s_dreamfootballer", "s_summersea"], tips: ["tip_wont"] },
        { id: "u37boss", title: "Future Planner", type: "boss" }
      ]
    },
    {
      id: "u38", title: "Comparing", emoji: "⚖️", color: "red",
      section: "s4",
      description: "Compare people, animals and things.",
      objectives: ["Compare two things", "Say which is the best", "Compare footballers or animals"],
      vocab: "Comparisons",
      grammar: ["по- (more): по-голям – bigger", "най- (most): най-голям – biggest", "от – than"],
      facts: [
        "Musala (2,925 m) in the Rila mountains is the highest peak in the whole Balkans.",
        "The Danube, Europe's second-longest river, forms most of Bulgaria's border with Romania.",
        "The Iskar is the longest river that flows only through Bulgaria. It even runs through Sofia!",
        "Bulgaria's Black Sea coast is about 380 km long – full of sandy beaches."
      ],
      lessons: [
        { id: "u38l1", title: "Bigger, faster", type: "words", words: ["bigger", "smaller", "faster", "slower", "taller"], sentences: ["t_elephantbigger", "t_snailslower"], tips: ["tip_more"] },
        { id: "u38l2", title: "The best!", type: "words", words: ["best", "better", "worst", "same", "different"], sentences: ["t_youbest", "t_shoesdifferent"], tips: ["tip_most"] },
        { id: "u38l3", title: "Top trumps", type: "sentences", sentences: ["s_lionstronger", "s_bestfootballer", "s_carfaster", "s_sameball"] },
        { id: "u38boss", title: "Top Trumps Champion", type: "boss" }
      ]
    },
    {
      id: "u39", title: "Reasons & choices", emoji: "🤔", color: "stone",
      section: "s4",
      description: "Explain why and say what you prefer.",
      objectives: ["Say why with защото", "Say what you prefer", "Give a reason for a choice"],
      vocab: "Reasons and preferences",
      grammar: ["защото – because", "предпочитам – I prefer"],
      facts: [
        "A classic Bulgarian breakfast is баница (a cheesy pastry) with боза, a thick, sweet malt drink.",
        "Many Bulgarians celebrate their имен ден (name day), the saint's day of their name, as much as their birthday!",
        "When something is neither one thing nor the other, Bulgarians say 'Ни риба, ни рак' – 'neither fish nor crayfish'.",
        "A Bulgarian saying: 'Бързата работа – срам за майстора' – rushed work shames the craftsman. Take your time to choose!"
      ],
      lessons: [
        { id: "u39l1", title: "Because…", type: "words", words: ["prefer", "thatswhy", "choose", "decide", "instead"], sentences: ["t_preferswim", "t_chooseblue"], tips: ["tip_prefer"] },
        { id: "u39l2", title: "I prefer…", type: "words", words: ["interesting", "difficult", "easy", "dangerous", "useful"], sentences: ["t_mathshard", "t_thatseasy"] },
        { id: "u39l3", title: "Choose and explain", type: "sentences", sentences: ["s_preferfun", "s_rainsohome", "s_pizzainstead", "s_whychoose"], tips: ["tip_so"] },
        { id: "u39boss", title: "Decision Maker", type: "boss" }
      ]
    },
    {
      id: "u40", title: "Linking ideas", emoji: "🔗", color: "green",
      section: "s4",
      description: "Join ideas into longer sentences.",
      objectives: ["Join sentences with и, но and или", "Use когато (when) and че (that)", "Say a longer sentence about yourself"],
      vocab: "Linking words",
      grammar: ["и, а, но, или", "когато – when; че – that", "Preview: който / която – who / which"],
      facts: [
        "Bulgarian is one of the oldest written Slavic languages – people were writing books in it over 1,000 years ago.",
        "The tiny word 'а' can mean 'and', 'but' or 'while' – one letter, lots of jobs!",
        "Some Bulgarian words are made by joining two: самолет (plane) is само (self) + лет (flying) – a 'self-flyer'!",
        "Rila Monastery, founded over 1,000 years ago in the Rila mountains, is a UNESCO World Heritage Site."
      ],
      lessons: [
        { id: "u40l1", title: "And, but, or", type: "words", words: ["but", "or", "whenlink", "that", "andwhile"], sentences: ["t_footballnottennis", "t_teaorjuice"], tips: ["tip_link"] },
        { id: "u40l2", title: "When…", type: "words", words: ["before", "after", "whilst", "first", "finally"], sentences: ["t_firstbreakfast", "t_washbeforelunch"], tips: ["tip_when"] },
        { id: "u40l3", title: "Longer sentences", type: "sentences", sentences: ["s_whenrains", "s_thinkwin", "s_afterschool", "s_ireadhesleeps"] },
        { id: "u40boss", title: "Sentence Builder", type: "boss" }
      ]
    },
    {
      id: "u41", title: "Telling a story", emoji: "📖", color: "purple",
      section: "s5",
      description: "Tell a short story in the right order.",
      objectives: ["Tell a story in order", "Use first, then, in the end", "Say what happened suddenly"],
      vocab: "Story words",
      grammar: ["Past tense revisited", "Order words: първо, после, накрая"],
      facts: [
        "Bulgarian fairy tales start with 'Имало едно време…' – 'Once upon a time there was…'.",
        "Хитър Петър (Clever Peter) is a famous Bulgarian folk hero who always outsmarts greedy and boastful people.",
        "Ivan Vazov is called the 'Patriarch of Bulgarian literature'. His novel 'Под игото' (Under the Yoke) is read in every Bulgarian school.",
        "Many Bulgarian fairy tales end with '…и заживели щастливо' – '…and they lived happily ever after'."
      ],
      lessons: [
        { id: "u41l1", title: "Once upon a time", type: "words", words: ["onceupon", "suddenly", "once", "afterthat", "fairytale"], sentences: ["t_onceupondog", "t_suddenlyrain"], tips: ["tip_storyorder"] },
        { id: "u41l2", title: "And then…", type: "words", words: ["tell", "ishouted", "igotscared", "ranaway", "happened"], sentences: ["t_shoutedname", "t_whathappened"] },
        { id: "u41l3", title: "The lost dog", type: "sentences", sentences: ["s_firstpark", "s_dogranaway", "s_lookedeverywhere", "s_foundbench"], tips: ["tip_wedid"] },
        { id: "u41boss", title: "Storyteller", type: "boss" }
      ]
    },
    {
      id: "u42", title: "Every day or just once?", emoji: "🔁", color: "blue",
      section: "s5",
      description: "Tell apart things you usually do and things you finished.",
      objectives: ["Say what you usually do", "Say what you did once and finished", "Notice verb pairs like пиша / напиша"],
      vocab: "Habits and finished actions",
      grammar: ["Gentle introduction to verb aspect: пиша / напиша, ям / изям", "обикновено, винаги, понякога"],
      facts: [
        "Bulgarian verbs come in pairs, like пиша / напиша. Russian, Polish and Czech do this too!",
        "A Bulgarian saying: 'Повторението е майка на знанието' – 'Repetition is the mother of knowledge.' That's why we practise every day!",
        "Another saying: 'Капка по капка – вир става' – 'Drop by drop, a pool is made.' A little every day really adds up.",
        "Many Bulgarian children spend part of their summer holidays with their grandparents in the village – на село."
      ],
      lessons: [
        { id: "u42l1", title: "Usually…", type: "words", words: ["usually", "always", "sometimes", "never", "often"], sentences: ["t_usuallybanitsa", "t_alwayswalk"], tips: ["tip_howoften"] },
        { id: "u42l2", title: "Finished!", type: "words", words: ["everyday", "iwrote", "iateall", "iread", "ifinished"], sentences: ["t_atewhole", "t_finishedhomework"], tips: ["tip_aspect"] },
        { id: "u42l3", title: "Verb pairs", type: "sentences", sentences: ["s_everydayread", "s_readwhole", "s_sometimespizza", "s_nevertired"] },
        { id: "u42boss", title: "Habit Hero", type: "boss" }
      ]
    },
    {
      id: "u43", title: "School & learning", emoji: "🏫", color: "orange",
      section: "s5",
      description: "Talk about school subjects and your timetable.",
      objectives: ["Name school subjects", "Talk about your timetable", "Say what you're good at"],
      vocab: "School",
      grammar: ["по + subject: урок по математика", "добър съм по… – I'm good at…"],
      facts: [
        "Bulgarian school marks go from 2 (fail) to 6 (excellent) – so a шестица (six) is the best you can get!",
        "The first Bulgarian school to teach in Bulgarian (not Greek) opened in Gabrovo in 1835.",
        "Sofia University, Bulgaria's oldest university, was founded in 1888.",
        "A Bulgarian school lesson (час) lasts about 40 minutes, and the breaks between lessons are called междучасия."
      ],
      lessons: [
        { id: "u43l1", title: "Subjects", type: "words", words: ["maths", "english", "history", "geography", "breaktime"], sentences: ["t_mathslesson", "t_goodenglish"], tips: ["tip_po"] },
        { id: "u43l2", title: "My timetable", type: "words", words: ["mark", "test", "textbook", "timetable", "desk"], sentences: ["t_lovebreak", "t_newtextbook"], tips: ["tip_marks"] },
        { id: "u43l3", title: "Good at…", type: "sentences", sentences: ["s_gotsix", "s_testgeography", "s_forgottextbook", "s_firstlesson"] },
        { id: "u43boss", title: "Top of the Class", type: "boss" }
      ]
    },
    {
      id: "u44", title: "Tech & messages", emoji: "📱", color: "teal",
      section: "s5",
      description: "Talk about phones, games and messages.",
      objectives: ["Talk about phones, games and computers", "Write a short message", "Understand simple online words"],
      vocab: "Technology",
      grammar: ["Short pronouns revisited: обади ми се, пиши ми", "Imperatives revisited"],
      facts: [
        "Bulgarians answer the phone with 'Ало?' – just like 'Hello?'.",
        "The @ sign has a funny Bulgarian name: кльомба (a squiggle) – or маймунско а, 'monkey A'!",
        "Bulgarian-born engineer Peter Petroff helped create one of the world's first digital wristwatches.",
        "In the 2000s, many Bulgarian neighbourhoods built their own little internet networks – that's one reason internet in Bulgaria is fast today."
      ],
      lessons: [
        { id: "u44l1", title: "Gadgets", type: "words", words: ["computer", "message", "internet", "password", "battery"], sentences: ["t_writeme", "t_nobattery"], tips: ["tip_writeme"] },
        { id: "u44l2", title: "Online", type: "words", words: ["screen", "charge", "video", "tablet", "download"], sentences: ["t_videotablet", "t_passwordsecret"], tips: ["tip_safe"] },
        { id: "u44l3", title: "Send a message", type: "sentences", sentences: ["s_callme", "s_downloadedgame", "s_nointernet", "s_chargephone"] },
        { id: "u44boss", title: "Tech Wizard", type: "boss" }
      ]
    },
    {
      id: "u45", title: "Nature & outdoors", emoji: "🌲", color: "green",
      section: "s5",
      description: "Talk about forests, mountains and rivers.",
      objectives: ["Name things in nature", "Describe a walk or a camping trip", "Talk about Bulgaria's mountains"],
      vocab: "Nature",
      grammar: ["Prepositions revisited: в гората, на планината", "Plurals revisited"],
      facts: [
        "About a third of Bulgaria is covered in forest.",
        "Bulgaria has three national parks: Rila, Pirin and the Central Balkan.",
        "Devetashka Cave is so enormous that scenes from a Hollywood action film were shot inside it.",
        "Prohodna Cave has two eye-shaped holes in its roof, called 'Очите на Бога' – 'the Eyes of God'."
      ],
      lessons: [
        { id: "u45l1", title: "Forest & mountain", type: "words", words: ["forest", "mountain", "river", "lake", "waterfall"], sentences: ["t_goingmountains", "t_bearsforest"], tips: ["tip_naturemany"] },
        { id: "u45l2", title: "Let's go camping", type: "words", words: ["peak", "meadow", "tent", "hike", "campfire"], sentences: ["t_coldlake", "t_warmfire"], tips: ["tip_inon"] },
        { id: "u45l3", title: "Into the Rila mountains", type: "sentences", sentences: ["s_sevenlakes", "s_sleeptent", "s_climbedpeak", "s_riverforest"] },
        { id: "u45boss", title: "Mountain Explorer", type: "boss" }
      ]
    },
    {
      id: "u46", title: "Films, music & fun", emoji: "🎬", color: "red",
      section: "s5",
      description: "Talk about films, music and shows.",
      objectives: ["Talk about films, music and games", "Say what you watched or listened to", "Give a simple opinion"],
      vocab: "Entertainment",
      grammar: ["Past tense revisited: гледах, слушах", "харесва ми revisited"],
      facts: [
        "Bulgarian folk music uses tricky rhythms with 7, 9 or even 11 beats. Try clapping to a рученица – it has 7!",
        "The Bulgarian bagpipe is called a гайда, and it's traditionally made from a whole goatskin.",
        "The Bulgarian women's choir 'Le Mystère des Voix Bulgares' won a Grammy award in 1990.",
        "The Nu Boyana film studios near Sofia have been used to make big Hollywood action films."
      ],
      lessons: [
        { id: "u46l1", title: "Films & music", type: "words", words: ["film", "song", "concert", "theatre", "cartoon"], sentences: ["t_greatfilm", "t_favsong"], tips: ["tip_watchedlistened"] },
        { id: "u46l2", title: "Stars", type: "words", words: ["singer", "band", "actor", "series", "stage"], sentences: ["t_listenedmusic", "t_funnyactor"] },
        { id: "u46l3", title: "Review it!", type: "sentences", sentences: ["s_concerttonight", "s_favfilm", "s_bandsong", "s_recommendseries"], tips: ["tip_rateit"] },
        { id: "u46boss", title: "Movie Critic", type: "boss" }
      ]
    },
    {
      id: "u47", title: "Traditions & celebrations", emoji: "🎉", color: "pink",
      section: "s5",
      description: "Learn Bulgarian celebrations and how to wish people well.",
      objectives: ["Name Bulgarian celebrations", "Wish people well", "Explain a tradition like martenitsi"],
      vocab: "Celebrations and customs",
      grammar: ["Честит / Честита / Честито – agreement in wishes", "на + date: на първи март"],
      facts: [
        "3 March is Bulgaria's national day (Liberation Day). It marks the year 1878, when Bulgaria became free again.",
        "At Easter, Bulgarians knock painted eggs together. The egg that doesn't crack is the champion, called the борак!",
        "On Christmas Eve (Бъдни вечер), families eat an odd number of dishes with no meat – often 7, 9 or 11.",
        "On Еньовден (24 June), people pick herbs at sunrise, because they say the herbs are extra healing that day."
      ],
      lessons: [
        { id: "u47l1", title: "Celebrations", type: "words", words: ["celebration", "martenitsa", "christmas", "easter", "newyear"], sentences: ["t_happybirthday", "t_merrychristmas"], tips: ["tip_chestit"] },
        { id: "u47l2", title: "Happy birthday!", type: "words", words: ["present", "candle", "horo", "nameday", "wish"], sentences: ["t_happyholiday", "t_happynewyear"] },
        { id: "u47l3", title: "Baba Marta", type: "sentences", sentences: ["s_firstmarch", "s_eastereggs", "s_everyonehoro", "s_wishhealth"], tips: ["tip_onday"] },
        { id: "u47boss", title: "Party Planner", type: "boss" }
      ]
    },
    {
      id: "u48", title: "Opinions", emoji: "🗣️", color: "brown",
      section: "s5",
      description: "Give your opinion and agree or disagree politely.",
      objectives: ["Give your opinion", "Agree and disagree politely", "Explain why you think so"],
      vocab: "Opinions and discussion",
      grammar: ["мисля, че… – I think that…", "според мен – in my opinion", "съгласен / съгласна съм"],
      facts: [
        "A Bulgarian saying: 'Две глави мислят по-добре от една' – 'Two heads think better than one.'",
        "'Който пита, не греши' – 'Whoever asks doesn't go wrong.' Asking questions is how you learn!",
        "'Всяко чудо за три дни' – 'Every wonder lasts three days' – means people soon forget about a big fuss.",
        "You've reached the last unit! A Bulgarian would say: 'Браво! Ти си шампион!'"
      ],
      lessons: [
        { id: "u48l1", title: "I think…", type: "words", words: ["inmyopinion", "agree", "disagree", "youreright", "actually"], sentences: ["t_footballbest", "t_agreewithyou"], tips: ["tip_opinion"] },
        { id: "u48l2", title: "Agree or disagree?", type: "words", words: ["sure", "important", "however", "really", "true"], sentences: ["t_youreright", "t_reallygood"], tips: ["tip_boygirl"] },
        { id: "u48l3", title: "Debate!", type: "sentences", sentences: ["s_disagreeswim", "s_actuallyeasy", "s_importantteam", "s_notsure"] },
        { id: "u48boss", title: "Grand Champion", type: "boss" }
      ]
    }
  ]
};
