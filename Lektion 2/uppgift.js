//byt bild
function changeImage() {
    let image = document.getElementById('myImage');
    if (image.src.match('../images/lighton.jpeg')) {
        image.src = "../images/lightoff.jpeg";
    } else {
        image.src = '../images/lighton.jpeg';
    }
}


//byta färg på bakgrund
var text = document.querySelector('.rubrik');
var paragraph = document.querySelector('.paragraf');

paragraph.onclick = function() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
text.onclick = function() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

//ta namn i prompt
let userbtn = document.getElementById('user-btn');
//let mainhead = document.getElementById('main-header');
userbtn.onclick = function() {
    let userInput = prompt('Skriv ditt namn');
    document.getElementById('main-header').innerHTML = ('Välkommen ' + userInput + ".");
}

//skriv ut sammanfattning av namn etc

let say_hi = document.getElementById('say_hi');



function pressMe() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    var HTML = "Välkommen " + fname + " " + lname + " !";
    document.getElementById("result").innerHTML = HTML

}
document.getElementById('say_hi').addEventListener('click', pressMe);