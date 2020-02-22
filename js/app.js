// dont forget to modify your README.md file to describe your project with the new features you are adding.
'use strict';
var score = 0;


var userName = prompt ('Hello there! please enter your name');
alert('Hello ' + userName);
console.log(userName);

var earth = prompt ('Do you think that i beleive the earth is flat?');

switch (earth.toLowerCase()) {
case 'yes':
case 'y':
  alert('NO! it is round! I love and believe in astronomy science >:(');
  break;
case 'no':
case 'n':
  alert ('correct answer, Im proud of you :)');
  score++;
  break;


default:
  alert('just yes or no please');
  break;
}
// console.log(earth);
function myMovies(movies){

  var movies = prompt ('Do you think I watch movies?');

  switch (movies.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('correct, you should share with me your favourite gener later!');
    score++;
    break;
  case 'no':
  case 'n':
    alert('now that is sad, who doesn\'t watch movies even?!');
    break;

  default:
    alert('yes or no questions.. remember??');
    break;
  }}
myMovies();
// console.log(movies);
function myQuiz(quiz){

  var quiz = prompt('I believe that i\'m a tryhard student, is that right?');

  switch (quiz.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert('aww thank you, I really am trying my best!');
    score++;
    break;
  case 'NO':
  case 'N':
    alert('oof- okay... I guess i\'ll try more :(');
    break;

  default:
    alert('you can not avoid this question!');
    break;
  }}
myQuiz();
// console.log(quiz);
function myGrade(grade){
  var grade = prompt('i think i\'m getting a full mark on lab-02, do you think that too?' , 'you can use yes/no/maybe');
  switch (grade.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert('well of course, it is me after all B)');
    score++;
    break;
  case 'NO':
  case 'N':
    alert('I guess re-submitting is also an option (sorry)');
    break;
  case 'MAYBE':
    alert('It was supposed to be a yes or no question, LOL ');
    break;

  default:
    alert('you can not avoid this question!');
    break;
  }}
myGrade();
// console.log(grade);
function yourEarly(early){
  var early = prompt('do you think i stay awake till after midnight?');

  switch (early.toLocaleUpperCase()) {
  case 'YES':
  case 'Y':
    alert('oh wow! that is correct, im a night owl! ;)');
    score++;
    break;
  case 'NO':
  case 'N':
    alert('wrong, i stay awake till 4 am or even 5 am every night');
    break;
  default:
    alert('avoiding now, ain\'t we?');
    break;
  }}
yourEarly();
// console.log(early);

alert('welcome to my page ' + userName);
function myNum(num){

  var i;
  for (i = 0; i < 4; i++ ){
    var num = prompt ('I\'m thinking of a number from 1 to 5 that is correct, can you guess the number?');
    switch (num){
    case '3':
      alert ('correct!');
      i = 4;
      score++;
      break;
    case '2':
    case '5':
    case '31':
    case '4':
      alert ('wrong number! :P');
      break;
    default:
      if (num > 5 || num < 10 ) {
        alert ('High, do it again!');
        console.log(num);
      } else if (num > 10) {
        alert('Too High, do it again!');
        console.log(num);
      }else if (num < 3 || num > 0) {
        alert('Too Low, do it again');
        console.log(num);
      }else if (num < -5) {
        alert('Too Low, do it again!');
        console.log(num);

      }
    }
  }}
myNum();
alert ('The correct answer was 3');


function myFruit(fruit){
  var answer;
  var fruit = ['apple','strawberry','peach','banana','berry'];
  answer = prompt('what is my favourite fruit?', ' Possible answers: apple , strawberry , peach , banana , berry');
  for (var j = 0; j < 6 ; j++) {

    if (fruit[0] === answer || fruit[1] === answer || fruit[2] === answer || fruit[3] === answer ||fruit[4] === answer){
      alert('my favourite fruits are apple , strawberry , banana');
      score++;
      break;
    }
    else
      prompt('Try again');
  }
  if(j === 6){

    alert('you have tried too many times');
  }}
myFruit();

alert ('your score is ' + score);





// it worked but not the way i wanted.
// var fruit = ['apple','strawberry','peach','banana','berry'];
// var myFavFruit = prompt('what is my favourite fruit?');
// alert ('what are my favourite fruits?');

// switch(myFavFruit){
// case fruit[0]:
// case fruit[1]:
// case fruit[3]:
//   alert ('correct!');
//   j = 6;
//   score++;
//   break;
// case fruit[2]:
// case fruit[4]:
//   alert ('wrong answer!');
//   break;
// default:
//   alert('not an option!');
//   break;
// }
// }

