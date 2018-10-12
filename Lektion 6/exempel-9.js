function medelvarde2(a, b) {
    return (a + b) / 2;
};
console.log(medelvarde2(2, 2));

function medelvarde3(a, b, c) {
    return (a + b + c) / 3;
};
console.log(medelvarde3(2, 2, 2));


function kostnad(minutes) {
    minutes = prompt("Hur många minuter ringer du i genomsnitt per månad?");
    kostnad = minutes * 0.70;
    alert(kostnad)
}
kostnad();