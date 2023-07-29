
function addNumbers(a, b) {
    return a + b;
}

var userInput1 = prompt("Enter the first number:");
var userInput2 = prompt("Enter the second number:");

var num1 = parseFloat(userInput1);
var num2 = parseFloat(userInput2);

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input! Please enter valid numbers.");
} else {

    var sum = addNumbers(num1, num2);
    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);
}