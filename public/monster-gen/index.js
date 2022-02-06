
//onl used to increment list amount, probably easier than counting everytime
var highestAmt = 1
function CallgenNPC() {
    const amountElement = document.getElementById("callNPCAmount")
    var amountSelected = amountElement.value;
    if (amountSelected > 10) {
        amountElement.classList.add("error")
    }
    else if (amountSelected == "") {
        GenNPCWithAmount(1);
    }
    else {
        GenNPCWithAmount(amountSelected);
    }
}

function GenNPCWithAmount(amount) {
    document.getElementById("callNPCAmount").classList.remove("error")
    if (amount < 100) {
        for (let i = 0; i < amount; i++) {
            genNPC();
        }
    }
}
function genNPC() {
    const raceSelectedElement = document.getElementById("raceSelect")
    var raceSelected = raceSelectedElement.options[raceSelectedElement.selectedIndex].text
    
    const placeSelectedElement = document.getElementById("placeSelect")
    var placeSelected = placeSelectedElement.options[placeSelectedElement.selectedIndex].text

    if (placeSelected == "Random") {
        placeSelected = pullRandomPlace();
    }
    if(raceSelected == "Random") {
        raceSelected = pullRandomRace();
    }
    const npcList = document.getElementById("npcContainer")
    npcList.innerHTML += '<h5>' 
    + incrementList() 
    + ': A ' 
    + pullRandomAdj() 
    + ', ' 
    + pullRandomAdj() 
    + ', ' 
    + pullRandomClass() 
    + ' ' 
    + raceSelected 
    +
    ' from ' 
    + placeSelected
    + ' who is '
    + pullRandomAdv()
    + ' '
    + pullRandomTrait()
    + ' ('
    + pullRandomPronouns()
    + ')'
    +'</h5>'
}

function pullRandomAdj() {
    //https://gist.github.com/ijmacdowell/8325491#file-adjectives-js
    var adjList = ["aback","abaft","abandoned","abashed","aberrant","abhorrent","abiding","abject","ablaze","able","abnormal","aboard","aboriginal","abortive","abounding","abrasive","abrupt","absent","absorbed","absorbing","abstracted","absurd","abundant","abusive","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","acrid","actually","ad","hoc","adamant","adaptable","addicted","adhesive","adjoining","adorable","adventurous","afraid","aggressive","agonizing","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","alluring","aloof","amazing","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","annoying","anxious","apathetic","aquatic","aromatic","arrogant","ashamed","aspiring","assorted","astonishing","attractive","auspicious","automatic","available","average","awake","aware","awesome","awful","axiomatic","bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","bright","broad","broken","brown","bumpy","burly","bustling","busy","cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical","daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dynamic","dysfunctional","eager","early","earsplitting","earthy","easy","eatable","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even excellent excited","exciting exclusive","exotic","expensive","extra-large extra-small exuberant","exultant","fabulous","faded","faint fair","faithful","fallacious","false familiar famous","fanatical","fancy","fantastic","far"," far-flung"," fascinated","fast","fat faulty","fearful fearless","feeble feigned","female fertile","festive","few fierce","filthy","fine","finicky","first"," five"," fixed"," flagrant","flaky","flashy","flat","flawless","flimsy"," flippant","flowery","fluffy","fluttering"," foamy","foolish","foregoing","forgetful","fortunate","four frail","fragile","frantic","free"," freezing"," frequent"," fresh"," fretful","friendly","frightened", "frightening", "full", "fumbling", "functional","funny","furry furtive","future futuristic","fuzzy ","gabby","gainful","gamy","gaping","garrulous","gaudy","general gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful gratis","gray greasy great","greedy","green grey grieving","groovy","grotesque","grouchy","grubby gruesome","grumpy","guarded","guiltless","gullible gusty","guttural H habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly heavy hellish","helpful","helpless","hesitant","hideous high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender tense","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry","xenophobic","yellow","yielding","young","youthful","yummy","zany","zealous","zesty","zippy","zonked"];
    return adjList[getRandomIntInclusive(0, (adjList.length - 1))]
}

function incrementList() {
    var returnAmt = highestAmt
    highestAmt ++
    return returnAmt
}
function pullRandomClass() {
    const adjList = ["rouge","wizard","healer","cleric", "druid", "warrior", "monk","fighter","chef","bard","squire"]
    return adjList[getRandomIntInclusive(0, (adjList.length - 1))]
}

function pullRandomRace() {
    const adjList = ["Human", "Gnome", "Florin", "Castori"]
    return adjList[getRandomIntInclusive(0, (adjList.length - 1))]
}

function pullRandomPlace() {
    const adjList = ["Caranthia", "Microsia", "Misty Grove"]
    return adjList[getRandomIntInclusive(0, (adjList.length - 1))]
}
//pulled from mozilla docs
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function clearList() {
    highestAmt = 1
    document.getElementById("callNPCAmount").classList.remove("error")
    const npcList = document.getElementById("npcContainer")
    npcList.innerHTML = "";
}

function pullRandomAdv() {
    const adjList = ["always", "usually", "generally", "sometimes", "occasionally", "rarely", "never"]
    return adjList[getRandomIntInclusive(0, (adjList.length - 1))]
}

function pullRandomTrait() {
    const adjList = ["adorable","adventurous","aggressive","agreeable","alert","alive","amused","angry","annoyed","annoying","anxious","arrogant","ashamed","attractive","average","awful","bad","beautiful","better","bewildered","black","bloody","blue","blue-eyed","blushing","bored","brainy","brave","breakable","bright","busy","calm","careful","cautious","charming","cheerful","clean","clear","clever","cloudy","clumsy","colorful","combative","comfortable","concerned","condemned","confused","cooperative","courageous","crazy","creepy","crowded","cruel","curious","cute","dangerous","dark","dead","defeated","defiant","delightful","depressed","determined","different","difficult","disgusted","distinct","disturbed","dizzy","doubtful","drab","dull","eager","easy","elated","elegant","embarrassed","enchanting","encouraging","energetic","enthusiastic","envious","evil","excited","expensive","exuberant","fair","faithful","famous","fancy","fantastic","fierce","filthy","fine","foolish","fragile","frail","frantic","friendly","frightened","funny","gentle","gifted","glamorous","gleaming","glorious","good","gorgeous","graceful","grieving","grotesque","grumpy","handsome","happy","healthy","helpful","helpless","hilarious","homeless","homely","horrible","hungry","hurt","ill","important","impossible","inexpensive","innocent","inquisitive","itchy","jealous","jittery","jolly","joyous","kind","lazy","light","lively","lonely","long","lovely","lucky","magnificent","misty","modern","motionless","muddy","mushy","mysterious","nasty","naughty","nervous","nice","nutty","obedient","obnoxious","odd","old-fashioned","open","outrageous","outstanding","panicky","perfect","plain","pleasant","poised","poor","powerful","precious","prickly","proud","putrid","puzzled","quaint","real","relieved","repulsive","rich","scary","selfish","shiny","shy","silly","sleepy","smiling","smoggy","sore","sparkling","splendid","spotless","stormy","strange","stupid","successful","super","talented","tame","tasty","tender","tense","terrible","thankful","thoughtful","thoughtless","tired","tough","troubled","ugliest","ugly","uninterested","unsightly","unusual","upset","uptight","vast","victorious","vivacious","wandering","weary","wicked","wide-eyed","wild","witty","worried","worrisome","wrong","zany","zealous"]
    return adjList[getRandomIntInclusive(0, (adjList.length - 1))]
}

function pullRandomPronouns() {
    const adjList = ["he/him", "she/her", "they/them", "she/they", "he/they", "prefers name"]
    return adjList[getRandomIntInclusive(0, (adjList.length - 1))]
}