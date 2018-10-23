//if-satser

/* 
function congratulate() {
    console.log("Congratulations, you have passed the test");
}

let score = 42;
if (score >= 50) {
    congratulate();
} else {
    console.log("Your score is below 50, please try again");

    while (score < 50) {
        score++
        console.log("Your score is now: " + score)

        if (score == 50) {
            congratulate();
        }
    }


} */


let dag = new Date().getDay();
console.log(dag);

switch (dag) {
    case 0:
        dag = "Söndag"
        break;
    case 1:
        dag = "Måndag"
        break;
    case 2:
        dag = "Tisdag"
        break;
    case 3:
        dag = "Onsdag"
        break;
    case 4:
        dag = "Torsdag"
        break;
    case 5:
        dag = "Fredag"
        break;
    case 6:
        dag = "Lördag"
        break;

}
let tid = new Date().getHours();
console.log(tid)
if (dag === "Måndag") {
    console.log("Väldigt lång tid kvar till helg, det är bara " + dag)


} else if (dag === "Onsdag") {
    console.log("Halvvägs till  helg, kämpa på")
} else if (dag === "Fredag") {
    console.log("Snart helg,")


}
if (tid > 15) {
    console.log("Då är det dags att dra hem snart")
} else if (tid < 15) {
    console.log("Klockan är bara " + tid + ". Du får sluta titta på klockan så mycket.")
}


//Ternary-operator
function getFee(isMember) {
    return isMember ? "20kr" : "100kr";
}
console.log(getFee(true));

function getFee_v2(isMember) {
    if (isMember) {
        return "20kr";
    } else {
        return "100kr";
    }
}
console.log(getFee_v2(false));