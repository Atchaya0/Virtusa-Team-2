import * as readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter first string: ", (first: string) => {
    input.question("Enter second string: ", (second: string) => {

        first = first.toLowerCase().replace(/\s/g, "");
        second = second.toLowerCase().replace(/\s/g, "");

        let a = first.split("").sort().join("");
        let b = second.split("").sort().join("");

        if (a === b) {
            console.log("The strings are anagrams");
        } else {
            console.log("The strings are not anagrams");
        }

        input.close();
    });
});