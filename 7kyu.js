// Move 10
function moveTen(s){
  s = s.split('')
  let newStr = s.map(letter => moveLetter(letter))
  return newStr.join('')
}

function moveLetter(x) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let movedLetter  = alphabet.indexOf(x)
  if(movedLetter > 15) {
    movedLetter -= 16
  } else {
    movedLetter += 10
  }
  return alphabet[movedLetter]
}

// Hells Kitchen
function gordon(a){
  a = a.toUpperCase().split('')
  a = replaceLetters(a)
  return a.join('').split(' ').join('!!!! ') + '!!!!'
}

function replaceLetters(arr) {
  let newArr = arr.map((letter, i) => {
     if(letter === "A") {
      return "@"
     }  else if (letter === "E" || letter === "I" || letter === "O" || letter === "U") {
      return "*"
     }  else {
      return letter
     }
   })
   return newArr
}

// Categorize New Member
function openOrSenior(data){
  var result = [];

  for (var i = 0; i < data.length; i += 1) {
    var subData = data[i];
    var age = subData[0];
    var handicap = subData[1];

    if (age >= 55 && handicap > 7) {
      result.push('Senior');
    }  else  {
      result.push('Open');
    }
  }

  return result;
}

// Exes and Ohs
function XO(str) {
  var newStr = str.toLowerCase();
  var x = 0;
  var o = 0;

  for (var i = 0; i < newStr.length; i += 1) {
    if (newStr[i] === 'x') {
      x += 1;
    }  else if (newStr[i] === 'o') {
      o += 1;
    }
  }

  return x === o;
}

// Friend or Foe?
function friend(friends){
  var trueFriends = [];

  for (var i = 0; i < friends.length; i += 1) {
    if (friends[i].length === 4) {
      trueFriends.push(friends[i]);
    }
  }

  return trueFriends;
}

// Get the Middle Character
function getMiddle(s) {
  var half = s.length / 2;
  var oddHalf = Math.floor(half);

  if (s.length === 1) {
    return s;
  }
  if (s.length % 2 === 0) {
      return s[half - 1] + s[half];
    } else {
      return s[oddHalf];
    }
}

// Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou';

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (vowels.indexOf(char) !== -1) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}


// Transform an array into a string
function transform(array) {
  let newArr = arr.map(x => x === null? 'null' : x)
  return newArr.toString().split(',').join('')
}
