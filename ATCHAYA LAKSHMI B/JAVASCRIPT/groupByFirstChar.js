

const readline = require("readline");


function groupWordsByFirstChar(words) {
    const wordMap = new Map();

    for (const rawWord of words) {
        const word = rawWord.trim();
        if (word.length === 0) continue;

        const firstChar = word[0].toUpperCase();

        if (!wordMap.has(firstChar)) {
            wordMap.set(firstChar, []);
        }

        wordMap.get(firstChar).push(word);
    }

    return wordMap;
}
function printGroupedMap(map) {
    console.log("\n--- Grouped Words Map ---");
    // Sort keys alphabetically for clean display
    const sortedKeys = Array.from(map.keys()).sort();

    for (const key of sortedKeys) {
        const list = map.get(key);
        console.log(`'${key}' (${list.length} words): [ ${list.map(w => `"${w}"`).join(", ")} ]`);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter words separated by spaces (or press Enter for default): ", (input) => {
    let words;

    if (!input || input.trim() === "") {
        console.log("\nUsing default list of words:");
        words = [
            "apple", "banana", "avocado", "blueberry", "cherry",
            "date", "apricot", "cranberry", "fig", "grape", "dragonfruit"
        ];
        console.log("Input: [" + words.map(w => `"${w}"`).join(", ") + "]");
    } else {
        words = input.trim().split(/\s+/);
    }

    const groupedMap = groupWordsByFirstChar(words);
    printGroupedMap(groupedMap);

    rl.close();
});

module.exports = { groupWordsByFirstChar };
