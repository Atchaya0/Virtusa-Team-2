let arr: number[] = [10, 20, 30, 40, 50];
let target: number = 30;

let found: boolean = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log("Element found at index:", i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Element not found");
}
