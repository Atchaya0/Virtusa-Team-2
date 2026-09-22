let input = prompt("Enter array elements separated by spaces:");
let arr = input.split(" ").map(Number);

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } 
    else if (arr[i] > secondLargest && arr[i] != largest) {
        secondLargest = arr[i];
    }
}

console.log("Second largest =", secondLargest);
