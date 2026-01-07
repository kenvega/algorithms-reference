// 6kyu
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// my solution
function isValidIP(str) {
  if (str.length === 0) {
    return false
  }

  if (str !== str.trim()) {
    return false
  }
  const abc = "abcdefghijklmnopqrstuvwxyz"

  const parts = str.split(".")

  if (parts.length !== 4) {
    return false
  }

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]

    if (part.length === 0) {
      return false
    }
    if (part.length > 1 && part[0] === "0") {
      return false
    }
    if (part.length > 3) {
      return false
    }
    if (part.trim() !== part) {
      return false
    }
    if (Number(part) > 255 || Number(part) < 0) {
      return false
    }
    if (part.includes("e")) {
      return false
    }
    for (let j = 0; j < part.length; j++) {
      const char = part[j]
      if (abc.includes(char)) {
        return false
      }
    }
  }

  return true
}

console.log(isValidIP("0.0.0.0")) //  true
console.log(isValidIP("12.255.56.1")) //  true
console.log(isValidIP("137.255.156.100")) //  true
console.log(isValidIP("")) // false
console.log(isValidIP("abc.def.ghi.jkl")) // false
console.log(isValidIP("abc.df.ghi.jkl")) // false
console.log(isValidIP("49.219.bc.201")) // false
console.log(isValidIP("129.109..93")) // false
console.log(isValidIP("123.456.789.0")) // false
console.log(isValidIP("12.34.56")) // false
console.log(isValidIP("01.02.03.04")) // false
console.log(isValidIP("256.1.2.3")) // false
console.log(isValidIP("1.2.3.4.5")) // false
console.log(isValidIP("53.86 .245.61")) // false
console.log(isValidIP("123,45,67,89")) // false
console.log(isValidIP("1e0.1e1.1e2.2e2")) // false
console.log(isValidIP(" 1.2.3.4")) // false
console.log(isValidIP("1.2.3.4 ")) // false
console.log(isValidIP("12.34.56.-7")) // false
console.log(isValidIP("1.2.3.4\n")) // false
console.log(isValidIP("\n1.2.3.4")) // false

// to remember
//  trim to remove whitespaces and \n characters

// other solution from the internet
function isValidIP2(str) {
  const octets = str.split(".") // Split into octets
  return (
    octets.length === 4 && // Ensure str has exactly 4 octets
    octets.reduce(
      (
        acc,
        octet, // Check all octets
      ) =>
        acc === true && // Ensure prior octets okay
        String(Number(octet)) === octet && // Ensure octet has nothing funky like spaces, leading 0's, ...
        Number(octet) >= 0 && // Ensure octet is 0 or more
        Number(octet) <= 255, // Ensure octet is 255 or less
      true,
    )
  )
}
