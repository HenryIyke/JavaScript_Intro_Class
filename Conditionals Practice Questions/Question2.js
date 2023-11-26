const yourAge = prompt("Enter your age: ");

const myAge = 27;

if (myAge > parseInt(yourAge)){
    var ageDifference = myAge - parseInt(yourAge);
    alert("I am " + ageDifference + " year(s) older than you");
}

    else if (myAge < parseInt(yourAge)) {
        var ageDifference = parseInt(yourAge) - myAge;
        alert("You are " + ageDifference + " year(s) older than me");
    }

    else if (myAge == parseInt(yourAge)) {
        alert("We are the same age.");
    }
    else {
        alert("Please input a valid age");
    }