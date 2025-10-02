//Creating the function using parameters number1, number2, number3.
function largestOf3(number1, number2, number3) {
  // Checking if the conditions are true. 
  // number1 is greater or equal to number2 as the first part of the scope. Then checking again if number1 is greater than number3.
  if (number1 >= number2 && number1 >= number3) {
    // If the scope returns true than it will print number1 as the greater value.
    return number1;
    // If the first condition wasn’t true, this one checks if number2 is greater than or equal to number1 and then checks again if number2 is greater than number3.
  } else if (number2 >= number1 && number2 >= number3) {
    // If this condition is true, it will return number2 as the largest value.
    return number2;
  } else {
    // If either of these conditions are false.
    // The number3 will be printed as the largest value.
    return number3;
  }
}
// My approach to the solutions works based off using && to make sure that the function is evaluating each number against each other. 
// The scope that I am asking will execute each line of code correctly. As the && operators are checking each value twice in a way to ensure it gets the greater value. 
// Using the && operator over the || operator will ensure that the values are being checked against each other as the || represent an 'or' question, which wouldn't allow the function to execute correctly and would return an undefined error.


function LargestOf3(number1, number2, number3) {
    //Creating function using parameters number1, number2, number3.
  return Math.max(...[number1, number2, number3]);
}

// Creating a function using the parameters number1, number2, number3.
// This function is using the Math.max method to return the largest value.
// The Math.max method evaluates each number and returns the largest value.
//The spread operator (...) is used to spread the array elements as individual arguments so the Math.max method will function efficiently.
