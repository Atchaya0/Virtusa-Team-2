import * as readline from "readline";

export function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Interactive terminal CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter numbers separated by spaces (e.g. 10 20 30 40 50): ", (input: string) => {
    const rawTokens = input.trim().split(/\s+/).filter(t => t.length > 0);

    if (rawTokens.length === 0) {
        console.log("\nNo numbers entered. Demonstrating with default test cases:");
        const testCases: number[][] = [
            [10, 20, 30, 40, 50],
            [4.5, 8.2, 9.1, 3.4],
            [100, -50, 25, -75]
        ];

        testCases.forEach((arr, index) => {
            const avg = calculateAverage(arr);
            console.log(`Test case #${index + 1}: [${arr.join(", ")}] => Average: ${avg.toFixed(2)}`);
        });
    } else {
        const numbers: number[] = rawTokens.map(Number);
        const hasNaN = numbers.some(n => isNaN(n));

        if (hasNaN) {
            console.log("\nError: Please enter valid numeric values only.");
        } else {
            const avg = calculateAverage(numbers);
            const sum = numbers.reduce((a, b) => a + b, 0);

            console.log("\n--- Results ---");
            console.log(`Elements Count : ${numbers.length}`);
            console.log(`Array Elements : [${numbers.join(", ")}]`);
            console.log(`Sum of Elements: ${sum}`);
            console.log(`Average (Mean) : ${avg.toFixed(4)}`);
        }
    }

    rl.close();
});
