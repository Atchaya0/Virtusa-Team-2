function removeSpaces(text: string): string {
    return text.replace(/\s/g, "");
}

const input: string = prompt("Enter a string:") || "";

const result: string = removeSpaces(input);

console.log("Original string:", input);
console.log("String without spaces:", result);
