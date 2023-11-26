const userDay = prompt("Enter the day of the week");
const lowerCaseDay = userDay.toLowerCase();

if (lowerCaseDay === 'saturday' || lowerCaseDay === 'sunday') {
    alert(lowerCaseDay + " is a weekend");
}
else if (lowerCaseDay === 'monday' || lowerCaseDay === 'tuesday' || lowerCaseDay === 'wednesday' || lowerCaseDay === 'thursday' || lowerCaseDay === 'friday'){
    alert(lowerCaseDay + " is a working day");
}
else {
    alert("Input a valid day of the week");
}