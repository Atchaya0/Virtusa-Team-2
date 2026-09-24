let sentence: string = "TypeScript is very easy to learn";

let words: string[] = sentence.split(" ");
let shortest: string = words[0];

for (let word of words) {
    if (word.length < shortest.length) {
        shortest = word;
    }
}

console.log("Shortest word:", shortest);
