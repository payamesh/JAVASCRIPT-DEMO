let myArr = ['Harry potter', "Sagan om ringen", "Dragonball Z", "Pippi Långstrump"];
console.log(myArr[0]); //skriv ut första
console.log(myArr[myArr.length - 1]); // skriv ut sista
console.log(myArr.sort()); //sorterad ordning

console.log(myArr.length); //antal böcker

var i;

function helloWorld(x) {
    for (i = 0; x > i; i++) {
        console.log("Hello World");
    }
}
helloWorld(5);

function counter(a, b, c) {
    return a + b + c
}
console.log(counter(5, 6, 1));

function medelVärde(a, b, c) {
    return (a + b + c) / 3;

}
console.log(medelVärde(10, 15, 20));
/* 
function f1(x, y) {
    return x * y;
}

function f2(a, b, c) {
    return f1(a, b) + c;
}
let result = f2(2, 3, 4);
console.log(result); */

function f1(x, y) {
    return x * y;
}

function f2(a, b) {
    return a / b;
}
let result = f2(f1(3, 2), 2);
console.log(result);


let x = 10;
let y = 15;

function swapper(x, y) {
    let t = x;
    x = y;
    y = t;
    return [x, y]
}
console.log(swapper(x, y));

let minDator = {
    processor: "2,4ghz",
    ramMinne: "16gb",
    tillverkare: "Skapat själv",
    operativsystem: "Windows"
}
console.log(minDator.tillverkare)


let Car = {
    name: "Tesla",
    model: "X",
    weight: "1250 kg",
    color: "Black",
    speed: 0,
    start: function() {
        console.log("You have started your car.")
    },
    gas: function() {
        this.speed += 20;
        console.log("Car is now driving at " + this.speed + " km/h.")
    },
    break: function() {
        this.speed -= 20;
        console.log("Car is slowing down to " + this.speed + " km/h.")

    },
    stop: function() {
        this.speed = 0;
        console.log("Car has now stopped. ")
    }
}

Car.start();
Car.gas();
Car.gas();
Car.gas();
Car.gas();
Car.gas();
Car.break();
Car.break();
Car.break();
Car.break();
Car.stop();
console.log(Car.speed);