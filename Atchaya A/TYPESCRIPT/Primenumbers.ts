import * as readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter starting number: ", (startInput: string) => {

    input.question("Enter ending number: ", (endInput: string) => {

        let start = Number(startInput);
        let end = Number(endInput);

        console.log("Prime numbers:");

        for (let num = start; num <= end; num++) {

            if (num < 2) {
                continue;
            }

            let prime = true;

            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) {
                    prime = false;
                    break;
                }
            }

            if (prime) {
                console.log(num);
            }
        }

        input.close();
    });
});