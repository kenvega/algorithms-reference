# level 5kyu
# https://www.codewars.com/kata/54d81488b981293527000c8f

# Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

# lessons:
# - you need to be explicit about returning nil at the end of your function
# - you don't need to invoke Set.new(), Set.new works as well

require 'set'
def sum_pairs(numbers, sum)
  aux = Set.new()
  numbers.each do |current|
    return [sum - current, current] if aux.include?(sum - current)
    aux.add(current)
  end
  nil
end

p sum_pairs([11, 3, 7, 5], 10) # [3, 7]
p sum_pairs([10, 5, 2, 3, 7, 5], 10) # [3, 7]
p sum_pairs([1, 4, 8, 7, 3, 15], 8) # [1, 7]
p sum_pairs([1, -2, 3, 0, -6, 1], -6) # [0, -6]
p sum_pairs([1, 2, 3, 4, 1, 0], 2) # [1, 1]


# another solution from codewars
def sum_pairs_2(ints, s)
  seen = {}
  for i in ints do
    return [s-i, i] if seen[s-i]
    seen[i] = true
  end
  nil
end
