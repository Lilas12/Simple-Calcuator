const addBtn = document.querySelector("#add");

const subtractBtn = document.querySelector("#subtract");

const multiplyBtn = document.querySelector("#multiply");

const divideBtn = document.querySelector("#divide");

const number1El = document.querySelector("#number1");

const number2El = document.querySelector("#number2");

const resultEl = document.querySelector("#result");

function calculator(operation) {
  const num1 = Number(number1El.value);
  const num2 = Number(number2El.value);

  if (number1El.value === "" || number2El.value === "") {
    resultEl.textContent = "Pleas enter numbers";
  } else if (isNaN(num1) || isNaN(num2)) {
    resultEl.textContent = "Pleas enter valid numbers";
  } else {
    let result;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;

      case "subtract":
        result = num1 - num2;
        break;

      case "multiply":
        result = num1 * num2;
        break;

      case "divide":
        if (num2 === 0) {
          result = "Can't divide by 0";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "";
        break;
    }
    resultEl.textContent = result;
    clearInputs();
  }
}

function clearInputs() {
  number1El.value = "";
  number2El.value = "";
}
addBtn.addEventListener("click", () => {
  calculator("add");
});

subtractBtn.addEventListener("click", () => {
  calculator("subtract");
});

multiplyBtn.addEventListener("click", () => {
  calculator("multiply");
});

divideBtn.addEventListener("click", () => {
  calculator("devide");
});
