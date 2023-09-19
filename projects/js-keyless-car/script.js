const mystery = "P7seven"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
} else {
  console.log("TRY AGAIN");
}

const age = parseInt(prompt("What is your age ?"));
if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (age > 18) {
    alert("Powering On. Enjoy the ride!");
} else {
    alert("Error. Reload the page and try again !");
}
