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
  console.log(romanized);
  return romanized
}
convertToRoman(5);
convertToRoman(9);
convertToRoman(10);
convertToRoman(2);
