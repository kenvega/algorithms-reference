// 6kyu
// https://www.codewars.com/kata/659af96994b858db10e1675f

// You're given a string of digits
// representing a sequence of consecutive natural numbers concatenated together

// Your task is to find the smallest possible first number in the sequence
// The sequence starts with a single or multi-digit number
//   and continues with numbers each incremented by 1

// If multiple sequences can be formed
//   choose the one that starts with the smallest number

// Examples
// "123" -> [1, 2, 3] -> 1
// "91011" -> [9, 10, 11] -> 9
// "17181920" -> [17, 18, 19, 20] -> 17
// "9899100" -> [98, 99, 100] -> 98
// "91" -> [91] -> 91
// "121122123" -> [121, 122, 123] -> 121
// "1235" -> [1235] -> 1235
// "101" -> [101] -> 101

// Constraints
//  Input string length: 1 - 200 characters
//  Smallest possible first number: 1 - 1,000,000,000

// the key is to form a sequence of consecutive natural numbers
// if the sequence matches the input string, you've found the smallest possible first number
// experiment with different lengths for the first number until you find a match or exhaust all possibilities

// my solution
function beginning(string) {

  // toma de 1 length
  // luego checa el siguiente numero
  // y asi hasta que llegues al maximo length del string 

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

  return 0;
}

console.log(beginning("123456789101112131415")) // 1
console.log(beginning("17181920")) // 17
console.log(beginning("72637236")) // 72637236
console.log(beginning("1112")) // 11
console.log(beginning("91011")) // 9
console.log(beginning("99100")) // 99

// to remember

// other solution from the internet

