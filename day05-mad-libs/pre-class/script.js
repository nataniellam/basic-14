var guesses = [];

var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
  guesses.push(input);

  var randomNumber = rollDice();
  var message = `You rolled a ${randomNumber}. You lose.`;

  if (randomNumber == input) {
    message = `You rolled a ${randomNumber}. You won.`;
  }

  return message;
};

var names = [];

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.
  // Index starts at 0, representing the 0th index of the array

