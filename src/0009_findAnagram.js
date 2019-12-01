// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

/**
 * my solution
 * get an object with keys as the letters and values as the number of times the letter repeat
 * then compare
 */
function anagrams(word, words) {
  const targetLetters = {};
  word.split('').forEach(l => {
    if (targetLetters[l] !== undefined) targetLetters[l]++;
    else targetLetters[l] = 1;
  });

  return words.filter(w => {
    const letters = {};
    w.split('').forEach(l => {
      if (letters[l] !== undefined) letters[l]++;
      else letters[l] = 1;
    });

    if (Object.keys(targetLetters).length !== Object.keys(letters).length) return false;

    for (let i = 0; i < Object.keys(targetLetters).length; i++) {
      if (targetLetters[Object.keys(targetLetters)[i]] !== letters[Object.keys(targetLetters)[i]]) return false;
    }

    return true;
  });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

// other solution from codewars
// didn't realize you could just use sort

function anagrams2(word, words) {
  word = word.split('').sort().join('');
  return words.filter(w => word === w.split('').sort().join(''));
}

console.log(anagrams2('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
