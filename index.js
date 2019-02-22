const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let askBtn = document.querySelector('a.waves-effect.waves-light.btn')
let listEl = document.querySelector('.question-container')
askBtn.addEventListener('click', displayQuestionOnClick)

function appendQuestion(question) {
  listEl.innerText = (question.questionText)
} 

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve) => {
    setTimeout(resolve(question), time)
  })
}

function removeQuestion() {
  listEl.innerHTML = ""
}

function askQuestionThenRemoveQuestion(time) {
 return askQuestionThen(time)
    .then (removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelectorAll('.true-false-list div')
}

function toggleTrueAndFalseButtons() {
  for(const element of trueAndFalseButtons())  {
    element.classList.toggle('hide')
    }
}

function displayQuestionOnClick() {
      toggleTrueAndFalseButtons()
      askQuestionThenRemoveQuestion(3000)
  }
