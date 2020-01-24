// level 6kyu
// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

// There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment.
// Otherwise return NO.

function tickets(peopleInLine) {
  const dollarsCount = { 25: 0, 50: 0, 100: 0 };

  for (let i = 0; i < peopleInLine.length; i++) {
    const current = peopleInLine[i];

    if (current === 50) {
      dollarsCount[25] -= 1;
      if (dollarsCount[25] < 0) return 'NO';
    } else if (current === 100) {
      if (dollarsCount[50] > 0) {
        dollarsCount[25] -= 1;
        dollarsCount[50] -= 1;
      } else {
        dollarsCount[25] -= 3;
      }

      if (dollarsCount[25] < 0 || dollarsCount[50] < 0) return 'NO';
    }

    dollarsCount[current] += 1;
  }

  return 'YES';
}

console.log(tickets([25, 25, 50, 50])); //  "YES"
console.log(tickets([25, 100])); //  "NO"
console.log(tickets([25, 25, 50, 100])); //  "YES"
console.log(tickets([25, 25, 25, 25, 50, 100, 50])); //  "YES"
console.log(tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100])); //  "YES"

// another solution from codewars

function tickets2(peopleInLine) {
  let [c25, c50, c100] = [0, 0, 0];
  for (const v of peopleInLine) {
    if (v === 25) c25++;
    if (v === 50) { c50++; c25--; }
    if (v === 100) { c25--; c50 > 0 ? c50-- : c25 -= 2; }
    if (c25 < 0 || c50 < 0) return 'NO';
  }
  return 'YES';
}
