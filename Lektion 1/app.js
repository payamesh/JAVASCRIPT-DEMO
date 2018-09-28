let names = [
    "Payam",
    "peyman",
    "Aria",
    "Michaela",
    "blabblabkgfg"
];
let longestname = '';
for (var i = 0; i < names.length; i++) {
    if (names[i].length > longestname.length) {
        longestname = names[i];
    }

}
console.log(longestname)