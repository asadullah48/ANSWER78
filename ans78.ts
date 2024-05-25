// Q 78
// Function declaration for squaring a number
function squareDeclaration(number: number): number {
    return number * number;
  }
  
  // Function expression for squaring a number
  const squareExpression = function (number: number): number {
    return number * number;
  };
  
  // Using both functions to square the number 4
  console.log(squareDeclaration(5)); // Outputs: 25
  console.log(squareExpression(6)); // Outputs: 36
  // Both methods give us the same result, 
  //showing two different ways to create functions that do the same thing.