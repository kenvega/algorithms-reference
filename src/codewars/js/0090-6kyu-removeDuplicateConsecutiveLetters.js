// 6kyu
// https://www.codewars.com/kata/59f08f89a5e129c543000069

// given an array of strings
// remove all consecutive duplicate letters from each string in the array

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces

// my solution
function dup(strings) {
  let previousChar = ""
  let currentChar = ""
  let word = ""

  const response = strings.map((string) => {
    previousChar = string[0]
    word = string[0]

    for (let i = 1; i < string.length; i++) {
      currentChar = string[i]

      if (previousChar !== currentChar) {
        word = `${word}${currentChar}`
      }
      previousChar = currentChar
    }

    return word
  })

  return response
}

console.log(dup(["kelless", "keenness"])) //  ['keles','kenes']);
console.log(dup(["abracadabra", "allottee", "assessee"])) // ['abracadabra','alote','asese']);

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])) // ['codewars','picaniny','hubububo']);
// console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])) //  ['Wolomolo','flodoromonlighters','chuchchi']);
// console.log(dup(["adanac", "soonness", "toolless", "ppellee"])) //  ['adanac','sones','toles','pele']);
// console.log(dup(["callalloo", "feelless", "heelless"])) //  ['calalo','feles','heles']);
// console.log(dup(["putteellinen", "keenness"])) //  ['putelinen','kenes']);
// console.log(dup(["kelless", "voorraaddoosspullen", "achcha"])) //  ['keles','voradospulen','achcha']);

// to remember

// other solution from the internet
