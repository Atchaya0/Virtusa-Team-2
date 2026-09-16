import * as readline from "readline";

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
