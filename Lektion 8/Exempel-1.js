//skapa ett objekt med hjälp av en konstruktor
let mahmud = new Object();

//egenskaper
mahmud.name = "Mahmud Al Hakim";
mahmud.age = 45;

//metoder
mahmud.print = function() {
        console.log(this.name + ' är ' + this.age + ' år gammal!');
    }
    //en metod som returnerar en sträng
mahmud.info = function() {
    //return this.name + ' är ' + this.age + ' år gammal';
    return `
    ${this.name} är ${this.age} år gammal
    `;
}

//använd objektets egenskaper
console.log(mahmud.name);

//använd objektets metoder
mahmud.print();
console.log(mahmud.info());

//skapa literal

let payam = {
    name: "payam",
    age: 27,
    print: function() {
        console.log(`${this.name} är ${this.age} år gammal `);
    },
    info: function() {
        return `${this.name} är ${this.age} år gammal `
    }
}
console.log(payam.info());