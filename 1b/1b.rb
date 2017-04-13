# n(1 + 2 + 3 + 4 + ... + target/n)
# ^ can be expressed = n(n+1)/2
# muliply ^ by n and we have the sum of multiples for a number
# solution = sum_multiples(x) + sum_multiples(y) - sum_multiples(lcm(x, y))

def sum_multiples(n, target)
  count = target/n
  n*(count*(count+1))/2
end

last = 999
numbers = [3,5]

accumulator = 0
numbers.each { |number|
  accumulator += sum_multiples(number, last)
}

if numbers.count > 1
  lcm = numbers.reduce(:lcm)
  accumulator -= sum_multiples(lcm, last)
end

puts accumulator
