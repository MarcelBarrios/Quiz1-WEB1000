// Quiz 1
//
// 1.Write a recursive function which receives an array and returns the sum of
//  the elements of the array.

var sum = function(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}

sum([7, 3, 6, 7]);


//
// 2.Given two temperatures, return true if one is less than 0 and the other
// is greater than 100.
// a.	icyHot(120, -1) → true
// b.	icyHot(-1, 120) → true
// c.	icyHot(2, 120) → false

function icyHot(x, y){
  return ((x < 0 && y > 100) || (x > 100 && y < 0));
}

icyHot(-1,101);


//
// 3.Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
// a.	makes10(9, 10) → true
// b.	makes10(9, 9) → false
// c.	makes10(1, 9) → true
//
function makes10(x, y){
  if ((x === 10) || (y ===10) || (x + y === 10)){
    return true
  };
  return false
}

makes10(10, 1234);

// 4.Given a string, take the first 2 chars and return the string with the 2
// chars added at both the front and back, so "kitten" yields"kikittenki".
// If the string length is less than 2, use whatever chars are there.
// a.	front22("kitten") → "kikittenki"
// b.	front22("Ha") → "HaHaHa"
// c.	front22("abc") → "ababcab"
//
function front22(strng){
  var storage = strng.slice(0, 2);
   return storage + strng + storage;
};

front22('Pepe');

// 5.Solve https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// Submit the screenshot of your solution after being put through the codility grader.


//
// 6.(Optional) Solve https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
//  Submit a screenshot of your solution after being put through the codility grader.

function solution(X, Y, D) {
    return Math.ceil((Y - X)/ D);
}

solution(10, 85, 30);
