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

// No oddities here
function noOdds( values ){
  return values.filter(x => x % 2 === 0)
}

// Over The Road
function overTheRoad(address, n){
  let evenAddresses = []
  let oddAddresses = []
  
  for( i = 1; i <= n*2; i++ ){
    if( i % 2 === 0 ) {
      evenAddresses.unshift(i) // add to end of array
    } else {
      oddAddresses.push(i) // add to beginning of array
    }
  }
    
  return address % 2 === 0 ?
    oddAddresses[evenAddresses.indexOf(address)] :
    evenAddresses[oddAddresses.indexOf(address)]
}

// Even or Odd - Which is Greater?
function evenOrOdd(str) {
  str = str.split('')
  let even = 0
  let odd = 0
  str.forEach(num => {
    if(num % 2 === 0){ 
      even += Number(num)
    } else {  
      odd += Number(num)
    }
  })
  if(even < odd){
    return 'Odd is greater than Even'
  } else if(odd < even) {
    return 'Even is greater than Odd'
  } else {
    return 'Even and Odd are the same'
  }
}

// Billiards Pyramid
function pyramid(balls) {
  let total = 0
  let count = 0
  if(balls === 1) {
    return 1
  }
  for(i=1; i<balls; i++){
    total += i
    count += 1
    if(total === balls) {
     return count 
    } else if (total > balls) {
      return count - 1
    }
  }
}

// Sum - Square Event, Root Odd 
const sumSquareEvenRootOdd = ns => {
  let total = 0
  for (let i=0; i<ns.length; i++){
    let num = ns[i]
    if(num % 2 === 0){
      total += Math.pow(num, 2)
    } else {
      total += Math.sqrt(num)
    }
  }
  return Number(total.toFixed(2))
};

// Next Prime 
let nextPrime = n => {
  let prime = n + 1
  if(n <= 1) {
    return 2
  }
  while(!isPrime(prime)) {
    prime ++
  }
  
  return prime
}

const isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false
  }
  return num > 1
}

// Pig Latin Converter 
const pigLatin = phrase => {
  phrase = phrase.split(' ') // string into array of words
  let phraseArr = phrase.map(word => word.split('')) // take each word and makes it an array of letters
  phraseArr.forEach(letter => letter.push(letter.shift())) // moves first letter in phraseArr to the back
  let changedPhrase = phraseArr.map(word = > word.join('') + 'ay') // array of letters becomes array of words with 'ay'
  let newPhrase = changedPhrase.join('') // back to string
  return newPhrase.toLowerCase()
}

// Holiday II - Place Seating 
function planeSeat(a){
  let numberSec = a.replace(/\D+/g, '') 
  let letterSec = a.split('').pop()
  
  if(numberSec <= 20 && (letterSec === 'A' || letterSec === 'B' || letterSec === 'C')){
    return 'Front-Left'
  } else if(numberSec <= 20 && (letterSec === 'D' || letterSec === 'E' || letterSec === 'F')){
    return 'Front-Middle'
  } else if(numberSec <= 20 && (letterSec === 'G' || letterSec === 'H' || letterSec === 'K')){
    return 'Front-Right'
  } else if(numberSec <= 40 && (letterSec === 'A' || letterSec === 'B' || letterSec === 'C')){
    return 'Middle-Left'
  } else if(numberSec <=40 && (letterSec === 'D' || letterSec === 'E' || letterSec === 'F')){
    return 'Middle-Middle'
  } else if(numberSec <= 40 && (letterSec === 'G' || letterSec === 'H' || letterSec === 'K')){
    return 'Middle-Right'
  } else if(numberSec <=60 && (letterSec === 'A' || letterSec === 'B' || letterSec === 'C')){
    return 'Back-Left'
  } else if(numberSec <=60 && (letterSec === 'D' || letterSec === 'E' || letterSec === 'F')){
    return 'Back-Middle'
  } else if(numberSec <=60 && (letterSec === 'G' || letterSec === 'H' || letterSec === 'K')){
    return 'Back-Right'
  } else {
    return 'No Seat!!'
  }

  // Strange mathematics 
  function strangeMath(n, k){
    let nArr = []
    for(let i = 1; i <= n; i++ ) {
      nArr.push(i)
    }
    nArr.sort()
    return nArr.indexOf(k) + 1
  }

  // Ones and Zeros 
  const binaryArrayToNumber = arr => {
    arr.reverse()
    let total = 0
    for ( let i = 0; i < arr.length; i++ ) {
      if( arr[i] === 1 ) {
        total += Math.pow(2, i)
      }
    }
    return total
  }

  // It is written in the stars 
  function starSign(date) {
    date = getMonth(date) + getDay(date)
  
    if( date >= 121 && date <= 219 ) {
      return 'Aquarius'
    } else if ( date >= 220 && date <= 320 ) {
      return 'Pisces'
    } else if ( date >= 321 && date <= 420 ) {
      return 'Aries'
    } else if ( date >= 421 && date <= 521 ) {
      return 'Taurus'
    } else if ( date >= 522 && date <= 621) {
      return 'Gemini'
    } else if ( date >= 622 && date <= 722 ) {
      return 'Cancer'
    } else if ( date >= 723 && date <= 823 ) {
      return 'Leo'
    } else if ( date >= 824 && date <= 923 ) {
      return 'Virgo'
    } else if ( date >= 924 && date <= 1023 ) {
      return 'Libra'
    } else if ( date >= 1024 && date <= 1122 ) {
      return 'Scorpio'
    } else if ( date >= 1123 && date <= 1221 ) {
      return 'Sagittarius'
    } else {
      return 'Capricorn'
    }
  }
  
  let getMonth = obj => {
    let str = obj.toString().slice(4,7)
    if( str === 'Jan' ) {
      return '1'
    } else if ( str === 'Feb' ) {
      return '2'
    } else if ( str === 'Mar' ) {
      return '3'
    } else if ( str === 'Apr' ) {
      return '4'
    } else if ( str === 'May' ) {
      return '5'
    } else if ( str === 'Jun' ) {
      return '6'
    } else if (str === 'Jul' ) {
      return '7'
    } else if ( str === 'Aug' ) {
      return '8'
    } else if ( str === 'Sep' ) {
      return '9'
    } else if ( str === 'Oct' ) {
      return '10'
    } else if ( str === 'Nov' ) {
      return '11'
    } else if ( str === 'Dec' ) {
      return '12'
    }
  }
  
  let getDay = obj => {
    return obj.toString().slice(8,10)

// Thinkful - List and Loop Drills: Inverse Slicer 
function inverseSlice(items, a, b) {
  let removeThese = items.slice(a,b)
  return items.filter( e => !removeThese.includes(e))
}