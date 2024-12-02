let fs = require("fs");
let input = fs.readFileSync("./day-2.txt").toString();

let truthy;
let numbers = [];
numbersFiltered = [];
let push = true;
let numDirection;
let numbersConsistent = [];
for (let line of input.split("\n")) {
  numbers.push(line.split(" "));
}
numbers.forEach((el) => {
  for (i = 0; i <= el.length - 2; i++) {
    if (Math.abs(el[i] - el[i + 1]) > 3 || Math.abs(el[i] - el[i + 1]) < 1) {
      break;
    }
    if (i === el.length - 2) {
      numbersFiltered.push(el);
    }
  }
});

numbersFiltered.forEach((el) => {
  numDirection = el[1] - el[0];
  for (i = 0; i < el.length - 1; i++) {
    if (numDirection * (el[i + 1] - el[i]) <= 0) {
      break;
    }
    if (i === el.length - 2) {
      numbersConsistent.push(el);
    }
  }
});

console.log(numbersConsistent.length);
