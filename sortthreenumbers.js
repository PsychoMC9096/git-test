var theBody = document.getElementsByTagName("body")[0];
var divInput = document.createElement("div")
var divOutput = document.createElement("div");
var x = 0, y = 0, z = 0, text = "";

x = prompt("What is the first number?");
y = prompt("What is the second number?");
z = prompt("What is the third number?");

alert("INPUT: " + x + ", " + y + ", " + z);
divInput.innerHTML = "INPUT: " + x + ", " + y + ", " + z;

if (x > y && x > z) {
    if (y > z) {
        alert("OUTPUT: " + x + ", " + y + ", " + z);
        text = "OUTPUT: " + x + ", " + y + ", " + z;
    } else {
        alert("OUTPUT: " + x + ", " + z + ", " + y);
        text = "OUTPUT: " + x + ", " + z + ", " + y;
    };
} else if (y > x && y > z) {
    if (x > z) {
        alert("OUTPUT: " + y + ", " + x + ", " + z);
        text = "OUTPUT: " + y + ", " + x + ", " + z;
    } else {
        alert("OUTPUT: " + y + ", " + z + ", " + x);
        text = "OUTPUT: " + y + ", " + z + ", " + x;
    };
} else if (z > x && z > y) {
    if (x > y) {
        alert("OUTPUT: " + z + ", " + x + ", " + y);
        text = "OUTPUT: " + z + ", " + x + ", " + y;
    } else {
        alert("OUTPUT: " + z + ", " + y + ", " + x);
        text = "OUTPUT: " + z + ", " + y + ", " + x;
    };
}

divOutput.innerHTML = text;
theBody.appendChild(divInput);
theBody.appendChild(divOutput);