function sumOfDigits(number: number): number {
    number = Math.abs(number);

    let sum: number = 0;

    while (number > 0) {
        const digit: number = number % 10;

        sum += digit;

        number = Math.floor(number / 10);
    }

    return sum;
}

const input: string = prompt("Enter a number:") || "0";

const number: number = Number(input);

console.log("Sum of digits:", sumOfDigits(number));
