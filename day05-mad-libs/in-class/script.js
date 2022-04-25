var adjectives = [];

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  var message = ``;

  adjectives.push(input);

  var randomNumber = Math.floor(Math.random() * adjectives.length);
  console.log(`${adjectives.length} ${randomNumber}`);
  var randomAdj = adjectives[randomNumber];
  console.log(`${randomAdj}`);

  if (input === "create") {
    message = `It was a ${randomAdj}, November day.`;
  } else {
    message = `Your adjectives includes: ${adjectives}.`;
  }

  return message;
};

//........................................................//

//Game modes//
var INPUT = "Input adjectives";
var CREATE = "Complete Mad Lib";
var currentGameMode = INPUT;

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var message = ``;

  if (currentGameMode === INPUT && input !== "create") {
    adjectives.push(input);
    message = `Your adjectives includes: ${adjectives}.`;
  } else if (currentGameMode === INPUT && input === "create") {
    currentGameMode = CREATE;
  } else if (currentGameMode === CREATE) {
    var randomNumber = Math.floor(Math.random() * adjectives.length);
    console.log(`${adjectives.length} ${randomNumber}`);
    var randomAdj = adjectives[randomNumber];
    console.log(`${randomAdj}`);

    message = `It was a ${randomAdj}, November day.`;
  }

  return message;
};

//........................................................//

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.

  var multipleWords = input.split(" ");
  console.log(`Number of words added: ${multipleWords.length}.`);
  console.log(multipleWords);

  for (var counter = 0; counter < multipleWords.length; counter += 1)
    adjectives.push(multipleWords[counter]);

  var message = `Your adjectives are ${adjectives}.`;
  console.log(`The number of adjectives are ${adjectives.length}.`);
  return message;
};

//........................................................//

var adverb = [];
var noun = [];

var ADVERB = `Input adverbs`;
var NOUN = `Input nouns`;
var inputMode = ADVERB;

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var message = ``;

  if (inputMode === ADVERB && input !== "noun" && input !== "adverb") {
    var multipleAdverbs = input.split(" ");
    for (
      var adverbCounter = 0;
      adverbCounter < multipleAdverbs.length;
      adverbCounter += 1
    ) {
      adverb.push(multipleAdverbs[adverbCounter]);
      message = `The list of adverbs are ${adverb}.<br>${adverb.length} adverbs added.`;
    }
  } else if (inputMode === NOUN && input !== "noun" && input !== "adverb") {
    var multipleNoun = input.split(" ");
    for (
      var nounCounter = 0;
      nounCounter < multipleNoun.length;
      nounCounter += 1
    ) {
      noun.push(multipleNoun[nounCounter]);
      message = `The list of nouns are ${noun}.<br>${noun.length} nouns added.`;
    }
  } else if (input == "adverb") {
    inputMode = ADVERB;
    message = `The input mode has changed to Adverb only.`;
  } else if (input == "noun") {
    inputMode = NOUN;
    message = `THe iinput mode has changed to Nouns only.`;
  }

  return message;
};

//........................................................//

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//........................................................//

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
