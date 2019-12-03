// level: 6kyu
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// solution(1000); // should return 'M'

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Remember that there can't be more than 3 identical symbols in a row.

// my solution
// get the digits from the number
// form the roman numbers based on the digits

function solution(number) {
  const conversion = [
    {
      1: 'I',
      5: 'V',
    },
    {
      1: 'X',
      5: 'L',
    },
    {
      1: 'C',
      5: 'D',
    },
    {
      1: 'M',
    },
  ];
  const digits = number.toString().split('').map(n => parseInt(n, 10)).reverse();

  return digits.reduce((acc, cur, i) => {
    if (cur === 9) return `${conversion[i][1]}${conversion[i + 1][1]}${acc}`;
    if (cur >= 5) return `${conversion[i][5]}${conversion[i][1].repeat(cur % 5)}${acc}`;
    if (cur === 4) return `${conversion[i][1]}${conversion[i][5]}${acc}`;
    if (cur < 4) return `${conversion[i][1].repeat(cur)}${acc}`;
    return acc;
  }, '');
}

console.log(solution(1)); // 'I'
console.log(solution(2)); // 'II'
console.log(solution(3)); // 'III'
console.log(solution(4)); // 'IV'
console.log(solution(5)); // 'V'
console.log(solution(7)); // 'VII'

console.log(solution(9)); // 'IX'
console.log(solution(10)); // 'X'
console.log(solution(11)); // 'XI'
console.log(solution(19)); // 'XIX'
console.log(solution(22)); // 'XXII'
console.log(solution(15)); // 'XV'

console.log(solution(1000)); // 'M'
console.log(solution(1001)); // 'MI'
console.log(solution(1990)); // 'MCMXC'
console.log(solution(2007)); // 'MMVII'
console.log(solution(2008)); // 'MMVIII'
console.log(solution(1666)); // 'MDCLXVI'

// other solution from codewars
// uses switch

const solution2 = number => [...String(number)].reverse().map(digit2numeral).reverse().join('');

const digit2numeral = (digit, level) => {
  const [one, five, ten] = 'IVXLCDM'.slice(level * 2);
  switch (Number(digit)) {
    case 0: return '';
    case 1:
    case 2:
    case 3: return one.repeat(digit);
    case 4: return one + five;
    case 5:
    case 6:
    case 7:
    case 8: return five + one.repeat(digit - 5);
    case 9: return one + ten;
    default:
  }
};
