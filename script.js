const display = document.getElementById("display");
const historyContainer = document.querySelector(".history-container");
const historyList = document.querySelector(".history-list");
const showHistoryButton = document.querySelector(".show-history");
const clearHistoryButton = document.querySelector(".clear-history");
const backToCalculatorButton = document.querySelector(".back-button");
let currentExpression = "";

// Function to add an item to the history
function addToHistory(expression, result) {
  const listItem = document.createElement("li");
  listItem.textContent = `${expression} = ${result}`;
  historyList.appendChild(listItem);
}

// Function to calculate the result and update the history
function calculateResult() {
  try {
    const result = eval(currentExpression);
    display.value = result;
    addToHistory(currentExpression, result);
    currentExpression = result.toString();
  } catch (error) {
    display.value = "Error";
  }
}

// Function to clear the history
function clearHistory() {
  historyList.innerHTML = "";
}

// Function to toggle between calculator and history
function toggleHistory() {
  document.querySelector(".calculator").classList.toggle("hidden");
  historyContainer.classList.toggle("hidden");
}

function addToDisplay(value) {
    if (value === "%") {
      // Handle percentage input separately
      currentExpression += "/100";
    } else {
      currentExpression += value;
    }
    display.value = currentExpression;
  }
  
function clearDisplay() {
  currentExpression = "";
  display.value = "";
}

function deleteLastCharacter() {
  currentExpression = currentExpression.slice(0, -1);
  display.value = currentExpression;
}