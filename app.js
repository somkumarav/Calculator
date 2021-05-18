const output = document.querySelector(".text");
const buttons = document.querySelectorAll(".buttons button");

let num1;
let num2;
let number = "";
let operator;

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (button.classList.contains("xl-button")) {
      id = e.target.dataset.id;
      if (id === "AC") {
        number = "";
        num1 = "";
        num2 = "";
        display();
      } else if (id === "DEL") {
        number = number.slice(0, -1);
        display();
      }
    } else if (button.classList.contains("operator")) {
      operator = button.textContent;
      num1 = parseFloat(number);
      number = "";
      output.value = operator;
    } else if (button.classList.contains("xxl-button")) {
      num2 = parseFloat(number);
      calculate();
      display();
      number = "";
    } else {
      number = number + button.textContent;
      display();
    }
  });
});

function calculate() {
  if (operator === "+") number = num1 + num2;
  if (operator === "-") number = num1 - num2;
  if (operator === "/") number = num1 / num2;
  if (operator === "X") number = num1 * num2;
}

function display() {
  output.value = number;
}
