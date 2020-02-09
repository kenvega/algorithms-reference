# level 5kyu
# https://www.codewars.com/kata/52774a314c2333f0a7000688

# Write a function called that takes a string of parentheses
# and determines if the order of the parentheses is valid.

# my solution
# for every (, there must be a ) that cancels it
# you can't start with a )
# basically use a counter, if the counter ever gets to -1, inmediatly return false

def valid_parentheses(string)
  openCounter = 0
  closeCounter = 0

  string.chars.each do |char|
    openCounter +=1 if (char == '(')
    closeCounter +=1 if (char == ')')
    return false if (closeCounter > openCounter)
  end

  closeCounter == openCounter
end

p valid_parentheses("  (") # false
p valid_parentheses(")test") # false
p valid_parentheses("") # true
p valid_parentheses("hi())(") # false
p valid_parentheses("hi(hi)()") # true

# another similar solution from codewars using only 1 variable

def valid_parentheses_2(string)
  open = 0
  string.chars.each do |c|
    open += 1 if c == "("
    open -= 1 if c == ")"
    return false if open < 0
  end
  open == 0
end
