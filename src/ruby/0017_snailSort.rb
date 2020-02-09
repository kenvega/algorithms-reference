# level 4kyu
# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

# Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

# my solution
# push the top array, the right side, the bottom side, the left side
# repeat while you can (have a square big enough: 2x2 or 3x3)
# handle the small case

# lessons
# shift and pop affect the array but don't have the '!' at the end.. hmm..

def snail(multi_array)
  response = []

  while (multi_array.size > 1) do
    top = multi_array[0]
    response.concat(top)

    right = multi_array.map { |array| array.last }
    right.shift
    response.concat(right)

    bottom = multi_array[multi_array.size - 1]
    bottom.pop
    bottom.reverse!
    response.concat(bottom)

    left = multi_array.map { |array| array.first }
    left.shift
    left.pop
    left.reverse!
    response.concat(left)

    multi_array.shift
    multi_array.pop
    multi_array = multi_array.map do |array|
      array.shift
      array.pop
      array
    end
  end

  response.concat(multi_array[0]) if (multi_array.size == 1)

  response
end

# 2x2
p snail([
  [1, 2],
  [4, 3],
]); # [1, 2, 3, 4]

# 3x3
p snail([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]) # [1, 2, 3, 6, 9, 8, 7, 4, 5]

# 5x5
p snail([
  [1,  2,  3,  4,  5 ],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]) # [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

# 6x6
p snail([
  [1,  2,  3,   4,  5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]


# other solutions from codewars
# flatten and transpose exist

def snail_2(array)
  array.empty? ? [] : array.shift + snail_2(array.transpose.reverse)
end

p snail_2([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]) # [1, 2, 3, 6, 9, 8, 7, 4, 5]

def snail_3(array)
  result = []
  while array.flatten.any?
    result << array.shift
    array = array.transpose.reverse
  end
  result.flatten
end

p snail_3([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]) # [1, 2, 3, 6, 9, 8, 7, 4, 5]
