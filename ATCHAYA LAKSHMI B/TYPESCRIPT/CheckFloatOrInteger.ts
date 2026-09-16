import * as readline from "readline";

/**
 * Question 3: Check if a given number is a floating-point or integer in JavaScript/TypeScript.
 * 
 * Logic in JS/TS:
 * In JavaScript/TypeScript, all numbers are double-precision 64-bit binary format IEEE 754.
 * To distinguish between an integer and a floating-point number with a fractional part:
 * 1. Number.isInteger(val) - Checks if value is a finite integer.
 * 2. val % 1 !== 0        - Modulo 1 check (fractional remainder).
 * 3. Math.floor(val) !== val - Floor comparison.
 */

export type NumberClassification = "Integer" | "Floating-Point" | "Special/Invalid";

export function classifyNumber(num: number): {
    classification: NumberClassification;
    isIntegerViaMethod: boolean;
    isIntegerViaModulo: boolean;
    isIntegerViaFloor: boolean;
} {
    if (!Number.isFinite(num) || isNaN(num)) {
        return {
            classification: "Special/Invalid",
            isIntegerViaMethod: false,
            isIntegerViaModulo: false,
            isIntegerViaFloor: false
        };
    }

    const isIntegerViaMethod = Number.isInteger(num);
    const isIntegerViaModulo = (num % 1 === 0);
    const isIntegerViaFloor = (Math.floor(num) === num);

    return {
        classification: isIntegerViaMethod ? "Integer" : "Floating-Point",
        isIntegerViaMethod,
        isIntegerViaModulo,
        isIntegerViaFloor
    };
}

// Interactive terminal CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=========================================");
console.log("  FLOAT VS INTEGER CHECKER (TS / JS)    ");
console.log("=========================================");

rl.question("Enter a number to check (e.g. 42 or 3.1415): ", (input: string) => {
    const trimmed = input.trim();

    if (trimmed === "") {
        console.log("\nNo input provided. Running sample test cases:");
        const testValues = [42, 3.14, -15, -0.007, 100.0, 0, 1e-5];

        console.log("---------------------------------------------------------------");
        console.log(
            "Value".padEnd(12) +
            "Type".padEnd(18) +
            "Number.isInteger()".padEnd(22) +
            "num % 1 === 0"
        );
        console.log("---------------------------------------------------------------");

        testValues.forEach(val => {
            const res = classifyNumber(val);
            console.log(
                String(val).padEnd(12) +
                res.classification.padEnd(18) +
                String(res.isIntegerViaMethod).padEnd(22) +
                String(res.isIntegerViaModulo)
            );
        });
    } else {
        const num = Number(trimmed);

        if (isNaN(num)) {
            console.log("\nError: '" + trimmed + "' is not a valid number.");
        } else {
            const res = classifyNumber(num);
            console.log("\n--- Analysis Result ---");
            console.log(`Input Number        : ${num}`);
            console.log(`Classification      : ${res.classification}`);
            console.log(`Number.isInteger()  : ${res.isIntegerViaMethod}`);
            console.log(`Modulo (num % 1 = 0): ${res.isIntegerViaModulo}`);
            console.log(`Math.floor() Match  : ${res.isIntegerViaFloor}`);
        }
    }

    rl.close();
});
