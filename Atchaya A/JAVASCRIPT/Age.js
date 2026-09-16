let dob = prompt("Enter your date of birth (YYYY-MM-DD):");

let birthDate = new Date(dob);
let today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

let month = today.getMonth() - birthDate.getMonth();

if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

console.log("Age:", age);