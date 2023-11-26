const a = prompt("Enter a number");

if ((parseInt(a) % 2) == 0) {
    alert(a + " is an even number");
}
else if ((parseInt(a) % 2) == 1) {
    alert(a + " is an odd number");
}
else{
    alert("Please input a valid digit");
}