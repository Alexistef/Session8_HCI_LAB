let button = document.getElementById("changeColorBtn");
let slider = document.getElementById("slider");

let color = 0;

button.addEventListener("click", function() {
    color = Math.floor(Math.random() * 360);
    document.body.style.backgroundColor = "hsl("+color+", 100%, 50%)";
    slider.value = color;
});

slider.addEventListener("input", function() {
    let new_color = (color + Number(slider.value)+360) % 360;
    document.body.style.backgroundColor = "hsl("+new_color+", 100%, 50%)";
});