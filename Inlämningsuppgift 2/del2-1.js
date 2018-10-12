function numbers() {
    let tal1 = prompt("Skriv ett tal");
    let tal2 = prompt("Skriv ett tal");
    alert(tal1 + " * " + tal2 + " är lika med " + (tal1 * tal2));
    //om man skriver bokstäver får man NaN
    //om man inte skriver nåt blir svaret 0
    alert(tal1 + " / " + tal2 + " är lika med " + (tal1 / tal2));
    //skriver du 1 / 0 blir svaret infinity
}