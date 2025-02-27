



const questions = [
    { word: "odiwnw 🤔", hint: "You look through it 🧐", answer: "window ✅" },
    { word: "vreweie 🤔", hint: "To check and correct work 🧐", answer: "review ✅" },
    { word: "aedeadlin 🤔", hint: "Time limit for task completion 🧐", answer: "deadline ✅" },
    { word: "jecpotr 🤔", hint: "Displays presentations 🧐", answer: "projector ✅" },
    { word: "apnl 🤔", hint: "An organized strategy for achieving goals 🧐", answer: "plan ✅" },
    { word: "lpeap 🤔", hint: "A fruit 🧐", answer: "apple ✅" },
    { word: "rood 🤔", hint: "A house entrance 🧐", answer: "door ✅" },
    { word: "eetingm 🤔", hint: "Scheduled discussions 🧐", answer: "meeting ✅" },
    { word: "nioivselet 🤔", hint: "Entertainment device 🧐", answer: "television ✅" },
    { word: "oesiprm 🤔", hint: "A commitment 🧐", answer: "promise ✅" },
    { word: "edoc 🤔", hint: "Programmers write this 🧐", answer: "code ✅" },
    { word: "draob 🤔", hint: "Used for writing 🧐", answer: "board ✅" },
    { word: "dercalen 🤔", hint: "Tracks appointments 🧐", answer: "calendar ✅" },
    { word: "efils 🤔", hint: "Holds documents 🧐", answer: "files ✅" },
    { word: "kcans 🤔", hint: "A light meal 🧐", answer: "snack ✅" },
    { word: "spkdeot 🤔", hint: "Computer on a desk 🧐", answer: "desktop ✅" },
    { word: "erif 🤔", hint: "Used for warmth 🧐", answer: "fire ✅" },
    { word: "rtelcoieph 🤔", hint: "Flies in the air 🧐", answer: "helicopter ✅" },
    { word: "aintrain 🤔", hint: "Learning new skills for the job 🧐", answer: "training ✅" },
    { word: "regrub 🤔", hint: "A fast food item 🧐", answer: "burger ✅" },
    { word: "eamlim 🤔", hint: "Electronic messages 🧐", answer: "email ✅" },
    { word: "eamttema 🤔", hint: "Working group members 🧐", answer: "teammates ✅" },
    { word: "esrtses 🤔", hint: "Work pressure 🧐", answer: "stress ✅" },
    { word: "efocfe 🤔", hint: "Office fuel 🧐", answer: "coffee ✅" },
    { word: "apyphap 🤔", hint: "How we are at the end of fika 🧐", answer: "happy ✅" }
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
