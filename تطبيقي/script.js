const questions = [
    { "question": "من هو مؤلف رواية 'البؤساء'؟", "options": ["تشارلز ديكنز", "فيكتور هوغو", "تولستوي", "غوته"], "correct": 1 },
    { "question": "من هو صاحب ملحمة 'الإلياذة'؟", "options": ["أفلاطون", "سقراط", "أرسطو", "هوميروس"], "correct": 3 },
    { "question": "في أي بلد ولد الأديب 'نجيب محفوظ'؟", "options": ["المغرب", "لبنان", "تونس", "مصر"], "correct": 3 },
    { "question": "من هو الشاعر الملقب بـ 'أمير الشعراء'؟", "options": ["الجواهري", "أحمد شوقي", "حافظ إبراهيم", "بشار بن برد"], "correct": 1 },
    { "question": "ما اسم الكتاب الذي ألفه ابن خلدون في علم الاجتماع؟", "options": ["العقد الفريد", "الكامل", "البيان والتبيين", "المقدمة"], "correct": 3 },
    { "question": "من هو مؤلف رواية 'الجريمة والعقاب'؟", "options": ["كافكا", "دوستويفسكي", "تشرنيشيفسكي", "تولستوي"], "correct": 1 },
    { "question": "ما هي جنسية الشاعر 'بابلو نيرودا'؟", "options": ["الأرجنتين", "المكسيك", "إسبانيا", "تشيلي"], "correct": 3 },
    { "question": "من هو مؤلف رواية 'مائة عام من العزلة'؟", "options": ["خورخي لويس بورخيس", "غابرييل غارسيا ماركيز", "إيزابيل الليندي", "ماريو فارغاس يوسا"], "correct": 1 },
    { "question": "ما هي جنسية الأديب 'ويليام شكسبير'؟", "options": ["إنجليزية", "فرنسية", "ألمانية", "إيطالية"], "correct": 0 },
    { "question": "من هو صاحب كتاب 'الأيام'؟", "options": ["عباس العقاد", "نجيب محفوظ", "طه حسين", "أحمد أمين"], "correct": 2 },
    { "question": "من هو مؤلف رواية '1984'؟", "options": ["ريموند كارفر", "ألدوس هكسلي", "فرانز كافكا", "جورج أورويل"], "correct": 3 },
    { "question": "من هو الأديب الذي كتب 'الحرب والسلم'؟", "options": ["جوجول", "تولستوي", "دوستويفسكي", "تشرنيشيفسكي"], "correct": 1 },
    { "question": "ما هو اسم الشاعر الذي كتب 'قصيدة النثر'؟", "options": ["نزار قباني", "محمود درويش", "أدونيس", "إيليا أبو ماضي"], "correct": 2 },
    { "question": "من هو صاحب رواية 'الأبله'؟", "options": ["جورجي زيدان", "تولستوي", "دوستويفسكي", "نجيب محفوظ"], "correct": 2 },
    { "question": "من هو الأديب الذي كتب 'أولاد حارتنا'؟", "options": ["حسن مصطفى", "طه حسين", "نجيب محفوظ", "سعود السنعوسي"], "correct": 2 },
    { "question": "من هو الأديب الذي كتب 'أدب الفراعنة'؟", "options": ["نجيب محفوظ", "طه حسين", "حسن الزهراني", "أحمد شوقي"], "correct": 3 },
    { "question": "من هو الكاتب الذي ألف 'الطريق إلى مكة'؟", "options": ["أمين الريحاني", "محمد أسد", "محمود درويش", "أحمد أمين"], "correct": 1 },
    { "question": "من هو مؤلف كتاب 'في الشعر الجاهلي'؟", "options": ["أحمد أمين", "عباس العقاد", "طه حسين", "حافظ إبراهيم"], "correct": 2 },
    { "question": "من هو الأديب الذي ألف 'خالد'؟", "options": ["نجيب محفوظ", "عباس العقاد", "جبران خليل جبران", "طاهر الزمخشري"], "correct": 1 },
    { "question": "من هو الشاعر الذي كتب 'أنشودة المطر'؟", "options": ["بدر شاكر السياب", "عبد الفتاح بوعزة", "محمود درويش", "عريب عبد المطلب"], "correct": 0 },
    { "question": "من هو الشاعر الذي كتب 'الأرض'؟", "options": ["نزار قباني", "أدونيس", "إيليا أبو ماضي", "محمود درويش"], "correct": 3 },
    { "question": "من هو مؤلف 'الطريق إلى المدينة'؟", "options": ["أحمد شوقي", "جبران خليل جبران", "طه حسين", "عباس العقاد"], "correct": 2 },
    { "question": "من هو مؤلف رواية 'البحث عن الزمن المفقود'؟", "options": ["مارسيل بروست", "إميل زولا", "أونوريه دي بلزاك", "فرانسوا رابليه"], "correct": 0 },
    { "question": "من هو الشاعر الذي كتب 'القصيدة الأخيرة'؟", "options": ["محمود درويش", "نزار قباني", "أدونيس", "سميح القاسم"], "correct": 0 },
    { "question": "من هو مؤلف رواية 'الأم'؟", "options": ["مكسيم غوركي", "تولستوي", "دستويفسكي", "تشايكوفسكي"], "correct": 0 },
    { "question": "من هو مؤلف رواية 'أولاد حارتنا'؟", "options": ["نجيب محفوظ", "طه حسين", "عباس محمود العقاد", "إحسان عبد القدوس"], "correct": 0 },
    { "question": "من هو مؤلف كتاب 'الاقتصاد السياسي'؟", "options": ["كارل ماركس", "آدم سميث", "جون مينارد كينز", "فريدريك إنجلز"], "correct": 0 },
    { "question": "من هو الأديب الذي كتب 'الأجنحة المتكسرة'؟", "options": ["جبران خليل جبران", "طه حسين", "إحسان عبد القدوس", "نجيب محفوظ"], "correct": 0 },
    { "question": "من هو مؤلف 'العقد الفريد'؟", "options": ["ابن عبد ربه", "ابن خلدون", "الشافعي", "ابن الأثير"], "correct": 0 },
    { "question": "من هو مؤلف 'الجريمة والعقاب'؟", "options": ["دوستويفسكي", "تولستوي", "جورجي زيدان", "غوغول"], "correct": 0 },
    { "question": "من هو مؤلف كتاب 'في الشعر الجاهلي'؟", "options": ["طه حسين", "عباس العقاد", "أحمد أمين", "الجاحظ"], "correct": 0 },
    { "question": "من هو مؤلف رواية 'المعذبون في الأرض'؟", "options": ["توفيق الحكيم", "نجيب محفوظ", "عباس العقاد", "طاهر الزمخشري"], "correct": 0 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question-text").textContent = question.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("next-btn").disabled = true;
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;
    const options = document.querySelectorAll(".option");
    if (selectedIndex === correctIndex) {
        options[selectedIndex].classList.add("correct");
        score++;
    } else {
        options[selectedIndex].classList.add("incorrect");
        options[correctIndex].classList.add("correct");
    }

    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `لقد حصلت على ${score} من ${questions.length} إجابة صحيحة.`;
}

function restartGame() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestion();
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("restart-btn").addEventListener("click", restartGame);

loadQuestion();
