function factorial(num) {
    if (num < 0) {
        return 0;
    } else if (num == 0) {
        return 1
    } else {

        return (num * factorial(num - 1)); //multiplicera funktionen num(7) gånger och decrement varje gång
        //alltså 
    }
}
console.log(factorial(7));