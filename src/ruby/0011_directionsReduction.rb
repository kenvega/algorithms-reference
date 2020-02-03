# level 5kyu
# https://www.codewars.com/kata/550f22f4d758534c1100025a

# reduce opposite continous directions

# lessons:
# - there is .to_sym to convert strings to symbols
# - when creating hashes, you access values using symbols

def dirReduc(arr)
  opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  }

  i = 0

  while (i < arr.size - 1) do
    currentElement = arr[i]
    nextElement = arr[i+1]

    if (currentElement == opposites[nextElement.to_sym])
      arr.slice!(i+1)
      arr.slice!(i)
      i = 0
    else
      i += 1
    end
  end

  arr
end

# p dirReduc([]) # []
p dirReduc(["NORTH", "SOUTH"]) # []
p dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) # ["WEST"]
p dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) # ["NORTH", "WEST", "SOUTH", "EAST"]


# another solution from codewars
# - you can access the last element of an array with .last
# - when defining hashes, you can define the key as symbol or as string (then no need to use .to_sym)

OPPOSITE = {
  "NORTH" => "SOUTH",
  "SOUTH" => "NORTH",
  "EAST"  => "WEST",
  "WEST"  => "EAST"
}

def dirReduc(arr)
  stack = []
  arr.each do |direction|
    OPPOSITE[direction] == stack.last ? stack.pop : stack.push(direction)
  end
  stack
end
