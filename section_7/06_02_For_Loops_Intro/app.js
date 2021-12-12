// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
  console.log("HELLO:", i);
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
  console.log("HELLO:", i);
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
  console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}
console.log("AFTER THE LOOP!");

// Another perfect square for loop.
for (let i = 1; i <= 20; i++) {
  console.log(`Pefect squares: ${i}x${i} = ${i * i}`);
}

// decreenting by 1 for loop.
for (let i = 10; i >= 0; i -= 1) {
  console.log("Counting Backwards by 1:", i);
}

// decrementing by 2 for loop.
for (let i = 20; i >= 0; i -= 2) {
  console.log("Counting Backwards by 2", i);
}

// incrementing by 2 for loop.
for (let i = 0; i <= 20; i += 2) {
  console.log("Incrementing by 2", i);
}

// decrementing by 5 for loop.
for (let i = 100; i >= 0; i -= 5) {
  console.log("Counting Backwards by 5", i);
}

// incrementing by 5 for loop.
for (let i = 0; i <= 100; i += 5) {
  console.log("Incrementing by 5", i);
}
