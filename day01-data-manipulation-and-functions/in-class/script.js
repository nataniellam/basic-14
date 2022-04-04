var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var lengthOfTripKm = input;
  var lengthOfTripMiles = lengthOfTripKm / 0.62;
  var costPerLitre = 2.2;
  var petrolNeeded = lengthOfTripMiles / 9;
  var totalCost = petrolNeeded * costPerLitre;
  var myOutputValue = totalCost;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var lengthOfTripKm = input;
  var lengthOfTripMiles = lengthOfTripKm * 0.62;
  var trainCostPerLitre = 2.0;
  var petrolNeeded = lengthOfTripMiles / 9;
  var trainTotalCost = petrolNeeded * trainCostPerLitre;
  var carCostPerLitre = 2.2;
  var carTotalCost = petrolNeeded * carCostPerLitre;
  var savings = carTotalCost - trainTotalCost;
  return savings;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var numberOfGuest = input;
  var totalNumberOfDrinks = numberOfGuest * 2;
  var totalNumberOfIce = totalNumberOfDrinks * 4;
  var totalMassInGrams = totalNumberOfIce * 1.5;
  var totalMassInPounds = totalMassInGrams / 454;
  var timeInHours = totalMassInPounds / 5;
  return timeInHours;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var numberOfPlans = Math.ceil(input / 50);
  var totalCost = numberOfPlans * 19.99;
  var averageCost = totalCost / input;
  return averageCost;
};
