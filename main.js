/* eslint-disable strict */


//8) What happens if you pass "29" (string) as the age? What about "twenty nine"? Implement a check to ensure the name is a string and the age is a number. If not, throw new TypeError().

Hint: typeof age Investigate: What is NaN?
function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if (name == undefined || age == undefined) {
    throw new Error('Arguments not valid');
  }

  if (typeof name !== 'string') {
    throw new Error ('Name is not a string');
  }

  if (typeof age !== 'number') {
    throw new Error ('Age is not a number');
  }

  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I\'m 29 years old. I was born in ${yearOfBirth}`;
}

try {
  getYearOfBirth();
}
catch{
  console.error(Error);
}

try {
  createGreeting();
}
catch{
  console.error(Error);
}


const greeting1 = createGreeting(Chris, "15");
console.log(greeting1);

