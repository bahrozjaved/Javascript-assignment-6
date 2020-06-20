// Chapter 31-34 task 1
// var d = new Date();
// document.getElementById("demo").innerHTML = d;

// Chapter 31-34 task 2
// const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

// Chapter 31-34 task 3
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// document.getElementById("demo").innerHTML = "The current Day is : " +n;

// Chapter 31-34 task 4
// var time = new Date().getDay();
// if (time < 6) {
//     document.getElementById("demo").innerHTML = "Its is a hot and dusty day";
// } else if (time < 8) {
//     document.getElementById("demo").innerHTML = "Its Fun day";
// } else {
//     document.getElementById("demo").innerHTML = "its a bad day";
// }

// Chapter 31-34 task 5
// var d = new Date();
// document.getElementById("demo").innerHTML = d.getDate();
// if (d.getDate() <= 15) {
//     document.getElementById("demo").innerHTML = "The Fist Fifteen Days Of Month";
// } else if (d.getDate() <= 31) {
//     document.getElementById("demo").innerHTML = "The Last Fifteen Days Of Month";
// }
// Chapter 31 - 34 task 6
// var start = new Date(1997, 11, 26).getTime();
// var elapsed = new Date().getTime() - start;
// var ms = elapsed,
//     min = Math.floor((ms / 1000 / 60) << 0),
//     sec = Math.floor((ms / 1000) % 60);
// document.getElementById("demo1").innerHTML = "Elapsed minutes from 1997,11, 26 is :" + min;
// document.getElementById("demo").innerHTML = "elapsed millisecond from 1997,11,26 is : " + elapsed;

// Chapter 31 - 34 task 7
// var date = new Date();
// var hours = date.getHours();
// var minutes = date.getMinutes();

// // Check whether AM or PM 
// var newformat = hours >= 12 ? 'PM' : 'AM';

// // Find current hour in AM-PM Format 
// hours = hours % 12;

// // To display "0" as "12" 
// hours = hours ? hours : 12;
// minutes = minutes < 10 ? '0' + minutes : minutes;

// document.getElementById("demo").innerHTML = "<h1>" + "It's " + newformat + "</h1>";

// Chapter 31 - 34 task 8
// var date = new Date();
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 7, 0);
// document.write("<br>" + lastDay);

// Chapter 31 - 34 task 9
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1;
// var yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd;
// }
// if (mm < 10) {
//     mm = '0' + mm;
// }
// today = mm + '/' + dd + '/' + yyyy;
// const date1 = new Date('4/24/2020');
// const date2 = new Date(today);
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// document.getElementById("demo").innerHTML = +diffDays + " Days have Passed since 1st Ramdan 2020"

//Chapter31-34 task 10

// var date1 = new Date("Dec 05, 2015 22:50:16");
// var fmilli = date1.getTime();
// var sec = new Date("Jan 01 2015");
// var smilli = sec.getTime();
// diff = fmilli - smilli;
// var passed = Math.floor(diff / (1000 * 60));
// document.getElementById("demo").innerHTML = "Reference date will be : " + date1;
// document.getElementById("demo1").innerHTML = +passed + " seconds have passed since the beginning of 2015";


//Chapter31-34 task 11
// var currennt = new Date();
// var time = new Date();
// var extract = time.setHours(time.getHours() - 1);
// document.write("current date is : " + currennt + "</br>");
// document.write("1 hour age : it was : " + time);


//Chapter31-34 task 12
// var reff2015 = new Date("December 05, 2015 23:08:16");
// document.write('<br><br><br> Current Date :' + reff2015);
// reff2015.setFullYear(reff2015.getFullYear() - 100);
// document.write('<br>100 year(s) back, it was ' + reff2015);


//Chapter31-34 task 13

// var userAge = prompt("Enter your Age");
// var birthYear = new Date().getFullYear() - userAge;
// document.write(`Your Age is ${userAge} <br> Your birth year is ${birthYear}`);


//Chapter31-34 task 14
// var customerName = "Bahroz Javed Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var Nmonth = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var crossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${Nmonth}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>cross Amount Payable (after Due Date): <b>${crossAmount}</b><br>`)