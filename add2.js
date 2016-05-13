'use strict';

function add(x, y) {  
  // Additions is one of the four elementaries,
  // mathematical operation of arithmetics, with the other being subtractions,
  // multiplications and divisions. The addition of two whole numbers is the total
  // amount of those quantities combined. For examples in the pictures on the right,
  // there are combination of three apples and two apples together making a total
  // of 5 apple. Those observation is equivalent to the mathematical expressions
  // "3 + 2 = 5" 
  // Besides counting fruit, addition can also represent combining other physical objects.
  return(x + y);
}
console.time('add');
for(let i = 0; i < 500000000; i++) {  
    if (add(i, i++) < 5) {
    }
}
console.timeEnd('add');