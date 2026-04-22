const dati = {
    matematika: {
        temas: {
            kombinatorika: [
                {q: "Cik ir 5!?", a: "120"},
                {q: "Cik dažādos veidos, mainot skolēnu secību, skolotājs var izsaukt pie tāfeles Jāni, Kārli, Ilzi, Daci?", a: "24"},
                {q: "Svētku koncertam jauniešu koris sagatavoja 4 dziesmas. Cik dažādu koncertprogrammu ir iespējams izveidot, ja katra dziesma ir jāatskaņo 1 reizi un atskaņošanas kārtība ir svarīga?", a: "24"},
                {q: "Cik dažādus vārdus var izveidot no dotajiem burtiem a,b,c,d, ja katrs burts vārdā tiek izmantots tieši 1 reizi?", a: "24"},
                {q: "Cik sakārtotas 3 elementu izlases var izveidot no dotās kopas M={a;b;c;d}?", a: "24"},
                {q: "Cik dažādos veidos no 23 komandas dalībniekiem var izvēlēties kapteini un viņa palīgu?", a: "506"},
                {q: "Pasažieru vagonā ir 19 kupejas. Cik veidos šajā vagonā var izvietot 4 cilvēkus, lai tie būtu dažādās kupejās?", a: "93024"},
                {q: "Ja plauktā atrodas 18 dažādas grāmatas, tad cik veidos var izvēlēties tieši 2 grāmatas?", a: "153"},
                {q: "Četrciparu skaitļa pierakstā ir izmantoti tikai cipari 4 un 1, turklāt gan cipars 4, gan cipars 1 tieši divas reizes. Cik ir tādu četrciparu skaitļu?", a: "6"},
                {q: "Uz riņķa līnijas doti 22 punkti. CIk daudz dažādu hordu var novilkt?", a: "231"}
            ],
            varbutiba: [
                {q: "Kastītē atrodas 2 melnas bumbiņas un 21 zaļas bumbiņas. Kāda varbūtība izņemt melnas krāsas bumbiņu?", a: "2/23"},
                {q: "Spēļu kauliņu met vienu reizi. Kāda varbūtība, ka uzmestais punktu skaits uz tā augšējās skaldnes būs skaitlis, kas ir salikts skaitlis?", a: "1/3"},
                {q: "Metamo kauliņu paripina divas reizes pēc kārtas un nosaka iegūto punktu summu. Kāda varbūtība, ka uzmesto punktu summa ir 10?", a: "1/12"},
                {q: "Taisnstūrī ar malu garumiem 5 cm un 9 cm iezīmēts kvadrāts ar malas garumu 4 cm. Kāda varbūtība, ka, uz labu laimi atliekot punktu taisnstūrī, tas reizē atradīsies arī dotajā kvadrātā?", a: "16/45"},
                {q: "Lai rūpnīcā izdarītu kvalitātes kontroli, izvēlējās 342 saražotās spuldzītes un pārbaudīja, vai tās iedegas. Kontroles rezultātā konstatēja, ka 6 spuldzītes ir brāķis. Kāda varbūtība, ka, uz labu laimi izvēloties vienu spuldzīti no šajā rūpnīcā ražotajām, tā nebūs brāķis? Atbildi izsaki veselos procentos!", a: "98%"},
                {q: "Uz salātu sēklu paciņas rakstīts, ka šo sēklu dīgtspēja ir 94%. Ja paciņā ir 50 sēklas, cik no tām varētu nesadīgt?", a: "3"},
                {q: "Veikalā bija 10 gerberas un 20 frēzijas. Kāda varbūtība, ka pērkot pušķi no četriem ziediem, tajā būs tieši divas gerberas? Atbildi izsaki procentos!", a: "31%"},
                {q: "Talkā piedalās 7 zēni un 8 meitenes. Kāda varbūtība, ka skolotājs, nejauši izvēloties četru cilvēku komandu piknika vietas sagatavošanai, izvēlēsies ne vairāk kā divas meitenes?", a: "0.662"},
                {q: "Dots kubs, kura šķautnes garums ir 8 cm. Visu kuba virsmu nokrāsoja, un kubu sadalīja mazākos kubiņos ar šķautnes garumu 1 cm. Aprēķināt varbūtību, ka uz labu laimi izvēlētam kubiņam būs tieši viena nokrāsota skaldne. (Jebkurš kubiņš var tikt izvēlēts ar vienādu varbūtību.)", a: "216/512"},
                {q: "Spēlei pieteikti 24 sportisti: 10 uzbrucēji, 12 aizsargi un 2 vārtsargi. Aprēķini varbūtību, ka dopinga kontrolei nejauši izvēlētie trīs sportisti būs uzbrucēji.", a: "0.059"}
            ]
        }
    },
    latviesuvaloda: {
        temas: {
            gramatika: [
                {q: "Cik locījumu ir latviešu valodā?", a: "7"},
                {q: "Cik vārdšķiru ir latviešu valodā?", a: "10"},
                {q: "Kas ir teikuma gramatiskais centrs?", a: "Teikuma priekšmets un izteicējs"},
                {q: "Kas ir leksikoloģija?", a: "Vārdu krājums"},
                {q: "Kas ir morfoloģija?", a: "Vārda sastāvs"},
                {q: "Kas ir sintakse?", a: "Teikuma uzbūve"},
                {q: "Kas ir divdabji?", a: "Darbības vārdu formas"},
                {q: "Cik grupās iedala vietniekvārdus?", a: "9"},
                {q: "Cik pakāpes ir īpašības vārdiem?", a: "3"},
                {q: "Kas ir ortogrāfija?", a: "Pareizrakstība"}
            ],
            literatura: [
                {q:"Kas raksta dzeju?",a:"dzejnieks"},
                {q:"Kas ir romāns?",a:"garš prozas darbs"},
                {q:"Kas ir fabula?",a:"pamācība"},
                {q:"Kas ir tēls?",a:"varonis"},
                {q:"Kas ir autors?",a:"rakstītājs"},
                {q:"Kas ir sižets?",a:"notikumu secība"},
                {q:"Kas ir konflikts?",a:"pretruna"},
                {q:"Kas ir kulminācija?",a:"augstākais punkts"},
                {q:"Kas ir proza?",a:"teksts bez ritma"},
                {q:"Kas ir dzeja?",a:"ritmisks teksts"}
            ]
        }
    },
    kimija: {
        temas: {
            organiskasvielas: [
                {q: "CH4 ir?", a: "metāns"},
                {q: "C2H5OH ir?", a: "etanols"},
                {q: "C6H6 ir?", a: "benzols"},
                {q: "C2H4 ir?", a: "etēns"},
                {q: "C3H8 ir?", a: "propāns"},
                {q: "C4H10 ir?", a: "butāns"},
                {q: "C2H2 ir?", a: "etīns"},
                {q: "C3H6 ir?", a: "propēns"},
                {q: "C6H12O6 ir?", a: "glikoze"},
                {q: "CH3COOH ir?", a: "etiķskābe"}
            ],
            neorganiskasvielas: [
                {q:"NaCl ir?", a:"nātrija hlorīds"},
                {q:"H2O ir?", a:"ūdens"},
                {q:"CO2 ir?", a:"oglekļa dioksīds"},
                {q:"O2 ir?", a:"skābeklis"},
                {q:"HCl ir?", a:"sālsskābe"},
                {q:"NaOH ir?", a:"nātrija hidroksīds"},
                {q:"NH3 ir?", a:"amonjaks"},
                {q:"CaCO3 ir?", a:"kalcija karbonāts" },
                {q:"Fe ir?",a:"dzelzs"},
                {q:"Cu ir?", a:"varš"}
            ]
        }
    },
     fizika: {
        temas: {
            kustiba: [
                {q: "Kāda ir ātruma formula?", a:"ceļš/laiks"},
                {q:"SI vienība ātrumam?", a:"m/s"},
                {q:"Kas ir paātrinājums?", a:"ātruma maiņa"},
                {q:"Vienmērīga kustība?", a:"konstants ātrums"},
                {q:"Kas ir ceļš?", a:"distance"},
                {q:"Kas ir laiks?", a:"ilgums"},
                {q:"Kas ir kustība?", a:"stāvokļa maiņa"},
                {q:"Kas ir trajektorija?", a:"kustības ceļš"},
                {q:"Kas ir vidējais ātrums?", a:"ceļš/laiks"},
                {q:"Kas ir ātrums?", a:"ceļš laikā"}
            ],
            gaisma: [
                {q:"Gaismas ātrums?", a:"300000000"},
                {q:"Kas ir vilnis?", a:"svārstības"},
                {q:"Gaisma ir?", a:"vilnis"},
                {q:"Kas ir atstarošanās?", a:"atgriešanās"},
                {q:"Kas ir laušana?", a:"virziena maiņa"},
                {q:"Kas ir spektrs?", a:"krāsu sadalījums"},
                {q:"Kas ir fotons?", a:"daļiņa"},
                {q:"Kas ir frekvence?", a:"svārstību skaits"},
                {q:"Kas ir viļņa garums?", a:"attālums"},
                {q: "Kas ir prizma?", a:"gaismas sadalītājs"}
            ]
        }
    },
     biologija: {
        temas: {
            biotehnologijas: [
                {q:"Kas ir biotehnoloģija?", a:"organismu izmantošana"},
                {q: "Kas ir GMO?", a:"ģenētiski modificēts organisms"},
                {q: "Kas ir fermentācija?", a:"raudzēšana" },
                {q: "Kas ir enzīms?", a:"katalizators" },
                {q: "Kas ir DNS?", a:"ģenētiska informācija"},
                {q: "Kas ir klonēšana?", a: "kopēšana" },
                {q: "Kas ir baktērija?", a: "mikroorganisms" },
                {q: "Kas ir šūna?", a: "dzīvības vienība" },
                {q: "Kas ir gēns?", a: "DNS daļa" },
                {q: "Kas ir mutācija?", a: "izmaiņa" }
            ],
            manas: [
                {q: "Cik maņas cilvēkam?", a: "5" },
                {q: "Redzes orgāns?", a: "acs" },
                {q: "Dzirdes orgāns?", a: "auss" },
                {q: "Ožas orgāns?", a: "deguns" },
                {q: "Garšas orgāns?", a: "mēle" },
                {q: "Taustes orgāns?", a: "āda" },
                {q: "Kas ir receptori?", a: "uztvērēji" },
                {q: "Kas ir nervs?", a: "signālu vadītājs" },
                {q: "Kas ir smadzenes?", a: "vadības centrs" },
                {q: "Kas ir impulss?", a: "signāls" }
            ]
        }
    }
}

let jautajumi = [];
let dotaisJautajums = 0;
let laiks = 300;
let taimeris = null;
let punkti = 0;

function izveliesTemu(prieksmets, tema){
    localStorage.setItem("prieksmets", prieksmets);
    localStorage.setItem("tema", tema);
    window.location.href = "spele.html";
}

window.onload = function () {
    let prieksmets = localStorage.getItem("prieksmets");
    let tema = localStorage.getItem("tema");

    if (prieksmets && tema) {
        jautajumi = dati[prieksmets].temas[tema];
        saktSpeli();
    }
};

function saktSpeli() {
    dotaisJautajums = 0;
    punkti = 0;
    laiks = 300;
    
    atjaunotTaimeri();
    taimeris = setInterval(atjaunotTaimeri, 1000);
    paraditJautajumu();
}

function atjaunotTaimeri() {
    let min = Math.floor(laiks/60);
    let sec = laiks%60;
    if (sec < 10) sec = "0" + sec;

    document.getElementById("taimeris").innerText = "Laiks:" + min + ":" + sec;

    laiks--;

    if (laiks < 0) {
        beigtSpeli();}
}

function paraditJautajumu() {
    if(!jautajumi[dotaisJautajums]) return;

    document.getElementById("jautajums").innerText = jautajumi[dotaisJautajums].q;
    document.getElementById("progress").innerText = (dotaisJautajums + 1) + "/" + jautajumi.length;
}

function iesniegtAtbildi() {
    let input = document.getElementById("tekstaAtbilde").value.toLowerCase().trim();
    let pareizi = jautajumi[dotaisJautajums].a.toLowerCase();

    if (input === pareizi) {
        punkti++;
        document.getElementById("atgriezeniskais").innerText = "Pareizi!";
        nakamaisJautajums();
    } else {
        laiks -= 10;
        if (laiks < 0) laiks = 0;

        document.getElementById("atgriezeniskais").innerText = "Nepareizi! -10s";
    }

    document.getElementById("tekstaAtbilde").value = "";
}

function nakamaisJautajums() {
    dotaisJautajums++;
    if (dotaisJautajums >= jautajumi.length) {
        beigtSpeli();
    }
    else{
        paraditJautajumu();
    }
}

function beigtSpeli(){
    clearInterval(taimeris);

    document.body.innerHTML = `
    <h1> Spēke beigusies! </h1>
    <h2> Rezultāts: ${punkti}/10 </h2>
    <a href = "index.html"><button> Uz sākumu </button></a>`;
}