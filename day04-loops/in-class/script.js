var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var message = ``;

  var counter = 0;

  while (counter < input) {
    message += `😁`;

    counter = counter + 1;
  }

  return message;
};

//.................................................................//

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var message = ``;
  var counter = 0;

  while (counter < input) {
    var innerLoop = 0;
    while (innerLoop < input) {
      message += `😁`;
      innerLoop = innerLoop + 1;
    }
    message += `<br>`;
    counter = counter + 1;
  }
  return message;
};

//.................................................................//

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var message = ``;
  var counter = 0;

  while (counter < input) {
    var innerLoop = 0;
    while (innerLoop <= counter) {
      message += `😁`;
      innerLoop = innerLoop + 1;
    }
    message += `<br>`;
    counter = counter + 1;
  }

  return message;
};

//................................................................./

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var message = ``;

  var outerLoop = 0;

  // //Method 1 (Only works with 4)//
  // while (outerLoop < input) {
  //   var innerLoop = 0;
  //   while (innerLoop < input) {
  //     if (innerLoop === 1 || innerLoop === 2) {
  //       message += `✊👍👍✊`;
  //       innerLoop = innerLoop + 1;
  //     } else {
  //       message += `✊✊✊✊`;
  //       innerLoop = innerLoop + 1;
  //     }
  //     message += `<br>`;
  //     outerLoop = outerLoop + 1;
  //   }

  // Method 2//
  while (outerLoop < input) {
    var innerLoop = 0;
    while (innerLoop < input) {
      if (
        outerLoop !== 0 &&
        outerLoop !== input - 1 &&
        innerLoop !== 0 &&
        innerLoop !== input - 1
      ) {
        message += `✊`;
        innerLoop = innerLoop + 1;
      } else {
        message += `👍`;
        innerLoop = innerLoop + 1;
      }
    }
    message += `<br>`;
    outerLoop = outerLoop + 1;
  }

  return message;
};

//................................................................./

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var message = ``;

  if (input >= 5 && input % 2 !== 0) {
    //Counter//
    var counter = 0;

    while (counter < input) {
      var outerLoop = 0;
      //OuterLoop//
      while (outerLoop < input) {
        if (
          counter === 0 ||
          counter === input - 1 ||
          outerLoop === 0 ||
          outerLoop === input - 1
        ) {
          message += `👍`;
          outerLoop = outerLoop + 1;
        } else if (
          counter === Math.floor(input / 2) &&
          outerLoop === Math.floor(input / 2)
        ) {
          message += `😁`;
          outerLoop = outerLoop + 1;
        } else {
          message += `✊`;
          outerLoop = outerLoop + 1;
        }
      }
      message += `<br>`;
      counter = counter + 1;
    }
    //Exculsion Rule//
  } else {
    message = `Please enter an odd number that's bigger than 5.`;
  }

  return message;
};

//................................................................./

//Dice Function//
var rollDice = function () {
  var randomNumber = Math.random() * 6;
  var wholeNumber = Math.floor(randomNumber);
  var randomSix = wholeNumber + 1;
  return randomSix;
};

//Game Modes//
var SELECT_NO_DICE = "Select the number of dices";
var GUESS_DICE_NUMBER = "Guess the number on the dices";
var gameMode = SELECT_NO_DICE;

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var message = ``;
  var counter = 0;
  var userGuess = ``;
  var numberOfDice = 0;

  if (gameMode === SELECT_NO_DICE) {
    numberOfDice = input;
    console.log(`Number of dices: ${numberOfDice}.`);
    gameMode = GUESS_DICE_NUMBER;
  } else if (gameMode === GUESS_DICE_NUMBER) {
    userGuess = input;
    console.log(`User guess: ${userGuess}.`);

    while (counter < numberOfDice) {
      //Set Roll Number//
      var roll = counter + 1;
      message += `Roll:${roll} `;

      //Roll Dice//
      var randomNumber = rollDice();
      message += `You rolled a ${randomNumber}. `;
      counter = counter + 1;

      if (userGuess == randomNumber) {
        message += `You won!<br>`;
      } else {
        message += `You lose<br>`;
      }
    }
  }
  console.log(`Gamemode: ${gameMode}.`);
  return message;
};

//................................................................./

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//................................................................./

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//................................................................./

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
