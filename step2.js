
const operations = {
    "+" : (a, b) => a + b,
    "*" : (a, b) => a * b,
    "%" : (a, b) => a % b,
}

// Write a function `evaluate` that uses the functions in the above `operations` variable to return the expected results.
// ...

// const evaluate = (a,operator, b) => {
//   return operations.operator(a,b)
// }
//error > operator ≠ function

const evaluate = (a,operator, b) => {
  return operations[operator](a,b)
}

// referring to a property in a function with brackets []
// calling a nested function





// Expected output: 6
console.log(evaluate(4, "+", 2))

// Expected output: 8
console.log(evaluate(4, "*", 2))

// Expected output: 1
console.log(evaluate(9, "%", 4))
