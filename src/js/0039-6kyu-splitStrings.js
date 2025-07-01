// 6kyu
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters
//   then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

function splitStrings(str){
  if (str.length % 2 === 1) {
    str = str.concat('_')
  }

  let response = []
  let aux = ''

  for(let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      aux = str[i]
    }
    else {
      aux = aux.concat(str[i])
      response.push(aux)
      aux = ''
    }
  }

  return response
}

// things to remember from this problem
//   concat does not affect the original string. you have to reassign the result to the variable


// other solutions found
//   shorter version
function splitStrings2(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}
