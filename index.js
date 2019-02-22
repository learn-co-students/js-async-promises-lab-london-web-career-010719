const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;


function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}


function appendQuestion(question){
  let questionCont = document.querySelector('.question-container')
  questionCont.innerHTML = question.questionText;
}

function askQuestionThen(time){

  question = questions[0]
  appendQuestion(question)
    return new Promise((resolve) => {
      setTimeout(function() {
          resolve(question)
      }, time)
    })
}


function removeQuestion(){
  return new Promise( function() {
    let questionCont = document.querySelector('.question-container')
    questionCont.innerHTML = ""
      toggleTrueAndFalseButtons()
})


}

function askQuestionThenRemoveQuestion(time) {

  return askQuestionThen(time).then(removeQuestion)

}


function trueAndFalseButtons(){

 let trueAndFalse = document.querySelector('.true-false-list').querySelectorAll('.btn')
 return trueAndFalse
 // let falseBtn = document.querySelector('.red')

}


function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function checkQuestion(question, answer){
  question.questionAnswer == answer
}
