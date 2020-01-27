# level 7kyu
# https://www.codewars.com/kata/52fba66badcd10859f00097e

# remove vowels lowercase and uppercase from strings

# lessons
# - there are functions that can remove characters like .delete or .tr

def disemvowel(str)
  response = ''
  str.each_char do |letter|
    letterD = letter.downcase
    if (letterD != 'a' && letterD != 'e' && letterD != 'i' && letterD != 'o' && letterD != 'u')
      response.concat(letter)
    end
  end
  response
end

# other solution from codewars
def disemvowel2(str)
  str.delete('aeiouAEIOU')
end

