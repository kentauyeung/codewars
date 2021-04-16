// Find The Parity Outlier
function findOutlier(integers){
  var even = [];
  var odd = [];

  for (var i = 0; i < integers.length; i += 1) {
    var num = integers[i];

    if (num % 2 === 0) {
      even.push(num);
    }  else  {
      odd.push(num);
    }
  }

  if (even.length < odd.length) {
    return parseInt(even);
  }  else {
    return parseInt(odd);
  }
}

// Write Number in Expanded Form
function lengthToZeros(num) {
  var numStr = num.toString();
  var result = '';

  for (var i = 0; i < numStr.length - 1; i += 1) {
    result += '0';
  }

  return result;
}

function expandedForm(num) {
  var result = [];
  var numStr = num.toString();

  for (var i = 0; i < numStr.length; i += 1) {
    var n = numStr[i];
    var zeros = lengthToZeros(num).slice(i);

    if (n > 0) {
      result.push(n + zeros);
    }
  }

  return result.join(' + ');
}

// Unique In Order
var uniqueInOrder=function(iterable){
  var result = [];

  for (var i = 0; i < iterable.length; i += 1) {
    var ele = iterable[i];

    if(result[result.length - 1] === ele) {
      continue;
    }  else  {
      result.push(ele);
    }
  }

  return result;
}

// Who likes it?
function likes(names) {
  if (names.length === 0) {
    return 'no one likes this'; // 'no one likes this'
  }  else if (names.length === 1) {
    return names[0] + ' likes this'; // 'person1 likes this'
  }  else if (names.length === 2) {
    return names[0] + ' and ' + names[1] + ' like this'; // 'person1 and person2 like this'
  }  else if (names.length === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  }  else if (names.length >= 4) {
    return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

// Split Strings
function solution(str){
  var result = [];

  for (var i = 0; i < str.length; i += 2) {
    var firstChar = str[i];
    var secondChar = str[i + 1];
    var pair = firstChar + secondChar;
    var oddPair = firstChar + '_';

    if (secondChar === undefined) {
      result.push(oddPair);
    }  else  {
      result.push(pair);
    }
  }

  return result;
}

// Is a number prime?
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Sums of Parts 
const partsSums = ls => {
  ls = ls.reverse() // [10, 6, 3, 1 ,0]
  let sum = 0
  let newArr = [0]
  
  for(let i = 0; i < ls.length; i++){
   sum += ls[i] // 10, 16, 19, 20, 20
      newArr.unshift(sum) [20, 20, 19, 16, 10, 0]
  }
  return newArr
}

// Counting duplicates 
function duplicateCount(text){
  let obj = {}
  let count = 0
  
  text.toLowerCase().split('').forEach( x => {
    if( obj[x] === undefined ) {
      obj[x] = 1
    } else {
      obj[x] ++ 
    }
  })
  
  for ( let key in obj ) {
    if ( obj[key] >= 2 ) {
      count ++
    }
  }
  
  return count
}

// Reverse or rotate 
function revrot(str, sz) {
  if ( str === "" || sz === 0 || str.length < sz ) {
    return ""
  }
  
  str = str.slice( 0, Math.floor( str.length / sz) * sz )
  let chunks = str.length / sz
  let newStr = ""
  
  for ( let i = 0; i < chunks; i ++ ) {
    let chunk = str.slice( i * sz, (i + 1) * sz )
    let chunkSum = chunk.split('').reduce( (s, n) => s + Math.pow(n, 3), 0 )
    if ( chunkSum % 2 === 0 ) {
      newStr += chunk.split('').reverse().join('')
    } else {
      newStr += chunk.slice(1) + chunk[0]
    }
  }
  
  return newStr
}

// create phone number 
function createPhoneNumber(numbers){
  let areaCode = numbers.slice(0,3).join('')
  let firstThree = numbers.slice(3,6).join('')
  let lastFour = numbers.slice(6).join('')
  return `(${areaCode}) ${firstThree}-${lastFour}`
}