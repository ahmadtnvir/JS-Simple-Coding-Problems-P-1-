// Write a function to convert temperature from Celsius to Fahrenheit.
// °F = (9/5) °C+32

function convertTempToFahrenheit(c) {
  const fahrenheit = (9 / 5) * c + 32;
  return fahrenheit;
}

const convertedValue = convertTempToFahrenheit(20);
console.log(`The temperature is ${convertedValue} °F.`);
