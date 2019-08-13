/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable strict */

//Decoder
function decode(sentence) {
  let splitSentence = sentence.split(' ');
  let result = '';
  for (i = 0; i < splitSentence.length; i++) {
    let firstLetter = splitSentence[i].charAt(0);
    let index;
    if (firstLetter === 'a') {
      index = 2;
    } else if (firstLetter === 'b') {
      index = 3;
    } else if (firstLetter === 'c') {
      index = 4;
    } else if (firstLetter === 'd') {
      index = 5;
    } else {
      index = ' ';
    }
    if (index === ' ') {
      result += ' ';
    }
    else {
      result += splitSentence[i].charAt(index - 1);
    }
  }
  return result;
}

console.log(decode('craft block argon meter bells brown croon droop'));







//Days per month

function daysInMonth(month, leapyear) {
  switch (month) {
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return `${month} has 30 days.`;
      break;

    case 'February':
      if (leapyear === true) {
        return 'February has 29 days.';
      }
      else {
        return 'February has 28 days.';
      }
      break;

    default:
      return `${month} has 31 days.`;
  }
}

console.log(daysInMonth('February', true));






//Rock Paper Scissors

function game(var1) {
  // rock = 1, paper = 2, scissors 3

  var1 = 1;
  const var2 = Math.floor(Math.random() * 3) + 1;

  console.log(var2);
  // throw error if var 1 is anything other than 1 2 or 3

  // you win
  if ((var1 === 1 && var2 === 3) || (var1 === 2 && var2 === 1) || (var1 === 3 && var2 === 2)) {
    return 'You win.';
    //cp wins 
  } else if ((var1 === 1 && var2 === 2) || (var1 === 2 && var2 === 3) || (var1 === 3 && var2 === 1)) {
    return 'CP wins.';
    // tie
  } else {
    return 'Tie.';
  }

}

console.log(game());
