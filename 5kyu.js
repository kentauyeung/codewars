// imple Pig Latin
function pigWord(word) {
  return word.slice(1) + word[0] + 'ay';
}

function pigIt(str){
  var result = [];
  var words = str.split(" ");

  for (var i = 0;  i < words.length; i += 1) {
    var newWord = pigWord(words[i]);
    result.push(newWord);
  }

  return result.join(' ');
}

// Valid Parentheses
function parenthesesCount(str) {
  var open = 0;
  var close = 0;

  for (var i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      open += 1;
    }  else {
      close += 1;
    }
  }

  return open === close;
}

function validParentheses(parens){
  return (parens[0] === '(') && (parens[parens.length - 1] === ')') && (parenthesesCount(parens));

}

// Moving Zeros To The End
var moveZeros = function (arr) {
  var result = [];
  var zeroCount = 0;

  for (var i = 0; i < arr.length; i += 1) {
    var ele = arr[i];

    if (ele !== 0) {
      result.push(ele);
    }  else  {
      zeroCount += 1;
    }
  }

  for (var i = 0; i < zeroCount; i += 1) {
    result.push(0);
  }

  return result;
}
