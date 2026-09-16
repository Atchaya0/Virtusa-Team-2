/**
 * Question 1: Create a program to group words by their first character using a Map.
 * 
 * Logic:
 * 1. Initialize an empty JavaScript Map (new Map()).
 * 2. Iterate through each word in the list.
 * 3. Extract the first character (normalized to uppercase for consistent grouping).
 * 4. Check if the Map already has the key:
 *    - If not, set key with an empty array: map.set(key, []).
 * 5. Push the word into the array associated with that key.
 */

const readline = require("readline");

/**
 * Groups an array of words by their first character.
 * @param {string[]} words - Array of words to group
 * @returns {Map<string, string[]>} Map where key is first character, value is array of words
 */
function groupWordsByFirstChar(words) {
    const wordMap = new Map();

    for (const rawWord of words) {
        const word = rawWord.trim();
        if (word.length === 0) continue;

        // Extract first character and normalize to uppercase
        const firstChar = word[0].toUpperCase();

        if (!wordMap.has(firstChar)) {
            wordMap.set(firstChar, []);
        }

        wordMap.get(firstChar).push(word);
    }

    return wordMap;
}

/**
 * Pretty prints the Map content.
 * @param {Map<string, string[]>} map 
 */
function printGroupedMap(map) {
    console.log("\n--- Grouped Words Map ---");
    // Sort keys alphabetically for clean display
    const sortedKeys = Array.from(map.keys()).sort();

    for (const key of sortedKeys) {
        const list = map.get(key);
        console.log(`'${key}' (${list.length} words): [ ${list.map(w => `"${w}"`).join(", ")} ]`);
    }
}

// Interactive terminal CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=========================================");
console.log("    GROUP WORDS BY FIRST CHAR (JS MAP)   ");
console.log("=========================================");

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
