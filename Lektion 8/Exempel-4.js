//några användbara metoder i objektet window

//1. prompt (inmatningsfält) och alert (popup)
let person = prompt("Vad heter du?");
//alert("hej" + person);

//2. setTimeout

function helloPopup() {
    alert("hej" + person);

}
setTimeout(helloPopup, 3000);

//3. setinterval repeterar en funktion efter satt intervall
function helloConsole() { console.log(person); }
setInterval(helloConsole, 1000);