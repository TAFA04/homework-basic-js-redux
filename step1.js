const input1 = [1, 2, 3, 4]
const input2 = ["a", "a", 1, 1, 7, 0, 1]

// Write a function `countFrequency` that makes the following lines print the expected output.
// ...


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//Counting instances of values in an object

// Remodelled the example of MDN to my variables.
// The reduce method works with one variable, so now make a function out of it. 
//
// input2.reduce(function (allInput, input) {
//   if (input in allInput) {
//     allInput[input]++;
//   }
//   else {
//     allInput[input] = 1;
//   }
//   return allInput;
// }, {});

const countFrequency = array => {
return array.reduce((allInput, input) => {
  if (input in allInput) {
    allInput[input]++;
  }
  else {
    allInput[input] = 1;
  }
  return allInput;
}, {})
};

// Expected output:
// { '1': 1, '2': 1, '3': 1, '4': 1 }
console.log(countFrequency(input1))

// Expected output:
// { '0': 1, '1': 3, '7': 1, a: 2 }
console.log(countFrequency(input2))
