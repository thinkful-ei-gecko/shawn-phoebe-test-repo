/* eslint-disable strict */

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I\'m 29 years old. I was born in ${yearOfBirth}`;
}

try {
  getYearOfBirth();
}
catch{
  console.error(Error);
}

const greeting1 = createGreeting('Chris', -15);
console.log(greeting1);

