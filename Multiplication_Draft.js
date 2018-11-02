/*
*  GROUP TWO
 *
 */
// 1. Embed all code in a For loop that runs 10 times.
// 2. Move code parts 1-3 into a function called multiPractice, and call multiPractice within the For loop.
// 3. Count how many not-right-first-answers and return that count from multiPractice.
// 4. Accept manual input for loop (not 10 but "questions") and calculate percent correct first time. 
// 5. At "stop" or at loop end, report answer percent correct.  If no wrong answers, say "Charlie, you've won!"

//defining the variables

var x = 0;
var y = 0;
var userInput = 0;
var solution = 0;
var stop = false;
var wrongAnswers = 0;

function multiPractice(question){
  x = Math.floor(Math.random()*7)+3;
  y = Math.floor(Math.random()*7)+3;
  solution = x*y;
  while ((userInput != solution) && (stop == false)){
    userInput = prompt("Question " + question + ": What is " + x + " * "+ y + "?");
    if (userInput == "stop" || userInput == "Stop"){
      stop = true;
    }
    else if (userInput == solution){
      alert("Correct!");
    }
    else{
      alert("Incorrect solution. Try again.");
      wrongAnswers++;
    }
  }
  return wrongAnswers;
}
