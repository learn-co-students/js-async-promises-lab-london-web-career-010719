const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

const questionContainerEl = document.querySelector('.question-container')

let question

//adds a question to the main container
function appendQuestion(question) {
  questionContainerEl.innerText = question.questionText
}

//adds a question, returns a promise
function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve) =>  {
    setTimeout(()=> resolve(question), time)
  })
}

//clears a question , returns a promise
function removeQuestion() {
  return new Promise(() => questionContainerEl.innerText = "")
}

//asks a question then clears it after a timer expires
function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

//selects and returns the True / False buttons
function trueAndFalseButtons(){
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

//toggles the True / False buttons
function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(btn => btn.classList.toggle('hide'))
}

//add listner to button
function displayQuestionOnClick(){
  let btnEl = document.querySelector('#main-btn')
  return btnEl.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

