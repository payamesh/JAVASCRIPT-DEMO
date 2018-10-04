//Arbeta med arrayer

//skapa en tom array
let cars1 = [];

//skapa en array som innehåller data
let cars2 = ["Volvo", "Saab", "BMW"];
//detta är en array-literal ^

//skapa en array med en constructor
let cars3 = new Array(1, 2, 3);
let cars4 = new Array(); //en tom array

//att komma åt data
console.log(cars2[0]);
console.log(cars2[1]);
console.log(cars2[2]);
console.log(cars2);

//hämta ett element och spara i en ny variabel
let bil1 = cars2[0];
console.log(bil1);

//ändra ett element
cars2[0] = "Mazda";
console.log(cars2);

//en array i javascript kan hålla olika typer
let person = ["mahmud", "al hakim", 45, true]; // namn, efternamn, ålder, gift/ogift

//hitta antal element
console.log(person.length);

//sortera en array
console.log(cars2);
cars2.sort().reverse();
console.log(cars2);

//uppgift - 1

let kurser = ["Javascript 1", "Frontend intro och metodik", "HTML/CSS", "Javascript 2", "Javascript 3"];
console.log("Kurser i år: " + kurser.sort(), '\n' + "  Antal kurser: " + kurser.length);

//uppgift 2
//räkna ut hur många element som finns i arrayen och -1 för att få rätt index
console.log(kurser.sort()[kurser.length - 1]);
//slice visar specifika element i en array, -1 i index blir sista elementet, 0,3 tar ut dem 2 första 
console.log(kurser.sort().slice(-1));
// tar bort sista elementet från en array
console.log(kurser.sort().pop());
console.log(kurser.sort().push("Javascript 3"));
console.log(kurser);

console.log("----------------------------");
//arbeta med stack

let stack = [];
stack.push("Javascript 1"); //lägger till ett element sist i arrayen
stack.push("Javascript 2"); //lägger till ett element sist i arrayen
stack.push("HTML/CSS"); //lägger till ett element sist i arrayen
console.log(stack);

//ta bort element
stack.pop(); //tar bort sista elementet
let kurs = stack.pop(); //lagrar sista elementet i variabeln kurs innan borttagning
console.log(stack);

//mer om array konstruktorn
let test1 = new Array(1973, 2008, 2018);
console.log(test1);
console.log(test1.length);

//
let test2 = new Array('1973');
test2.push('2008');
test2.push('2018');
console.log(test2);