// 6kyu
// https://www.codewars.com/kata/558ffec0f0584f24250000a0/javascript

// You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't speak, and when he wants to say something, he writes it down on a paper. However, none of the words he writes make sense to you. He wants to help you, so he points at a beer and writes "yvvi". You start to understand what he's trying to say, and you write a script, that decodes his words.

// Keep in mind that numbers, as well as other characters, can be part of the input, and you should keep them like they are. You should also test if the input is a string. If it is not, return "Input is not a string".

// my solution
function decode(str) {
  if (typeof str !== "string") {
    return "Input is not a string"
  }

  const abc = "abcdefghijklmnopqrstuvwxyz".split("")
  let isLowerCase
  let nextLetter
  let response = ""

  for (let i = 0; i < str.length; i++) {
    if (abc.includes(str[i].toLowerCase())) {
      isLowerCase = str[i].toLowerCase() === str[i]

      nextLetter =
        abc[abc.length - abc.findIndex((e) => e === str[i].toLowerCase()) - 1]
      response += isLowerCase ? nextLetter : nextLetter.toUpperCase()
    } else {
      response += str[i]
    }
  }

  return response
}

// to remember

// other solution from the internet
