function capitalize(string) {

    let firstChar = string[0].toUpperCase();
    let rest = string.slice(1);
    return firstChar + rest;
}
let helloMsg = "hej och välkommen";
console.log(capitalize(helloMsg));

function capi(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);


}

console.log(capi(helloMsg));

let pris = 10.50;

//avrunda
console.log(Math.round(pris));
//eller
console.log(pris.toFixed());


//ceil och floor
console.log(Math.ceil(pris));
console.log(Math.floor(pris));

//max och min
console.log(Math.max(1, 6, 10, 100, 2432, 23));
console.log(Math.min(1, 6, 10, 100, 2432, 23));

function maxArray(input) {
    return Math.max(...input)
}
let enArray = [10, 20, 50, -1, 300];
console.log(maxArray(enArray));

//datum och tid
let today = new Date();



let dagensDatum = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
console.log(dagensDatum);

console.log(today.toTimeString());