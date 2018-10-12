let car = {};
let kalle = {};


let mahmud = {
    //egenskaper
    name: 'Mahmud Al Hakim',
    age: 45,
    weight: 90,
    isMarried: true,
    children: [],
    //metod
    printInfo: function() {
        console.log(this.name + " är " + this.age + ' år gammal!');
    }
};
mahmud.printInfo();
console.log(mahmud);

let mehdi = {
    name: 'Mehdi Al Hakim',
    age: 24,
    weight: 85,
    isMarried: false,
    children: []
}


let x = { name: 'michaela' };
let y = x;
console.log(x);
console.log(y);
x.name = "Payam";
console.log(x);
console.log(y);

let obj1 = { a: 1, b: 2 };
let copy1 = Object.assign({}, obj1);
let copy2 = Object.assign({}, obj1);
console.log(copy2);

let kurs_2 = {
    kursnamn: "Javascript 1",
    lärare: "Mahmud Al Hakim",
    skola: "Nackademin",
    antalVeckor: 6,
    period: 1
};

//skapa 3 objekt olika bilar
let car1 = {
    regNr: "abc123",
    fabrikat: "Porsche",
    modell: "panamera",
    modelYear: 2017,
    automat: true,
    milTal: 2100,
    fuel: "gasoline"
};

let car2 = {
    regNr: "def123",
    fabrikat: "fiat",
    modell: "punto",
    modelYear: 1999,
    automat: false,
    milTal: 18000,
    fuel: "gasoline"
};
let car3 = {
    regNr: "xyz23",
    fabrikat: "Volkswagen",
    modell: "passat",
    modelYear: 2012,
    automat: true,
    milTal: 8000,
    fuel: "ethanol"
};

car3 = [car2, car2 = car3][0];
console.log(car2);



function importantValues() {
    // Return 3 values in an array.
    return [1, 2, "cat"];
}

var result = importantValues();
console.log(result[0] + "; ");
console.log(result[1] + "; ");
console.log(result[2] + "; ");


function aidj(x, y) {
    let multi = x * y;
    let add = x + y;
    return [multi, add]
}
let answers = aidj(2, 4);
console.log(answers[0]);
console.log(answers[1]);
/* 
function returnMultiple(a,b){
    
}
returnMultiple(100,200)

 */