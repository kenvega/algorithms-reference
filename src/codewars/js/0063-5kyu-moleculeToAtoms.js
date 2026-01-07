// 5kyu
// https://www.codewars.com/kata/52f831fa9d332c6591000511/javascript

// For a given chemical formula represented by a string
// count the number of atoms of each element contained in the molecule and return an object
// (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them.
// The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index.
// For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

// my original solution
function parseMolecule(formula) {
  const response = {}
  let chemical
  let insideBrackets = false
  let insideParenthesis = false
  let insideCurly = false
  let character
  let nextChar
  let isCharUppercaseLetter = false
  let isNextCharLowerCaseLetter = false
  let curlyMultiplier
  let bracketsMultiplier
  let parenthesisMultiplier
  let previousValue = 0

  for (let i = 0; i < formula.length; i++) {
    character = formula[i]

    if (character === "[") { insideBrackets = true }
    if (character === "]") { insideBrackets = false }
    if (insideBrackets) {
      bracketsMultiplier = formula[formula.indexOf("]", i) + 1]
      bracketsMultiplier = bracketsMultiplier && !isNaN(parseInt(bracketsMultiplier)) ? parseInt(bracketsMultiplier) : 1
    } else {
      bracketsMultiplier = 1
    }

    if (character === "{") { insideCurly = true }
    if (character === "}") { insideCurly = false }
    if (insideCurly) {
      curlyMultiplier = formula[formula.indexOf("}", i) + 1]
      curlyMultiplier = curlyMultiplier && !isNaN(parseInt(curlyMultiplier)) ? parseInt(curlyMultiplier) : 1
    } else {
      curlyMultiplier = 1
    }

    if (character === "(") { insideParenthesis = true }
    if (character === ")") { insideParenthesis = false }
    if (insideParenthesis) {
      parenthesisMultiplier = formula[formula.indexOf(")", i) + 1]
      parenthesisMultiplier = parenthesisMultiplier && !isNaN(parseInt(parenthesisMultiplier)) ? parseInt(parenthesisMultiplier) : 1
    } else {
      parenthesisMultiplier = 1
    }

    isCharUppercaseLetter = isNaN(parseInt(character)) && character >= 'A' && character <= 'Z'

    if (isCharUppercaseLetter) {
      nextChar = formula[i+1]

      isNextCharLowerCaseLetter = nextChar && isNaN(parseInt(nextChar)) && nextChar >= 'a' && nextChar <= 'z'
      if (isNextCharLowerCaseLetter) {
        possibleNextCharNumber = formula[i+2]
        possibleNextNextCharNumber = formula[i+3]
        chemical = character + nextChar
        i++
      } else {
        possibleNextCharNumber = formula[i+1]
        possibleNextNextCharNumber = formula[i+2]
        chemical = character
      }

      if (response[chemical]) {
        previousValue = response[chemical]
      } else {
        previousValue = 0
      }
      response[chemical] = 1

      isNextCharANumber = !isNaN(parseInt(possibleNextCharNumber))
      if (isNextCharANumber) {
        isNextNextCharANumber = !isNaN(parseInt(possibleNextNextCharNumber))
        if (isNextNextCharANumber) {
          response[chemical] += parseInt(`${possibleNextCharNumber}${possibleNextNextCharNumber}`) - 1
        } else {
          response[chemical] += parseInt(possibleNextCharNumber) - 1
        }
      }

      if (insideParenthesis) {
        response[chemical] = response[chemical] * parenthesisMultiplier
      }

      if (insideBrackets) {
        response[chemical] = response[chemical] * bracketsMultiplier
      }

      if (insideCurly) {
        response[chemical] = response[chemical] * curlyMultiplier
      }

      response[chemical] = previousValue + response[chemical]
    }
  }

  return response
}

console.log('parseMolecule("H2O"): ', parseMolecule("H2O")); // {H: 2, O: 1}
console.log('parseMolecule("C6H12O6"): ', parseMolecule("C6H12O6")); // {C: 6, H: 12, O: 6}
console.log('parseMolecule("Mg(OH)2"): ', parseMolecule("Mg(OH)2")); // {Mg: 1, O: 2, H: 2}
console.log('parseMolecule("K4[ON(SO3)2]2"): ', parseMolecule("K4[ON(SO3)2]2")); // {K: 4, O: 14, N: 2, S: 4}
console.log('parseMolecule("Fe4[Fe(CN)6]3"): ', parseMolecule("Fe4[Fe(CN)6]3")); // {Fe:7, C:18, N:18}
console.log('parseMolecule("C12H22O11"): ', parseMolecule("C12H22O11")); // {C:12, H:22, O:11}
console.log('parseMolecule("N(CH2CH2Cl)3"): ', parseMolecule("N(CH2CH2Cl)3")); // { N: 1, C: 6, H: 12, Cl: 3 }
console.log('parseMolecule("(C5H5)Fe(CO)2CH3"): ', parseMolecule("(C5H5)Fe(CO)2CH3")); // {C: 7, H: 8, Fe: 1, O: 2}


// to remember
//  indexOf can search from other parts other than the start
//  const sentence = "The quick brown fox jumps over the lazy dog.";
//  const searchTerm = "fox";
//  const indexOfFox = sentence.indexOf(searchTerm); // Returns 16
//  const notFound = sentence.indexOf("cat"); // Returns -1
//  const secondThe = sentence.indexOf("the", 4); // Returns 31 (starts search from index 4)


// other solution i found that do not use regex

function mul(a, b) {
  return a * b;
}

function isLower(char) {
  return char == char.toLowerCase() && char != char.toUpperCase();
}

function isUpper(char) {
  return char != char.toLowerCase() && char == char.toUpperCase();
}

function isCloseBracket(char) {
  return c == ')' || c == ']' || c == '}';
}

var open  = { '{':'}',
              '[':']', 
              '(':')', };
var close = { '}':'{',
              ']':'[',
              ')':'(', };

function parseMolecule2(formula) {
  "use strict";
  var chars = formula.split('').reverse().map(function(c){return open[c] || close[c] || c});
  var elem = "";
  var curMult = 1;
  var stack = [];
  var elements = {};
  for (let i = 0; i < chars.length; i++) {
    var c = chars[i];
    if (isLower(c)) elem = c;
    else if (isUpper(c)) {
      elem = c + elem;
      if (elem in elements) {
        elements[elem] += curMult * stack.reduce(mul, 1);
      } else {
        elements[elem] = curMult * stack.reduce(mul, 1);
      }
      curMult = 1;
      elem = "";
    }
    else if (c in open) {
      stack.push(curMult);
      curMult = 1;
    }
    else if (c in close) stack.pop();
    else if (!isNaN(c)) {
      curMult = (curMult === 1) ? c : c + curMult;
    }
  }
  return elements;
}
