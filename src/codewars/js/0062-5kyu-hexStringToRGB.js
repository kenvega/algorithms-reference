// 5kyu
// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/javascript

// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

// my solution
function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.slice(1,3), 16),
    g: parseInt(hexString.slice(3,5), 16),
    b: parseInt(hexString.slice(5,7), 16)
  }
}

// to remember
//  you can use parseInt to change hexadecimal strings to base10 numbers
//  substr is considered deprecated. prefer slice

// other solution
function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.substr(1, 2), 16),
    g: parseInt(hexString.substr(3, 2), 16),
    b: parseInt(hexString.substr(5, 2), 16),
  };
}

// other solution
const hexMap = {
  A: 10, 
  B: 11, 
  C: 12, 
  D: 13, 
  E: 14, 
  F: 15,
  ...Array(10).fill(null).map((_, i) => i),
};

function hexStringToRGB(hexString) {
  const parseString = [];
  const result = { r: null, g: null, b: null };  
  
  for (let i = 1; i < 6; i += 2) {
    parseString.push(hexString.slice(i, i + 2).toUpperCase());
  }

  Object.keys(result).forEach((key, index) => {
    const a = parseString[index].charAt(0);
    const b = parseString[index].charAt(1);
    
    result[key] = hexMap[a] * 16 + hexMap[b];
  })
  
  return result;
}