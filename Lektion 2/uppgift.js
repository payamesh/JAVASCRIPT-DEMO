//ta namn i prompt
let userbtn = document.getElementById('user-btn');
let mainhead = document.getElementById('main-header');
userbtn.onclick = function() {
    let userInput = prompt('Skriv ditt namn');
    mainhead.innerHTML = ('Välkommen ' + userInput + ".");
}

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