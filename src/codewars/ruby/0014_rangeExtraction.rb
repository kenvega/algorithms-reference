# level 4kyu
# https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

# Complete the solution so that it takes a list of integers in increasing order
# And returns a correctly formatted string in the range format

# my solution
# look at an element, and the following ones, until you find no consecutives
# if you found more than 2 consecutives you can form a range
# else you just copy the numbers
# repeat doing the same for the rest of the array

# lessons
# chop, practiced string interpolation, practiced while

def solution(list)
  response = ''
  i = 0

  while (i < list.size) do
    n = list[i]
    consecutive_counter = 0

    consecutive_counter += 1 while (list[i + 1 + consecutive_counter] == n + consecutive_counter + 1)

    if (consecutive_counter >= 2)
      response = response + "#{n}-#{list[i + consecutive_counter]},"
      i += consecutive_counter + 1
    else
      response = response + "#{n},"
      i += 1
    end
  end

  response.chop
end

p solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) # "-6,-3-1,3-5,7-11,14,15,17-20"

# another solution from codewars

# lesson
# chunk_while : form new sub arrays that meet a condition
# remember the ternary operator

def solution_2(list)
  list.chunk_while { |n1, n2| n2 - n1 == 1 }
      .map { |set| set.size > 2 ? "#{set.first}-#{set.last}" : set }
      .join(',')
end
