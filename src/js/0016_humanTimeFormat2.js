// level 5kyu
// https://www.codewars.com/kata/52685f7382004e774f0001f7

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  const hours = Math.trunc(seconds / 3600);
  const minutes = Math.trunc((seconds - hours * 3600) / 60);
  const secs = (seconds - hours * 3600) % 60;

  return `${formatter(hours)}:${formatter(minutes)}:${formatter(secs)}`;
}

const formatter = n => {
  if (n < 10) return `0${n}`;
  return n;
};

console.log(humanReadable(0)); // '00:00:00'
console.log(humanReadable(5)); // '00:00:05'
console.log(humanReadable(60)); // '00:01:00'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(359999)); // '99:59:59'
