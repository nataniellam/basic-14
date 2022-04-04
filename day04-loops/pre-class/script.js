//Roll Dice Function//
var rollDice = function () {
  var randomNumber = Math.random() * 6;
  var wholeNumber = Math.floor(randomNumber);
  var randomSix = wholeNumber + 1;
  return randomSix;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var message = ``;
  var counter = 1;

  // //Yes No Counter Rule//
  // while (counter < input) {
  //   //If counter is less than 5, add "Yes" to output//
  //   if (counter < 5) {
  //     message = message + "yes";
  //     counter = counter + 1;
  //   }
  //   //If counter is more than 5 add "No" to output//
  //   else {
  //     message = message + "No";
  //     counter = counter + 1;
  //   }
  // }

  //Roll Dice Rule//
  while (counter < input) {
    var diceRoll = rollDice();
    message += `${counter} ${diceRoll}<br>`;
    counter = counter + 1;
  }

  // //Nested Loops//
  // while (counter < input) {
  //   var innerLoop = 0;

  //   while (innerLoop < input) {
  //     message += `x`;
  //     innerLoop = innerLoop + 1;
  //   }

  //   message += "<br>";
  //   counter = counter + 1;
  // }

  return message;
};
//..............................................................//

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var message = ``;
  var counter = 0;

  while (counter < 6) {
    message += `Hello`;
    counter = counter + 1;
  }

  return message;
};

//..............................................................//

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var message = ``;
  // var counter = 0;

  // while (counter < input) {
  //   var innerLoop = 0;

  //   while (innerLoop < input * 2) {
  //     message += `Hello`;
  //     innerLoop = innerLoop + 1;
  //   }

  //   message += "<br>";
  //   counter = counter + 1;
  // }

  // //-----//
  // for (var counter = 0; counter < input; counter += 1) {
  //   for (var innerLoop = 0; innerLoop < input; innerLoop += 1) {
  //     message += `Hello`;
  //   }
  //   message += "<br>";
  // }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.

  return message;
};

//..............................................................//

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
