// n(1 + 2 + 3 + 4 + ... + target/n)
// ^ can be expressed = n(n+1)/2
// muliply ^ by n and we have the sum of multiples for a number
// solution = sum_multiples(x) + sum_multiples(y) - sum_multiples(lcm(x, y))

const sumMultiples = function sumMultiples(n, target) {
  const count = Math.trunc(target/n);
  return n*(count*(count+1))/2;
};

const gcd = function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
};

const lcm = function lcm(a, b) {
  return (a * b) / gcd(a, b);
};

const last = 999;
const numbers = [3,5];
const sum = numbers.reduce((acc, val) => {
  return acc + sumMultiples(val, last);
}, 0);
console.log(sum - sumMultiples(lcm(numbers[0], numbers[1]), last));
