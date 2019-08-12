// function should return jedi name (first three letters of last name and first two letters of first name)

use strict;

function jediName(firstName, lastName) {
    let var1 = lastName.substring(0,2);
    let var2 = firstName.substring(0,1);
    return var1.concat(var2);
}

let phoebeJedi = jediName(phoebe, law) 
console.log(phoebeJedi);