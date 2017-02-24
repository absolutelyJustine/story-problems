/**
 * Created by jstarks on 2/23/17.
 */
// I = 1
// II = 2
// III = 3
// IV = 4
// V = 5
// VI = 6
// VII = 7
// VIII = 8
// XI = 9
// X = 10
function romanNumeralTranslator(number) {
  var newNum = [];
  var newNum = number.toUpperCase();
  var x = 1;
  var y = 5;
  var z = 10;
  if(newNum === 'X') {
    console.log(10);
  } else if(newNum === 'XI') {
    console.log(9);
  } else {
    console.log(newNum);
  }
};
romanNumeralTranslator('X');
romanNumeralTranslator('XI')
romanNumeralTranslator('V');

function arrayMinuser(array) {
  var result - array[array.length - 1];
  for(var i = array.length - 2; i >= 0; i--) {
    result = result - array[i]
  }
  return result;
}

function arrayAdder(array) {}

function romanNum(rn) {
  //step 1: map our roman numerals to numbers
  var romanNumeralMapper = {
    I: 1,
    V: 5,
    X: 10
  }
  var rnArray = rn.split('');
  var numArray = rnArray.map(function (romanNumeralItem) {
    return romanNumeralMapper[romanNumeralItem]
  })
  console.log('this is numArray ', numArray)
  //step 2:
  if(numArray[numArray.length - 1] === 1) {
    return arrayAdder(numArray)
  } else {
    return arrayMinuser(numArray)
  }
}
romanNum('X');
romanNum('XI');
romanNum('V');
var convertToRoman = function (num) {
  var decimalValue = [10, 9, 5, 4, 1];
  var romanNumeral = ['X', 'IX', 'V', 'IV', 'I'];
  var romanized = [];
  for(var i = 0; i < decimalValue.length; i++) {
    while(decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanized
}
convertToRoman(5);
convertToRoman(9);
convertToRoman(10);
convertToRoman(2);
// var names = ['luke', 'mark']
// var newNames = names.map(function(name) {
//   return name + ' is a baller'
// })
