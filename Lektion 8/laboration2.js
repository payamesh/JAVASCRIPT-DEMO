let favoritRecept = [];

function LiteRecept(titel, bruksanvisning, ingrediens) {
    this.titel = titel;
    this.bruksanvisning = bruksanvisning;
    this.ingrediens = ingrediens;
}

let tacos = new LiteRecept("Tacos", "Koka köttfärs, hacka grönsaker, blanda o ät", ["Köttfärs", "gurka", "tomat", "majs"]);
let thaiMat = new LiteRecept("Thaimat", "Ring till thairestuangen och beställ", ["kontokort", "telefon"]);

console.log(thaiMat);