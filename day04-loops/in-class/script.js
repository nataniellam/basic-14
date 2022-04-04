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

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var message = ``;
  var outerLoop = 0;

  while (outerLoop < input) {
    if (
      (outerLoop == 1 && innerLoop == 0) ||
      (outerLoop == 2 && innerLoop == 1)
    ) {
      message += `👍`;
    } else {
      message += `✊`;
    }
    outerLoop = outerLoop + 1;
  }
  var innerLoop = 0;
  while (innerLoop < input) {
    message += `<br>`;

    innerLoop = innerLoop + 1;
  }

  return message;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
