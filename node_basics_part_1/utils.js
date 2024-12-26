function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function CelsiusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// export default generateRandomNumber;

module.exports = {
  generateRandomNumber,
  CelsiusToFahrenheit,
};
