function randomDice() {
    let bigArray = new Array();

    for (let i = 0; i < 1000; i++) {
        bigArray.push(Math.floor(Math.random() * 6 + 1)) //trycker in 1000 slumpmässiga tal mellan 1-6 i en array

    }
    return bigArray;
}
let bigArray = randomDice();
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
console.log(bigArray);


function printCount(array) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] == 1) { //loopar igenom arrayen och hittar matchningar samt 
            count++ //itererar för varje match
        } else if (array[i] == 2) {
            count2++
        } else if (array[i] == 3) {
            count3++
        } else if (array[i] == 4) {
            count4++
        } else if (array[i] == 5) {
            count5++
        } else if (array[i] == 6) {
            count6++
        }
    }
    console.log("Det finns " + count + " ettor");
    console.log("Det finns " + count2 + " tvåor");
    console.log("Det finns " + count3 + " treor");
    console.log("Det finns " + count4 + " fyror");
    console.log("Det finns " + count5 + " femmor");
    console.log("Det finns " + count6 + " sexor");
}
printCount(bigArray);