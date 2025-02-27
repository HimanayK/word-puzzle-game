



const questions = [
    { word: "nodwwi 🤔", hint: "You look through it 🧐", answer: "window ✅" },
    { word: "wireve 🤔", hint: "To check and correct work 🧐", answer: "review ✅" },
    { word: "andeldie 🤔", hint: "Time limit for task completion 🧐", answer: "deadline ✅" },
    { word: "ojectropr 🤔", hint: "Displays presentations 🧐", answer: "projector ✅" },
    { word: "apnl 🤔", hint: "An organized strategy for achieving goals 🧐", answer: "plan ✅" },
    { word: "lpeap 🤔", hint: "A fruit 🧐", answer: "apple ✅" },
    { word: "rood 🤔", hint: "A house entrance 🧐", answer: "door ✅" },
    { word: "eetingm 🤔", hint: "Scheduled discussions 🧐", answer: "meeting ✅" },
    { word: "nlisietevo 🤔", hint: "Entertainment device 🧐", answer: "television ✅" },
    { word: "roipsme 🤔", hint: "A commitment 🧐", answer: "promise ✅" },
    { word: "edoc 🤔", hint: "Programmers write this 🧐", answer: "code ✅" },
    { word: "odabr 🤔", hint: "Used for writing 🧐", answer: "board ✅" },
    { word: "lrndcaea 🤔", hint: "Tracks appointments 🧐", answer: "calendar ✅" },
    { word: "ilfes 🤔", hint: "Holds documents 🧐", answer: "files ✅" },
    { word: "cknsa 🤔", hint: "A light meal 🧐", answer: "snack ✅" },
    { word: "kpdesto 🤔", hint: "Computer on a desk 🧐", answer: "desktop ✅" },
    { word: "erif 🤔", hint: "Used for warmth 🧐", answer: "fire ✅" },
    { word: "tphelcoeri 🤔", hint: "Flies in the air 🧐", answer: "helicopter ✅" },
    { word: "grintain 🤔", hint: "Learning new skills for the job 🧐", answer: "training ✅" },
    { word: "regrub 🤔", hint: "A fast food item 🧐", answer: "burger ✅" },
    { word: "ealim 🤔", hint: "Electronic messages 🧐", answer: "email ✅" },
    { word: "seamttema 🤔", hint: "Working group members 🧐", answer: "teammates ✅" },
    { word: "esrtses 🤔", hint: "Work pressure 🧐", answer: "stress ✅" },
    { word: "efocfe 🤔", hint: "Office fuel 🧐", answer: "coffee ✅" },
    { word: "ayphp 🤔", hint: "How we are at the end of fika 🧐", answer: "happy ✅" }
];

let currentQuestion = 0;

function startGame() {
    document.getElementById("startGame").style.display = "none";
    document.getElementById("gameContainer").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("main-heading").classList.add("hidden");
        document.getElementById("puzzle-line").classList.add("hidden");
        document.getElementById("question").innerHTML = `Question ${currentQuestion + 1}: ${questions[currentQuestion].word}`;
        document.getElementById("hint").innerHTML = `💡 Hint: ${questions[currentQuestion].hint}`;
        document.getElementById("answer").classList.add("hidden");
        document.getElementById("answer").innerHTML = "";
    } else {
        document.getElementById("gameContainer").classList.add("hidden");
        document.getElementById("main-heading").classList.add("hidden");
        document.getElementById("puzzle-line").classList.add("hidden");
        document.getElementById("weekendMessage").classList.remove("hidden");
    }
}

function revealAnswer() {
    document.getElementById("answer").innerHTML = `🗝️ Answer: ${questions[currentQuestion].answer}`;
    document.getElementById("answer").classList.remove("hidden");
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        currentQuestion++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}
