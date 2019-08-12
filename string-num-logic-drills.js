/* eslint-disable strict */
function decode(sentence) {
  let splitSentence = sentence.split(" ");
  let result = '';
  for (i = 0; i < splitSentence.length; i++) {
    let firstLetter = splitSentence[i].charAt(0);
    let index;
    if (firstLetter === "a") {
      index = 2;
    } else if (firstLetter === "b") {
      index = 3;
    } else if (firstLetter === "c") {
      index = 4;
    } else if (firstLetter === "d") {
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


/////////////////////////////////////////////////////////////////////

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
        return 'February has 29 days.'
      }
      else {
        return 'February has 28 days.'
      }
      break;

    default:
      return `${month} has 31 days.`;
  }
}

console.log(daysInMonth('February', true));