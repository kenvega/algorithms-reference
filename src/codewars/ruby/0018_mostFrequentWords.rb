# level 4kyu
# https://www.codewars.com/kata/51e056fe544cf36c410000fb

# lessons
# remember you can use gsub to change a pattern to another
# you can use sort_by to sort a hash and get an array from it of their key value pairs

def top_3_words(text)
  exclude = [' ', ',', ':', '/']
  exclude.each do |character|
    text = text.gsub(character, '.')
  end
  text = text.split('.').reject { |word| word == '' }.map { |word| word.downcase }

  counterObj = {}

  text.each do |word|
    is_not_word = word.upcase == word.downcase
    next if (is_not_word)

    if (counterObj[word] != nil)
      counterObj[word] += 1
    else
      counterObj[word] = 1
    end
  end

  return [] if (counterObj.size == 0)
  counterObj.sort_by { |key, value| -value}.slice(0,3).map { |keyValuePair| keyValuePair[0] }
end

p top_3_words("a a a  b  c c  d d d d  e e e e e") # ["e", "d", "a"]
p top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") # ["e", "ddd", "aa"]
p top_3_words("  //wont won't won't ") # ["won't", "wont"]
p top_3_words("  , e   .. ") # ["e"]
p top_3_words("  ...  ") # []
p top_3_words("  '  ") # []
p top_3_words("  '''  ") # []
p top_3_words("""In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.""") # ["a", "of", "on"]

# other solution from codewars
# lessons
# first can be used with parameter

def top_3_words_2(text)
  text.scan(/[A-Za-z']+/)
      .select { |x| /[A-Za-z]+/ =~ x }
      .group_by { |x| x.downcase }
      .sort_by { |k,v| -v.count }
      .first(3)
      .map(&:first)
end
