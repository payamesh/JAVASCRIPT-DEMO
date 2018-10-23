function converter(input) {
    let volume = (4 * Math.PI * Math.pow(input, 3)) / 3 / 1000;

    let area = (4 * Math.pow(input, 2)) * Math.PI;
    console.log("Volymen i liter är: " + volume.toFixed(1) + "\n" + "Arean är: " + area.toFixed(1));
}
converter(10);