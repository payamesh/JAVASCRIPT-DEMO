function Person(name, email, mobile, adress) {
    this.name = name;
    this.email = email;
    this.mobile = mobile; //objekt med metod som skriver ut info om egenskaper
    this.adress = adress;
    this.print = function() {
        return this.name + "\n\n" + this.adress.street + "\n" + this.adress.postNr + " " + this.adress.ort;
    }
}

function Adress(street, postNr, ort) {
    this.street = street;
    this.postNr = postNr;
    this.ort = ort;
}
let adressP = new Adress("Semestervägen 14", "17760", "Järfälla");
//Skapar ny instans av objektet Adress och anger variabler
let adressS = new Adress("Enväg 14", "17440", "Sundbyberg");

let samir = new Person("Samir Ergaibi", "samir@ergaibi.com", "0733718237", adressS);
//Skapar ny instans av objektet Person och anger variabler
let payam = new Person("Payam Eshtiagh", "payam@eshtiagh.com", "0735435354", adressP)


console.log(payam.print());