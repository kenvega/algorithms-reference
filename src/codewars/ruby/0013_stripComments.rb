# level 4kyu
# https://www.codewars.com/kata/51c8e37cee245da6b40000bd

# strips all text that follows any of a set of comment markers passed in
# any whitespace at the end of the line should also be stripped out

# my solution
# split by \n
# find the nearest index from the start
# slice the strings
# trim the end
# join by \n

# lessons
# rstrip, slice, include?
# string interpolation only occurs with double quotes
# find_index instead of each_with_index + break

def solution(input, markers)
  sentences = input.split("\n")

  new_sentences = sentences.map do |sentence|
    break_index = sentence.chars.find_index { |char| markers.include?(char) }
    sentence = sentence.slice(0, break_index).rstrip if (break_index != nil)
    sentence
  end

  new_sentences.join("\n")
end

p solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]) # "apples, plums\npears\noranges"
p solution("Q @b\nu\ne -e f g", ["@", "-"]) # "Q\nu\ne"

# another solution from codewars
def solution_2(input, markers)
  result = input.split(/\n/)
  result.map.with_index do |w,i|
    markers.map do |m|
      result[i] = w[0...w.index(m)-1] if not w.index(m).nil?
    end
  end
  result.join("\n")
end
