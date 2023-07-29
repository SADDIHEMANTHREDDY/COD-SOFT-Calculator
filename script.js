// Global variable to store the calculator display value
let displayValue = '';

// Function to update the calculator display
function updateDisplay() {
  document.getElementById('calculator-display').value = displayValue;
}

// Function to add characters to the display
function addToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

// Function to clear the display
function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

// Function to handle addition
function addition() {
  addToDisplay('+');
}

// Function to handle subtraction
function subtraction() {
  addToDisplay('-');
}

// Function to handle multiplication
function multiplication() {
  addToDisplay('*');
}

// Function to handle division
function division() {
  addToDisplay('/');
}

// Function to handle decimal point
function decimal() {
  addToDisplay('.');
}

// Function to remove the last character from the display
function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}


// Function to calculate the result of the expression in the display
function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

// Function to handle clearing numbers (X)
function clearNumbers() {
  // Replace 'X' with '*' for multiplication
  displayValue = displayValue.replace(/X/g, '*');
  updateDisplay();
}

// Initialize the calculator display
updateDisplay();
