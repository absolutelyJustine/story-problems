//write a function that takes a number and returns its factorial
// example:
// 'factorial(4)' // => 24 ( 4 * 3 * 2 * 1 = 24)
function factorial(num) {
  var newNum = 1;
  for(var i = num; i > 0; i--) {
    console.log('new num is ', newNum);
    newNum = newNum * i;
  }
  return newNum;
}
console.log(factorial(5));
console.log(factorial(3));
