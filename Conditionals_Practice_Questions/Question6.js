const yourMonth = prompt("Enter your current Month");

if (yourMonth =="September" || yourMonth == "October" || yourMonth == "November") {
    alert("The season is Autumn");
}
else if (yourMonth == "December" || yourMonth == "January" || yourMonth == "February"){
    alert("The season is Winter");
}
else if (yourMonth == "March" || yourMonth == "April" || yourMonth == "May") {
    alert("The season is Spring");
}
else if (yourMonth == "June" || yourMonth == "July" || yourMonth == "August") {
    alert("The season is Summer");
}
else {
    alert("Make First letter uppercase or input a valid month");
}