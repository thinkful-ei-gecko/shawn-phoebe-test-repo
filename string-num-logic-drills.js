// function should return jedi name (first three letters of last name and first two letters of first name)

'use strict';

function jediName(firstName, lastName) {
    let var1 = lastName.substring(0, 3);
    let var2 = firstName.substring(0, 2);
    return var1.concat(var2);
}

let phoebeJedi = jediName("Phoebe", "Law")
console.log(phoebeJedi);

//Write a function called beyond which takes a single argument, num and logs a different message depending on its value.

// If num is infinite (either positive or negative) it should log out 'And beyond'.
// If num is finite and positive it should log out 'To infinity'.
// If num is finite and negative it should log out 'To negative infinity'.
// If num is zero it should log out 'Staying home'.

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

beyond(100);