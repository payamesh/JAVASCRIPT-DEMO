function lönsamhet() {
    let årskortPris = prompt("Vad kostar ett Årskort?");
    let biljettPris = prompt("Vad kostar en biljett?");
    let antalTillfällen = prompt("Hur många gånger går du till gymmet per år?");
    let biljettUträkning = biljettPris * antalTillfällen;

    if (årskortPris < biljettUträkning) {
        alert("Det blir billigare för dig att köpa årskort. ")
    } else {
        alert("Du tjänar på att köpa biljetter \ndu betalar " + (biljettPris * antalTillfällen) + " för biljettlösningen\n Och du betalar " + årskortPris + " för årskort");
    }
}
lönsamhet();