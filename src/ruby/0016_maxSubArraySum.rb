# level 5kyu
# https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

# find the maximum sum of a contiguous subsequence in an array or list of integers

# my solution
# for each element, generate an array
# that array has to has all possibilities for the sum
# then from that array you get the max value and put it in another array

# do that for every element, then you will have the array of maxs
# get the max of that and you have your answer

# lessons
# there is .sum but is on 2.4+ -- to get the sum of elements of an array
# reminder that each_index exists
# this solution is still slow.

def max_sequence(arr)
  return 0 if (arr.max == nil || arr.max < 0)
  return arr[0] if (arr.size == 1)

  array_of_max_values = []

  arr.each_index do |i|
    sum_arrays_for_element = []
    arr.each_index { |j| sum_arrays_for_element << arr.slice(i,j + 1).sum }
    array_of_max_values << sum_arrays_for_element.max
  end

  array_of_max_values.max
end

p max_sequence([]) # 0
p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) # [4, -1, 2, 1] => 6
p max_sequence([-2, 1, -3, 4]) # [1, -3, 4] => 0
p max_sequence([11]) # 11
p max_sequence([-32]) # 0
p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) # 12
