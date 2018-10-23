//arbeta med inbyggda globala JS-objekt

//objektet string

let firstname = "Payam";

let antal = firstname.length;
console.log(antal);

//konvertera till små bokstäver
firstname = firstname.toLowerCase();
console.log(firstname);

//konkatenering
let lastName = "Eshtiagh";
let fullname = firstname.concat(" ", lastName);
let space = fullname.indexOf(" ");
console.log(space);
console.log(fullname);
console.log(fullname.substring(space + 1));
console.log(fullname.substr(6, 5));
console.log(fullname[fullname.length - 1]);

fullname = "    Payam     Eshtiagh    ";
console.log(fullname);
fullname = fullname.trim().replace(/ +/g, ' '); //RegExp

console.log(fullname.length);

//escape tecken
// \n - new line
// \" för att visa "
// \' för att visa '
// \t visar en tab

console.log("rad-\n-brytning");
console.log("\"ok\" ");
console.log('\'ok\' ');
console.log("namn\tEpost");
console.log("payam\tpayam@gmail.com");