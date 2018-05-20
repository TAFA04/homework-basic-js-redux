const names = ["George", "Richard", "Abraham", "Donald"]
const ages = {
  George: 55,
  Richard: 86,
  Abraham: 50,
  Donald: 65
}
const addresses = {
  George: "Fleet street, 121b",
  Richard: "Bermuda drive, 33",
  Abraham: "Cincinatti Av., 22a"
}
const willDeliverPizza = {
  "Fleet street": true,
  "Bermuda drive": false,
  "Cincinatti Av.": true
}


// create a function that generates the the output-keys: userData, highestAge and lowestAge.
// for user data I need to collect the array names and assign them in order to their respective properties of the objects ages, addresses and willDeliverPizza.
// - select array index & key indexes and collect them into new object, which will become a collection of arrays.

// function aggregate() {
//
//
// newObject { userData = [];
//             highestAge = highestNumber
//             lowestAge = lowestNumber
// }
//     names.forEach();
//       ages[key]
//       addresses[key]
//       weDeliverPizza[key]
//
//
//     names.map();
//       ages[key]
//       addresses[key]
//       weDeliverPizza[key]
//
//     userData.push();
//
// // How do I map through the objects and push the matching key to the new array?

// highestAge/ lowestAge:
// reduce?
// https://medium.freecodecamp.org/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1

// function highestAge(object) {
//   return Math.max.apply(null, object);
// };
// answer = infinity ?

//Math.max.apply(null, ages)
// geeft ook infinity
//
// denk dat ik vast zit met scope / het benaderen van de key























// Implement the `aggregate` function so that it returns the expected output.
// Use the defined variables names, ages, addresses, and willDeliverPizza.
// !! Notice the object in the expected output has the keys: userData, highestAge, and lowestAge
// ...


// Expected output:
//
// { userData:
//     [ { name: 'George',
//         age: 55,
//         address: 'Fleet street, 121b',
//         willDeliverPizza: true },
//       { name: 'Richard',
//         age: 86,
//         address: 'Bermuda drive, 33',
//         willDeliverPizza: false },
//       { name: 'Abraham',
//         age: 50,
//         address: 'Cincinatti Av., 22a',
//         willDeliverPizza: true },
//       { name: 'Donald',
//         age: 65,
//         address: undefined,
//         willDeliverPizza: 'Unknown' } ],
//    highestAge: 86,
//    lowestAge: 50 }
//

console.log(aggregate())
