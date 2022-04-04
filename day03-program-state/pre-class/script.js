var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var rollDice = function (rigged = true) {
  // produces a decimal between 0 and 6
  if (rigged) {
    return 1;
  }

  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var message = "You lose";

  if (randomDiceNumber === input) {
    message = "You win";
  }

  return message;
};

//------------------------------------------------------------------//

//Track Previous Dice Roll Number//
var prevDiceRoll = 0;

//Previous Dice Roll Information//
var getPrevDiceRollInfo = function () {
  if (prevDiceRoll === 0) {
    return ` This is your first roll.`;
  }
  return ` You last roll was ${prevDiceRoll}.`;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var message = ``;

  //Roll The Dice//
  var randomDiceNumber = rollDice();

  //Turn Previous Dice Roll Info Into String//
  var prevDiceRollInfo = getPrevDiceRollInfo();

  //Game Rules//
  if (randomDiceNumber === input) {
    message = `You rolled a ${randomDiceNumber}. You win. ${prevDiceRollInfo}`;
  } else {
    message = `You rolled a ${randomDiceNumber}. You lose. ${prevDiceRollInfo}`;
  }

  //Update Dice Roll Number//
  prevDiceRoll = randomDiceNumber;

  return message;
};

//------------------------------------------------------------------//

//Set Guess Status//
var correctGuess = 0;
var numberOfGuesses = 0;

//Calculate Win Rate//
var winRate = function () {
  var winRateFormula = ((correctGuess / numberOfGuesses) * 100).toFixed(2);
  var message = `Your current win rate is ${winRateFormula}%.`;

  return message;
};

function winLossMain(input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber = rollDice();

  if (input > 0) {
    numberOfGuesses = numberOfGuesses + 1;
  }
  console.log(`Your number of guesses are ${numberOfGuesses}`);

  if (input == randomNumber) {
    correctGuess = correctGuess + 1;
  }
  console.log(`Your number of correct guesses are ${correctGuess}`);

  //Change Win Rate Into String//
  var winRateMessage = winRate();

  if (input == randomNumber) {
    message = `You rolled a ${randomNumber} and guessed correctly. ${winRateMessage}`;
  } else {
    message = `You rolled a ${randomNumber} and guessed wrongly. ${winRateMessage}`;
  }

  return message;
}

//------------------------------------------------------------------//

//Number Frequency//
var numberOne = 0;
var numberTwo = 0;
var numberThree = 0;
var numberFour = 0;
var numberFive = 0;
var numberSix = 0;

//Number Frequency Result//
var frequencyResult = function () {
  var message = `Here's the breakdown of the number of times each number is rolled:<br>
  Number 1: ${numberOne}<br>
  Number 2: ${numberTwo}<br>
  Number 3: ${numberThree}<br>
  Number 4: ${numberFour}<br>
  Number 5: ${numberFive}<br>
  Number 6: ${numberSix}<br>`;

  return message;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber = rollDice();

  //Update Number Frequency//
  if (randomNumber === 1) {
    numberOne = numberOne + 1;
  } else if (randomNumber === 2) {
    numberTwo = numberTwo + 1;
  } else if (randomNumber === 3) {
    numberThree = numberThree + 1;
  } else if (randomNumber === 4) {
    numberFour = numberFour + 1;
  } else if (randomNumber === 5) {
    numberFive = numberFive + 1;
  } else if (randomNumber === 6) {
    numberSix = numberSix + 1;
  }

  //Change Number Frequency Result Into String//
  var numberFrequencyCopy = frequencyResult();

  if (input == randomNumber) {
    message = `You rolled a ${randomNumber} and guessed correctly.<br><br>${numberFrequencyCopy}`;
  } else {
    message = `You rolled a ${randomNumber} and guessed wrongly.<br><br>${numberFrequencyCopy}`;
  }

  return message;
};

//------------------------------------------------------------------//

//Point Status//
var numberOfPoints = 0;

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber = rollDice();
  console.log(`You rolled a ${randomNumber}.`);

  //Update Points//
  if (input == randomNumber + 1) {
    numberOfPoints = numberOfPoints + 1;
    message = `You rolled a ${randomNumber} and missed one but you have gain one point.<br>You have a total of ${numberOfPoints} points`;
  } else if (input == randomNumber) {
    numberOfPoints = numberOfPoints + 2;
    message = `You rolled a ${randomNumber} and guessed correctly! You have gain two points!<br>You have a total of ${numberOfPoints} points`;
  } else {
    message = `You rolled a ${randomNumber} and guessed wrongly!<br>You have a total of ${numberOfPoints} points`;
  }

  return message;
};

//------------------------------------------------------------------/

//Point System/
var numberOfPoints2 = 0;

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber = rollDice();

  //Game Rules//
  if (input == randomNumber) {
    numberOfPoints2 = numberOfPoints2 + 5;
    message = `You rolled a ${randomNumber}. You guessed correctly and gained 5 points. You have ${numberOfPoints2} points.`;
  } else if (input == randomNumber + 1) {
    numberOfPoints2 = numberOfPoints2 + 4;
    message = `You rolled a ${randomNumber}. You missed it by one and gained 4 points. You have ${numberOfPoints2} points.`;
  } else if (input == randomNumber + 2) {
    numberOfPoints2 = numberOfPoints2 + 3;
    message = `You rolled a ${randomNumber}. You missed it by two and gained 3 points. You have ${numberOfPoints2} points.`;
  } else if (input == randomNumber + 3) {
    numberOfPoints2 = numberOfPoints2 + 2;
    message = `You rolled a ${randomNumber}. You missed it by three and gained 2 points. You have ${numberOfPoints2} points.`;
  } else if (input == randomNumber + 4) {
    numberOfPoints2 = numberOfPoints2 + 1;
    message = `You rolled a ${randomNumber}. You missed it by four and gained 1 points. You have ${numberOfPoints2} points.`;
  }

  return message;
};

//------------------------------------------------------------------//

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//------------------------------------------------------------------//

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
