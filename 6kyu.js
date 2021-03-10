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