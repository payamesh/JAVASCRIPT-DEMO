//Arbeta med primitiva typer(datatyper)

//string
let firstName = "Mahmud ";
let lastName = 'Al Hakim';

console.log(firstName + lastName);
console.log(`i love you js`); //es6 template strings

//number
let age = 45;
const PI = 3.14159;
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);

//boolean (antingen true eller false)
let again = false;
if (again) {
    console.log("sant");
} else {
    console.log("falskt");
}
//undefined
let name;
console.log(name); //svar: undefined

console.log(mobile);
var mobile;
mobile = "074-312314";

//console.log(adress); //FEL
let adress = "hemfridsvägen 17";

//null
let nothing = "something";
nothing = "";
console.log(nothing);
nothing = null;
console.log(nothing);

//typeof
console.log(typeof firstName, typeof age, typeof nothing, typeof again, typeof name);

let x = 10;
let y = 20;

function count(a, b) {
    return a + b
}
console.log(count(y, x));



let cars = new Array(2);
cars[cars.length] = "Volvo";
console.log(cars);