'use strict';
/*
    When user clicks on 'roll dice', a random dice will appear and
    player gets the point. If the number of the dice is 0 then the player turn is over.

    1. How to genrate a random number
    2. How will score be calculated
    3. What is current score
    4. What will happen when player turn is over
    5. How the score is calculated 

*/

/*
    Solution 

    1. I will generate a random number from 1-6 and use the switch cases to display the number image on screen by manipulating the class

    2. The current score is the score that player gets on his turn, and the current score will add up to the main score after each turn.

    3. Current score is the score that player will have on his current turn
    example: the current score is 21 that player gets, when the turn is over which means player gets '1' on the dice, the current score will add up to his main score

    4. The turn will shift to the other player and he will roll the dice

    5. On each turn the current score will add up to the main score
    of the player and who ever completed 100 mark first will win the game.

    
roll.addEventListener('click', function () {
  //Generate Random number
  let numberOnDice = Math.trunc(Math.random() * 6) + 1;

  //Display Dice Roll
  dice.classList.remove('dice-hidden');
  dice.src = `dice-${numberOnDice}.png`;

  // If dice roll is between 2-6
  if (numberOnDice !== 1) {
    //Display current on player 1

    //Player 1 is rolling dice
    if (player1.classList.contains(playerActive)) {
      currentScore = currentScore + numberOnDice;
      currentScorePlayer1.textContent = currentScore;
    }

    //Player 2 rolling dice
    else {
      currentScore = currentScore + numberOnDice;
      currentScorePlayer2.textContent = currentScore;
    }
  }

  //If roll on dice is 1
  else {
    //Switch Player
    //Player 1 is active
    if (player1.classList.contains(playerActive)) {
      score[0] += currentScore;
      scorePlayer1.textContent = score[0];
      setCurrentScoreTo0(currentScorePlayer1);
      player2.classList.add(playerActive);
      player1.classList.remove(playerActive);
    }

    //Player 2 is active
    else {
      score[1] += currentScore;
      scorePlayer2.textContent = score[1];
      setCurrentScoreTo0(currentScorePlayer2);
      player1.classList.add(playerActive);
      player2.classList.remove(playerActive);
    }
  }
});

//Hold functionality
hold.addEventListener('click', function () {
  if (player1.classList.contains(playerActive)) {
    score[0] += currentScore;
    scorePlayer1.textContent = score[0];
    setCurrentScoreTo0(currentScorePlayer1);
    player2.classList.add(playerActive);
    player1.classList.remove(playerActive);
  } else {
    score[1] += currentScore;
    scorePlayer2.textContent = score[1];
    setCurrentScoreTo0(currentScorePlayer2);
    player1.classList.add(playerActive);
    player2.classList.remove(playerActive);
  }
});

//New Game Functionality
newGame.addEventListener('click', function () {
  setCurrentScoreTo0(currentScorePlayer1);
  setCurrentScoreTo0(currentScorePlayer2);

  setScoreTo0(scorePlayer1);
  setScoreTo0(scorePlayer2);

  dice.classList.add('dice-hidden');
});



*/

// Player 1
const player0ELe = document.querySelector('.player--0');
const scorePlayer0Ele = document.querySelector('#score--0');
const player0Name = document.querySelector('#name--0');
const currentScorePlayer0Ele = document.querySelector('#current--0');

// Player 2
const player1Ele = document.querySelector('.player--1');
const scorePlayer1Ele = document.querySelector('#score--1');
const player1Name = document.querySelector('#name--1');
const currentScorePlayer1Ele = document.querySelector('#current--1');

// Dice
const dice = document.querySelector('.dice');

//Actions
const newGame = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

let currentScore = 0; //Player Current Score
let score = [0, 0]; //Both Players Final Scores

//Set Current score to 0
const setCurrentScoreTo0 = function (activePlayer) {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
};

//Set score to 0
const setScoreTo0 = function (playerScore) {
  score = [0, 0];
  playerScore.textContent = 0;
};
//Player Active
let activePlayer = 0;

// Starting conditions
function startingConditions() {
  setScoreTo0(scorePlayer0Ele);
  setScoreTo0(scorePlayer1Ele);
  setCurrentScoreTo0(activePlayer);

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  roll.removeAttribute('disabled', 'true');
  hold.removeAttribute('disabled', 'true');

  activePlayer = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  dice.classList.add('dice-hidden');
}

startingConditions();

//Switch Player
function switchPlayer() {
  setCurrentScoreTo0(activePlayer);
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  player1Ele.classList.toggle('player--active');
  player0ELe.classList.toggle('player--active');
}

roll.addEventListener('click', function () {
  //Generate Random number
  let numberOnDice = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('dice-hidden');
  dice.src = `dice-${numberOnDice}.png`;

  if (numberOnDice !== 1) {
    //Calculate current score
    currentScore += numberOnDice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    score[activePlayer] = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    setCurrentScoreTo0(activePlayer);

    switchPlayer();
  }
});

hold.addEventListener('click', function () {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  if (score[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    roll.toggleAttribute('disabled', 'true');
    hold.toggleAttribute('disabled', 'true');
  } else {
    switchPlayer();
  }
});

newGame.addEventListener('click', function () {
  startingConditions();
});
/**
   Important 
 
  We need to keep track of which player is playing and is active.
  I was doing that by using class 'player-active' which is not a effective way to keep track

   Tip 
  We will use 0 and 1 to keep track of which player is playing. If the value is 0 than player 1 is active and if the value is 1 than player 2 is active.

   Tip 
  We are using 0 and 1 because we will store scores for both player in an array to keep track of the scores for both player at same time. 0 and 1 will help to identify the active player which makes it easy to add current score and caculate score 

   Tip 
  It will be handy to use 0 as starting value for active player becasue array is 0 based.

   Tip 
  We will build id using string constructor to change the active player.

   Important 
  We can use 'toggle()' method to toggle the class, which will remove the class if it is there and add the class if it not there

 */
