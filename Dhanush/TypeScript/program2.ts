let num: number = 12345;
let sum: number = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);
