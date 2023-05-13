'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  // Register new answer
  registerNewAnswer() {
    // prompt user
    const promptUser = prompt(
      `${this.question}\n ${this.options.join('\n')} \n Write option number`
    );

    //register answer
    !isNaN(promptUser) &&
      promptUser < 4 &&
      promptUser > -1 &&
      this.answers[promptUser]++;

    isNaN(promptUser) &&
      alert('Please enter a number. Please select a number between 0 and 3!') &&
      this.registerNewAnswer();

    this.displayResults();
    this.displayResults('string');
  },

  // displayResults
  displayResults(type = 'array') {
    type == 'string' &&
      console.log(`Poll results are ${this.answers.join(', ')}`);
    type == 'array' && console.log(this.answers);
  },
};

const btnPoll = document.querySelector('.poll');
btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// bind this keyword to the object not to the HTML button element

// btnPoll.addEventListener('click', poll.registerNewAnswer);

// btnPoll.addEventListener('click', function () {
//   console.log(this);
// });

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// creating a new object and setting an answers property so we can set this keyword on the call method
// const results = {
//   answers: [1, 5, 3, 9, 6, 1],
// };

// poll.displayResults.call({results}, 'string');
// poll.displayResults.call(results, 'string');

// or
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
