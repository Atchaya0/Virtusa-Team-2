function groupWords(words) {
    const groups = new Map();

    for (const word of words) {
        if (word.length === 0) {
            continue;
        }

        const firstCharacter = word[0].toLowerCase();

        if (!groups.has(firstCharacter)) {
            groups.set(firstCharacter, []);
        }

        groups.get(firstCharacter).push(word);
    }

    return groups;
}

const input = prompt("Enter words separated by spaces:");

const words = input ? input.trim().split(/\s+/) : [];

const groupedWords = groupWords(words);

for (const [character, group] of groupedWords) {
    console.log(`${character}: ${group.join(", ")}`);
}
