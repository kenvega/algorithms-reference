// level 4kyu
// https://www.codewars.com/kata/5263c6999e0f40dee200059d

/**
 * lesson : shift is faster than splice if you want to remove a few elements at the start of the array
 */

function getPINs(observed) {
  const obj = {
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9'],
    0: ['8', '0'],
  };

  const digits = observed.split('');
  const options = digits.map(d => obj[d]);

  while (options.length > 1) {
    let result = [];

    options[0].forEach(e => {
      result = result.concat(options[1].map(x => e + x));
    });

    options.shift();
    options.shift();
    options.unshift(result);
  }

  return options[0];
}

console.log(getPINs('12')); // [ '11', '12', '13', '15', '21', '22', '23', '25', '41', '42', '43', '45' ]
