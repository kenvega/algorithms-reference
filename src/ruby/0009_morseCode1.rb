# level 6kyu
# https://www.codewars.com/kata/54b724efac3d5402db00065e

def decodeMorse(morseCode)
  words = morseCode.strip.split('   ')
  words.map { |word| decode_word(word) }.join(' ')
end

def decode_word(word)
  word.split.map { |encodedLetter| MORSE_CODE[encodedLetter] }.join
end
