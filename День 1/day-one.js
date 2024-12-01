let fs = require("fs");
let input = fs.readFileSync("./day-1.txt").toString();

first = [];
second = [];
diff = [];

for (let line of input.split("\n")) {
  let numbers = line.split("   ");
  numbers.forEach((el, i) => {
    if (i % 2 === 0) {
      first.push(parseInt(el));
    } else {
      second.push(parseInt(el));
    }
  });
}

firstSorted = first.sort();
secondSorted = second.sort();

for (i = 0; i <= firstSorted.length - 1; i++) {
  diff.push(firstSorted[i] - secondSorted[i]);
}

diffMap = diff.map((el) => {
  if (el < 0) {
    el = -el;
  }
  return el;
});

let value = diffMap.reduce((sum, el) => sum + el, 0);

console.log(value);
