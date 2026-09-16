let first = [1, 2, 3, 4, 5];
let second = [3, 4, 5, 6, 7];

let common = [];

for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i]) && !common.includes(first[i])) {
        common.push(first[i]);
    }
}

console.log("Common elements:", common);