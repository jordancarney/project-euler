// Ugly brute force implementation
let accumulator = 0;
for (let i = 0; i < 1000; i++) {
  if (i%3==0 || i%5==0) {
    accumulator+=i;
  }
}
console.log(accumulator);
