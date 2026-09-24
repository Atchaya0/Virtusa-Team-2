function calculateAge(dob) {
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

let dob = "2004-08-15";

console.log("Date of Birth:", dob);
console.log("Age:", calculateAge(dob));
