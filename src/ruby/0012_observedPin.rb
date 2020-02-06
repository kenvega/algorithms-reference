# level 4kyu
# https://www.codewars.com/kata/5263c6999e0f40dee200059d

# description too long to copy

def get_pins(observed)
  obj = {
    '1' => ['1', '2', '4'],
    '2' => ['1', '2', '3', '5'],
    '3' => ['2', '3', '6'],
    '4' => ['1', '4', '5', '7'],
    '5' => ['2', '4', '5', '6', '8'],
    '6' => ['3', '5', '6', '9'],
    '7' => ['4', '7', '8'],
    '8' => ['5', '7', '8', '9', '0'],
    '9' => ['6', '8', '9'],
    '0' => ['8', '0'],
  }

  digits = observed.split('');
  options = digits.map { |digit| obj[digit] }

  while (options.length > 1) do
    result = []

    options[0].each do |e|
      combinations = []
      options[1].each do |x|
        combinations.push(e+x)
      end
      result.concat(combinations)
    end

    options.shift
    options.shift
    options.unshift(result)
  end

  options[0]
end

p get_pins("8") # ["5", "7", "8", "9", "0"]
p get_pins("11") # ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
p get_pins("369") # ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
