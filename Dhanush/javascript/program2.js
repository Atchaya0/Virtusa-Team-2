class Calculator {
    add() {
        if (arguments.length === 1) {
            return arguments[0];
        } 
        else if (arguments.length === 2) {
            return arguments[0] + arguments[1];
        } 
        else if (arguments.length === 3) {
            return arguments[0] + arguments[1] + arguments[2];
        }
    }
}

let calc = new Calculator();

console.log(calc.add(10));
console.log(calc.add(10, 20));
console.log(calc.add(10, 20, 30));
