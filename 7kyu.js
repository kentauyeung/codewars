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
  let changedPhrase = phraseArr.map(word => word.join('') + 'ay') // array of letters becomes array of words with 'ay'
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
  }

// Thinkful - List and Loop Drills: Inverse Slicer 
function inverseSlice(items, a, b) {
  let removeThese = items.slice(a,b)
  return items.filter( e => !removeThese.includes(e))
}

// Holiday III - Fire on the boat 
function fireFight(s){
  return s.split('Fire').join('~~')
}

// Birthday II - Presents 
function present(x, y){
  console.log( x, y )
  if ( x === 'goodpresent' ) {
    // return x with num of passes added to each charCode (turn to charCode, add y to each, turn back)
    let xArr = x.split('')
    let charCodeArr = xArr.map( e => e.charCodeAt() + y )
    let strFromCharCode = charCodeArr.map( e => String.fromCharCode(e) )
    return strFromCharCode.join('')
  } else if ( x === 'crap' || x === 'empty' ) {
    // return string sorted alphabetically
    return x.split('').sort().join('')
  } else if ( x === 'bang' ) {
    // return string turned to char codes, each code reduced by number of passes and summed to a single figure
    let xArr = x.split('')
    let charCodeArr = xArr.map( e => e.charCodeAt() - y )
    return charCodeArr.reduce( (a,c) => a + c, 0 )
  } else if ( x === 'badpresent' ) {
    return 'Take this back!'
  } else if ( x === 'dog' ) {
    return `pass out from excitement ${y} times`
  } 
}

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages 
function countLanguages(list) {
  let langObj = {}
  for ( let i = 0; i < list.length; i++ ) { // list[i] is an object that we'll rename to 'user'
    let user = list[i]
    for ( let key in user ) {
      if( key === 'language') {
        if ( langObj[user[key]] === undefined ) {
          langObj[user[key]] = 1
        } else {
          langObj[user[key]] += 1
        }
      }
    }
  }
  return langObj
}

// Slaphead 
function bald(x){
  let count = x.split('').filter( e => e === '/')
  let shaved = shave(x)
  return [shaved, hairCount(count.length)]
}

let hairCount = num => {
  if(num < 1) {
    return 'Clean!'
  } else if (num < 2) {
    return 'Unicorn!'
  } else if (num < 3) {
    return "Homer!"
  } else if (num < 6) {
    return 'Careless!'
  } else {
    return 'Hobo!'
  }
}

let shave = str => {
  str.split('')
  let newArr = []
  for ( let i =0; i< str.length; i++) {
    if (str[i] === '/') {
      newArr.push('-')
    } else {
      newArr.push(str[i])
    }    
  }
  return newArr.join('')
}

// Samll enough? -Beginner 
function smallEnough(a, limit){
  return a.every( x => x <= limit)
}

// Olympic Rings 
function olympicRing(a){
  let onePointArr = ['a','b','d','e','g','o','p','q','A','D','O','P','Q','R'] 
  let total = 0
  
  a = a.split('')
  a.forEach(letter => {
              if(onePointArr.includes(letter)) total += 1
              if(letter === 'B') total += 2
            })
  
  let result = Math.floor( total / 2 )

  if( result <= 1) {
    return "Not even a medal!"
  } else if ( result === 2 ) {
    return "Bronze!"
  } else if ( result === 3 ) {
    return "Silver!"
  } else {
    return "Gold!"
  }
}

// Stones on the Table 
function solve(stones) {
  let moves = 0
  let stonesArr = stones.split('')
  
  for (let i = 0; i < stonesArr.length; i++) {
    if( stonesArr[i] === stonesArr[i + 1] ) {
      moves++
    }
  }
  return moves
}

// Coding Meetup#11 - Higher-Order Functions Series - Find the average age 
function getAverageAge(list) {
  let totalAge = 0
  
  for ( let i = 0; i < list.length; i ++ ) {
    for ( key in list[i] ) {
      if ( key === 'age' ) {
        totalAge += list[i][key]      
      }
    }
  }
  
  return Math.round( totalAge / list.length)
}

// Write out expression! 
function expressionOut(expr) {
  let expressionObj = {
    '+' : 'Plus' ,
    '-' : 'Minus' ,
    '*' : 'Times' ,
    '/' : 'Divided By' ,
    '**' : 'To The Power Of' ,
    '=' : 'Equals' ,
    '!=' : 'Does Not Equal' ,
    '1' : 'One' ,
    '2' : 'Two' ,
    '3' : 'Three' ,
    '4' : 'Four' ,
    '5' : 'Five' ,
    '6' : 'Six' ,
    '7' : 'Seven' ,
    '8' : 'Eight' ,
    '9' : 'Nine' ,
    '10' : 'Ten' ,
  }
  let expressionNum = {
    '1' : 'One' ,
    '2' : 'Two' ,
    '3' : 'Three' ,
    '4' : 'Four' ,
    '5' : 'Five' ,
    '6' : 'Six' ,
    '7' : 'Seven' ,
    '8' : 'Eight' ,
    '9' : 'Nine' ,
    '10' : 'Ten'
  }
  let expressionWritten = expr.split(' ').map( e => expressionObj[e])
  if(expressionWritten.includes(undefined) || isNum(expressionNum, expressionWritten[1]) ){
    return "That's not an operator!"
  }  else {
    return expressionWritten.join(' ')
  }
}

let isNum = (obj, x) => {
  for ( let key in obj ) {
    return obj[key] === x
  }
}

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? 
function isRubyComing(list) {
  let count = 0
  for( let i = 0; i < list.length; i++ ) {
    for ( let key in list[i] ) {
      if ( list[i][key] === 'Ruby' ) {
        count ++
      }
    }
  }
  return count > 0
}

// Paul's Misery 
function paul(x){
  let activities = {
    'life' : 0 ,
    'eating' : 1 ,
    'kata' : 5 ,
    'Petes kata' : 10,
  }
  
  let total = x.reduce( (acc, cur) => acc + activities[cur], 0)
  return total < 40 ? 'Super happy!' 
        : total < 70 ? 'Happy!'
        : total < 100 ? 'Sad!'
        : 'Miserable!'
}

// Simple Fun #176: Reverse Letter 
function reverseLetter(str) {
  return str.replace(/[^a-z]/gi, '').split('').reverse().join('')
}

// Move all vowels 
function moveVowel(input) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  input = input.split('')
  let notVowels = input.filter(x => !vowels.includes(x))
  let areVowels = input.filter(x => vowels.includes(x))
  return notVowels.join('') + areVowels.join('')
}

// Strange principal 
function numOfOpenLockers(n){
  return Math.floor(Math.sqrt(n))
}

// Heron's formula 
let heron = (a, b, c) => {
  let s = ( a + b + c) / 2
  return Math.sqrt(s * ( s - a ) * ( s - b ) * ( s - c ) ) 
}

// Sum of Cubes 
let sumCubes = n =>{
  let nArr = []
  for ( let i = n ; i >= 1; i -- ) {
    nArr.push(i)
  }
  return nArr.reduce( ( a, c ) => a + Math.pow(c, 3), 0 ) 
}

// Printer Errors 
function printerError(s) {
  let lettersAToM = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
  let errors = 0
  s.split('').forEach(x => {
    if(!lettersAToM.includes(x)){
      errors ++ 
    }
  })
  return `${errors}/${s.length}`
}

// Complementary DNA 
function DNAStrand(dna){
  let dnaArr = dna.split('')
  for( let i = 0; i < dnaArr.length; i ++ ) {
    if( dnaArr[i] === "A" ) {
      dnaArr[i] = "T"
    } else if ( dnaArr[i] === "T" ) {
      dnaArr[i] = "A"
    } else if ( dnaArr[i] === "C" ) {
      dnaArr[i] = "G"
    } else if ( dnaArr[i] === "G") {
      dnaArr[i] = "C"
    }
  }
  return dnaArr.join('')
}

// Thinkful - String Drills: Repeater 
function repeater(string, n){
  let str = ''
  for ( let i = 0; i < n; i++) {
    str += string
  }
  return str
}

// Count the divisors of a number 
function getDivisorsCnt(n){
  let counter = 0
  for (let i = 1; i <= n; i++ ) {
    if ( n % i === 0 ) {
      counter ++
    }
  }
  
  return counter
}

// Credit Card Mask 
function maskify(cc) {
  const hidden = '#'
  if ( cc.length > 4 ) {
    return hidden.repeat(cc.length - 4) + cc.slice(-4)
  } else {
    return cc
  }
}

// All Star Code Challenge #22 
function toTime(seconds) {
  let hours = Math.floor(seconds / 3600)
  let mins = Math.floor( (seconds % 3600) / 60)
  return `${hours} hour(s) and ${mins} minute(s)`
}

// The Office III - Broken Photocopier
function broken(x){
  let pairs = { '1' : '0',
                '0' : '1'}
  return x.split('').map(x => pairs[x]).join('')
}

// Disemvowel Trolls 
function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return str.split('').filter( x => !vowels.includes(x)).join('')
}

// Digitize 
function digitize(n) {
  return n.toString().split('').map(x => Number(x))
}

// Letterbox Paint-Squad 
let paintLetterboxes = (start, end) => {
  let frequency = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }
  
  for (let i = start; i <= end; i++ ) {
    let numArr = String(i).split('').map(Number)
    numArr.forEach( x => frequency[x]++ )
  }
  
  return Object.values(frequency)
}

// Drone Fly-By 
function flyBy(lamps, drone){
  return lamps.length <= drone.length ? 'o'.repeat(lamps.length) : 'o'.repeat(drone.length) + lamps.slice(drone.length - lamps.length)
}

// switcheroo 
function switcheroo(x){
  let pairs = {
      'a' : 'b',
      'b' : 'a',
      'c' : 'c',
  }
  
  return x.split('').map(x => pairs[x]).join('')
 }

//  Well of Ideas - Harder Version 
function well(x){
  let goodCount = 0
  
  x.forEach( x => x.forEach( x => {
    if(x.toString().toLowerCase() === 'good') {
      goodCount++
    }
  }))
  
  return goodCount <= 2 && goodCount >= 1 ? 'Publish!' : goodCount >= 3 ? 'I smell a series!' : 'Fail!'
}

// All star code challenge #24 
function hypotenuse(a, b){
  return Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2) )
}

function leg(c, a){
  return Math.sqrt( Math.pow(c, 2) - Math.pow(a, 2) )
}

// All star code challenge #20 
function addArrays(array1, array2) {
  if( array1.length !== array2.length ) throw new Error()
  return array1.map( (x, i) => array1[i] + array2[i] )
} 

// Odd or even? 
function oddOrEven(array) {
  return array.length === 0 ? 'even' : array.reduce( (a,c) => a + Math.abs(c, 0) ) % 2 === 0 ? 'even' : 'odd'
}

// Filter long words 
function filterLongWords(sentence, n) {
  return sentence.split(' ').filter( word => word.length > n)
}

// narcissistic numbers 
function isNarcissistic(n){
  let nLength = n.toString().length
  let numTotal = n.toString()
                  .split('')
                  .reduce( (a, b) => a + Math.pow(b, nLength), 0)
  return numTotal === n
}

// Greatest common divisor 
let mygcd = (x,y) => {
  let lowest = 0
  let greatestCD = 1
  
  if (x < y) { 
    lowest = x 
  } else { 
    lowest = y
  }
  
  for ( let i = 1; i <= lowest; i++ ) {
    if ( x % i === 0 && y % i === 0 ) {
      if (i > greatestCD) {
        greatestCD = i
      }
    }
  }
  
  return greatestCD
}

// scholarstem: unit-6baby count! 
let countName = (anArr, name) => {
  return anArr.filter( x => x === name).length
};

// The office iv - find a meeting room 
function meeting(x){
  let full = x => x === 'X'
  return x.every(full) ? 'None available!' : x.indexOf('O')
}

// Moves in squared strings(1)  
let vertMirror = str => {
  return str.split('\n').map( x => x.split('').reverse().join('')).join('\n')
}
                                                
let horMirror = str => {
  return str.split('\n').reverse().join('\n')
}
let oper = (fct, s) => {
  return fct(s)
}

// Coding Meetup #1 - Higher-order functions series - count the number of javascript developers coming from Europe 
function countDevelopers(list) {
  return list.filter( x => x.continent === 'Europe' && x.language === 'JavaScript').length
}

// Harvest festival function plant(seed, water, fert, temp){
let plant = (seed, water, fert, temp) => {
  if( temp < 20 || temp > 30) {
    return '-'.repeat(Math.pow(water, water)) + seed
  } else {
    return ('-'.repeat(water) + seed.repeat(fert)).repeat(water)
  }
}

// Cat and mouse - easy version 
let catMouse = x => {
  return x.length > 5? 'Escaped!' : 'Caught!'
}

// Shorter Concat [reverse longer]
let shorter_reverse_longer = (a,b) => {
  let short = a
  let long = b.split('').reverse().join('')
  if(b.length <= a.length) {
    short = b
    long = a.split('').reverse().join('')
  }
  return `${short}${long}${short}`
}