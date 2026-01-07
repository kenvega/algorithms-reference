# level 6kyu
# https://www.codewars.com/kata/525f50e3b73515a6db000b83

# Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

def createPhoneNumber(numbers)
  response = ''
  numbers.each.with_index do |n, i|
    response.concat('(') if (i == 0)
    response.concat(n.to_s)
    response.concat(') ') if (i == 2)
    response.concat('-') if (i == 5)
  end
  response
end

p createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # "(123) 456-7890"
p createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) # "(111) 111-1111"
p createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # "(123) 456-7890"

# other solution from codewars

def createPhoneNumber(numbers)
  "(%d%d%d) %d%d%d-%d%d%d%d" % numbers
end
