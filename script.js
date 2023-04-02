for (let i = 1; i <= 10; i++) {
    console.log(i);
  }


  for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
  
  let num1 = 0, num2 = 1, nextNum;

  console.log(num1);
  console.log(num2);
  
  for (let i = 2; i < 20; i++) {
    nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
  }
  
  let num = prompt("Enter a number to generate a multiplication table:");
  num = parseInt(num);
  
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);
  }
  
  // Data 1
let dolphinsAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91 + 110) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!");
} else if (koalasAvg > dolphinsAvg) {
  console.log("Koalas win!");
} else {
  console.log("It's a draw!");
}

// Data 2
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 123) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!");
} else if (koalasAvg > dolphinsAvg) {
  console.log("Koalas win!");
} else {
  console.log("It's a draw!");
}

// Data 3
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 106) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!");
} else if (koalasAvg > dolphinsAvg) {
  console.log("Koalas win!");
} else {
  console.log("It's a draw!");
}
