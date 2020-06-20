//chapter 21-25 task#1 
// var firstname = prompt("Please enter your first name");
// var lastname = prompt("Please enter your last name");
// var fullname = firstname + lastname;

// if (firstname != null && lastname != null) {
//     document.getElementById("demo").innerHTML =
//         "Hello welcome to the page " + fullname;
// }

//chapter 21-25 task#2 

// var phone = prompt("Please enter your favourite phone model");
// var le = phone.length;
// if (phone != null) {
//     document.getElementById("demo").innerHTML =
//         "My Favourite phone is: " + phone;
//     document.getElementById("demo1").innerHTML =
//         "Length of string  is: " + le;
// }

//chapter 21-25 task#3

// var str = "Pakistani";
// var n = str.indexOf("n");
// document.getElementById("demo").innerHTML = "String is : " + str;
// document.getElementById("demo1").innerHTML = "Index of n is : " + n;

//chapter 21-25 task#4
// var str = "Hello world!";
// var n = str.lastIndexOf("l");
// document.getElementById("demo").innerHTML = "String is : " + str;
// document.getElementById("demo1").innerHTML = "Index of n is : " + n;

//chapter 21-25 task#5
// var var1 = "Pakistani";
// var var2 = var1.charAt(3)
// document.getElementById("demo").innerHTML = "String: " + var1;
// document.getElementById("demo1").innerHTML = "Charter a the index 3 is: " + var2;

//chapter 21-25 task#6
// var firstname = prompt("Please enter your first name");
// var lastname = prompt("Please enter your last name");
// var fullname = firstname.concat(lastname);

// if (firstname != null && lastname != null) {
//     document.getElementById("demo").innerHTML =
//         "Hello welcome to the page " + fullname;
// }

//chapter 21 - 25 task #7
// var str = "hyderabad";
// var str2 = str.replace("hyder", "Islam");
// document.getElementById("demo").innerHTML = "city : " + str;
// document.getElementById("demo1").innerHTML = "After replacement : " + str2;

//chapter 21 - 25 task #8
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var str2 = message.replace(/and/g, " & ");
// document.getElementById("demo").innerHTML = "before replacement : " + message;
// document.getElementById("demo1").innerHTML = "After replacement : " + str2;

//chapter 21 - 25 task #9
// var str1 = "472";
// var str2 = parseInt(str1);
// document.getElementById("demo").innerHTML = "the string is : " + str1;
// document.getElementById("demo1").innerHTML = "the datatype is : " + typeof(str1);
// document.getElementById("demo2").innerHTML = "the number is : " + str2;
// document.getElementById("demo3").innerHTML = "the datatype is : " + typeof(str2);

//chapter 21 - 25 task #10
// var input1 = prompt("Please enter your first name");
// var input2 = input1.toUpperCase();
// document.getElementById("demo").innerHTML = "the string is : " + input1;
// document.getElementById("demo1").innerHTML = "the uppercase is : " + input2;

//chapter 21 - 25 task #11
// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
// document.write(titleCase("javascript"));

//chapter 21 - 25 task #12
// var number = 35.36;
// var number1 = parseInt('' + (number * 100));
// var str1 = number1.toString();
// document.getElementById("demo").innerHTML = "the number is decimal is : " + number;
// document.getElementById("demo1").innerHTML = "the datatype is : " + typeof(number);
// document.getElementById("demo2").innerHTML = "the number convert float to int  is : " + number1;
// document.getElementById("demo3").innerHTML = "the datatype is : " + typeof(number1);
// document.getElementById("demo4").innerHTML = "the number convert in string  is : " + str1;
// document.getElementById("demo5").innerHTML = "the datatype is : " + typeof(str1);

//chapter 21 - 25 task #13
// var username = prompt("Enter the Username");
// for (i = 0; i <= username.length; i++) {
//     var now = username.charCodeAt(i);
//     if (now == 33 || now == 44 || now == 46 || now == 64) {
//         alert("ener a valid username");
//     }
// }

//chapter 21 - 25 task #14
// var check = prompt("Enter the Product to found in array");
// var array = ["Cake", "Applepie", "Cookie", "Chips", "Paties"]
// var a = array.indexOf(titleCase(check));
// if (a == -1) {
//     document.getElementById("demo").innerHTML ="We are sorryy "+ check + " is not found in our backery ";

// } else {
//     document.getElementById("demo").innerHTML = check + " found in the backery at counter no :" + a;
// }

// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }

//chapter 21 - 25 task #15
// var password = prompt("Enter the password");


// var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
// if (password.match(passw)) {
//     alert('Correct, try another...');
//     document.getElementById("demo").innerHTML = "the enter password is :" + password;
//     document.getElementById("demo").innerHTML = "Correct password try another one";


// } else {
//     alert('Wrong...!');
//     document.getElementById("demo").innerHTML = " Entered password is wrong try another :" + password;
//     document.getElementById("demo1").innerHTML = "Your password should contain atleast one numeric no one uppercase and one lower case and at least 6 digit long";

// }

//chapter 21 - 25 task #16
// var message = "University of karachi";
// var splitt = message.split("");
// document.getElementById("demo").innerHTML = splitt;

//chapter 21 - 25 task #17
// var st1 = prompt("Enter the string to Display");
// var res = st1.charAt(st1.length - 1);
// document.getElementById("demo").innerHTML = "Entered string is :" + st1;
// document.getElementById("demo1").innerHTML = "LAst character of entered string is :" + res;

//chapter 21 - 25 task #18
// function count(str1, str2) {
//     str1 += '';
//     str2 += '';

//     if (str2.length <= 0) {
//         return str1.length + 1;
//     }

//     subStr = str2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     return (str1.match(new RegExp(subStr, 'gi')) || []).length;
// }
// var s = "The quick brown fox jumps over the lazy dog";
// var f = "The";

// document.getElementById("demo").innerHTML = "Entered string is :" + s;

// document.getElementById("demo1").innerHTML = "The string is to be found is  :" + f;
// document.getElementById("demo2").innerHTML = "The count is: " + count(s, f);