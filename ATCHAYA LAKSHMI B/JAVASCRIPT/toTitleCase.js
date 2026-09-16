

const readline = require("readline");
function toTitleCase(str) {
    if (!str || typeof str !== "string") {
        return "";
    }
    return str.replace(/\b\w+/g, (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}
function toTitleCaseAlternative(str) {
    if (!str) return "";

    return str
        .split(" ")
        .map(word => {
            if (word.length === 0) return "";
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence/string (or press Enter for default): ", (input) => {
    if (!input || input.trim() === "") {
        console.log("\nRunning demonstration test cases:");
        const testSentences = [
            "hello WORLD from viRTUsa",
            "full stack DEVELOPMENT with JAVASCRIPT",
            "aBcD eFgH iJkL",
            "the QUICK brown FOX jumps OVER 10 lazy DOGS"
        ];

        testSentences.forEach((sentence, idx) => {
            console.log(`\nTest #${idx + 1}:`);
            console.log(`Original  : "${sentence}"`);
            console.log(`Title Case: "${toTitleCase(sentence)}"`);
        });
    } else {
        const titleCased = toTitleCase(input);
        console.log("\n--- Conversion Result ---");
        console.log(`Original String  : "${input}"`);
        console.log(`Title Cased String: "${titleCased}"`);
    }

    rl.close();
});

module.exports = { toTitleCase, toTitleCaseAlternative };
