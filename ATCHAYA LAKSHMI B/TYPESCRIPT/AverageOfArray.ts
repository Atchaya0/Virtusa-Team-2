let input: string = prompt("Enter array elements separated by spaces:") || "";

let arr: number[] = input.split(" ").map(Number);

let sum: number = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

let average: number = sum / arr.length;

console.log("Average =", average);
