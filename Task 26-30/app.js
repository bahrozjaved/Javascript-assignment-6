// chapter 26-30 Task 1
// var number = prompt("enter the no");
// if (Math.sign(number) == 1) {
//     document.getElementById("demo").innerHTML = "Enter number is: " + number;
//     document.getElementById("demo1").innerHTML = "Rounded no is : " + Math.round(number);
//     document.getElementById("demo2").innerHTML = "floor  value is: " + Math.floor(number);
//     document.getElementById("demo3").innerHTML = "ceil value is : " + Math.ceil(number);
// } else if (Math.sign(number) == 0) {
//     alert("enter the number first");
// } else {
//     alert("enter the positive number");
// }
// chapter 26-30 Task 2
// var number = prompt("enter the no");
// if (Math.sign(number) == -1) {
//     document.getElementById("demo").innerHTML = "Enter number is: " + number;
//     document.getElementById("demo1").innerHTML = "Rounded no is : " + Math.round(number);
//     document.getElementById("demo2").innerHTML = "floor  value is: " + Math.floor(number);
//     document.getElementById("demo3").innerHTML = "ceil value is : " + Math.ceil(number);
// } else if (Math.sign(number) == 0) {
//     alert("enter the number first");
// } else {
//     alert("enter the negative number");
// }
// chapter 26-30 Task 3

// var number = prompt("Enter the number to be Displayed");
// document.getElementById("demo").innerHTML = "the absolute value of " + number + "is : " + Math.abs(number);

// chapter 26-30 Task 4

// var diceRoll = Math.floor(Math.random() * 6) + 1;
// document.getElementById("demo").innerHTML = "the dice rolled  value is " + diceRoll;

// chapter 26-30 Task 5
// var n = Number(prompt("How many times do you want to flip the coin?")); // Gets the number of times to flip the coin.
// var heads = 0,
//     tails = 0;
// for (var i = 0; i < n; i++) {

//     if (Math.random() < 0.50) {
//         heads++;
//     } else {
//         tails++;
//     }
//     document.getElementById("demo").innerHTML =
//         "<table>" +
//         "<th>Heads</th><th>Tails</th><tr>" +
//         "<td>" + heads + "</td><td>" + tails + "</td></tr>" +
//         "</table>";
// }
// chapter 26-30 Task 6
// document.getElementById("demo").innerHTML = "Random number between 1 and 100 is : " + Math.floor(Math.random() * 100);

//chapter 26-30 Task 7

// var weight = prompt("Enter the weight ");
// if (Math.sign(weight) == 1) {

//     document.getElementById("demo").innerHTML = "the weight of the user is " + weight + " kilograms.";
// } else if (Math.sign(weight) == 0) {
//     alert("enter the weight first");
// } else {
//     alert("weight should be in positive number only");
// }


//chapter 26-30 Task 8
// var diceRoll = Math.floor(Math.random() * 10) + 1;
// var check = prompt("Enter the number to check ");
// if (check >= 11) { alert("The number should not be greater then 10"); } else if (check <= 10) {
//     if (check == diceRoll) {
//         document.getElementById("demo").innerHTML = "<h1>" + "congratulation you won the match" + "</h1>";
//     } else {

//         document.getElementById("demo").innerHTML = "<h1>" + "Please try again better luck next time" + "</h1>";
//     }
// }