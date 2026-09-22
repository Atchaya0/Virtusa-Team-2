let n = Number(prompt("Enter a number:"));

if (Number.isInteger(n)) {
    console.log("Integer");
} else if (Number.isFinite(n)) {
    console.log("Floating-point number");
} else {
    console.log("Invalid number");
}
