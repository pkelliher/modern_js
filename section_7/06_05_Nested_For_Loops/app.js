for (let i = 1; i <= 10; i++) {
  console.log("OUTER LOOP:", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("  INNER LOOP", j);
  }
}

// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  //inner loop iterates over each cell in a given row
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

for (let i = 1; i <= 10; i++) {
  console.log("Outer Loop PK", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("Inner Loop PK", j);
  }
}

// const patStudents = [
//   {
//     name: "John",
//     score: 98,
//   },
//   {
//     name: "Sam",
//     score: 78,
//   },
//   {
//     name: "Clair",
//     score: 92,
//   },
// ];

// // for (let i = 0; i < patStudents.length; i++) {
// //   let student = patStudents[i];
// //   console.log(`${student.name} received a grade of ${student.score}`);
// // }

// let total = 0;

// for (let i = 0; i < patStudents.length; i++) {
//   let student = patStudents[i];
//   total += student.score;
// }
// console.log(Math.floor(total / patStudents.length));
