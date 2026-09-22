let input = prompt("Enter words separated by spaces:");
let words = input.split(" ");

let map = new Map();

for (let word of words) {
    let first = word[0];

    if (!map.has(first)) {
        map.set(first, []);
    }

    map.get(first).push(word);
}

console.log(map);
