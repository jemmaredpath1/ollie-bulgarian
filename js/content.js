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
//
//  Units belong to a section and have: description, objectives
//  ("By the end, you can…"), vocab and grammar targets, and lessons.
//  A lesson with status: "planned" is an outline only – it can't be
//  played and never counts towards progress. Remove the status (and
//  add words/sentences) to make it playable.
//
//  ⚠️ All content needs checking by Jemma before Ollie plays.
// ============================================================

window.CONTENT = {
  words: {
    // ---------- Unit 1: Hello! ----------
    hello:      { bg: "здравей", en: "hello", pic: "🙋", say: "zdra-VEY", hint: "Shout it like a cheer: hoo-RAY, zdra-VEY!" },
    bye:        { bg: "чао", en: "bye", pic: "👋", say: "CHA-o", hint: "Just like 'ciao' in Italian!" },
    morning:    { bg: "добро утро", en: "good morning", pic: "🌅", say: "dob-RO OO-tro" },
    night:      { bg: "лека нощ", en: "good night", pic: "🌙", say: "LE-ka nosht", hint: "'Nosht' sounds like 'not' – it's NOT daytime!" },
    thanks:     { bg: "благодаря", en: "thank you", pic: "🙏", say: "bla-go-dar-YA", hint: "Blah… go… dare ya… THANKS!" },
    please:     { bg: "моля", en: "please", pic: "🥺", say: "MO-lya", hint: "Imagine a little mole saying 'MO-lya, please!'" },
    yes:        { bg: "да", en: "yes", pic: "👍", say: "da", hint: "'Da' sounds like 'yeah'. Bulgarians SHAKE their head for yes!" },
    no:         { bg: "не", en: "no", pic: "👎", say: "ne", hint: "'Ne' sounds like 'nay'. Bulgarians NOD their head for no!" },
    iam:        { bg: "аз съм", en: "I am", pic: "👦", say: "az suhm" },
    howareyou:  { bg: "как си", en: "how are you", pic: "🤔", say: "kak see" },
    fine:       { bg: "добре", en: "fine / good", pic: "😊", say: "dob-RE" },

    // ---------- Unit 2: My Dog ----------
    dog:        { bg: "куче", en: "dog", pic: "🐕", say: "KOO-che", hint: "A cuddly coochie-coo dog: KOO-che!" },
    puppy:      { bg: "кученце", en: "puppy", pic: "🐶", say: "KOO-chen-tse", hint: "A little куче = кученце." },
    paw:        { bg: "лапа", en: "paw", pic: "🐾", say: "LA-pa", hint: "The dog puts its LA-pa on your lap!" },
    tail:       { bg: "опашка", en: "tail", pic: "〰️", say: "o-PASH-ka", hint: "A wagging tail goes pash-pash-pash!" },
    bone:       { bg: "кокал", en: "bone", pic: "🦴", say: "KO-kal", hint: "A hungry dog CALLS for a KO-kal." },
    ball:       { bg: "топка", en: "ball", pic: "🎾", say: "TOP-ka", hint: "Throw the TOP-ka over the TOP of the fence!" },
    barks:      { bg: "лае", en: "barks", pic: "💬", say: "LA-e" },
    runs:       { bg: "бяга", en: "runs", pic: "💨", say: "BYA-ga", hint: "The dog runs off: BYE-ga!" },
    big:        { bg: "голям", en: "big", pic: "🐘", say: "go-LYAM" },
    small:      { bg: "малък", en: "small", pic: "🐭", say: "MA-luhk" },
    walk:       { bg: "разходка", en: "walk", pic: "🦮", say: "raz-HOD-ka" },

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
    team:       { bg: "отбор", en: "team", pic: "👕", say: "ot-BOR" },
    keeper:     { bg: "вратар", en: "goalkeeper", pic: "🧤", say: "vra-TAR", hint: "врата means 'door' – the keeper guards the door!" },
    match:      { bg: "мач", en: "match", pic: "🏟️", say: "mach", hint: "Just like 'match'!" },
    player:     { bg: "играч", en: "player", pic: "🏃", say: "ig-RACH" },
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
    grandpa:    { bg: "дядо", en: "grandpa", pic: "👴", say: "DYA-do", hint: "Дядо Коледа (Grandpa Christmas) is Father Christmas!" },
    baby:       { bg: "бебе", en: "baby", pic: "👶", say: "BE-be", hint: "BE-be sounds like 'baby'!" },
    friend:     { bg: "приятел", en: "friend", pic: "🤝", say: "pri-YA-tel" },
    love:       { bg: "обичам", en: "I love", pic: "❤️", say: "o-BI-cham" },

    // ---------- Unit 6: Colours ----------
    red:        { bg: "червен", en: "red", pic: "🔴", say: "cher-VEN", hint: "cher-VEN – a red CHERry!" },
    blue:       { bg: "син", en: "blue", pic: "🔵", say: "sin", hint: "The blue sea can be SEEN from far away: син!" },
    green:      { bg: "зелен", en: "green", pic: "🟢", say: "ze-LEN" },
    yellow:     { bg: "жълт", en: "yellow", pic: "🟡", say: "zhuhlt" },
    white:      { bg: "бял", en: "white", pic: "⚪", say: "byal" },
    black:      { bg: "черен", en: "black", pic: "⚫", say: "CHE-ren" },
    orange:     { bg: "оранжев", en: "orange", pic: "🟠", say: "o-RAN-zhev", hint: "Sounds like 'orange'!" },
    purple:     { bg: "лилав", en: "purple", pic: "🟣", say: "li-LAV", hint: "Like purple LILAC flowers!" },
    pink:       { bg: "розов", en: "pink", pic: "🩷", say: "RO-zov", hint: "Like a ROSE – roses are pink!" },
    brown:      { bg: "кафяв", en: "brown", pic: "🟤", say: "ka-FYAV", hint: "Brown like CAFÉ coffee: ka-FYAV!" },

    // ---------- Unit 7: Swimming ----------
    swim:       { bg: "плувам", en: "I swim", pic: "🤽", say: "PLOO-vam" },
    pool:       { bg: "басейн", en: "pool", pic: "🏊", say: "ba-SEYN", hint: "Sounds like 'basin' – a giant basin of water!" },
    water:      { bg: "вода", en: "water", pic: "💧", say: "vo-DA", hint: "Sounds like 'water' with a V: vo-DA!" },
    fast:       { bg: "бързо", en: "fast", pic: "⚡", say: "BUHR-zo" },
    slow:       { bg: "бавно", en: "slowly", pic: "🐌", say: "BAV-no" },
    sea:        { bg: "море", en: "sea", pic: "🌊", say: "mo-RE", hint: "Like 'marine' – things in the sea!" },
    goggles:    { bg: "очила", en: "goggles / glasses", pic: "🥽", say: "o-chi-LA", hint: "очи means 'eyes' – очила go on your eyes!" },
    jump:       { bg: "скачам", en: "I jump", pic: "🤸", say: "SKA-cham" },
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
    cave:       { bg: "пещера", en: "cave", pic: "🦇", say: "pe-SHTE-ra" },

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
    milk:       { bg: "мляко", en: "milk", pic: "🥛", say: "MLYA-ko", hint: "Sounds a bit like 'milk'!" },
    apple:      { bg: "ябълка", en: "apple", pic: "🍎", say: "YA-buhl-ka", hint: "Sounds a bit like 'apple-ka'!" },
    banana:     { bg: "банан", en: "banana", pic: "🍌", say: "ba-NAN", hint: "A banana with the end bitten off!" },
    cheese:     { bg: "сирене", en: "cheese", pic: "🧀", say: "SI-re-ne", hint: "Bulgarian white cheese – a bit like feta." },
    banitsa:    { bg: "баница", en: "banitsa (cheese pastry)", pic: "🥧", say: "BA-ni-tsa", hint: "A yummy Bulgarian pastry – many Bulgarians eat it for breakfast!" },
    pizza:      { bg: "пица", en: "pizza", pic: "🍕", say: "PEE-tsa", hint: "Just pizza!" },
    icecream:   { bg: "сладолед", en: "ice cream", pic: "🍦", say: "sla-do-LED", hint: "сладък (sweet) + лед (ice) = sweet ice!" },
    want:       { bg: "искам", en: "I want", pic: "🤲", say: "EES-kam" },
    tasty:      { bg: "вкусно", en: "tasty", pic: "🤤", say: "VKOOS-no" },

    // ---------- Unit 11: All about me ----------
    callme:     { bg: "казвам се", en: "my name is", pic: "🏷️", say: "KAZ-vam se", hint: "Word for word it means 'I call myself'." },
    boy:        { bg: "момче", en: "boy", pic: "🧒", say: "mom-CHE" },
    girl:       { bg: "момиче", en: "girl", pic: "👧", say: "mo-MEE-che", hint: "момче + и = момиче. Boy and girl differ by one letter!" },
    youare:     { bg: "ти си", en: "you are", pic: "👉", say: "tee see" },
    years:      { bg: "години", en: "years (old)", pic: "🎂", say: "go-DEE-ni" },
    from:       { bg: "от", en: "from", pic: "📍", say: "ot" },
    england:    { bg: "Англия", en: "England", pic: "💂", say: "AN-gli-ya", note: "Assumes Ollie lives in England – change if not." },
    bulgaria:   { bg: "България", en: "Bulgaria", pic: "🇧🇬", say: "buhl-GA-ri-ya" },
    live:       { bg: "живея", en: "I live", pic: "🏡", say: "zhi-VE-ya" },
    speak:      { bg: "говоря", en: "I speak", pic: "🗣️", say: "go-vo-RYA" },

    // ---------- Unit 12: Asking questions ----------
    who:        { bg: "кой", en: "who", pic: "🕵️", say: "koy" },
    what:       { bg: "какво", en: "what", pic: "❓", say: "kak-VO" },
    where:      { bg: "къде", en: "where", pic: "🗺️", say: "kuh-DE" },
    when:       { bg: "кога", en: "when", pic: "⏰", say: "ko-GA" },
    why:        { bg: "защо", en: "why", pic: "🤷", say: "zash-TO" },
    howmany:    { bg: "колко", en: "how many / how much", pic: "🧮", say: "KOL-ko" },
    this:       { bg: "това", en: "this", pic: "👇", say: "to-VA" },
    know:       { bg: "знам", en: "I know", pic: "💡", say: "znam" },
    understand: { bg: "разбирам", en: "I understand", pic: "🧠", say: "raz-BEE-ram" },
    youhave:    { bg: "имаш", en: "you have", pic: "🫴", say: "EE-mash", hint: "имам = I have, имаш = you have." },

    // ---------- Unit 13: Everyday things ----------
    bag:        { bg: "чанта", en: "bag", pic: "🎒", say: "CHAN-ta" },
    book:       { bg: "книга", en: "book", pic: "📕", say: "KNEE-ga" },
    pencil:     { bg: "молив", en: "pencil", pic: "✏️", say: "MO-liv" },
    phone:      { bg: "телефон", en: "phone", pic: "📱", say: "te-le-FON", hint: "Just like 'telephone'!" },
    clock:      { bg: "часовник", en: "watch / clock", pic: "⌚", say: "cha-SOV-nik", hint: "час means 'hour' – a часовник shows the hours." },
    chair:      { bg: "стол", en: "chair", pic: "🪑", say: "stol", hint: "Sounds like 'stool' – a stool is a kind of chair!" },
    door:       { bg: "врата", en: "door", pic: "🚪", say: "vra-TA", hint: "Remember вратар, the goalkeeper who guards the врата?" },
    window:     { bg: "прозорец", en: "window", pic: "🪟", say: "pro-ZO-rets" },
    bed:        { bg: "легло", en: "bed", pic: "🛏️", say: "leg-LO", hint: "You lie in your bed: leg-LO – put your LEGs LOw!" },
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
    n20:        { bg: "двадесет", en: "twenty", pic: "20", say: "DVA-de-set", hint: "два-десет = 'two tens'." }
  },

  // Sentences: "gap" is the word hidden in fill-the-gap questions.
  sentences: {
    s_hi:       { bg: "Здравей! Аз съм Оли.", en: "Hi! I am Ollie.", gap: "съм" },
    s_how:      { bg: "Как си?", en: "How are you?" },
    s_fine:     { bg: "Добре, благодаря.", en: "Fine, thank you.", gap: "благодаря" },
    s_night:    { bg: "Лека нощ, мамо!", en: "Good night, mum!", gap: "нощ" },

    s_havedog:  { bg: "Аз имам куче.", en: "I have a dog.", gap: "куче" },
    s_barks:    { bg: "Кучето лае.", en: "The dog barks.", gap: "лае" },
    s_runs:     { bg: "Кучето бяга бързо.", en: "The dog runs fast.", gap: "бяга" },
    s_bone:     { bg: "Кучето иска кокал.", en: "The dog wants a bone.", gap: "кокал" },

    s_score:    { bg: "Резултатът е две на едно.", en: "The score is two–one.", gap: "две" },
    s_number:   { bg: "Моят номер е седем.", en: "My number is seven.", gap: "седем" },
    s_twodogs:  { bg: "Имам две кучета.", en: "I have two dogs.", gap: "две" },
    s_threeballs: { bg: "Имам три топки.", en: "I have three balls.", gap: "три" },

    s_kick:     { bg: "Аз ритам топката.", en: "I kick the ball.", gap: "ритам" },
    s_play:     { bg: "Аз играя футбол.", en: "I play football.", gap: "футбол" },
    s_winning:  { bg: "Гол! Ние печелим!", en: "Goal! We are winning!", gap: "печелим" },
    s_best:     { bg: "Нашият отбор е най-добрият.", en: "Our team is the best.", gap: "отбор" },

    // Tiny sentences mixed into word lessons
    t_hisharo:  { bg: "Здравей, Шаро!", en: "Hello, Sharo!" },
    t_thanksmum:{ bg: "Благодаря, мамо!", en: "Thank you, mum!" },
    t_yesplease:{ bg: "Да, моля.", en: "Yes, please." },
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
    t_birdflies:{ bg: "Птицата лети.", en: "The bird flies." },
    t_lovebananas:{ bg: "Обичам банани.", en: "I love bananas." },
    t_milkplease:{ bg: "Мляко, моля.", en: "Milk, please." },
    t_wantpizza:{ bg: "Искам пица!", en: "I want pizza!" },
    t_tastyice: { bg: "Сладоледът е вкусен.", en: "The ice cream is tasty." },

    // Unit 5–10 sentence lessons
    s_brosis:   { bg: "Аз имам брат и сестра.", en: "I have a brother and a sister.", gap: "сестра" },
    s_granbanitsa:{ bg: "Моята баба прави баница.", en: "My grandma makes banitsa.", gap: "баба" },
    s_lovefamily:{ bg: "Обичам моето семейство.", en: "I love my family.", gap: "семейство" },
    s_dadfootball:{ bg: "Татко играе футбол с мен.", en: "Dad plays football with me.", gap: "Татко" },

    s_redteam:  { bg: "Моят отбор е червен.", en: "My team is red.", gap: "червен" },
    s_grass:    { bg: "Тревата е зелена.", en: "The grass is green.", gap: "зелена" },
    s_bluekit:  { bg: "Имам син екип.", en: "I have a blue kit.", gap: "син" },
    s_sun:      { bg: "Слънцето е жълто.", en: "The sun is yellow.", gap: "жълто" },

    s_loveswim: { bg: "Обичам да плувам.", en: "I love to swim.", gap: "плувам" },
    s_bigpool:  { bg: "Басейнът е голям.", en: "The pool is big.", gap: "голям" },
    s_swimsea:  { bg: "Аз плувам в морето.", en: "I swim in the sea.", gap: "морето" },
    s_goggles:  { bg: "Къде са моите очила?", en: "Where are my goggles?", gap: "очила" },

    s_digpick:  { bg: "Аз копая с кирка.", en: "I dig with a pickaxe.", gap: "кирка" },
    s_zombienight:{ bg: "Зомбито идва през нощта.", en: "The zombie comes at night.", gap: "нощта" },
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
    t_myname:         { bg: "Казвам се Оли.", en: "My name is Ollie." },
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
    s_howmanydogs:    { bg: "Колко кучета имаш?", en: "How many dogs do you have?", gap: "Колко" },
    s_whyrun:         { bg: "Защо бягаш?", en: "Why are you running?", gap: "Защо" },
    s_dontunderstand: { bg: "Не разбирам.", en: "I don't understand.", gap: "разбирам" },
    s_havebrother:    { bg: "Имаш ли брат?", en: "Do you have a brother?", gap: "ли" },

    // Unit 13
    t_myphone:        { bg: "Това е моят телефон.", en: "This is my phone." },
    t_bookbag:        { bg: "Книгата е в чантата.", en: "The book is in the bag." },
    t_keychair:       { bg: "Ключът е на стола.", en: "The key is on the chair." },
    t_closedoor:      { bg: "Затвори вратата, моля.", en: "Close the door, please." },
    s_wherepencil:    { bg: "Къде е моят молив?", en: "Where is my pencil?", gap: "молив" },
    s_underbed:       { bg: "Моливът е под леглото.", en: "The pencil is under the bed.", gap: "под" },
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
    s_sixteenfour:    { bg: "Шестнадесет и четири прави двадесет.", en: "Sixteen and four makes twenty.", gap: "двадесет", note: "Check: is 'прави' the natural word for sums here?" }
  },

  // Short grammar notes shown at the start of a lesson (and on the unit page).
  tips: {
    tip_sam: { title: "The verb съм (to be)", text: "аз съм – I am · ти си – you are · той / тя / то е – he / she / it is · ние сме – we are · вие сте – you are (more than one person, or polite) · те са – they are" },
    tip_reading: { title: "Reading help", text: "In the grey 'say' line, CAPITALS show the stressed part: zdra-VEY. ъ sounds like the 'u' in 'but', щ sounds like 'sht', and ж like the 's' in 'treasure'. When you don't need the 'say' line any more, switch it off in Settings." },
    tip_questions: { title: "Question words", text: "кой – who · какво – what · къде – where · кога – when · защо – why · колко – how many / how much. They go at the start of the question, just like in English." },
    tip_ne_li: { title: "не and ли", text: "Put не in front of the verb to say 'not': знам (I know) → не знам (I don't know). For a yes/no question, add ли after the important word: Имаш ли куче? (Do you have a dog?)" },
    tip_gender: { title: "He, she or it?", text: "Every Bulgarian noun is masculine, feminine or neuter. Usually: ends in a consonant → masculine (молив, телефон); ends in -а or -я → feminine (книга, чанта); ends in -о or -е → neuter (легло, куче)." },
    tip_article: { title: "'The' goes on the end!", text: "Bulgarian sticks 'the' onto the END of the word: книга → книгата (the book), легло → леглото (the bed), книги → книгите (the books). Masculine words take -ът or -а: столът / стола (the chair). Good news: Bulgarian nouns don't change their endings for different cases like Russian ones do.", note: "Check: the simplified -ът / -а explanation." },
    tip_teens: { title: "Making 11 to 20", text: "11–19 are built as 'one-on-ten': един-на-десет → единадесет, два-на-десет → дванадесет. 20 is 'two tens': двадесет. In everyday speech people shorten them – единайсет, дванайсет, двайсет – so you'll hear both." },
    tip_counting: { title: "Counting things", text: "After a number, masculine things take a special 'counting' ending: един молив, два молива, пет молива. For people, use the normal plural: пет играчи. If you get it wrong, people will still understand you!", note: "Check: simplified rule for the counting form." }
  },

  sections: [
    { id: "s1", title: "First steps", description: "Greetings, your favourite things, numbers, family and everyday words." },
    { id: "s2", title: "Everyday essentials", description: "Café, home, clothes, money, time, routines, hobbies and jobs." },
    { id: "s3", title: "Getting around", description: "Town, directions, transport, holidays, weather, plans and getting help." },
    { id: "s4", title: "Building conversations", description: "People, feelings, can and must, now, past, future, comparing and linking ideas." },
    { id: "s5", title: "More independent Bulgarian", description: "Stories, school, technology, nature, culture, traditions and opinions." }
  ],

  units: [
    {
      id: "u1", title: "Hello!", emoji: "👋", color: "green",
      fact: "In Bulgaria, people NOD their head to say no and SHAKE it to say yes – the opposite of England!",
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
      fact: "Шаро (Sharo) is a classic Bulgarian name for a dog – a bit like 'Rover' in English.",
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
      fact: "Bulgarians often shorten 'двадесет' (twenty) to 'двайсет' when they talk.",
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
      fact: "Bulgarian striker Hristo Stoichkov won the Ballon d'Or in 1994 – the award for the best footballer in the world!",
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
      fact: "In Bulgaria, lots of children spend their summer holidays with баба and дядо in the village!",
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
      fact: "The Bulgarian flag is бяло, зелено и червено – white, green and red! Colour words change their ending to match the thing: червен отбор, червена топка.",
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
      fact: "Bulgaria has a long coast on the Black Sea – Черно море! Famous beaches include Sunny Beach and Golden Sands.",
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
      fact: "Bulgaria has thousands of caves! In Magura Cave there are paintings made by people thousands of years ago.",
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
      fact: "Bulgarian dogs say 'бау-бау', cats say 'мяу' and roosters say 'кукуригу'!",
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
      fact: "Bulgarian yoghurt is famous all over the world. A helpful bacterium in it is even named after Bulgaria: Lactobacillus bulgaricus!",
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
      fact: "Bulgarians celebrate 'name days' (имен ден): a party on the day of the saint who shares your name!",
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
      fact: "Careful with nodding in Bulgaria – a nod can mean 'no'! If you're not sure, say да or не out loud.",
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
      fact: "In Bulgaria, the school year starts on 15 September – and children bring flowers for their teacher!",
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
      fact: "Bulgaria started using the euro in January 2026. Before that, money was counted in лева and стотинки.",
      lessons: [
        { id: "u14l1", title: "11 to 15", type: "words", words: ["n11", "n12", "n13", "n14", "n15"], sentences: ["t_eleven", "t_fifteendogs"], tips: ["tip_teens"] },
        { id: "u14l2", title: "16 to 20", type: "words", words: ["n16", "n17", "n18", "n19", "n20"], sentences: ["t_twentymin", "t_points"], tips: ["tip_counting"] },
        { id: "u14l3", title: "Match maths", type: "sentences", sentences: ["s_tenfive", "s_eleventeam", "s_brother13", "s_sixteenfour"] },
        { id: "u14boss", title: "Number Legend", type: "boss" }
      ]
    },

    // ===== Sections 2–5 – PLANNED: outlines and unchecked sample Bulgarian only =====
    {
      id: "u15", title: "At the café", emoji: "☕", color: "brown",
      section: "s2",
      description: "Order drinks and snacks politely.",
      objectives: ["Order a drink or a snack politely", "Ask 'Can I have…?'", "Say what you want to eat or drink"],
      vocab: "Drinks, snacks, polite requests",
      grammar: ["Може ли…? – Can I have…?", "First да-construction: искам да пия (I want to drink)"],
      sample: { words: [["сок", "juice"], ["торта", "cake"], ["горещ шоколад", "hot chocolate"]], sentences: [["Един сок, моля.", "A juice, please."], ["Може ли сметката?", "Could we have the bill?"], ["Искам да пия вода.", "I want to drink water."]] },
      lessons: [
        { id: "u15l1", title: "Drinks & snacks", type: "words", status: "planned", plan: "Introduce: сок, чай, горещ шоколад, торта, сандвич" },
        { id: "u15l2", title: "Can I have…?", type: "words", status: "planned", plan: "Practise: Искам…, моля / Може ли…?" },
        { id: "u15l3", title: "Ordering", type: "sentences", status: "planned", plan: "Apply: order for yourself and a friend at a café" },
        { id: "u15boss", title: "Café review", type: "boss", status: "planned", plan: "Review: café words with Food & Drink (Unit 10)" }
      ]
    },
    {
      id: "u16", title: "My home", emoji: "🏡", color: "green",
      section: "s2",
      description: "Talk about the rooms in your home and where things are.",
      objectives: ["Name rooms and furniture", "Say where things are with в, на, под, до", "Describe your bedroom"],
      vocab: "Rooms and furniture",
      grammar: ["Prepositions: в, на, под, над, до, зад", "'The' revisited: стаята, кухнята", "Possession: моята стая"],
      sample: { words: [["стая", "room"], ["кухня", "kitchen"], ["градина", "garden"]], sentences: [["Моята стая е малка.", "My room is small."], ["Котката е под леглото.", "The cat is under the bed."]] },
      lessons: [
        { id: "u16l1", title: "Rooms", type: "words", status: "planned", plan: "Introduce: стая, кухня, баня, градина, хол" },
        { id: "u16l2", title: "Where is it?", type: "words", status: "planned", plan: "Practise: Котката е под леглото." },
        { id: "u16l3", title: "My bedroom", type: "sentences", status: "planned", plan: "Apply: describe your room to a friend" },
        { id: "u16boss", title: "Home review", type: "boss", status: "planned", plan: "Review: home words with Everyday things (Unit 13)" }
      ]
    },
    {
      id: "u17", title: "Clothes & shopping", emoji: "👕", color: "pink",
      section: "s2",
      description: "Name clothes, describe them and buy them.",
      objectives: ["Name everyday clothes", "Describe clothes by colour", "Say what you like and ask the price"],
      vocab: "Clothes and shops",
      grammar: ["Adjective agreement revisited: червена тениска, червено яке, червени обувки", "Short pronouns: Харесва ми. Искам го."],
      sample: { words: [["тениска", "T-shirt"], ["обувки", "shoes"], ["яке", "jacket"]], sentences: [["Харесва ми синята тениска.", "I like the blue T-shirt."], ["Колко струва?", "How much is it?"]] },
      lessons: [
        { id: "u17l1", title: "Clothes", type: "words", status: "planned", plan: "Introduce: тениска, обувки, яке, шапка, панталон" },
        { id: "u17l2", title: "What I like", type: "words", status: "planned", plan: "Practise: Харесва ми синята тениска." },
        { id: "u17l3", title: "At the shop", type: "sentences", status: "planned", plan: "Apply: buy a football shirt" },
        { id: "u17boss", title: "Shopping review", type: "boss", status: "planned", plan: "Review: clothes with Colours (Unit 6)" }
      ]
    },
    {
      id: "u18", title: "Numbers & money", emoji: "💶", color: "orange",
      section: "s2",
      description: "Count to 100 and talk about prices.",
      objectives: ["Count in tens up to 100", "Understand prices in euro and cents", "Pay and ask how much something costs"],
      vocab: "Numbers 20–100, prices",
      grammar: ["Tens with и: двадесет и едно", "Counting form revisited: два евро? (check)"],
      sample: { words: [["петдесет", "fifty"], ["сто", "a hundred"], ["евро", "euro"]], sentences: [["Струва пет евро.", "It costs five euros."], ["Двадесет и едно.", "Twenty-one."]] },
      lessons: [
        { id: "u18l1", title: "Counting to 100", type: "words", status: "planned", plan: "Introduce: тридесет, четиридесет, петдесет, сто, евро, цент" },
        { id: "u18l2", title: "Prices", type: "words", status: "planned", plan: "Practise: Струва пет евро." },
        { id: "u18l3", title: "Pocket money", type: "sentences", status: "planned", plan: "Apply: buy snacks with pocket money" },
        { id: "u18boss", title: "Money review", type: "boss", status: "planned", plan: "Review: numbers 0–20 (Units 3 and 14)" }
      ]
    },
    {
      id: "u19", title: "Days & time", emoji: "📅", color: "blue",
      section: "s2",
      description: "Say the days of the week and tell the time.",
      objectives: ["Say the days of the week", "Tell the time on the hour and half hour", "Say when something happens"],
      vocab: "Days, times, today and tomorrow",
      grammar: ["в + day: в събота", "Часът е… – It's … o'clock"],
      sample: { words: [["понеделник", "Monday"], ["събота", "Saturday"], ["днес", "today"]], sentences: [["Колко е часът?", "What time is it?"], ["В събота имам мач.", "On Saturday I have a match."]] },
      lessons: [
        { id: "u19l1", title: "Days of the week", type: "words", status: "planned", plan: "Introduce: понеделник … неделя, днес, утре" },
        { id: "u19l2", title: "What time is it?", type: "words", status: "planned", plan: "Practise: Колко е часът? Часът е три." },
        { id: "u19l3", title: "My week", type: "sentences", status: "planned", plan: "Apply: plan your week of football and swimming" },
        { id: "u19boss", title: "Time review", type: "boss", status: "planned", plan: "Review: numbers (Units 3 and 14)" }
      ]
    },
    {
      id: "u20", title: "My day", emoji: "⏰", color: "purple",
      section: "s2",
      description: "Describe your daily routine.",
      objectives: ["Describe your morning and evening", "Say when you do things", "Say what someone else does"],
      vocab: "Daily routine verbs",
      grammar: ["Present-tense patterns: аз ставам, ти ставаш, той става", "Verbs with се / си: мия се, лягам си"],
      sample: { words: [["ставам", "I get up"], ["закусвам", "I have breakfast"], ["лягам си", "I go to bed"]], sentences: [["Ставам в седем часа.", "I get up at seven o'clock."], ["След училище играя футбол.", "After school I play football."]] },
      lessons: [
        { id: "u20l1", title: "Morning", type: "words", status: "planned", plan: "Introduce: ставам, закусвам, мия се, обличам се, лягам си" },
        { id: "u20l2", title: "After school", type: "words", status: "planned", plan: "Practise: Ставам в седем часа." },
        { id: "u20l3", title: "My whole day", type: "sentences", status: "planned", plan: "Apply: tell a friend about your day" },
        { id: "u20boss", title: "Routine review", type: "boss", status: "planned", plan: "Review: times (Unit 19)" }
      ]
    },
    {
      id: "u21", title: "Likes & hobbies", emoji: "🎮", color: "teal",
      section: "s2",
      description: "Talk about what you like doing.",
      objectives: ["Say what you like and don't like", "Talk about your hobbies", "Ask a friend what they like doing"],
      vocab: "Hobbies and free time",
      grammar: ["харесва ми / не ми харесва", "обичам да + verb"],
      sample: { words: [["рисувам", "I draw"], ["чета", "I read"], ["музика", "music"]], sentences: [["Обичам да играя Майнкрафт.", "I love playing Minecraft."], ["Какво обичаш да правиш?", "What do you like doing?"]] },
      lessons: [
        { id: "u21l1", title: "Hobbies", type: "words", status: "planned", plan: "Introduce: игра, рисувам, чета, музика, колело" },
        { id: "u21l2", title: "I like it!", type: "words", status: "planned", plan: "Practise: Обичам да играя Майнкрафт." },
        { id: "u21l3", title: "Free time chat", type: "sentences", status: "planned", plan: "Apply: interview a friend about hobbies" },
        { id: "u21boss", title: "Hobbies review", type: "boss", status: "planned", plan: "Review: football and swimming (Units 4 and 7)" }
      ]
    },
    {
      id: "u22", title: "Jobs", emoji: "👩‍🚒", color: "red",
      section: "s2",
      description: "Name jobs and say what you want to be.",
      objectives: ["Name common jobs", "Say what family members do", "Say what you want to be"],
      vocab: "Jobs and workplaces",
      grammar: ["Male and female job words: учител / учителка", "искам да стана… – I want to become…"],
      sample: { words: [["лекар", "doctor"], ["пожарникар", "firefighter"], ["футболист", "footballer"]], sentences: [["Майка ми е лекар.", "My mum is a doctor."], ["Искам да стана футболист.", "I want to become a footballer."]] },
      lessons: [
        { id: "u22l1", title: "Jobs", type: "words", status: "planned", plan: "Introduce: учител, лекар, пожарникар, футболист, готвач" },
        { id: "u22l2", title: "What do they do?", type: "words", status: "planned", plan: "Practise: Майка ми е лекар." },
        { id: "u22l3", title: "When I grow up", type: "sentences", status: "planned", plan: "Apply: talk about your dream job" },
        { id: "u22boss", title: "Jobs review", type: "boss", status: "planned", plan: "Review: family (Unit 5)" }
      ]
    },
    {
      id: "u23", title: "Around town", emoji: "🏙️", color: "stone",
      section: "s3",
      description: "Name places in town and say where you're going.",
      objectives: ["Name places in town", "Say where you're going", "Ask if there's a place nearby"],
      vocab: "Places in town",
      grammar: ["отивам в / на…", "има / няма – there is / there isn't"],
      sample: { words: [["магазин", "shop"], ["парк", "park"], ["гара", "station"]], sentences: [["Отивам в парка.", "I'm going to the park."], ["Има ли магазин наблизо?", "Is there a shop nearby?"]] },
      lessons: [
        { id: "u23l1", title: "Places", type: "words", status: "planned", plan: "Introduce: магазин, парк, болница, гара, библиотека" },
        { id: "u23l2", title: "Where are you going?", type: "words", status: "planned", plan: "Practise: Отивам в парка." },
        { id: "u23l3", title: "Is there a…?", type: "sentences", status: "planned", plan: "Apply: plan a trip around town" },
        { id: "u23boss", title: "Town review", type: "boss", status: "planned", plan: "Review: questions (Unit 12)" }
      ]
    },
    {
      id: "u24", title: "Directions", emoji: "🧭", color: "green",
      section: "s3",
      description: "Ask the way and follow simple directions.",
      objectives: ["Ask the way politely", "Understand left, right and straight on", "Give simple directions"],
      vocab: "Directions",
      grammar: ["Imperatives: завий, върви, спри", "Prepositions: до, срещу, зад"],
      sample: { words: [["наляво", "(to the) left"], ["надясно", "(to the) right"], ["направо", "straight on"]], sentences: [["Извинете, къде е гарата?", "Excuse me, where is the station?"], ["Завий наляво.", "Turn left."]] },
      lessons: [
        { id: "u24l1", title: "Left and right", type: "words", status: "planned", plan: "Introduce: наляво, надясно, направо, ъгъл, улица" },
        { id: "u24l2", title: "Excuse me, where is…?", type: "words", status: "planned", plan: "Practise: Завий наляво." },
        { id: "u24l3", title: "Find the stadium", type: "sentences", status: "planned", plan: "Apply: guide a friend to the stadium" },
        { id: "u24boss", title: "Directions review", type: "boss", status: "planned", plan: "Review: places in town (Unit 23)" }
      ]
    },
    {
      id: "u25", title: "Getting about", emoji: "🚌", color: "blue",
      section: "s3",
      description: "Talk about buses, trains and how you travel.",
      objectives: ["Name kinds of transport", "Say how you get to places", "Understand stops and bus numbers"],
      vocab: "Public transport",
      grammar: ["с + transport: с автобус, с влак", "пеша – on foot"],
      sample: { words: [["автобус", "bus"], ["влак", "train"], ["спирка", "stop"]], sentences: [["Ходя на училище пеша.", "I walk to school."], ["Чакам автобуса.", "I'm waiting for the bus."]] },
      lessons: [
        { id: "u25l1", title: "Transport", type: "words", status: "planned", plan: "Introduce: автобус, влак, метро, спирка, колело" },
        { id: "u25l2", title: "How do you get there?", type: "words", status: "planned", plan: "Practise: Ходя на училище пеша." },
        { id: "u25l3", title: "On the bus", type: "sentences", status: "planned", plan: "Apply: catch the right bus" },
        { id: "u25boss", title: "Transport review", type: "boss", status: "planned", plan: "Review: numbers 11–20 (Unit 14)" }
      ]
    },
    {
      id: "u26", title: "Travel & tickets", emoji: "🎫", color: "purple",
      section: "s3",
      description: "Buy tickets and talk about trips.",
      objectives: ["Buy a ticket", "Say where and when you're travelling", "Name things you pack"],
      vocab: "Travel and luggage",
      grammar: ["за + place: билет за Варна", "Going to: отиваме на море"],
      sample: { words: [["билет", "ticket"], ["куфар", "suitcase"], ["ваканция", "holiday"]], sentences: [["Един билет за Варна, моля.", "One ticket to Varna, please."], ["Отиваме на море.", "We're going to the seaside."]] },
      lessons: [
        { id: "u26l1", title: "Packing", type: "words", status: "planned", plan: "Introduce: билет, куфар, самолет, паспорт, ваканция" },
        { id: "u26l2", title: "Tickets please", type: "words", status: "planned", plan: "Practise: Един билет за Варна, моля." },
        { id: "u26l3", title: "Off to the seaside", type: "sentences", status: "planned", plan: "Apply: plan a trip to the Black Sea" },
        { id: "u26boss", title: "Travel review", type: "boss", status: "planned", plan: "Review: swimming and the beach (Unit 7)" }
      ]
    },
    {
      id: "u27", title: "At the hotel", emoji: "🏨", color: "teal",
      section: "s3",
      description: "Check in and ask for things on holiday.",
      objectives: ["Say you have a booking", "Ask about your room", "Ask for something you need"],
      vocab: "Hotels and holiday rooms",
      grammar: ["Може ли…? revisited", "имаме – we have"],
      sample: { words: [["хотел", "hotel"], ["резервация", "booking"], ["асансьор", "lift"]], sentences: [["Имаме резервация.", "We have a booking."], ["Може ли още една възглавница?", "Could we have another pillow?"]] },
      lessons: [
        { id: "u27l1", title: "Check in", type: "words", status: "planned", plan: "Introduce: хотел, резервация, асансьор, басейн, закуска" },
        { id: "u27l2", title: "Our room", type: "words", status: "planned", plan: "Practise: Имаме резервация." },
        { id: "u27l3", title: "Can we have…?", type: "sentences", status: "planned", plan: "Apply: ask for a pillow and the pool times" },
        { id: "u27boss", title: "Hotel review", type: "boss", status: "planned", plan: "Review: home (Unit 16)" }
      ]
    },
    {
      id: "u28", title: "Weather & seasons", emoji: "☀️", color: "orange",
      section: "s3",
      description: "Describe the weather and the seasons.",
      objectives: ["Describe today's weather", "Name the seasons", "Say what you do in each season"],
      vocab: "Weather, seasons, months",
      grammar: ["Sentences with no 'it': вали (it's raining), студено е (it's cold)", "Preview of ще: утре ще вали"],
      sample: { words: [["дъжд", "rain"], ["сняг", "snow"], ["лято", "summer"]], sentences: [["Днес е горещо.", "It's hot today."], ["Вали сняг!", "It's snowing!"]] },
      lessons: [
        { id: "u28l1", title: "What's the weather?", type: "words", status: "planned", plan: "Introduce: слънце, дъжд, сняг, вятър, лято, зима" },
        { id: "u28l2", title: "Seasons", type: "words", status: "planned", plan: "Practise: Днес е горещо." },
        { id: "u28l3", title: "Weather report", type: "sentences", status: "planned", plan: "Apply: give a weather report" },
        { id: "u28boss", title: "Weather review", type: "boss", status: "planned", plan: "Review: clothes (Unit 17)" }
      ]
    },
    {
      id: "u29", title: "Making plans", emoji: "🗓️", color: "pink",
      section: "s3",
      description: "Suggest things to do and arrange to meet friends.",
      objectives: ["Suggest doing something together", "Say yes or no politely", "Agree a time and place"],
      vocab: "Plans and invitations",
      grammar: ["Хайде да… – Let's…", "ще + verb for plans", "в колко часа? – at what time?"],
      sample: { words: [["хайде", "let's / come on"], ["заедно", "together"], ["свободен", "free"]], sentences: [["Хайде да играем футбол!", "Let's play football!"], ["Ще се видим в пет.", "See you at five."]] },
      lessons: [
        { id: "u29l1", title: "Let's…!", type: "words", status: "planned", plan: "Introduce: хайде, заедно, свободен, среща, после" },
        { id: "u29l2", title: "Yes or no", type: "words", status: "planned", plan: "Practise: Хайде да играем футбол!" },
        { id: "u29l3", title: "Meet at the park", type: "sentences", status: "planned", plan: "Apply: arrange to meet a friend" },
        { id: "u29boss", title: "Plans review", type: "boss", status: "planned", plan: "Review: days and time (Unit 19)" }
      ]
    },
    {
      id: "u30", title: "Asking for help", emoji: "🆘", color: "red",
      section: "s3",
      description: "Ask for help and explain a problem.",
      objectives: ["Ask for help politely", "Say what the problem is", "Understand simple instructions"],
      vocab: "Help and everyday problems",
      grammar: ["Imperative + short pronoun: помогнете ми", "Past preview: изгубих (I lost)"],
      sample: { words: [["помощ", "help"], ["изгубен", "lost"], ["извинете", "excuse me"]], sentences: [["Можете ли да ми помогнете?", "Can you help me?"], ["Изгубих си телефона.", "I've lost my phone."]] },
      lessons: [
        { id: "u30l1", title: "Help!", type: "words", status: "planned", plan: "Introduce: помощ, изгубен, полиция, проблем, извинете" },
        { id: "u30l2", title: "What's wrong?", type: "words", status: "planned", plan: "Practise: Можете ли да ми помогнете?" },
        { id: "u30l3", title: "Lost!", type: "sentences", status: "planned", plan: "Apply: you've lost your phone in town" },
        { id: "u30boss", title: "Help review", type: "boss", status: "planned", plan: "Review: directions (Unit 24)" }
      ]
    },
    {
      id: "u31", title: "Health & the pharmacy", emoji: "💊", color: "green",
      section: "s3",
      description: "Say what hurts and get help at the pharmacy.",
      objectives: ["Name parts of the body", "Say what hurts", "Ask for something at the pharmacy"],
      vocab: "Body, health, pharmacy",
      grammar: ["Боли ме… – it hurts (me)", "трябва да – you need to"],
      sample: { words: [["глава", "head"], ["корем", "tummy"], ["аптека", "pharmacy"]], sentences: [["Боли ме главата.", "I've got a headache."], ["Трябва да пиеш вода.", "You need to drink water."]] },
      lessons: [
        { id: "u31l1", title: "My body", type: "words", status: "planned", plan: "Introduce: глава, корем, ръка, крак, аптека" },
        { id: "u31l2", title: "What hurts?", type: "words", status: "planned", plan: "Practise: Боли ме главата." },
        { id: "u31l3", title: "At the pharmacy", type: "sentences", status: "planned", plan: "Apply: explain how you feel to a pharmacist" },
        { id: "u31boss", title: "Health review", type: "boss", status: "planned", plan: "Review: asking for help (Unit 30)" }
      ]
    },
    {
      id: "u32", title: "Describing people", emoji: "🧑", color: "brown",
      section: "s4",
      description: "Describe what people look like.",
      objectives: ["Describe hair, eyes and height", "Describe a friend or a footballer", "Make describing words match the person"],
      vocab: "Appearance",
      grammar: ["Adjective agreement: висок / висока / високо / високи", "има + feature: има къса коса"],
      sample: { words: [["висок", "tall"], ["коса", "hair"], ["очи", "eyes"]], sentences: [["Брат ми е висок.", "My brother is tall."], ["Тя има кафяви очи.", "She has brown eyes."]] },
      lessons: [
        { id: "u32l1", title: "Faces", type: "words", status: "planned", plan: "Introduce: висок, нисък, коса, очи, брада" },
        { id: "u32l2", title: "Tall or short?", type: "words", status: "planned", plan: "Practise: Тя има кафяви очи." },
        { id: "u32l3", title: "Guess who!", type: "sentences", status: "planned", plan: "Apply: play 'Guess who?'" },
        { id: "u32boss", title: "People review", type: "boss", status: "planned", plan: "Review: colours (Unit 6) and family (Unit 5)" }
      ]
    },
    {
      id: "u33", title: "Feelings", emoji: "😊", color: "pink",
      section: "s4",
      description: "Say how you feel and why.",
      objectives: ["Say how you feel", "Ask how someone feels", "Say why with защото"],
      vocab: "Feelings",
      grammar: ["Agreement for boys and girls: щастлив / щастлива", "защото – because"],
      sample: { words: [["щастлив", "happy"], ["тъжен", "sad"], ["уморен", "tired"]], sentences: [["Днес съм много щастлив.", "Today I'm very happy."], ["Уморен съм, защото играх футбол.", "I'm tired because I played football."]] },
      lessons: [
        { id: "u33l1", title: "Happy or sad?", type: "words", status: "planned", plan: "Introduce: щастлив, тъжен, уморен, ядосан, уплашен" },
        { id: "u33l2", title: "How do you feel?", type: "words", status: "planned", plan: "Practise: Днес съм много щастлив." },
        { id: "u33l3", title: "Why?", type: "sentences", status: "planned", plan: "Apply: talk about your day's ups and downs" },
        { id: "u33boss", title: "Feelings review", type: "boss", status: "planned", plan: "Review: describing people (Unit 32)" }
      ]
    },
    {
      id: "u34", title: "Can & must", emoji: "💪", color: "orange",
      section: "s4",
      description: "Say what you can do and what you have to do.",
      objectives: ["Say what you can and can't do", "Say what you must do", "Ask for permission"],
      vocab: "Abilities, rules, permission",
      grammar: ["мога да, трябва да, може ли да – Bulgarian uses да + verb instead of 'to …'"],
      sample: { words: [["мога", "I can"], ["трябва", "must / have to"], ["домашно", "homework"]], sentences: [["Мога да плувам бързо.", "I can swim fast."], ["Трябва да си напиша домашното.", "I have to do my homework."]] },
      lessons: [
        { id: "u34l1", title: "I can!", type: "words", status: "planned", plan: "Introduce: мога, трябва, може ли, карам колело, домашно" },
        { id: "u34l2", title: "I have to…", type: "words", status: "planned", plan: "Practise: Мога да плувам бързо." },
        { id: "u34l3", title: "Can I…?", type: "sentences", status: "planned", plan: "Apply: ask permission at home" },
        { id: "u34boss", title: "Can & must review", type: "boss", status: "planned", plan: "Review: hobbies (Unit 21)" }
      ]
    },
    {
      id: "u35", title: "Right now", emoji: "▶️", color: "blue",
      section: "s4",
      description: "Say what you and others are doing right now.",
      objectives: ["Say what you're doing now", "Say what others are doing", "Ask 'What are you doing?'"],
      vocab: "Everyday actions",
      grammar: ["One present tense for 'I play' and 'I'm playing'", "Full present: аз играя, ти играеш, той играе, ние играем, вие играете, те играят"],
      sample: { words: [["сега", "now"], ["гледам", "I watch"], ["слушам", "I listen"]], sentences: [["Какво правиш сега?", "What are you doing now?"], ["Гледам мач.", "I'm watching a match."]] },
      lessons: [
        { id: "u35l1", title: "Now!", type: "words", status: "planned", plan: "Introduce: сега, правя, гледам, слушам, чакам" },
        { id: "u35l2", title: "What are they doing?", type: "words", status: "planned", plan: "Practise: Какво правиш сега?" },
        { id: "u35l3", title: "Live commentary", type: "sentences", status: "planned", plan: "Apply: commentate a football match" },
        { id: "u35boss", title: "Present review", type: "boss", status: "planned", plan: "Review: football (Unit 4)" }
      ]
    },
    {
      id: "u36", title: "What I did", emoji: "⏪", color: "purple",
      section: "s4",
      description: "Talk about things you did.",
      objectives: ["Say what you did yesterday", "Talk about a trip or a match", "Ask 'What did you do?'"],
      vocab: "Past events",
      grammar: ["Common past forms: бях, играх, ходих, видях", "вчера – yesterday"],
      sample: { words: [["вчера", "yesterday"], ["бях", "I was"], ["видях", "I saw"]], sentences: [["Вчера играх футбол.", "Yesterday I played football."], ["Бяхме на море.", "We were at the seaside."]] },
      lessons: [
        { id: "u36l1", title: "Yesterday", type: "words", status: "planned", plan: "Introduce: вчера, бях, играх, ходих, видях" },
        { id: "u36l2", title: "Where were you?", type: "words", status: "planned", plan: "Practise: Вчера играх футбол." },
        { id: "u36l3", title: "My weekend", type: "sentences", status: "planned", plan: "Apply: tell a friend about your weekend" },
        { id: "u36boss", title: "Past review", type: "boss", status: "planned", plan: "Review: my day (Unit 20)" }
      ]
    },
    {
      id: "u37", title: "Future plans", emoji: "⏩", color: "teal",
      section: "s4",
      description: "Say what you will do.",
      objectives: ["Say what you will do", "Talk about the weekend or the summer", "Say what you won't do"],
      vocab: "Plans and the future",
      grammar: ["ще + verb: ще играя", "няма да – won't: няма да ходя"],
      sample: { words: [["ще", "will"], ["скоро", "soon"], ["следващата седмица", "next week"]], sentences: [["Утре ще плувам.", "Tomorrow I will swim."], ["Няма да ходя на училище.", "I won't go to school."]] },
      lessons: [
        { id: "u37l1", title: "Tomorrow", type: "words", status: "planned", plan: "Introduce: ще, утре, следващата седмица, лятото, скоро" },
        { id: "u37l2", title: "This summer", type: "words", status: "planned", plan: "Practise: Утре ще плувам." },
        { id: "u37l3", title: "Won't!", type: "sentences", status: "planned", plan: "Apply: plan your summer holiday" },
        { id: "u37boss", title: "Future review", type: "boss", status: "planned", plan: "Review: making plans (Unit 29)" }
      ]
    },
    {
      id: "u38", title: "Comparing", emoji: "⚖️", color: "red",
      section: "s4",
      description: "Compare people, animals and things.",
      objectives: ["Compare two things", "Say which is the best", "Compare footballers or animals"],
      vocab: "Comparisons",
      grammar: ["по- (more): по-голям – bigger", "най- (most): най-голям – biggest", "от – than"],
      sample: { words: [["по-голям", "bigger"], ["най-добър", "best"], ["от", "than"]], sentences: [["Лъвът е по-силен от котката.", "The lion is stronger than the cat."], ["Кой е най-добрият футболист?", "Who is the best footballer?"]] },
      lessons: [
        { id: "u38l1", title: "Bigger, faster", type: "words", status: "planned", plan: "Introduce: по-голям, по-бърз, най-добър, от" },
        { id: "u38l2", title: "The best!", type: "words", status: "planned", plan: "Practise: Лъвът е по-силен от котката." },
        { id: "u38l3", title: "Top trumps", type: "sentences", status: "planned", plan: "Apply: a Top Trumps-style game" },
        { id: "u38boss", title: "Comparing review", type: "boss", status: "planned", plan: "Review: animals (Unit 9)" }
      ]
    },
    {
      id: "u39", title: "Reasons & choices", emoji: "🤔", color: "stone",
      section: "s4",
      description: "Explain why and say what you prefer.",
      objectives: ["Say why with защото", "Say what you prefer", "Give a reason for a choice"],
      vocab: "Reasons and preferences",
      grammar: ["защото – because", "предпочитам – I prefer"],
      sample: { words: [["защото", "because"], ["предпочитам", "I prefer"], ["затова", "that's why"]], sentences: [["Предпочитам плуване, защото е забавно.", "I prefer swimming because it's fun."]] },
      lessons: [
        { id: "u39l1", title: "Because…", type: "words", status: "planned", plan: "Introduce: защото, предпочитам, затова, по-добре" },
        { id: "u39l2", title: "I prefer…", type: "words", status: "planned", plan: "Practise: Предпочитам плуване, защото е забавно." },
        { id: "u39l3", title: "Choose and explain", type: "sentences", status: "planned", plan: "Apply: choose a holiday and explain why" },
        { id: "u39boss", title: "Reasons review", type: "boss", status: "planned", plan: "Review: comparing (Unit 38)" }
      ]
    },
    {
      id: "u40", title: "Linking ideas", emoji: "🔗", color: "green",
      section: "s4",
      description: "Join ideas into longer sentences.",
      objectives: ["Join sentences with и, но and или", "Use когато (when) and че (that)", "Say a longer sentence about yourself"],
      vocab: "Linking words",
      grammar: ["и, а, но, или", "когато – when; че – that", "Preview: който / която – who / which"],
      sample: { words: [["но", "but"], ["когато", "when"], ["че", "that"]], sentences: [["Когато вали, играя Майнкрафт.", "When it rains, I play Minecraft."], ["Мисля, че ще спечелим.", "I think we'll win."]] },
      lessons: [
        { id: "u40l1", title: "And, but, or", type: "words", status: "planned", plan: "Introduce: но, или, когато, че, а" },
        { id: "u40l2", title: "When…", type: "words", status: "planned", plan: "Practise: Когато вали, играя Майнкрафт." },
        { id: "u40l3", title: "Longer sentences", type: "sentences", status: "planned", plan: "Apply: describe your perfect day in 3 long sentences" },
        { id: "u40boss", title: "Linking review", type: "boss", status: "planned", plan: "Review: reasons (Unit 39)" }
      ]
    },
    {
      id: "u41", title: "Telling a story", emoji: "📖", color: "purple",
      section: "s5",
      description: "Tell a short story in the right order.",
      objectives: ["Tell a story in order", "Use first, then, in the end", "Say what happened suddenly"],
      vocab: "Story words",
      grammar: ["Past tense revisited", "Order words: първо, после, накрая"],
      sample: { words: [["първо", "first"], ["после", "then / afterwards"], ["изведнъж", "suddenly"]], sentences: [["Първо отидохме в парка.", "First we went to the park."], ["Изведнъж кучето избяга!", "Suddenly the dog ran away!"]] },
      lessons: [
        { id: "u41l1", title: "Once upon a time", type: "words", status: "planned", plan: "Introduce: първо, после, накрая, изведнъж, веднъж" },
        { id: "u41l2", title: "And then…", type: "words", status: "planned", plan: "Practise: Първо отидохме в парка." },
        { id: "u41l3", title: "My story", type: "sentences", status: "planned", plan: "Apply: tell the story of a lost dog" },
        { id: "u41boss", title: "Story review", type: "boss", status: "planned", plan: "Review: what I did (Unit 36)" }
      ]
    },
    {
      id: "u42", title: "Every day or just once?", emoji: "🔁", color: "blue",
      section: "s5",
      description: "Tell apart things you usually do and things you finished.",
      objectives: ["Say what you usually do", "Say what you did once and finished", "Notice verb pairs like пиша / напиша"],
      vocab: "Habits and finished actions",
      grammar: ["Gentle introduction to verb aspect: пиша / напиша, ям / изям", "обикновено, винаги, понякога"],
      sample: { words: [["обикновено", "usually"], ["винаги", "always"], ["понякога", "sometimes"]], sentences: [["Обикновено ям баница.", "I usually eat banitsa."], ["Изядох цялата баница!", "I ate the whole banitsa!"]] },
      lessons: [
        { id: "u42l1", title: "Usually…", type: "words", status: "planned", plan: "Introduce: обикновено, винаги, понякога, пиша / напиша" },
        { id: "u42l2", title: "Finished!", type: "words", status: "planned", plan: "Practise: Обикновено ям баница." },
        { id: "u42l3", title: "Verb pairs", type: "sentences", status: "planned", plan: "Apply: compare your normal Saturday with last Saturday" },
        { id: "u42boss", title: "Aspect review", type: "boss", status: "planned", plan: "Review: telling a story (Unit 41)" }
      ]
    },
    {
      id: "u43", title: "School & learning", emoji: "🏫", color: "orange",
      section: "s5",
      description: "Talk about school subjects and your timetable.",
      objectives: ["Name school subjects", "Talk about your timetable", "Say what you're good at"],
      vocab: "School",
      grammar: ["по + subject: урок по математика", "добър съм по… – I'm good at…"],
      sample: { words: [["математика", "maths"], ["история", "history"], ["междучасие", "break time"]], sentences: [["Имам урок по математика.", "I have a maths lesson."], ["Добър съм по английски.", "I'm good at English."]] },
      lessons: [
        { id: "u43l1", title: "Subjects", type: "words", status: "planned", plan: "Introduce: математика, английски, история, час, домашно" },
        { id: "u43l2", title: "My timetable", type: "words", status: "planned", plan: "Practise: Добър съм по английски." },
        { id: "u43l3", title: "Good at…", type: "sentences", status: "planned", plan: "Apply: describe your school day" },
        { id: "u43boss", title: "School review", type: "boss", status: "planned", plan: "Review: everyday things (Unit 13) and days (Unit 19)" }
      ]
    },
    {
      id: "u44", title: "Tech & messages", emoji: "📱", color: "teal",
      section: "s5",
      description: "Talk about phones, games and messages.",
      objectives: ["Talk about phones, games and computers", "Write a short message", "Understand simple online words"],
      vocab: "Technology",
      grammar: ["Short pronouns revisited: обади ми се, пиши ми", "Imperatives revisited"],
      sample: { words: [["компютър", "computer"], ["съобщение", "message"], ["интернет", "internet"]], sentences: [["Пиши ми после.", "Message me later."], ["Телефонът ми няма батерия.", "My phone has no battery."]] },
      lessons: [
        { id: "u44l1", title: "Gadgets", type: "words", status: "planned", plan: "Introduce: компютър, съобщение, игра, интернет, парола" },
        { id: "u44l2", title: "Online", type: "words", status: "planned", plan: "Practise: Пиши ми после." },
        { id: "u44l3", title: "Send a message", type: "sentences", status: "planned", plan: "Apply: message a friend about a game" },
        { id: "u44boss", title: "Tech review", type: "boss", status: "planned", plan: "Review: hobbies (Unit 21)" }
      ]
    },
    {
      id: "u45", title: "Nature & outdoors", emoji: "🌲", color: "green",
      section: "s5",
      description: "Talk about forests, mountains and rivers.",
      objectives: ["Name things in nature", "Describe a walk or a camping trip", "Talk about Bulgaria's mountains"],
      vocab: "Nature",
      grammar: ["Prepositions revisited: в гората, на планината", "Plurals revisited"],
      sample: { words: [["гора", "forest"], ["планина", "mountain"], ["река", "river"]], sentences: [["Отиваме на планина.", "We're going to the mountains."], ["В гората има мечки.", "There are bears in the forest."]] },
      lessons: [
        { id: "u45l1", title: "Forest & mountain", type: "words", status: "planned", plan: "Introduce: гора, планина, река, езеро, цвете" },
        { id: "u45l2", title: "Rivers & lakes", type: "words", status: "planned", plan: "Practise: В гората има мечки." },
        { id: "u45l3", title: "Camping trip", type: "sentences", status: "planned", plan: "Apply: plan a hike in the Rila mountains" },
        { id: "u45boss", title: "Nature review", type: "boss", status: "planned", plan: "Review: animals (Unit 9) and weather (Unit 28)" }
      ]
    },
    {
      id: "u46", title: "Films, music & fun", emoji: "🎬", color: "red",
      section: "s5",
      description: "Talk about films, music and shows.",
      objectives: ["Talk about films, music and games", "Say what you watched or listened to", "Give a simple opinion"],
      vocab: "Entertainment",
      grammar: ["Past tense revisited: гледах, слушах", "харесва ми revisited"],
      sample: { words: [["филм", "film"], ["песен", "song"], ["концерт", "concert"]], sentences: [["Гледах страхотен филм.", "I watched a great film."]] },
      lessons: [
        { id: "u46l1", title: "Films & music", type: "words", status: "planned", plan: "Introduce: филм, песен, концерт, театър, анимация" },
        { id: "u46l2", title: "What did you watch?", type: "words", status: "planned", plan: "Practise: Гледах страхотен филм." },
        { id: "u46l3", title: "Review it!", type: "sentences", status: "planned", plan: "Apply: review your favourite film" },
        { id: "u46boss", title: "Fun review", type: "boss", status: "planned", plan: "Review: likes (Unit 21)" }
      ]
    },
    {
      id: "u47", title: "Traditions & celebrations", emoji: "🎉", color: "pink",
      section: "s5",
      description: "Learn Bulgarian celebrations and how to wish people well.",
      objectives: ["Name Bulgarian celebrations", "Wish people well", "Explain a tradition like martenitsi"],
      vocab: "Celebrations and customs",
      grammar: ["Честит / Честита / Честито – agreement in wishes", "на + date: на първи март"],
      sample: { words: [["празник", "holiday / celebration"], ["мартеница", "martenitsa"], ["Коледа", "Christmas"]], sentences: [["Честит рожден ден!", "Happy birthday!"], ["На първи март носим мартеници.", "On 1 March we wear martenitsi."]] },
      lessons: [
        { id: "u47l1", title: "Celebrations", type: "words", status: "planned", plan: "Introduce: празник, рожден ден, мартеница, Коледа, Великден" },
        { id: "u47l2", title: "Happy birthday!", type: "words", status: "planned", plan: "Practise: Честит рожден ден!" },
        { id: "u47l3", title: "Baba Marta", type: "sentences", status: "planned", plan: "Apply: explain Baba Marta day to a friend" },
        { id: "u47boss", title: "Traditions review", type: "boss", status: "planned", plan: "Review: family (Unit 5) and food (Unit 10)" }
      ]
    },
    {
      id: "u48", title: "Opinions", emoji: "🗣️", color: "brown",
      section: "s5",
      description: "Give your opinion and agree or disagree politely.",
      objectives: ["Give your opinion", "Agree and disagree politely", "Explain why you think so"],
      vocab: "Opinions and discussion",
      grammar: ["мисля, че… – I think that…", "според мен – in my opinion", "съгласен / съгласна съм"],
      sample: { words: [["мисля", "I think"], ["според мен", "in my opinion"], ["съгласен", "agreeing"]], sentences: [["Според мен футболът е най-хубавият спорт.", "In my opinion football is the best sport."], ["Съгласен съм с теб.", "I agree with you."]] },
      lessons: [
        { id: "u48l1", title: "I think…", type: "words", status: "planned", plan: "Introduce: мисля, според мен, съгласен, прав, всъщност" },
        { id: "u48l2", title: "Agree or disagree?", type: "words", status: "planned", plan: "Practise: Съгласен съм с теб." },
        { id: "u48l3", title: "Debate!", type: "sentences", status: "planned", plan: "Apply: debate 'football vs swimming'" },
        { id: "u48boss", title: "Final review", type: "boss", status: "planned", plan: "Review: reasons (Unit 39) and linking (Unit 40)" }
      ]
    }
  ]
};
