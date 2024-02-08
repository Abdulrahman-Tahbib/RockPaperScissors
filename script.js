//Create a function that generates a random number between 1 and 3
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }