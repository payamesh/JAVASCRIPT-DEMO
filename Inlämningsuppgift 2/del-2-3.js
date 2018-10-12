function toCelsius() {
    let fahrenheit = prompt("Skriv in grader i Fahrenheit")
    let result = (5 / 9) * (fahrenheit - 32);

    alert("det är " + result.toFixed(1) + " grader i celsius");
}
toCelsius();