//skapa egna konstruktorer
//skapa en blueprint(ritning) på en helt ny grej, tex personer,bilar etc

//exempel- skapa en konstruktor som beskriver en person
//Person blir en ny typ, (prototyp)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    this.email = [];
    this.cars = [];
}

//skapa en konstruktor som beskriver en bil
function Car(regnr, fabrikat) {
    this.regnr = regnr;
    this.fabrikat = fabrikat;
}
//skapa en instans av Car = Skapa ett objekt
let c1 = new Car("ABC123", "Volvo");
let c2 = new Car("XYZ098", "Mazda");


//skapa flera objekt av Person() = skapa nya instanser
let mahmud = new Person('Mahmud', 45);
let kalle = new Person('Kalle', 10);

//mahmud har köpt c1,c2
mahmud.cars.push(c1, c2);


//mahmud och kalle blir två nya referenser till två olika objekt

//ändra mahmud's egenskaper med punktnotation
mahmud.age++;
mahmud.name = "Al Hakim";
//lägg till egenskaper
mahmud.weight = 89;

//skapa en array av ett antal objekt
let persons = [mahmud, kalle];
//visa info om det första objektet
console.log(persons[0].name);
//ändra namnet
persons[0].name = 'Mahmud';
console.log(persons[0].name);

//objekt kan innehåla arrayer
kalle.name = 'Mehdi';
mahmud.children.push(kalle);
console.log(mahmud);