function reverseString(text) {
    return text
        .split("")
        .reverse()
        .join("");
}

const input = prompt("Enter a string:") || "";

const reversed = reverseString(input);

console.log("Original string:", input);
console.log("Reversed string:", reversed);
