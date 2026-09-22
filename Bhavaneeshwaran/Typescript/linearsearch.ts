function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const input: string = prompt("Enter numbers separated by spaces:") || "";
const targetInput: string = prompt("Enter the number to search:") || "";

const numbers: number[] = input
    .split(" ")
    .map(Number);

const target: number = Number(targetInput);

const index: number = linearSearch(numbers, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
