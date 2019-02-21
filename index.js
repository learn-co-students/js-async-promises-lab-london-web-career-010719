const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let questionList = document.querySelector('div.question-container')
let askQuestionBtn = document.querySelector('a.waves-effect.waves-light.btn')

function appendQuestion(question){
  questionList.innerHTML = question['questionText']
}

function askQuestionThen(time){
  question = questions[0];
  appendQuestion(question);

  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question);
    },time)
  })
}

function removeQuestion(){
  questionList.innerHTML = '';
}

function askQuestionThenRemoveQuestion(time,question){
  return askQuestionThen(time)
    .then (removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelectorAll('div.true-false-list div')
}

function toggleTrueAndFalseButtons(){
  for (const el of trueAndFalseButtons()) {
    el.classList.toggle("hide")
  }
}

function displayQuestionOnClick(){
  askQuestionBtn.addEventListener('click',()=>{
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(3000);
  })
}
