// Generate a random number between 10 to 20.

function getRandomInteger(min, max) {
    // Ensure min and max are integers
    min = Math.ceil(min);
    max = Math.floor(max);
    // Generate random integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomInt = getRandomInteger(10.1, 20.9);
  console.log(randomInt);  // Outputs a random integer between 10 and 20
  