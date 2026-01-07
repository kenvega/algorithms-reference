// 6kyu
// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

// convert a camel case string into a kebab case

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

// Notes:
// the returned string should only contain lowercase letters

// my solution
function kebabize(string) {
  let response = string[0].toLowerCase()
  let char

  for (let i = 1; i < string.length; i++) {
    char = string[i]
    if (!isNaN(Number(char))) {
      continue
    }

    if (char.toLowerCase() === char) {
      response = response.concat(char)
    } else {
      response = `${response}-${char.toLowerCase()}`
    }
  }

  return response
}

console.log(kebabize("MyCamelCasedString")) // , 'my-camel-cased-string'
console.log(kebabize("myCamelCasedString")) // , 'my-camel-cased-string'
console.log(kebabize("MyCamelHas3Humps")) // , 'my-camel-has-humps'
console.log(kebabize("myCamelHas3Humps")) // , 'my-camel-has-humps'
console.log(kebabize("CAMEL")) // , 'c-a-m-e-l'
console.log(kebabize("cAMEL")) // , 'c-a-m-e-l'
console.log(kebabize("AbstractSingletonProxyFactoryBean")) // , 'abstract-singleton-proxy-factory-bean'
console.log(kebabize("abstractSingletonProxyFactoryBean")) // , 'abstract-singleton-proxy-factory-bean'

// to remember

// other solution from the internet
