import * as readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a binary number: ", (binary: string) => {

    let decimal = 0;
    let power = 1;

    for (let i = binary.length - 1; i >= 0; i--) {

        let digit = Number(binary[i]);

        decimal = decimal + digit * power;
        power = power * 2;
    }

    console.log("Decimal value:", decimal);

    input.close();
});