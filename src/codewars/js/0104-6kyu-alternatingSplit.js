// 6kyu
// https://www.codewars.com/kata/57814d79a56c88e3e0000786

// Implement a pseudo-encryption algorithm which given a string S and an integer N
// concatenates all the odd-indexed characters of S with all the even-indexed characters of S
// this process should be repeated N times

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive
// return the first argument without changes

// my solution
function encrypt(string, n) {
  if (n <= 0 || string === "" || string === null) {
    return string
  }

  let start = ""
  let end = ""
  let response = ""

  while (n > 0) {
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        end += string[i]
      } else {
        start += string[i]
      }
    }
    response = start + end
    string = response
    start = ""
    end = ""
    n--
  }

  return response
}

console.log(encrypt("", 0)) // ""
console.log(encrypt("", 1)) // ""
console.log(encrypt("This is a test!", 0)) // "This is a test!"
console.log(encrypt("This is a test!", -1)) // "This is a test!"

console.log(encrypt("123456", 1))
console.log(encrypt("246135", 1))
console.log(encrypt("415263", 1))

console.log(encrypt("012345", 1))
console.log(encrypt("012345", 2))
console.log(encrypt("012345", 3))

console.log(encrypt("1234567", 1))
console.log(encrypt("2461357", 1))
console.log(encrypt("4152637", 1))

console.log(encrypt("1234567", 2))
console.log(encrypt("1234567", 3))

console.log(encrypt("This is a test!", 1)) // "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)) // "s eT ashi tist!"
console.log(encrypt("This is a test!", 3)) // " Tah itse sits!"
console.log(encrypt("This is a test!", 4)) // "This is a test!"

// partir en 2 el string
// tomar uno de cada uno y asi ir armando el string
// la 2da parte siempre sera la mayor si el string es de length impar
function decrypt(encryptedText, n) {
  if (n <= 0 || encryptedText === "") {
    return encryptedText
  }

  let first = ""
  let second = ""
  let response = ""

  while (n > 0) {
    response = ""
    first = encryptedText.slice(0, encryptedText.length / 2)
    second = encryptedText.slice(encryptedText.length / 2)

    for (let i = 0; i < second.length; i++) {
      response = `${response}${second[i] ? second[i] : ""}${first[i] ? first[i] : ""}`
    }

    encryptedText = response
    n--
  }

  return response
}

console.log(decrypt("This is a test!", 0)) // "This is a test!"

console.log(decrypt("2461357", 1)) // "1234567"
console.log(decrypt("This is a test!", 1)) // "This is a test!"

console.log(decrypt("hsi  etTi sats!", 1)) // "This is a test!"

console.log(decrypt("s eT ashi tist!", 2)) // "This is a test!"
console.log(decrypt(" Tah itse sits!", 3)) // "This is a test!"
console.log(decrypt("This is a test!", 4)) // "This is a test!"
console.log(decrypt("This is a test!", -1)) // "This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) // "This kata is very interesting!"

// to remember
//  if you use slice like this
//   'asdf'.slice(0, 2.5)
//   you will still get 'as'
//   'asdfg'.slice(2.5) // dfg
//   so for slice the number is rounded to lower value

// other solution from the internet
