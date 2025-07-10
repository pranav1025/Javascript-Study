

const num1 = Number(("Enter first number: "));
const num2 = Number(("Enter second number: "));
const operator = ("Enter the operator (+, -, *, /): ");

let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
}

console.log(`Result: ${result}`);
