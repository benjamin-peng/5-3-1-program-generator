var button = document.getElementById("generate");
let boxes = Array.from(document.getElementsByClassName("box"));
let maxes = Array.from(document.getElementsByClassName("max"));

button.addEventListener("click", calculate);

function calculate() {
    var max = new Array(4);
    for (var i = 0; i < 4; i++) {
        
        if (!Number.isInteger(parseInt(maxes[i].value))) {
            alert("enter an integer!");
            return;
        }
        
        max[i] = 0.9 * maxes[i].value; /*"Wendler Max," i.e. 90% of true ORM*/
    }
    
    for (var i = 0; i < 4; i++) {
        boxes[6 + i].innerText = round(0.65 * max[i]) + "x5";
        boxes[11 + i].innerText = round(0.75 * max[i]) + "x5";
        boxes[16 + i].innerText = round(0.85 * max[i]) + "x5+";
        boxes[26 + i].innerText = round(0.70 * max[i]) + "x3";
        boxes[31 + i].innerText = round(0.80 * max[i]) + "x3";
        boxes[36 + i].innerText = round(0.90 * max[i]) + "x3+";
        boxes[46 + i].innerText = round(0.75 * max[i]) + "x5";
        boxes[51 + i].innerText = round(0.85 * max[i]) + "x3";
        boxes[56 + i].innerText = round(0.95 * max[i]) + "x1+";
    }
}

function round(x) {
    return Math.ceil(x / 5) * 5;
}

