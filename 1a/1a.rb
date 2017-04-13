# Ugly brute force implementation
accumulator = 0
for i in 1...1000
  if i%3==0 || i%5==0
    accumulator += i
  end
end
puts accumulator

# I guess this is a more Ruby way of doing this
puts (1...1000)
  .select { |i| i%3==0 || i%5==0 }
  .inject(:+)
