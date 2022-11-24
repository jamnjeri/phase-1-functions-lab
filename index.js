let someValue;
let start;
let destination;
let distanceInBlocks;
let distanceInBlocksInFeet;
let distanceTravelled;
let farePrice;

// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42) {
        distanceInBlocks = someValue - 42;
    }
    else {
        distanceInBlocks = 42 - someValue;
    }
    
    return distanceInBlocks;

  }
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    distanceInBlocksInFeet = distanceInBlocks * 264;

    return distanceInBlocksInFeet;  
  }
  function distanceTravelledInFeet(start, destination) {

    if (start > destination) {
        distanceTravelled = (start - destination) * 264;
    }
    else {
        distanceTravelled = (destination - start) * 264;
    }
    
    return distanceTravelled;

  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    //0-400             => 0 (free sample)
    //400 - 2000        => 2 cents per foot (excluding first 400 feet)(100 cents = 1 dollar)
    //2000 - 2500       => 25 dollars
    //Above 2500        => "Cannot travel that far"

    distanceTravelledInFeet (start, destination);
    if (distanceTravelled > 0 && distanceTravelled < 400){
        farePrice = 0;
        return farePrice;
    }
    else if (distanceTravelled >= 400 && distanceTravelled < 2000){
        farePrice = ((distanceTravelled - 400) * 2)/100;
        return farePrice;
    }
    else if (distanceTravelled >= 2000 && distanceTravelled <= 2500){
        farePrice = 25;
        return farePrice;
    }
    else if (distanceTravelled > 2500){
        return ("cannot travel that far");
    }
  }