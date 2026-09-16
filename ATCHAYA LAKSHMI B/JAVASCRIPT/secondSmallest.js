
const readline = require("readline");
function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    let firstMin = Infinity;
    let secondMin = Infinity;

    for (const num of arr) {
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num > firstMin && num < secondMin) {
            secondMin = num;
        }
    }

    return secondMin === Infinity ? null : secondMin;
}

function findSecondSmallestUsingSet(arr) {
    const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => a - b);
    return uniqueSorted.length >= 2 ? uniqueSorted[1] : null;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter numbers separated by spaces (or press Enter for default): ", (input) => {
    let numbers;

    if (!input || input.trim() === "") {
        console.log("\nRunning test cases on various arrays:");
        const testArrays = [
            [12, 13, 1, 10, 34, 1],
            [5, 5, 5, 5],
            [10, -2, 4, -8, 0, 7],
            [100],
            [99, 45, 23, 78, 12, 5]
        ];

        testArrays.forEach((testArr, idx) => {
            const res = findSecondSmallest(testArr);
            const status = res !== null ? res : "None (fewer than 2 distinct elements)";
            console.log(`Test #${idx + 1}: [${testArr.join(", ")}] => Second Smallest: ${status}`);
        });
    } else {
        numbers = input.trim().split(/\s+/).map(Number);
        const hasNaN = numbers.some(n => isNaN(n));

        if (hasNaN) {
            console.log("\nError: Please enter valid numbers only.");
        } else {
            const secondMin = findSecondSmallest(numbers);
            const secondMinSet = findSecondSmallestUsingSet(numbers);

            console.log("\n--- Results ---");
            console.log(`Input Array        : [${numbers.join(", ")}]`);
            if (secondMin !== null) {
                console.log(`Second Smallest (O(N) Scan): ${secondMin}`);
                console.log(`Second Smallest (Set Sort) : ${secondMinSet}`);
            } else {
                console.log("Result: No second-smallest element found (needs at least 2 distinct values).");
            }
        }
    }

    rl.close();
});

module.exports = { findSecondSmallest, findSecondSmallestUsingSet };
