//arimetriska operatorer i JS
let y = 5;
let x;
x = y + 2; // 7
x = y - 2; // 3
x = x + 2; // 5
x = x - 2; // 3
x = y * 2; // 10
x = x * 2; // 20
x = y / 2; // 2.5 OBS ! punkt, ej komma
x = y % 2; // 1
x = 10 % 3; // 1
x = 5 % 7;

//ökningsoperator
x = 10;
x++
x++
x = x + 2;
//eller
x += 2;
x += 5;

//minskningsoperator
x = 10;
x-- //9 - minska med 1
x = x - 2; //7 - minska med två
x -= 2; //5 - minska med två

//
x = "TEXT";
x = x / 2; //NaN
x = 2 / x; //NaN
x = x / x; //NaN
let x2;
console.log(x2 / 2); // NaN
console.log(2 / x2); // NaN


//konkatenering //concat
let firstName = "Mahmud";
let lastName = "Al Hakim";
let fullName = "Hej " + firstName + " " + lastName + " !";
console.log(fullName);

x = "1" + "2"; // 12
x = "1" + 2; //12
x = 1 + "2"; // 12
x = "1" + 2 + 3; //123 konkatenerar pga sträng i början
x = 1 + 2 + "3"; // 33   adderar 1+2 =3 därefter konkatenering
x = "1" + (2 + 3); // 15 - paranteser har prioritet
x = "1" - "2"; // -1 automatisk typomvandling eller Implicit typomvandling

x = "1" * "2"; // 2 automatisk typomvandling eller Implicit typomvandling
x = "1" / "2";

console.log(x);