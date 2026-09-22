let n = Number(prompt("Enter a number:"));

if (isNaN(n)) {
    console.log("Invalid number");
} else if (n % 1 === 0) {
    console.log("Integer");
} else {
    console.log("Floating-point number");
}
