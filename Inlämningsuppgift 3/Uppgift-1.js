function Person(name, email, mobile, adress) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.adress = adress;
    this.print = function() {
        return this.adress.street;
    }
}

function Adress(street, postNr, ort) {
    this.street = street;
    this.postNr = postNr;
    this.ort = ort;
}
let adressP = new Adress("Semestervägen 14", "17760", "Järfälla");
let adressS = new Adress("Enväg 14", "17440", "Sundbyberg");

let samir = new Person("Samir", "samir@ergaibi.com", "0733718237", adressS);
let payam = new Person("Payam", "payam@eshtiagh.com", "0735435354", adressP)


console.log(payam.print());