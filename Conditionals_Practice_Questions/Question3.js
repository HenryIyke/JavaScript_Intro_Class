let a = prompt("Input your first value");
let b = prompt("Input your second value");

if (a > b){
    alert(a + " is greater than " + b);
}
    else if (a < b) {
        alert(a + " is less than " + b)
    }
    else if (a == b) {
        alert(a + " is equal to " + b);
    }
    else {
        alert("Give a valid number");
    }