'use strict';
/*
 .textContent  --------   Definition 
  Setting and accessing content of an element

  document.querySelector('.game-name').textContent = 'Gameplay!';

 .value --------   Definition 
  Setting and accessing value of an input
  document.querySelector('.guess').value = '';


  .addEventListner() --------  Definition 
  This is a DOM method that adds an event listner that will wait for an event to happen

   Explanation 
  Example:
  document.querySelector('anybutton').addEventListner('event', function)

  The method take two arguments as parameter:
    1. The Event:
        Click
        hover
        mouseEnter

    2. The function:
        The function here is doing the work. The function is actually the event handler which handles the request when the event is triggered

const guess = document.querySelector('.check');
guess.addEventListener('click', function () {
  confirm('Are you ready?');
  document.querySelector('.game-name').textContent =
    'Welcome to the battle field!';
});
*/

/*
  Verify if the value entered is empty or not. If the value is empty then change the message to
  "No Number" 

   Solution 

   1. Get input value
   2. Get text content of message
   3. Get the button and add click event
   4. Check if input value is empty ( 
      Tip  if(!guess){do something} because guess is false and it is empty 

      Tip  Because 0 is a falsy value)
        print message "🛑 no number!"
    5. Implement logic for Scenerio 1: Value is to high
    6. Implement logic for Scenerio 2: Value is to low
    7. Implement logic for Scenerio 3: Value is equal

    Tip 
    1. Refactor the code and make it DRY
    2. Another good axample of refactoring code is making functions for rereated line of codes.
*/

//Implementing game logic

const check = document.querySelector('.check');

//Any random number (and check if randowm number is 0 and if it is than create a new randowm number). We are doing this because we are checking with the help is zero using !guess which is 0. So we can not use 0
let correctNumber = Math.trunc(Math.random() * 21);
if (correctNumber == 0) correctNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let currentScore = document.querySelector('.score');
let message = document.querySelector('.message');
const corrNumber = document.querySelector('.number');
let highScore = document.querySelector('.highscore');

check.addEventListener('click', function () {
  //When we get anything from a user it is usually a string
  const guess = Number(document.querySelector('.guess').value);
  //If value is empty or 0
  if (!guess) {
    message.textContent = '🛑 No number!';
  }

  //if guess is < correct number
  else if (guess < correctNumber) {
    if (guess < 0) {
      message.textContent = '🛑🛑🛑 No negative numbers are allowed!';
    } else {
      message.textContent = '📉 The Number Is To Low!';
    }
  }

  //if guess is > correct number
  else if (guess > correctNumber) {
    if (guess > 20) {
      message.textContent = '🛑🛑🛑 Enter number between 1 and 20!';
    } else {
      message.textContent = '📈 The Number Is To High!';
    }
  }

  //if guess is == correct number
  else if (guess === correctNumber) {
    message.textContent = '🎉 Correct Number!';
    corrNumber.textContent = correctNumber;
    highScore.textContent = score;

    if (highScore > score) {
      highScore.textContent = score;
    } else if (highScore < score) {
      highScore.textContent = currentScore;
    }

    //Changing styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.Color = '#60b347';
  }

  //Scoring
  if (guess != correctNumber) {
    score--;
    currentScore.textContent = score;
    if (score <= 0) {
      document.querySelector('.game-name').textContent = 'Game-over!';
      currentScore.textContent = 0;
    }
  }
});

/*Implementing again/reset button functionality so player can play again
  1. Select the again button and add the event handler
  2. In the handler function restore inital values of the score and number variables
  3.Restore the initial condition of the message
  4.Also restore the orignal background color

*/

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.Color = '#222';

  //setting score to initials
  score = 20;
  currentScore.textContent = score;

  message.textContent = 'Start guessing';
  corrNumber.textContent = '?';
  correctNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.guess').value = '';
});
