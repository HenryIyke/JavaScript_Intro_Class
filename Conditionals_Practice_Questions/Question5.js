const a = parseInt(prompt("Input your grade:"));

if ( a >= 80 && a <= 100) {
    alert("You got an A");
}
else if (a >= 70 && a <= 79) {
    alert("You got a B");
}
else if (a >= 60 && a <= 69) {
    alert("You got a C");
}
else if (a >= 50 && a <= 59) {
    alert("You got a D");
}
else if (a >= 0 && a <= 49) {
    alert("You got an F");
}
else {
    alert("Please input a valid grade");
}