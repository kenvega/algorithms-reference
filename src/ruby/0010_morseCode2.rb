# level 4kyu
# https://www.codewars.com/kata/54b72c16cd7f5154e9000457

# constant needed to solve the problem
MORSE_CODE = {
  '-.-.--' => '!',
  '.-..-.' => '"',
  '...-..-' => '$',
  '.-...' => '&',
  '.----.' => '\'',
  '-.--.' => '(',
  '-.--.-' => ')',
  '.-.-.' => '+',
  '--..--' => ',',
  '-....-' => '-',
  '.-.-.-' => '.',
  '-..-.' => '/',
  '-----' => '0',
  '.----' => '1',
  '..---' => '2',
  '...--' => '3',
  '....-' => '4',
  '.....' => '5',
  '-....' => '6',
  '--...' => '7',
  '---..' => '8',
  '----.' => '9',
  '---...' => ' =>',
  '-.-.-.' => ';',
  '-...-' => '=',
  '..--..' => '?',
  '.--.-.' => '@',
  '.-' => 'A',
  '-...' => 'B',
  '-.-.' => 'C',
  '-..' => 'D',
  '.' => 'E',
  '..-.' => 'F',
  '--.' => 'G',
  '....' => 'H',
  '..' => 'I',
  '.---' => 'J',
  '-.-' => 'K',
  '.-..' => 'L',
  '--' => 'M',
  '-.' => 'N',
  '---' => 'O',
  '.--.' => 'P',
  '--.-' => 'Q',
  '.-.' => 'R',
  '...' => 'S',
  '-' => 'T',
  '..-' => 'U',
  '...-' => 'V',
  '.--' => 'W',
  '-..-' => 'X',
  '-.--' => 'Y',
  '--..' => 'Z',
  '..--.-' => '_',
  '...---...' => 'SOS',
};

# lessons
# you can just have various functions in the same scope and call them (like js)
# gsub can be used to replace a string for another (instead of using regex)

def decodeBits(bits)
  bits = trim_zeros(bits)
  time_unit = get_time_unit(bits)

  dot = '1' * time_unit
  dash = '1' * 3 * time_unit
  pause_dot_dash = '0' * time_unit
  pause_characters = '0' * 3 * time_unit
  pause_words = '0' * 7 * time_unit

  bits = bits.gsub(dash, '-')
  bits = bits.gsub(dot, '.')
  bits = bits.gsub(pause_words, '   ')
  bits = bits.gsub(pause_characters, ' ')
  bits = bits.gsub(pause_dot_dash, '')
  bits
end

def trim_zeros(string)
  string.slice!(0) while string[0] == '0'
  string.slice!(string.size - 1) while string[string.size - 1] == '0'
  string
end

def get_time_unit(bits)
  min_time_unit_one = bits.split('0').reject { |x| x == '' }.map{ |x| x.size }
  min_time_unit_zero = bits.split('1').reject { |x| x == '' }.map{ |x| x.size }

  res = min_time_unit_one.concat(min_time_unit_zero)
  res.min
end

def decodeMorse(morseCode)
  words = morseCode.strip.split('   ')
  words.map { |word| decode_word(word) }.join(' ')
end

def decode_word(word)
  word.split.map { |encodedLetter| MORSE_CODE[encodedLetter] }.join
end


p decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')) # 'HEY JUDE'
