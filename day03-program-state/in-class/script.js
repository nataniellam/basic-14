//Define Secret Word//
var secretWord = "";
var secretWord1 = "Banana";
var secretWord2 = "Chisel";
var secretWord3 = "Faucet";

//Define Number Of Wins//
var numberOfWins = 0;

//Random Word Generator//
var rollDice = function (rigged = false) {
  if (rigged) {
    return 1;
  }

  var randomNumberGenerator = Math.random() * 3;
  var randomIntegar = Math.floor(randomNumberGenerator);
  var randomNumber = randomIntegar + 1;
  return randomNumber;
};

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber2 = rollDice();
  console.log(`You rolled a ${randomNumber2}.`);

  //Get Random Word//
  if (randomNumber2 === 1) {
    secretWord = secretWord1;
  } else if (randomNumber2 === 2) {
    secretWord = secretWord2;
  } else if (randomNumber2 === 3) {
    secretWord = secretWord3;
  }
  console.log(`The secret word is ${secretWord}.`);

  //Guess The Word//
  if (input == secretWord) {
    message = `You have guessed the word correctly! The secret word is ${secretWord}.`;
    numberOfWins = numberOfWins + 1;
  } else {
    message = `You have guessed the word wrongly! The secret word is ${secretWord}.`;
  }

  //Number Of Wins//
  if (numberOfWins == 2) {
    message += ` You have ${numberOfWins} correct guesses and have won the game!`;
  } else if (numberOfWins < 2)
    message += ` You have ${numberOfWins} correct guesses. Please try again.`;
  console.log(`Your number of wins is ${numberOfWins}.`);

  return message;
};

//...............................................................//

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber2 = rollDice();
  console.log(`You rolled a ${randomNumber2}.`);

  //Get Random Word//
  if (randomNumber2 === 1) {
    secretWord = secretWord1;
  } else if (randomNumber2 === 2) {
    secretWord = secretWord2;
  } else if (randomNumber2 === 3) {
    secretWord = secretWord3;
  }
  console.log(`The secret word is ${secretWord}.`);

  //Guess The Word//
  if (input == secretWord) {
    message = `You have guessed the word correctly! The secret word is ${secretWord}.`;
    numberOfWins = numberOfWins + 1;
  } else {
    message = `You have guessed the word wrongly! The secret word is ${secretWord}.`;
    numberOfWins = numberOfWins = 0;
  }

  //Number Of Wins//
  if (numberOfWins == 2) {
    message += ` You have ${numberOfWins} correct guesses and have won the game!`;
  } else if (numberOfWins < 2)
    message += ` You have ${numberOfWins} correct guesses. Please try again.`;
  console.log(`Your number of wins is ${numberOfWins}.`);

  return message;
};

//...............................................................//

//Rounds Required To Win//
var numberOfWinsRequired = rollDice() + 1;

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber2 = rollDice();
  console.log(`You rolled a ${randomNumber2}.`);
  console.log(`Number of wins required is ${numberOfWinsRequired}.`);

  //Get Random Word//
  if (randomNumber2 === 1) {
    secretWord = secretWord1;
  } else if (randomNumber2 === 2) {
    secretWord = secretWord2;
  } else if (randomNumber2 === 3) {
    secretWord = secretWord3;
  }
  console.log(`The secret word is ${secretWord}.`);

  //Guess The Word//
  if (input == secretWord) {
    message = `You have guessed the word correctly! The secret word is ${secretWord}.`;
    numberOfWins = numberOfWins + 1;
  } else {
    message = `You have guessed the word wrongly! The secret word is ${secretWord}.`;
  }

  //Number Of Wins//
  if (numberOfWins == numberOfWinsRequired) {
    message += ` You have ${numberOfWins} correct guesses and have won the game!`;
    numberOfWinsRequired = rollDice() + 1;
    message += `<br><br>The number of wins required is now ${numberOfWinsRequired}.`;
  } else {
    message += `You have ${numberOfWins} correct guesses.
    <br><br>Your win status is ${numberOfWins} out of ${numberOfWinsRequired}.
    `;
  }
  console.log(`Number of wins required is ${numberOfWinsRequired}.`);

  return message;
};

//...............................................................//
//...............................................................//
//...............................................................//

//Random Number (1 to 3) Generator//
var rollDice3 = function (rigged = false) {
  if (rigged) {
    return 1;
  }

  var randomNumberGenerator = Math.random() * 3;
  var randomIntegar = Math.floor(randomNumberGenerator);
  var randomNumber = randomIntegar + 1;
  return randomNumber;
};

//Random Number (1 to 6) Generator//
var rollDice6 = function (rigged = false) {
  if (rigged) {
    return 1;
  }

  var randomNumberGenerator = Math.random() * 6;
  var randomIntegar = Math.floor(randomNumberGenerator);
  var randomNumber = randomIntegar + 1;
  return randomNumber;
};

//Random Within Number//
var withinNumber = rollDice3();

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber = rollDice6();

  //Winning Difference//
  var difference = Math.abs(randomNumber - input);

  if (difference <= withinNumber) {
    message = `You rolled a ${randomNumber} and guessed ${input}.<br>The within number is ${withinNumber}<br>You won!`;
    withinNumber = rollDice3();
  } else {
    message = `You rolled a ${randomNumber} and guessed ${input}.<br>The within number is ${withinNumber}<br>You lose!`;
  }

  return message;
};

//...............................................................//

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var message = ``;

  //Roll Dice//
  var randomNumber1 = rollDice6();
  var randomNumber2 = rollDice6();
  var totalDiceRoll = randomNumber1 + randomNumber2;

  //Winning Difference//
  var difference = Math.abs(totalDiceRoll - input);

  if (difference <= withinNumber) {
    message = `You rolled a ${randomNumber1} and ${randomNumber2}, which is a total of ${totalDiceRoll} and guessed ${input}.<br>The within number is ${withinNumber}<br>You won!`;
    withinNumber = rollDice3();
  } else {
    message = `You rolled a ${randomNumber1} and ${randomNumber2}, which is a total of ${totalDiceRoll} and guessed ${input}.<br>The within number is ${withinNumber}<br>You lose!`;
  }

  return message;
};

//...............................................................//

//Game Mode//
var currentGameMode = "diceGame";
var numberOfWins2 = 0;

var diceGame = function (input) {
  //Roll Dice//
  var randomNumber1 = rollDice6();
  var randomNumber2 = rollDice6();
  var totalDiceRoll = randomNumber1 + randomNumber2;

  var message = ``;

  //Winning Difference//
  var difference = Math.abs(totalDiceRoll - input);

  if (difference <= withinNumber) {
    numberOfWins2 = numberOfWins2 + 1;
    message = `You rolled a ${randomNumber1} and ${randomNumber2}, which is a total of ${totalDiceRoll} and guessed ${input}.<br>The within number is ${withinNumber}<br>You won!`;
    withinNumber = rollDice3();
  } else {
    message = `You rolled a ${randomNumber1} and ${randomNumber2}, which is a total of ${totalDiceRoll} and guessed ${input}.<br>The within number is ${withinNumber}<br>You lose!`;
  }

  if (numberOfWins2 === 2) {
    currentGameMode = "randomFour";
    message += ` We will now play the 4D game.`;
  }

  return message;
};

var randomFour = function (input) {
  var message = ``;

  if (input == 1234) {
    message = `You won the game! We will now play the dice game again.`;
    currentGameMode = "diceGame";
  } else {
    message = `The answer is 1234.`;
  }

  return message;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.

  var message = ``;

  //Determine Game Mode//
  if (currentGameMode == "diceGame") {
    message = diceGame(input);
  } else if (currentGameMode == "randomFour") {
    message = randomFour(input);
  }

  console.log(
    `The current game mode is ${currentGameMode} The number of wins is ${numberOfWins2}.`
  );

  return message;
};

//...............................................................//

//Random Word Generator 2//

var currentGameMode2 = "firstSecretGame";

var rollDice2 = function (rigged = true) {
  if (rigged) {
    return 1;
  }
  var randomNumberGenerator = Math.random() * 2;
  var randomIntegar = Math.floor(randomNumberGenerator);
  var randomNumber = randomIntegar + 1;
  return randomNumber;
};

var secondSecretGame = function (input) {
  var message = "";

  //Roll Dice//
  var randomNumber2 = rollDice2();
  console.log(`You rolled a ${randomNumber2}.`);

  //Get Random Word//
  if (secretWord == "Banana" && randomNumber2 === 1) {
    secretWord = secretWord2;
  } else if (secretWord == "Banana" && randomNumber2 === 2) {
    secretWord = secretWord3;
  } else if (secretWord == "Chisel" && randomNumber2 === 1) {
    secretWord = secretWord1;
  } else if (secretWord == "Chisel" && randomNumber2 === 2) {
    secretWord = secretWord3;
  } else if (secretWord == "Faucet" && randomNumber2 === 1) {
    secretWord = secretWord1;
  } else if (secretWord == "Faucet" && randomNumber2 === 2) {
    secretWord = secretWord2;
  }
  console.log(`The secret word is ${secretWord}.`);

  //Guess The Word//
  if (input == secretWord) {
    message = `You have guessed the word correctly! The secret word is ${secretWord}.`;
    numberOfWins = numberOfWins + 1;
  } else {
    message = `You have guessed the word wrongly! The secret word is ${secretWord}.`;
    numberOfWins = 0;
  }

  //Number Of Wins//
  if (numberOfWins == 2) {
    message += ` You have ${numberOfWins} correct guesses and have won the game!`;
  } else if (numberOfWins < 2)
    message += ` You have ${numberOfWins} correct guesses. Please try again.`;
  console.log(`Your number of wins is ${numberOfWins}.`);

  return message;
};

var firstSecretGame = function (input) {
  var message = ``;

  //Roll Dice//
  var randomNumber2 = rollDice();
  console.log(`You rolled a ${randomNumber2}.`);

  //Get Random Word//
  if (randomNumber2 === 1) {
    secretWord = secretWord1;
  } else if (randomNumber2 === 2) {
    secretWord = secretWord2;
  } else if (randomNumber2 === 3) {
    secretWord = secretWord3;
  }
  console.log(`The secret word is ${secretWord}.`);

  //Guess The Word//
  if (input == secretWord) {
    message = `You have guessed the word correctly! The secret word is ${secretWord}.`;
    numberOfWins = numberOfWins + 1;
    currentGameMode2 = "secondSecretGame";
  } else {
    message = `You have guessed the word wrongly! The secret word is ${secretWord}.`;
    numberOfWins = 0;
    currentGameMode2 = "secondSecretGame";
  }

  //Number Of Wins//
  if (numberOfWins == 2) {
    message += ` You have ${numberOfWins} correct guesses and have won the game!`;
  } else if (numberOfWins < 2)
    message += ` You have ${numberOfWins} correct guesses. Please try again.`;
  console.log(`Your number of wins is ${numberOfWins}.`);

  return message;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var message = ``;

  //Game Mode//

  if (currentGameMode2 == "firstSecretGame") {
    message = firstSecretGame(input);
  } else if (currentGameMode2 == "secondSecretGame") {
    message = secondSecretGame(input);
  }

  console.log(`Current game mode us ${currentGameMode2}.`);

  return message;
};
