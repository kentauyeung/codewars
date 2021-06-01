// Convert a Boolean to a String
let booleanToString = b => {
  return b === true ? 'true' : 'false'
}

// Is he gonna survive?
let hero = (bullets, dragons) => {
  return bullets >= dragons * 2
}

// Function 1 - hello world
let greet = () => {
  return 'hello world!'
}

// Reversed Strings
let solution = str => {
  return str.split('').reverse().join('')
}

// My head is at the wrong end!
let fixTheMeerkat = arr => {
 return arr.reverse()
}

// Get the mean of an array
let getAverage = marks => {
  let total = marks.reduce((total, num) => total += num)
  return Math.floor(total / marks.length)
}

// Grasshopper - Basic Function Fixer
let addFive = num => {
  return num +=5
}

// N-th Power
function index(array, n){
  return array.length-1 < n ? -1 : Math.pow(array[n], n)
}

// Parse nice int from char problem
function getAge(inputString){
// return correct age (int). Happy coding :)
  return parseInt(inputString[0])
}

// Are arrow functions odd?
function odds(values){
  // arrow it
  return values.filter(num => num % 2 === 1);
}

// Welcome!
function greet(language) {
  for (let key in langDB) {
    if(key === language) {
      return langDB[key]
    }
  }
  return langDB.english
}

const langDB = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast'
}

// Lario and Muigi Pipe Problem
function pipeFix(numbers){
  const fixedPipe = []
  for (i=numbers[0]; i<=numbers[numbers.length-1]; i++) {
    fixedPipe.push(i)
  }
  return fixedPipe
}

// Quarter of the year
const quarterOf = (month) => {
  if(month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else {
    return 4
  }
}

// Super Duper Easy
function problem(x){
  if ( x === 0 ) {
    return 6
  }
  if ( !Number(x) ) {
    return "Error"
  }  else {
    return x * 50 + 6
  }
}

// Difference of Volumes of Cuboids
function findDifference(a, b) {
  const aTotal = a.reduce((total, n) => total * n, 1)
  const bTotal = b.reduce((total, n) => total * n, 1)
  return Math.abs(aTotal - bTotal)
}

// Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3
  if(avg >= 90 && avg <= 100) {
    return "A"
  }  else if (avg >= 80 && avg < 90) {
    return "B"
  }  else if (avg >= 70 && avg < 80) {
    return "C"
  }  else if (avg >=60 && avg < 70) {
    return "D"
  }  else if (avg >= 0 && avg < 60) {
    return "F"
  }
}

// L1: Bartender, drinks!
function getDrinkByProfession(param){
  param = makeCapitalized(param)

  if( param === "Jabroni" ) {
    return ("Patron Tequila")
  } else if ( param === "School Counselor" ) {
    return ("Anything with Alcohol")
  } else if ( param === "Programmer" ) {
    return ("Hipster Craft Beer")
  } else if ( param === "Bike Gang Member") {
    return ("Moonshine")
  } else if ( param === "Politician") {
    return ("Your tax dollars")
  } else if ( param === "Rapper") {
    return ("Cristal")
  } else {
    return ("Beer")
  }
}

function makeCapitalized(str) {
  let capArr = []
  let strArr = str.toLowerCase().split(" ")

  for( i=0; i<strArr.length; i++ ) {
    let word = strArr[i]
    capArr.push(word[0].toUpperCase() + word.slice(1))
  }
  return capArr.join(" ")
}

// Return Negative
function makeNegative(num) {
  return num < 0 ? num : num * -1
}

// Invert values
function invert(array) {
  console.log(array)
  const newArr = []
  for( i=0; i<array.length; i++) {
    // Check if negative
    if(array[i] < 1) {
      newArr.push(Math.abs(array[i]))
    } else {
      newArr.push(array[i] * -1)
    }
  }
  return newArr
}

// Smallest unused ID
// Creates new unique arr from given array
// Ex: [ 3, 4, 6, 7, 1, 0, 8, 8] => [ 0, 1, 3, 4, 6, 7, 8]
function uniq(arr) {
  const newArr = []
  for( i=0; i<arr.length; i++ ) {
    if( newArr.indexOf(arr[i]) === -1 ) {
      newArr.push(arr[i])
    }
  }
  return newArr.sort((a,b) => a - b)
}

function nextId(ids){
  console.log(ids)
  let sorted = uniq(ids)

  // Edge case for 0
  if( sorted.indexOf(0) === -1 ) {
    return 0
  }

  // Check last number in sorted against sorted's length
  // If true, return a new ID number
  if( (sorted.indexOf(sorted.length - 1)) === sorted.length - 1 ){
    return sorted.length
  }

  // If above conditional false, find missing ID number
  for ( i=0; i<=sorted.length; i++ ) {
    if( (sorted[i] + 1) !== sorted[i+1] ) {
      return ( sorted[i] + 1 )
      break
    }
  }
}

// Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return (n > 0 && m > 0) ? n*m : 0
}

// Calculate BMI
function bmi(weight, height) {
  const result = weight/Math.pow(height,2)
  if(result <= 18.5) {
    return "Underweight"
  } else if(result <= 25) {
    return "Normal"
  } else if(result <= 30) {
    return "Overweight"
  } else if(result > 30) {
    return "Obese"
  }
}

// Sum of positive
function positiveSum(arr) {
  const sum = arr.filter(n => n>0).reduce((total,n) => total+=n,0)
  return sum
}

// Gravity Flip
const flip=(d, arr)=>{
  if(d === "R") {
    arr.sort((a,b) => a > b ? 1 : -1)
    return arr
  } else if (d === "L") {
    arr.sort((a,b) => a > b ? -1 : 1)
    return arr
  }
}

// Multiply
function multiply(a, b){
  return a * b;
}

// Find Maximum and Minimum Values of a List
let min = function(list){
  let current = list[0]
  for(let i=0; i<list.length; i++){
    if(list[i] < current) {
      current = list[i]
    }
  }
  return current
}

let max = function(list){
  let current = list[0]
  for(let i=0; i<list.length; i++){
    if(list[i] > current) {
      current = list[i]
    }
  }
    return current;
}

// The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
}


// Convert a Number to a String!
function numberToString(num) {
  return num.toString()
}

// Grasshopper - Personalized Message
function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest"
}

// Stringy Strings
function stringy(size) {
  let onesAndZeros = '1'
  for( let i = 0; i < size-1; i++) {
    if(onesAndZeros.length % 2 !== 0) {
      onesAndZeros += '0'
    }  else {
      onesAndZeros += '1'
    }
  }
  return onesAndZeros
}

// Regular Ball Super Ball
let Ball = function(ballType) {
  this.ballType = ballType || 'regular'
};

// A wolf in sheep's clothing
function warnTheSheep(queue) {
  let inDanger = (queue.length - 1) - queue.indexOf("wolf")
  
  if(queue.length - 1 === queue.indexOf("wolf")){
    return "Pls go away and stop eating my sheep"
  }  else {
    return "Oi! Sheep number " + inDanger + "! You are about to be eaten by a wolf!"
  }
}

// Sum Mixed Array 
function sumMix(x){
  return x.reduce((a, c) => a + Number(c),0)
}

// Squash the bugs 
function findLongest(str){
  
  let wordsArr = str.split(" ")
  let longestWord = 0
  
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord) {
      longestWord = wordsArr[i].length
    }
  }
  return longestWord
}

// The most asked question on CodeWars
function detect(string){
  return string.slice(0,19).includes('Can someone explain')
}

// String repeat 
function repeatStr (n, s) {
  let repeated = ''
  for(let i = 0; i < n; i++){
    repeated += s
  }
  return repeated
}

// Twice as old 
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (sonYearsOld * 2))
}

// Merge two sorted arrays into one 
function mergeArrays(arr1, arr2) {
  arr2.forEach(n => {if(arr1.indexOf(n) < 0) arr1.push(n)})
  return arr1.sort( (a,b) => a - b)
}

// You Can't Code Under Pressure #1 
function doubleInteger(i) {
  return i*2;
}

// Convert boolean values to strings 'Yes' or "No"
function boolToWord( bool ){
  return bool ? "Yes" : "No"
}

// Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s * 27.7778)
}

// opposites Attract
function lovefunc(flower1, flower2){
  return (flower1 % 2 !== 0 && flower2 % 2 === 0) || (flower1 % 2 === 0 && flower2 % 2 !== 0)
}

// Grasshopper - Terminal game move function 
let move  = (position, roll)  => {
  return position + (2 * roll)
}

// Miles per gallon to kilometers per liter 
let converter = mpg => {
  return Number((mpg * .3540060435382138).toFixed(2))
}

// Reversed Words 
let reverseWords = str => {
  return str = str.split(' ').reverse().join(' ')
}

// Grasshopper - summation 
let summation = num => {
  let sum = 0
  for( let i = 1; i <= num; i++){
    sum += i
  }
  return sum
}

// UEFA EURO 2016
let uefaEuro2016 = (teams, scores) => {
  if(scores[0] > scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  } else if (scores[0] < scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}

// MakeUpperCase 
let makeUpperCase = str => {
  return str.toUpperCase()
}

// Beginner - Reduce but Grow 
const grow = x => {
  return x.reduce( (a, c) => a * c, 1)
}

// Beginner - Lost Without a Map 
let maps = x => {
  return x.map( num => num * 2)
}

// Transportation on vacation 
let rentalCarCost = d => {
  if(d < 3){
    return d * 40
  } else if(d < 7) {
    return (d * 40) - 20
  } else {
    return (d * 40) - 50
  }
}

// Alan Partridge II 
function apple(x){
  return Math.pow(x, 2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

//Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// Abbreviate a Two Word Name 
function abbrevName(name){
  let nameArr = name.toUpperCase().split(' ')
  return nameArr[0][0] + '.' + nameArr[1][0]
}

// Remove First and Last Character
function removeChar(str){
  return str.slice(1, str.length-1)
};

// Template Strings 
let TempleStrings = (obj, feature) => {
  return `${obj} are ${feature}`;
}

// You only need one - Beginner
function check(a,x){
  return a.includes(x);
}