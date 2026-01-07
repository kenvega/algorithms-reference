# level 6kyu
# https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

# There are a lot of people at the cinema box office standing in a huge line.
# Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
# Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

# Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
# Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment.
# Otherwise return NO.

def tickets(people)
  count25 = 0
  count50 = 0
  count100 = 0

  people.each do |x|
    case x
    when 25
      count25 += 1
    when 50
      count50 += 1
      count25 -= 1
    when 100
      if count50 > 0
        count50 -= 1
        count25 -= 1
      else
        count25 -= 3
      end
    end

    return 'NO' if count25 < 0
  end

  'YES'
end

p tickets([25, 25, 50, 50]) # "YES"
p tickets([25, 100]); # "NO"
p tickets([25, 25, 50, 100]); # "YES"
p tickets([25, 25, 25, 25, 50, 100, 50]); # "YES"
p tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100]); # "YES"
