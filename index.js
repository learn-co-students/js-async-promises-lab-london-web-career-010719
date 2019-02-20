const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionEl = document.querySelector(".question-container")
const answerBtns = document.querySelectorAll(".btn.lighten-2")
const startBtn = document.querySelector("a.btn")

function appendQuestion(question) {
  questionEl.innerText = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(question)
      }, time)
    })
}

function removeQuestion() {
  questionEl.innerText = ""
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time)
    .then (removeQuestion)
}

function trueAndFalseButtons() {
  let btn_arr = []
  answerBtns.forEach( btn => {
    btn_arr.push(btn)
  })
  return btn_arr
}

function toggleTrueAndFalseButtons() {
  for (const el of trueAndFalseButtons()) {
    el.classList.toggle("hide")
  }
}

function displayQuestionOnClick() {
  return startBtn.addEventListener("click", (e) => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}