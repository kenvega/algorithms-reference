// level 5kyu
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// final solution
// after seeing the logic behind it (not the code, but what is the fastest way of doing it through math). source here: https://www.handakafunda.com/number-of-trailing-zeros/

function zeros(n) {
  if (n === 0) return 0;
  let result = 0;
  while (n >= 5) {
    result += Math.floor(n / 5);
    Math.floor(n /= 5);
  }
  return result;
}

// first solution
// noticed that it has to do with multiples of 10
// and that 5 was less common than 2 so it was just counting
// the number of times 5 repeats in every number
// but it was generating timing out
function zerosOld(n) {
  if (n === 0) return 0;
  let counterOfFives = 0;

  for (let i = 5; i <= n; i += 5) {
    let aux2 = i;

    while (aux2 % 5 === 0) {
      counterOfFives++;
      aux2 /= 5;
    }
  }

  return counterOfFives;
}


console.log(zeros(0)); // 0
console.log(zeros(5)); // 1
console.log(zeros(6)); // 1
console.log(zeros(30)); // 7
