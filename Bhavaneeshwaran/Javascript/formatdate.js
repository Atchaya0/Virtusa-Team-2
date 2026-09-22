function formatDate(date) {
    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

const input = prompt("Enter date (YYYY-MM-DD):");

const date = new Date(input);

if (isNaN(date.getTime())) {
    console.log("Invalid date");
} else {
    console.log("Formatted date:", formatDate(date));
}
