var you;

function saveName() {
    you = document.getElementById("name").value;
    hideIntroContainer();
}

function hideIntroContainer() {
    let main = document.getElementById("mainPage");
    let quiz = document.getElementById("quizPage");
    main.classList.remove("d-block");
    main.classList.add("d-none");
    quiz.classList.remove("d-none");
    quiz.classList.add("d-block");
}

const quizData = [
    {
        question: "What does CPU stand for?",
        a: "Central Processing Unit",
        b: "Control Processing Unit",
        c: "Computer Processing Unit",
        d: "Centralized Programming Unit",
        correct: "a",
    },
    {
        question: "What is the primary function of RAM in a computer?",
        a: "Storing files and Documents",
        b: "Displaying graphics",
        c: "Executing programming instructions",
        d: "Connecting to the internet",
        correct: "a",
    },
    {
        question: "Which type of computer memory is non-volatile and retains data even when powered off?",
        a: "RAM",
        b: "Cache",
        c: "ROM",
        d: "Virtual Memory",
        correct: "c",
    },
    {
        question: "What is the purpose of an operating system?",
        a: "Running software applications",
        b: "Displaying images and VideoColorSpace",
        c: "Connecting to the internet",
        d: "Managing computer resources",
        correct: "d",
    },
]

const quiz = document.getElementById('quizPage')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>${you} answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }

})