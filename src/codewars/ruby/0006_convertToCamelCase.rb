# 6kyu
# https://www.codewars.com/kata/517abf86da9663f1d2000003

# converts dash/underscore delimited words into camel casing
# the first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case)

def to_camel_case(str)
  aux = ''
  str.each_char.with_index do |c,i|
    if str[i-1] == '-' || str[i-1] == '_'
      aux.concat(c.upcase)
    else
      aux.concat(c)
    end
  end
  aux.delete('_-')
end

p to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"
p to_camel_case("The_Stealth_Warrior") # returns "TheStealthWarrior"

# other solution from codewars

def to_camel_case_2(str)
  phrase = str.include?('_') ? str.split('_') : str.split('-')
  phrase.map.with_index do |word, index|
    index == 0 ? word : word.capitalize
  end.join('')
end
