function beräkna() {
    let minuter = document.getElementById('minuter').value;
    let kostnadPerMinut = document.getElementById('kostnad').value;
    let totalKostnad = minuter * kostnadPerMinut;
    let rabattsats = 0.10;
    let rabatt = totalKostnad * rabattsats;


    if (totalKostnad >= 1000) {
        let findDiv = document.getElementById("fält");
        let textish = document.createElement("h1");
        textish.style.cssText = "text-align: center; color:blue;"
        node = document.createTextNode("Your cost is: " + (totalKostnad - rabatt) + "kr with 10% discount\n(ord.price: " + totalKostnad + " kr.)\nYour discount is :" + rabatt + " kr");
        textish.appendChild(node);
        findDiv.appendChild(textish);
        /*         findDiv.innerHTML = "<h1 style=\"color:green\">Your cost is: " + (totalKostnad - rabatt) + "kr with 10% discount<br/> (ord.price: " + totalKostnad + " kr.)\nYour discount is :" + rabatt + " kr </h1>"
         */
        /* alert("Ditt nya pris blir: " + kostnadMedRabatt + "kr. med 10% rabatt, (ordpris " + totalKostnad + " kr.)") */
    } else {
        let findDiv = document.getElementById("fält");

        findDiv.innerHTML = "<h1>Ditt pris blir: " + totalKostnad + " kr. </h1>";


    }

}



/* 
let minuter = prompt("Hur många minuter ringer du för i månaden?");
let kostnadPerMinut = prompt("vad kostar det att ringa per minut?");
let totalKostnad = minuter * kostnadPerMinut;
let rabattsats = 0.10;
let rabatt = totalKostnad * rabattsats;

let yourCost = (totalKostnad >= 1000) ? "Your cost is: " + (totalKostnad - rabatt) + "kr with 10% discount (ord.price: " + totalKostnad + " kr.)\nYour discount is :" + rabatt + " kr" :
    "Your cost is " + totalKostnad + "kr with 0% discount";
alert(yourCost); */