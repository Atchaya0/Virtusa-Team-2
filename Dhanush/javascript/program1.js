let a = 12;
let b = 18;

let lcm = Math.max(a, b);

while (lcm % a !== 0 || lcm % b !== 0) {
    lcm++;
}

console.log("LCM =", lcm);
