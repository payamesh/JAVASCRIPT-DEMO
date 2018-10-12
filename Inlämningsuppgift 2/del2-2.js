function count() {
    bas = prompt("Skriv in basen");
    hojd = prompt("Skriv in höjden");
    /* arean = bas * hojd;
    omkretsen = 2 * (bas + hojd);
    alert("arean är : " + arean + " och omkretsen är " + omkretsen); */

}
count();

function area(a, b) {
    return alert("arean är " + a * b);
}
area(bas, hojd);

function omkrets(a, b) {
    return alert("omkretsen är " + (a * 2 + b * 2));
}
omkrets(bas, hojd);