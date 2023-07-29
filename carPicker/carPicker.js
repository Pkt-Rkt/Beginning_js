const carNames = [
  "Hyundai",
  "Suzuki",
  "Mercedes-Benz",
  "Porsche",
  "Mazda",
  "Nissan",
  "Honda",
  "Mitsubishi"
];

document.getElementById("rollButton").addEventListener("click", function () {
  const diceRoll = Math.floor(Math.random() * 8) + 1;
  const randomCarName = carNames[diceRoll - 1];
  document.getElementById("carNameDisplay").textContent = `Random Car Name: ${randomCarName}`;
});
