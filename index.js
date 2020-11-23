var readLineSync = require("readline-sync");

var userName = readLineSync.question("May I know your name ?");

console.log("Hello, "+userName+" Let's begin the quiz");
var score = 0
var questions = [
  {
    question:"Who is my fav character in Marvel Universe ?",
    answer:"Hulk"
  },
  {
    question:"What is my favourite dog breed ?",
    answer:"Husky"
  },
  {
    question:"Where is my hometown ?",
    answer:"Dungarpur"
  }
]

function play(question,answer){
  var userAnswer = readLineSync.question(question)
  if (userAnswer === answer){
    score ++;
    console.log("You are correct !!")
    console.log("------------------")
  }else{
    console.log("You are wrong !!")
    console.log("------------------")
  }
}

for(var i =0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
console.log("You are completed the quiz !!")
console.log("Your score is :"+score)
console.log("------------------")