const userAge = prompt("Enter Your Age");

const mainAge = 18; //Reference age

if (parseInt(userAge) >= mainAge){  //Check if age is old enough
    alert("You are old enough to drive");
}
    else if (parseInt(userAge) < mainAge){ //check if age is too young
        const a = (mainAge - parseInt(userAge));
        alert("You are left with " + a + " years to drive");
    }

    else{ //check if an invalid input was given, like special characters and symbols
        alert("Please input a number");
    }