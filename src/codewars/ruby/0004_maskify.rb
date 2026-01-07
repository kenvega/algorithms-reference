# level 7kyu
# https://www.codewars.com/kata/5412509bd436bd33920011bc

# mask all letters except the last 4

# lessons:
# - you can do .with_index to access the index
# - you can do operations with strings like multiplication
# - to access parts of an array from the end, use negative index
# - to get a subset of an array, use double dot notation

def maskify(cc)
  aux = ''
  cc.each_char.with_index do |l, i|
    aux.concat(l) if (i >= cc.length - 4)
    aux.concat('#') if (i < cc.length - 4)
  end
  aux
end

# other solution from codewars

def maskify2(cc)
  cc.size <= 4 ? cc : "#" * (cc.length-4) + cc[-4..-1]
end
