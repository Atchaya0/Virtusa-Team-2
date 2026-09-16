import * as readline from "readline";

/**
 * Question 2: Write a TypeScript program to check whether a number is even or odd.
 * 
 * Logic:
 * An integer is even if it is divisible by 2 with remainder 0 (num % 2 === 0).
 * Otherwise, if remainder is non-zero, it is odd.
 */

export function checkEvenOrOdd(num: number): string {
    if (!Number.isInteger(num)) {
        return "Not an integer (even/odd is defined for integers)";
    }

    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Interactive terminal CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=========================================");
console.log("          EVEN OR ODD CHECKER (TS)       ");
console.log("=========================================");

rl.question("Enter an integer: ", (input: string) => {
    const trimmed = input.trim();

    if (trimmed === "") {
        console.log("\nNo input provided. Running sample test cases:");
        const testNumbers: number[] = [0, 4, 7, 28, -13, -42, 3.14];
        testNumbers.forEach(n => {
            console.log(`Number ${n} -> Result: ${checkEvenOrOdd(n)}`);
        });
    } else {
        const num = Number(trimmed);

        if (isNaN(num)) {
            console.log("\nError: Please enter a valid number.");
        } else {
            const result = checkEvenOrOdd(num);
            console.log("\n--- Result ---");
            console.log(`Number : ${num}`);
            console.log(`Status : ${result}`);
        }
    }

    rl.close();
});
