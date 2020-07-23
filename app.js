// CHAPTER#01 ("ALERT")

//1.Write a script to greet your website visitor using JS alert box.
//var greet=prompt("enter your greet");
//alert(greet);

//2.Write a script to display following message on your web page:
//alert('Erorr! Please enter valid password');

//3. Write a script to display following message on your web page: (Hint : Use line break)
//alert('Welcome On JS Land.... \n Happy Coding!');

//4. Write a script to display following messages in sequence:
//alert('Welcome On JS Land...');

//5. Generate the following message through browser’s developer console:
//alert('Hello... I can run JS through  my web brower's console.')

//6. Make use of alerts in your new/existing HTML & CSS project:
//alert();

//7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//a. Head b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML) d. Body (after your page’s HTML)
//<html>
   // <head>
   //     <script>
//
  //      </script>
  //  </head>
  //  <script>
//
 //   </script>
 //   <body>
  //      <script>
//
       // </script>
   // </body>
   // <script>
//
 //   </script>
//</html>
       // CHAPTER#02 ("VARIABLES FOR STRINGS")

// 1. Declare a variable called username.
//var a = "username";
//alert(a);

//2.Declare a variable called myName & assign to it a string that represents your Full Name.
//var myName="YASIR SHAKEEL";
//alert('YASIR SHAKEEL');

//3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
//var a="titled message";
//var b="Hello World";
//var c=a+ "  " +b;
//alert(c);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
//var a="Jhone Doe";
//alert(a);
//var b="15 years old";
//alert(b);
//var c="Certified Mobile Application Development";
//alert(c);

//5. Write a script to display the following alert using one JS variable:
//alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
//var a="my email address id is  ";
//var b="example@example.com";
//var c=a+b;
//alert(c);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
//var book="A smarter way to learn JavaScript";
//alert("I am trying to learn from the book" + book);
 
//8. Write a script to display this in browser through JS:
//document.write('Yah! I can write HTML content through JavaScript');

//9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
//var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
//alert(design)

//    CHAPTER#03 "VARIABLES FOR NUMBERS"

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
//var age="22";
// alert("I am " + age + " years old.");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
//var visit="You have visited this site 14 times"
//for( x=1; x<=14; x++){ alert(visit)}

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
//var birthYear="My birth year is 1996";
//document.write(birthYear);

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
//document.write('Jhone Doe ordered 5T-shrit(s) on XYZclothing store');
//var visitorName = "Yasir Shakeel";
// var productTitle = "T-Shirt";
// var productQuantity = 5;
// document.write(visitorName +" ordered " + productQuantity + " " + productTitle + "(s) on XYZ Clothing store");



// CHAPTER#04 "VARIABLE NAMES: LEGAL & ILLEGAL"

//1. Declare 3 variables in one statement.
//var a,b,c;

//2. Declare 5 legal & 5 illegal variable names.
//LEGAl variables:
//var userName;
//var _userName;
//var _userName123;
//var a1;
//var username123;
//ILLEGAL variables:
//var 1user;
//var #userName;
//var @user123;
//var &rose;
//var 'girl;

//3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________ ..
//document.write('<h1> " Rules for naming JS variables"\n  \n Variable names can only contain _names_____, __$____, ____-___ and __1stvaribles____. For example $my_1stVariable \n \n Variables must begin with a __$____, ___-___ or _names____. For example $name, _name or name \n \n Variable names are case ___sensetive______ \n \n Variable names should not be JS _keywords________ ')

// CHAPTER#05 "MATH EXPRESSIONS"

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//var val1 = +prompt("For Addition", "Enter First Value: ");
// var val2 = +prompt("For Addition", "Enter Second Value: " );
// var val = val1 + val2;
// document.write("<br> Sum of " + val1 + " and " + val2 + " is " + val);

//2. Repeat task1 for subtraction, multiplication, division & modulus.
//Subtraction,
//var x=3;
//var y=5;
//var z=y-x;
//document.write('The sub 5 and 3 is' + ' ' + z);
//Multiplication,
//var a=5;
//var b=3;
//var c=a*b;
//document.write('The multiple 5 and 3 is' + ' ' + c);
//Division,
//var x=6;
//var y=2;
// var z=x/y;
//document.write('The division 6 and 2 is' + ' ' + z);
//Modulus,
//var a=9;
//var b=3;
//var c=a%b;
//document.write('The modulus 9 and 3 is' + ' ' + c);

//3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. 
//var num;
// document.write("Value after variable declaration is: " +num);
// num = 5;
// document.write("<br>Initial value: " + num);
// num = ++num;
// document.write("<br>Value after increment is: " + num);
// num = num + 7;
// document.write("<br>Value after addition is: " + num);
// num = --num;
// document.write("<br>Value after decrement is: " + num);
// num = num % 3;
// document.write("<br>The remainder is : " + num);



//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output.
//var a = 600 ;
//var b=5;
//var c=a*b;
//document.write('Total cost to buy 5 tickets is' + ' ' + c +'PKR');

//5. Write a script to display multiplication table of any number in your browser.
// var num = +prompt("Enter a number: ","For Table");
// var i;
// document.write("Table of " + num);
// document.write("<br>");
// for( i = 1 ; i <= 10; i++){
//     document.write( num + " x " + i + " = " + num*i);
//     document.write("<br>");
// }

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 
//var tc = +prompt("Enter Temperature(Celsius):");
// var tf = (tc *(9/5)) + 32;
// document.write(tc + "(Celsius) to " + tf + "(Fahrenheit) Temperature.");
// document.write("<br>");
// var tf = +prompt("Enter Temperature(Fahrenheit):");
// var tc = (tf - 32) * (5/9);
// document.write(tf + "(Fahrenheit) to " + tc + "(Celsius) Temperature.");

//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
//var q1 = +prompt("Enter Quantity for item 1 (price:650 PKR):");
// var q2 = +prompt("Enter Quantity for item 2 (price:100 PKR):");
// var p1 = 650;
// var p2 = 100;
// var t1 = p1 * q1;
// var t2 = p2 * q2;
//var s = 100;
// var t = t1 + t2 + s;
// document.write("<h2>Shopping Cart</h2>");
// document.write("Price of Item 1 is " + p1 + " PKR");
// document.write("<br>Quantity of Item 1 is " + q1);
// document.write("<br>Price of Item 2 is " + p2 + " PKR");
// document.write("<br>Quantity of Item 2 is " + q2);
// document.write("<br>Shipping Charges " + s + " PKR");
// document.write("<br>Total Cost of your order is " + t + " PRK");

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
// var totalMarks = +prompt("Enter Total Marks: ");
// var obtainedMarks = +prompt("Enter Obtained Marks: ");
// var per = (obtainedMarks/totalMarks)*100;
// document.write("<h2>Mark Sheet</h2>");
// document.write("Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + obtainedMarks);
// document.write("<br>Percentage: " + per + "%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// var dollars = +prompt("Enter Amount (Dollar): ");
// var riyals = +prompt("Enter Amount (Riyal): ");
// var amount = dollars*104.80 + riyals*25;
// document.write("<h2>Currency in PKR</h2>");
// document.write("Total Currency in PKR: " + amount);

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
// var number = +prompt("Enter any number: ");
// var result = ((number + 5)*10)/2;
// document.write("Result: " + result);

//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”.
//  var currentYear = +prompt("Enter Current Year: ");
// var birthYear = +prompt("Enter Birth Year: ");
// var age = currentYear - birthYear;
// document.write("<h2>Age Calculator</h2>");
// document.write("Current Year: " + currentYear);
// document.write("<br>Birth Year: " + birthYear);
// document.write("<br>Your Age is: " + age);

//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// var radius = +prompt("Enter the value of radius:");
// var circumference = 2*3.142*radius;
// var area = 3.142*radius*radius;
// document.write("<h2>The Geometrizer</h2>");
// document.write("<br>Radius of a circle: " + radius);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// var snacks = prompt("Enter your favourite Snacks:");
// var currentAge = +prompt("Enter your current age:");
// var maximumAge = +prompt("Enter your maximum age(estimated):");
// var snacksAmount = +prompt("Enter your estimated amount per day (as a number):");
// var requiredSnacks = ((maximumAge - currentAge)*365)*snacksAmount;
// document.write("<h2>The Lifetime Supply Calculator</h2>");
// document.write("<br>Favourite Snack: " + snacks);
// document.write("<br>Current Age: " + currentAge);
// document.write("<br>Estimated Maximum Age : " + maximumAge);
// document.write("<br>Amount of Snacks per day: " + snacksAmount);
// document.write("<br>You will need " + requiredSnacks + " " + snacks + " to last you until the ripe old age of " + maximumAge);

//   CHAPTERS#6-9

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
//var x=10;
//var y=++a + a++ + --a + a--;
//alert(y);

//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
//var a=2;
//var b=1;
//var c=--a - --b + ++b + b--;
//alert(c);

//3. Write a program that takes input a name from user & greet the user.
//var a=prompt("Enter your name", "Your name is:");
//var b=prompt("Enter your greet", "Your greet is:");
//alert(a,b);

//4.Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var num = +prompt("Enter a number: ","For Table");
// var i;
// if(num === 0){
//     document.write("Table of 5");
//     document.write("<br>");
//     for( i = 1 ; i <= 10; i++){
//         document.write( 5 + " x " + i + " = " + 5*i);
//         document.write("<br>");
//     }
// }
// else{
//     document.write("Table of " + num);
//     document.write("<br>");
//     for( i = 1 ; i <= 10; i++){
//         document.write( num + " x " + i + " = " + num*i);
//         document.write("<br>");
//     }
// }

//5.Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 
//d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var subject1 = prompt("Enter First Subject Name: ");
// var subject2 = prompt("Enter Second Subject Name: ");
// var subject3 = prompt("Enter Third Subject Name: ");
// var maxMarks = 100;
// var totalMarks = maxMarks*3;
// var obtainedMarks1 = +prompt("Enter " + subject1 + " Marks:");
// var obtainedMarks2 = +prompt("Enter " + subject2 + " Marks:");
// var obtainedMarks3 = +prompt("Enter " + subject3 + " Marks:");
// var obtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var per = (obtainedMarks/totalMarks)*100;
// var per1 = (obtainedMarks1/maxMarks)*100;
// var per2 = (obtainedMarks2/maxMarks)*100;
// var per3 = (obtainedMarks3/maxMarks)*100;
// document.write("<h4>Subjects &nbsp; Total Marks &nbsp; Obtained Marks &nbsp; Percentage</h4>");
// document.write(subject1 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks1 + "&nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per1 + "%");
// document.write("<br>");
// document.write(subject2 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks2 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per2 + "%");
// document.write("<br>");
// document.write(subject3 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks3 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per3 + "%");
// document.write("<br>");
// document.write("&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + totalMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per + "%");

//CHPTERS#9-11

//1.Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”.
//var city=+prompt('Enter your city name');
//if(city==='Karachi'){
   //alert('Welcome to city of lights')
//}
//else{
   //alert('Welcome to good city')
//}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
//var gender=+prompt('Enter your gender');
//if(gender==='male'){
   //alert('Good Morning Sir:')
//}
//else if(gender==='female'){
   //alert('Good Morning Madam:')
//}
//else{
   //alert('Good Morning')
//}

// // 3
// var signal = prompt("Enter your Traffic Signal Color:");
// if(signal=="RED" || signal=="Red" || signal=="red"){
//     alert("Must Stop");
// }
// else if(signal=="YELLOW" || signal=="Yellow" || signal=="yellow"){
//     alert("Ready to Move");
// }
// else if(signal=="GREEN" || signal=="Green" || signal=="green"){
//     alert("Move now");
// }
// else{
//     alert("Please enter correct Traffic Signal Color like Red, Yellow or Green!");
// }

// // 4
// var fuel = +prompt("Enter your remaining Fuel in Car (Litres)");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car");
// }

// // 5
// // ...........a...........
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // ...........b...........
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // ...........c...........
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // ...........d...........
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // ...........e...........// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // ...........f...........
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// // 6
// var totalMarks=300;
// var marks1 = +prompt("Enter First Subject Marks: ");
// var marks2 = +prompt("Enter Second Subject Marks: ");
// var marks3 = +prompt("Enter Third Subject Marks: ");
// var obtainedMarks = marks1 + marks2 + marks3;
// var per = (obtainedMarks/totalMarks)*100;
// document.write("<h2>Mark Sheet</h2>");
// document.write("<br>Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + obtainedMarks);
// document.write("<br>Percentage: " + per + "%");
// if(per>=80 && per<=100){
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }
// else if(per>=70 && per<=80){
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }
// else if(per>=60 && per<=70){
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }
// else if(per<60){
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry");
// }

// // 7
// var secrectnum = 6;
// var num = +prompt("Guess the Number Between 1-10");
// if(num==secrectnum){
//     alert("Bingo! Correct answer");
// }
// else if(num+1 == secrectnum || num-1 == secrectnum){
//     alert("Close enough to the correct answer");
// }
// else if(num>10){
//     alert("You Entered a number which is beyond the limit So Enter again a number which is between 1-10");
// }
// else{
//     alert("You Entered Wrong Number!")
// }

// // 8
// var num = +prompt("Enter a number to check whether it is divisible by 3 or not?");
// if(num%3 == 0){
//     alert("Yes, " + num + " is divisible by 3");
// }
// else{
//     alert("No, " + num + " is not divisible by 3");
// }

// // 9
// var num = +prompt("Enter a number to check whether it is EVEN or ODD Number?");
// if(num%2 == 0){
//     alert(num + " is an Even Number");
// }
// else{
//     alert(num + " is an Odd Number");
// }

// // 10
// var tem = +prompt("Enter Temperature in celsius: ");
// if(tem>40){
//     alert("It is too hot outside.");
// }
// else if(tem>30){
//     alert("The Weather today is Normal.");
// }
// else if(tem>20){
//     alert("Today’s Weather is cool.");
// }
// else if(tem>10){
//     alert("OMG! Today’s weather is so Cool.");
// } 

// // 11
// var num;
// var num1 = +prompt("Enter First Number:");
// var num2 = +prompt("Enter Second Number:");
// var operator = prompt("Enter Operator (+, -, *, /, %)");
// if(operator == "+"){
//     num = num1 + num2;
//     alert(num1 + " + " + num2 + " = " + num);
// }
// else if(operator == "-"){
//     num = num1 - num2;
//     alert(num1 + " - " + num2 + " = " + num);
// }
// else if(operator == "*"){
//     num = num1 * num2;
//     alert(num1 + " x " + num2 + " = " + num);
// }
// else if(operator == "/"){
//     num = num1 / num2;
//     alert(num1 + " / " + num2 + " = " + num);
// }
// else if(operator == "%"){
//     num = num1 % num2;
//     alert(num1 + " % " + num2 + " = " + num);
// }
// else{
//     alert("You Entered Wrong Operator");
// }



// // Assignment # 12-13
// // 1
// var response = prompt("Enter any Character:");
// if(+response >=0 && +response <= 9){
//     alert("It is a Number");
// }
// else if(response.charCodeAt(0) >=65 && response.charCodeAt(0) <= 90){
//     alert("It is a Uppercase Letter");
// }
// else if(response.charCodeAt(0) >=97 && response.charCodeAt(0) <= 122){
//     alert("It is a Lowercase Letter");
// }
// else{
//     alert("It is not a Number or Upper and Lower Case letter.");
// }

// // 2
// var integer1 = +prompt("Enter First Integer:");
// var integer2 = +prompt("Enter Second Integer:");
// if(integer1<integer2){
//     alert(integer2 + " is greater than " + integer1);
// }
// else if(integer1>integer2){
//     alert(integer1 + " is greater than " + integer2);
// }
// else{
//     alert(integer1 + " and " + integer2 + " are equal.");
// }

// // 3
// var number = +prompt("Enter Any Number:");
// if(number<0){
//     alert(number + " is a negative number.");
// }
// else if(number>0){
//     alert(number + " is a positive number.");
// }
// else{
//     alert(number + " is zero.");
// }

// // 4
// var vowels = prompt("Enter Any Character:");
// if(vowels === "A" || vowels === "a" || vowels === "E" || vowels === "e" || vowels === "I" || vowels === "i" || vowels === "O" || vowels === "o" || vowels === "U" || vowels === "u"){
//     alert(vowels + " is a vowel");
// }
// else{
//     alert(vowels + " is not a vowel");
// }

// // 5
// var password = "Yasir Shakeel";
// var userPassword = prompt("Enter Your Password: ");
// if(userPassword == 0){
//     alert("Please enter your Password!");
// }
// else if(userPassword === password){
//     alert("“Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }

// // 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting);

// // 7
// var time = +prompt("Enter Time in 24 Hour Format like(19.00, 21.00, 00.00 etc");
// if(time>=5 && time<12){
//     alert("Good Morning");
// }
// else if(time>=12 && time<17){
//     alert("Good Afternoon");
// }
// else if(time>=17 && time<21){
//     alert("Good Evening");
// }
// else if(time>=21 && time<=23.59){
//     alert("Good Night");
// }
// else if(time>=0 && time<5){
//     alert("Good Night");
// }
// else{
//     alert("Please, Enter Correct Time!");
// }





// // Assignment # 14-16
// // 1
// var arr = [];

// // 2
// var arr1 = new Array();

// // 3
// var student = ["Tahir", "Amir", "Farhan", "Irfan", "Mahmood", "Awais", "Haroon"];

// // 4
// var number = [6, 11, 12, 13, 15, 20, 26];

// // 5
// var boolean = [true, false, true];

// // 6
// var mixed = ["Yasir", 53, "Shakeel", true];

// // 7
// var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil.", "Phd"];
// document.write("<h3><br>QUALIFICATIONS:</h3>");
// for(var i=0; i<qualification.length; i++){
//     document.write("<br>" + (i+1) + ") " + qualification[i]);
// }

// // 8
// var students = ["Engr", "Yasir", "Shakeel"];
// var marks = [450, 300, 400];
// for(var i=0; i<marks.length; i++){
//     per = (marks[i]/500)*100;
//     document.write("<br>Score of " + students[i] + " is " + marks[i] + ". Percentage: " + per + "%");
// }

// // 9
// var color = ["green", "white", "yellow", "orange"];
// document.write(" <h4>Orignal Array with four Colors:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........a...........
// var add = prompt("Enter a color which you want to add in beginning:");
// color.unshift(add)
// document.write("<br> <h4>After Addition in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........b...........
// var add = prompt("Enter a color which you want to add in end:");
// color.push(add)
// document.write("<br> <h4>After Addition in Last:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........c...........
// var add1 = prompt("Enter first color which you want to add in beginning:");
// var add2 = prompt("Enter second color which you want to add in beginning:");
// color.unshift(add1, add2)
// document.write("<br> <h4>After Addition of two Colors in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........d...........
// color.shift()
// document.write("<br> <h4>After Deletion in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........e...........
// color.pop()
// document.write("<br> <h4>After Deletion in End:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........f...........
// var index = +prompt("Enter index number where you want to add color");
// var add = prompt("Enter a color which you want to add in index[" + index + "]:");
// color.splice(index, 0, add)
// document.write("<br> <h4>After Addition in Middle of the colors Array:</h4>");
// document.write("You Added a Color at index[" + index + "]<br>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........g...........
// var index = +prompt("Enter index number where you want to delete color");
// var quantity = prompt("How many colors do you want to delete from index[" + index + "]?");
// color.splice(index, quantity)
// document.write("<br> <h4>After Deletion in Middle of the colors Array:</h4>");
// document.write("You Delete " + quantity + " Colors at index[" + index + "]<br>" );
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }

// // 10
// var score = [320, 230, 480, 120,];
// document.write("<br><h3>Scores of Students: ");
// for(var i=0; i<score.length; i++){
//     document.write(score[i] + ", ");
// }
// score.sort()
// document.write("<br>Ordered Scores of Students: ");
// for(var i=0; i<score.length; i++){
//     document.write(score[i] + ", ");
// }

// // 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = [];
// selectedCities = cities.slice(2,5)
// document.write("<h4>Cities List:<br>");
// document.write(cities);
// document.write("<br>");
// document.write("<br>Selected Cities List:<br>");
// document.write(selectedCities);

// // 12
// var arr = ["This", "is", "my", "cat"];
// document.write("<h3>Array:<br>");
// document.write(arr);
// document.write("<br><br>String:<br>");
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + " ");
// }

// // 13
// var arr = [];
// arr.push("Tahir");
// document.write(arr + "<br>");
// arr.push("Mahmood");
// document.write(arr + "<br>");
// arr.push("Irfan");
// document.write(arr + "<br>");
// arr.push("Junaid");
// document.write(arr + "<br>");

// // 14
// var arr = [];
// arr.unshift("Tahir");
// document.write(arr + "<br>");
// arr.unshift("Mahmood");
// document.write(arr + "<br>");
// arr.unshift("Irfan");
// document.write(arr + "<br>");
// arr.unshift("Junaid");
// document.write(arr + "<br>");

// // 15






// // Assignment # 17-20
// // 1
// var student = [["Mahmood",22],["Tahir",23]["Tabish",23]];
// document.write(student[1][1]);

// // 2
// var num = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// document.write("<h1>");
// for(var i=0; i<num.length; i++){
//     for(var j=0; j<4; j++){
//         document.write(num[i][j] + " ");
//     }
//     document.write("<br>");
// }

// // 3
// for(var i=1; i<=10; i++){
//     document.write("<h2>" + i);
// }

// // 4
// var num = +prompt("Enter a number to show its Multiplication Table:");
// var length = +prompt("Enter the length of Multiplication Table:");
// document.write("<h2>Table of " + num + "</h2>");
// document.write("<h4><br>");
// for(var i = 1 ; i <= length; i++){
//     document.write( num + " x " + i + " = " + num*i);
//     document.write("<br>");
// }

// // 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("<h3>");
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// // 6
// document.write("<br><h3>Counting:</h3>");
// for(var i=1; i<=15; i++){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Reverse Counting:</h3>");
// for(var i=10; i>=1; i--){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Even:</h3>");
// for(var i=0; i<=20; i=i+2){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Odd:</h3>");
// for(var i=1; i<=20; i=i+2){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Series:</h3>");
// for(var i=2; i<=20; i=i+2){
//     document.write(i + "k, ");
// }

// // 7
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to our Bakery. What do you want to order Sir/Ma'am?");
// for(var i=0; i<A.length; i++){
//     if(A[i]==order){
//         alert(A[i] + " is available at index " + i + " in our Bakery.");
//         break;
//     }      
// }

// // 8
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for(var i=1; i<A.length; i++){
//     if(A[i]>max){
//         max=A[i];
//     }
// }
// document.write("<br><h3>Array Items: " + A);
// document.write("<br>The Largest Number is: " + max);

// // 9
// var A = [24, 53, 78, 91, 12];
// var min = A[0];
// for(var i=1; i<A.length; i++){
//     if(A[i]<min){
//         min=A[i];
//     }
// }
// document.write("<br><h3>Array Items: " + A);
// document.write("<br>The Smallest Number is: " + min);

// // 10
// for(var i=5; i<=100; i=i+5){
//     document.write(i + ", ");
// }

// ----------- Chapter 21-25 String Methods ----------

// Task 1
//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 

//var firstName = prompt("Enter your first name: ");
//var lastName = prompt("Enter your last name: ");
//var fullName = firstName + " " + lastName;
//alert("Hello " + fullName);

// Task 2
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
//var favMobile = prompt("Enter your favorite mobile phone model: ");
//document.write("My favorite phone is: " + favMobile + "<br>");
//document.write("Length of string: " + favMobile.length);

// Task 3
//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
//var str = "Pakistani";
//var nIndex = str.indexOf("n");
//document.write("String: " + str + "<br>");
//document.write("Index of 'n': " + nIndex );

// Task 4
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
//var str = "Hello World";
//var lIndex = str.lastIndexOf("l");
//document.write("String: " + str + "<br>");
//document.write("Last index of 'l': " + lIndex );

//Task 5
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
//var str = "Pakistani";
//var Index = str[3];
//document.write("String: " + str + "<br>");
//document.write("Character at index 3: " + Index );

//Task 6
// Repeat Q1 using string concat() method.
//var firstName = prompt("Enter your first name: ");
//var lastName = prompt("Enter your last name: ");
//var fullName= firstName.concat(lastName);
//alert("Hello " + fullName);

//Task 7
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
//var str = "Hyderabad";
//var replaceStr = str.replace("Hyder", "Islam");
//document.write("City: " + str + "<br>");
//document.write("After replacement: " + replaceStr);

//Task 8
//  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var str = "Ali and Sami are best friends. They play cricket and football together.";
//var replaceStr = str.replace(/and/g, "&");
//document.write("Message: " + str + "<br>");
//document.write("After replacement: " + replaceStr);

// Task 9
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
//var str = "472";
//var num = Number(str);
//document.write("value: " + str + "<br>");
//document.write("Tpye: " + typeof(str) + "<br>");
//document.write("value: " + num + "<br>");
//document.write("Tpye: " + typeof(num) + "<br>");

//Task 10
// Write a program that takes user input. Convert and show the input in capital letters.
//var str = prompt("Enter Input: ");
//document.write("User input: " + str + "<br>");
//document.write("Upper case: " + str.toUpperCase())

//Task 11
// Write a program that takes user input. Convert and show the input in title case.
//var str = prompt("Enter Input: ");
//var firstChar = str.slice(0,1);
//var otherChar = str.slice(1);
//var title = firstChar.toUpperCase() + otherChar.toLowerCase();
//document.write("User input: " + str + "<br>");
//document.write("Title case: " + title);

// Task 12
// Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser. 
//var num = 35.36;
//var str = num.toString();
//var dotIndex = str.indexOf(".");
//str = str.slice(0,dotIndex) + str.slice(dotIndex + 1);
//document.write("Number: " + num + "<br>");
//document.write("Result: " + str);

//Task 13
//Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
//var username = prompt("Enter your name: ");
//var charValue;
//for(var i = 0; i < username.length; i++){
  //  charValue = username[i].charCodeAt(0);
    //if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
      //  alert("Please enter a valid username")
 //   }
//}

// Task 14
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
//var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
//var query = prompt("What do you want to order: ");
//query = query.toLowerCase();
//var check = false;
//for(var i = 0; i < arr.length; i++){
 //   if(query === arr[i]){
   //     document.write(arr[i] + " is available at index " + i + " in our bakery");
     //   check = true;
 //   }
//}
//if (check === false){
//    document.write("We are sorry. " + query + " is not available in our bakery");
//}

// Task 15
// Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long.
//var password = prompt("Enter your password: ");
//var passwordLength = false;
//var passwordChar = false;
//var passwordInt = false;
//var passwordStart = true;

//Checking for Alphabet
//for (i = 0; i < password.length; i++){
  //  var charValue = password[i].charCodeAt(0);

    //Checking for UpperCase Letters
    //if (charValue >= 65 && charValue <= 90 ){
      //  passwordChar = true;
    //}

    //Checking for LowerCase Letters
    //else if (charValue >= 97 && charValue <= 122 ){
      //  passwordChar = true;
    //}
//}

//Checking for Numbers
//for (i = 0; i < password.length; i++){
  //  var charValue = password[i].charCodeAt(0);  
    //if (charValue >= 48 && charValue <= 57 ){
      //  passwordInt = true;
    //}
//}

//Checking for first letter
//var charValue = password.charCodeAt(0);
//if (charValue >= 48 && charValue <= 57 ){
  //  passwordStart = false;
//}

//Checking for Length
//if(password.length >= 6){
 //   passwordLength = true;
//}

//if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
  //  alert("Enter valid Password");
//}

//else{
  //  alert("Password Approved");
//}

// Task 16
// Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; 
//var str = "University of Karachi";
//var arr = str.split("");
//for(var i=0; i<arr.length; i++){
  //  document.write(arr[i] + "<br>");
//}

// Task 17
// Write a program to display the last character of a user input. 
//var str = prompt("Enter your message: ");
//document.write("User Input: " + str + "<br>");
//document.write("Last character of input: " + str[str.length - 1]);

// Task 18
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
//var str = "the quick brown fox jumps over the lazy dog";
//var count = (str.match(/the/g) || []).length;
//document.write("Text: " + str + "<br>");
//document.write("There are " + count + " occurrence(s) of the word 'the'");


// ----------- Chapter 26-30 Maths Methods ----------

// Task 1
// Write a program that takes a positive integer from user & display the following in your browser a. number b. round off value of the number c. floor value of the number d. ceil value of the number.
//var num = +prompt("Enter number: ");
//document.write("Number: " + num + "<br>");
//document.write("Round off value: " + Math.round(num) + "<br>");
//document.write("Floor value: " + Math.floor(num) + "<br>");
//document.write("Ceil value: " + Math.ceil(num) + "<br>");

//Task 2
// Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 
//var num = +prompt("Enter number: ");
//document.write("Number: " + num + "<br>");
//document.write("Round off value: " + Math.round(num) + "<br>");
//document.write("Floor value: " + Math.floor(num) + "<br>");
//document.write("Ceil value: " + Math.ceil(num) + "<br>");

//Task 3
//Write a program that displays the absolute value of a number. 
//var num = +prompt("Enter number: ");
//document.write("The absolute value of " + num + " is " + Math.abs(num));

// Task 4
// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 
//var randomNumber = Math.random() * 6;
//document.write("Random dice value: " + Math.floor(randomNumber));

// Task 5
// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
//var coinValue = Math.random() * 2;
//coinValue = Math.floor(coinValue);
//if(coinValue > 0){
  //  document.write("Random coin value: Heads");
//}
//else{
  //  document.write("Random coin value: Tails");
//}

// Task 6
// Write a program that shows a random number between 1 and 100 in your browser. 
//var randomNumber = Math.random() * 100;
//document.write("Random number between 1-100: " + Math.ceil(randomNumber));

// Task 7
// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser
//var weight = prompt("Enter your weight in kilograms: ");
//document.write("The weight of user is " + weight + " kilograms");

// Task 8
// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
//var secretNumber = +prompt("Enter a number between 1 and 10");
//randomNumber = Math.random() * 10;
//randomNumber = Math.ceil(randomNumber);
//if(secretNumber === randomNumber){
  //  alert("Congratulations");
//}
//else{
  //  alert("Try Again");
//}


// ----------- Chapter 31-34 Date Methods ----------

// Task 1
// Write a program that displays current date and time in your browser. 
//var dateNow = new Date();
//document.write(dateNow);

// Task 2
// Write a program that alerts the current month in words. For example December.
//var dateNow = new Date();
//mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//var monthNow = dateNow.getMonth();
//document.write("Current Month: " + mlist[monthNow]); 

// Task 3
// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
//var dateNow = new Date();
//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//var dayNow = dateNow.getDay();
//document.write("Today is " + dayNames[dayNow]);

// Task 4
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
//var dateNow = new Date();
//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//var dayNow = dateNow.getDay();
//if(dayNames[dayNow] === "Sun" || dayNames[dayNow] === "Sat"){
  //  document.write("It's Fun day");
//}

// Task 5
// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 
//var dateNow = new Date();
//var date = dateNow.getDate();
//if(date < 16){
  //  document.write("“First fifteen days of the month");
//} 
//else{
  //  document.write("Last days of the month");
//}

// Task 6
//  Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
//var dateNow = new Date();
//var millisec = dateNow.getTime();
//document.write("Current Date: " + dateNow + "<br>");
//document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>");
//document.write("Elapsed minutes since January 1, 1970: " + (millisec/(999*60)) + "<br>");

// Task 7
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
//var dateNow = new Date();
//var hourNow = dateNow.getHours();
//if(hourNow < 12){
//    document.write("Its AM");
//}
//else{
  //  document.write("Its PM");
//}

// Task 8
//  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
//var dateNow = new Date();
//var laterDate = new Date("Dec 31, 2020");
//document.write(laterDate);

// Task 9
// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 
//var today = new Date();
//var todayMilli = today.getTime();
//var lastRamadan = new Date("Apr 24, 2020");
//var ramazanMilli = lastRamadan.getTime();
//var diffMilliSec = todayMilli - ramazanMilli;
//var daysPast = diffMilliSec/(1000*60*60*24);
//daysPast = Math.floor(daysPast);
//document.write(daysPast + " days have passed since 1st Ramazan, 2020");

// Task 10
// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
//var today = new Date();
//var todayMilli = today.getTime();
//var year2015 = new Date("Jan 01, 2015");
//var year2015Milli = year2015.getTime();
//var diffMilliSec = todayMilli - year2015Milli;
//var secondsPast = diffMilliSec/(1000);
//secondsPast = Math.floor(secondsPast);
//document.write("On reference date: " + today + "<br>")
//document.write(secondsPast + " seconds had passed since beginning of 2015");

// Task 11
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 
//var today = new Date();
//var hourAgo = today.getHours();
//hourAgo = hourAgo-1
//document.write("current date: " + today + "<br>");
//today.setHours(hourAgo);
//document.write("1 hour ago, it was " + today);

// Task 12
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
//var today = new Date();
//var yearsAgo = today.getFullYear();
//yearsAgo = yearsAgo-100;
//document.write("current date: " + today + "<br>");
//today.setFullYear(yearsAgo);
//document.write("100 years back, it was " + today);

// Task 13
// Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
//var age = +prompt("Enter your age");
//var today = new Date();
//var yearNow = today.getFullYear();
//var birthYear = yearNow - age;
//document.write("Your age is " + age + "<br>");
//document.write("Your birth year is " + birthYear);

// Task 14
// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b. Current Month c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date.
//var customerName = "Yasir Shakeel";
//var today = new Date();
//mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//var currentMonth = today.getMonth();
//var noOfUnits = 410;
//var unitCost = 16;
//var netAmount = noOfUnits * unitCost;
//var lateCharges = 150;
//var grossAmount = netAmount + lateCharges;
//document.write("K-Electric Bill" + "<br>" + "<br>");
//document.write("Customer Name: " + customerName + "<br>");
//document.write("Month: " + mlist[currentMonth] + "<br>");
//document.write("No of units: " + noOfUnits + "<br>");
//document.write("Charges per unit: " + unitCost + "<br>" + "<br>");
//document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
//document.write("Late Payment Surcharge: " + lateCharges + "<br>");
//document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");


// ----------- Chapter 35-38 Functions ----------

// Task 1
// Write a function that displays current date & time in your browser.
//function tellTime(){
  //  var dateNow  = new Date();
    //document.write(dateNow); 
//}
//tellTime();

// Task 2
// Write a function that takes first & last name and then it greets the user using his full name
//function greetUser(){
  //  var firstName = prompt("Enter your first name: ");
    //var lastName = prompt("Enter your last name: ");
    //alert("Hello " + firstName + " " + lastName);
//}
//greetUser();

// Task 3
// Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
//function sum(){
  //  var firstNumber = +prompt("Enter first number: ");
    //var secondNumber = +prompt("Enter second number: ");
    //alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
//}
//sum();

// Task 4
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser
//function calculator(num1,num2,op){
  //  if(op === "+"){
    //    alert(num1 + " + " + num2 + " = " + (num1 + num2));
   // }
   // else if(op === "-"){
     //   alert(num1 + " - " + num2 + " = " + (num1 - num2));
    //}
    //else if(op === "*"){
      //  alert(num1 + " x " + num2 + " = " + (num1 * num2));
    //}
    //else if(op === "/"){
      //  alert(num1 + " / " + num2 + " = " + (num1 / num2));
    //}
    //else{
      //  alert("Wrong Operator");
   // }
//}
//var firstNumber = +prompt("Enter first number: ");
//var operator = prompt("Choose your operator: + - * / ");
//var secondNumber = +prompt("Enter second number: ");
//calculator(firstNumber,secondNumber,operator);

// Task 5
// Write a function that squares its argument. 
//function square(num){
  //  alert("Square of " + num + " is " + (num*num));
//}
//var number = +prompt("Enter number for square: ");
//square(number);

// Task 6
// Write a function that computes factorial of a number
//function factorial(num) {
  //  var answer = 1;
    //if (num === 0 || num === 1) {
      //  return answer;
    //} else {
      //  for (var i = num; i >= 1; i--) {
        //    answer = answer * i;
       // }
       // return answer;
    //}
//}
//var number = +prompt("Enter number for factorial: ");
//answer = factorial(number)
//alert("The factorial of " + number + " is " + answer);

// Task 7
// Write a function that take start and end number as inputs & display counting in your browser.
//function counting(start,end){
  //  for(var i = start; i <= end; i++ ){
    //    document.write(i + " ");
    //}
//}
//var start = +prompt("Enter start number for counting:");
//var end = +prompt("Enter end number for counting:");
//counting(start,end);

// Task 8
// Write a nested function that computes hypotenuse of a right angle triangle. 
//function calculateHypotenuse(base,perpendicular){
  //  var base,perpendicular;
    //function calculateSquare(num){
      // num = num * num;
      // return num;
    //}
    //base = calculateSquare(base);
    //perpendicular = calculateSquare(perpendicular);
    //var hypotenuse = base + perpendicular; 
    //return hypotenuse;
//}
//var base = +prompt("Enter base of a right angle triagnle:");
//var perpendicular = +prompt("Enter perpendicular of a right angle triagnle:");
//var hyp = calculateHypotenuse(base,perpendicular);
//alert("hypotenuse of a right angle triangle: " + hyp);

// Task 9
// Write a function that calculates the area of a rectangle.      A = width * height
//function areaOfRectangle(width,height){
  //  var areaCalc = width * height;
    //return areaCalc;
//}
//var width = +prompt("Enter width of rectangle: ");
//var height = +prompt("Enter height of rectangle: ");
//var area = areaOfRectangle(width,height);
//alert("Area of Rectangle: " + area);

// Task 10
// Write a JavaScript function that checks whether a passed string is palindrome or not?
//function checkPalindrome(message){
 //   var reverseMessage = "";
   // for (var i = message.length - 1; i >= 0; i--) {
     //   reverseMessage += message[i];
    //}
    //if(message === reverseMessage){
      //  alert(message + " is palindrome");
    //}
    //else{
      //  alert(message + " is not palindrome");
   // }
//}
//var msg = prompt("Enter message to check it's palindrome or not");
//checkPalindrome(msg);

// Task 11
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//function titleCase(message){
  //  var arr = message.split(" ");
    //var titleArray = [];
    //var str;
    //for(var i = 0; i < arr.length; i++){
      //  var firstChar = arr[i].slice(0,1);
        //var otherChar = arr[i].slice(1);
        //var word = firstChar.toUpperCase() + otherChar.toLowerCase();
        //titleArray.push(word);

    //}
    //str = titleArray.join(" ");
    //document.write("String: " + message + "<br>")
    //document.write("Output: " + str + "<br>")
//}

//var message = prompt("Enter your Message:");
//titleCase(message);

// Task 12
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//function longestString(message){
  //  var arr = message.split(" ");
   // var longest = arr[0]; 
    //for(i = 0; i < arr.length; i++){
     //   if(arr[i].length > longest.length){
       //     longest = arr[i];
        //}
    //}
    //document.write("Message: " + message + "<br>")
    //document.write("Longest Word : " + longest + "<br>")
//}
//var message = prompt("Enter your Message:");
//longestString(message);

// Task 13
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .
//function findOccurence(message,letter){
  //  var count = 0;
    //for(var i = 0; i < message.length; i++){
      //  if(message[i] === letter){
        //    count += 1;
        //}
    //} 
    //document.write("Message: " + message + "<br>")
    //document.write("Occurence of " + "'" + letter + "'" + " is "  + count + " times")
//}
//var message = prompt("Enter your Message:");
//var letter = prompt("Enter your letter to check occurence:");
//findOccurence(message,letter);

// Task 14
//The Geometrizer 
//function calcCircumference(radius){
  //  var circumference = 2 * 3.142 * radius;
    //document.write("The circumference is: " + circumference + "<br>");
//}
//function calcArea(radius){
  //  var area = 3.142 * radius * radius;
    //document.write("The area is: " + area + "<br>");
//}
//var radius = +prompt("Enter radius of a Circle: ");
//calcCircumference(radius);
//calcArea(radius);

//Chapter # 38 - 42

//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

 // function power(){
    //     var a = 5;
    //     var b = 2;
    //     document.write(a*=b);
    // }
    // power();

// Q2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …  

//  var year = parseInt(prompt('Enter A year'));
//  var check_leep_year;
//  if(year % 4 ==0){
//     document.write('Your Enterd year ' + year + ' is a leep year.');
//  }
//  else{
//     document.write('Your Enterd year ' + year + ' is not a leep year.');
//  }

// Q3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

    // function area_triangle() {
    //     var a = 5;
    //     var b = 8;
    //     var c = 4;
    //     var s;
    //     if (a < 0 || b < 0 || c <0 || (a+b <= c) || 
    //     a+c <=b || b+c <=a) 
    //     { 
    //     document.write("Not a valid triangle"); 
    //     } 
    //     else{
    //         s = (a+b+c)/2; 
    //         document.write('Area of triangle is ' + Math.sqrt(s*(s-a)*(s-b)*(s-c))); 
    //     }
    // } 
    // area_triangle();


// Q4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
   
    // function std_data(eng,math,sci){
    //   var s = eng + math + sci;
    //   return s;
    // }
    // function std_average(s){
    //   var t = s/3;
    //   return t;
    // }
    // function std_percentage(s){
    //   var perc = (s/300)*100;
    //   return perc;
    // }
    // var a = std_data(50,50,50);
    // var b = std_average(a);
    // var c = std_percentage(a);
    // document.write("Obtained Marks: " + a + "<br> Average of Marks:   " + b + 
    // "<br> Percentage of Marks: " + c);

// Q5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// var letter = ['a','b','c','d'];
// var user = prompt('Check array index our arrays are: a,b,c,d');
// var c = 0;
// for(i=0; i<letter.length; i++){
//   var a = letter[i];
//   var b = c+i;
//   if(user == a ){
//     a = user;
//     document.write('<br> Index of (' +  a + ') is: ' + b);
//   }
// }

// Q6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// str = 'The quick brown fox jumps over the lazy dog';
// document.write(str + "<br><br>")
// function removeVowels() {
//   document.write(str.replace(/[aeiou]/gi, ''));
// }
// removeVowels();


// Q7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count 
//   }
  
//   console.log(findOccurrences());


// Q8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

  // var city_dist_km = parseInt(prompt('Enter distance between to cities in KM:'));
  // document.write("Distance:  " + city_dist_km);
  // function meter(){
  //   var meter  = city_dist_km*1000;
  //   document.write("<br> Meter:" + meter);
  // }
  // meter();
  // function feet(){
  //   var feet  = city_dist_km*3280.84;
  //   document.write("<br> Feet: " + feet);
  // };
  // feet();
  // function inches(){
  //   var inches  = city_dist_km*39370.1;
  //   document.write("<br> Inches: " + inches);
  // };
  // inches();
  // function centimeters(){
  //   var centimeters  = city_dist_km*100000 ;
  //   document.write("<br> Centimeters: " + centimeters);
  // };
  // centimeters();

  //Q9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

  // var working_hours = parseInt(prompt('Enter working hours'));
  // var over_time;
  // var over_time_pay;

  // if(working_hours>40){
  //   over_time = working_hours - 40;
  //   over_time_pay = over_time * 12.00;
  //   document.write("Employee overtime pay is" + over_time_pay);
  // }
  // else{
  //   document.write("You have to work for more than 40 hours to get over time pay");
  //   count++;
  // }


// Q10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// var note_10 = 10;
// var note_50 = 50;
// var note_100 = 100;

// function cashier(){

//   var cash_withdraw = 470;
//   document.write("You Will have " + Math.floor(cash_withdraw / 100) + " Hundred Notes ");
//   document.write(Math.floor(cash_withdraw % 100 / 50) + " Fifty Notes ");
//   document.write(Math.floor(((cash_withdraw % 100) % 50) / 10) + " Ten Notes.");
// }
// cashier();




//======================================================================
// ==========********* Chap 43 to 48 ********===========================
//======================================================================

// Q1. Show an alert box on click on a link.
// Q2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

function alerts(){
  alert('Added To Cart');
}


// Q3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 


function delete_row(){
  var td = event.target.parentNode; 
  var tr = td.parentNode; 
  tr.parentNode.removeChild(tr);
}


// Q4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function mouseaway(my_image){
  my_image.src = "images/bg.jpg";
}
function rollover(my_image){
  my_image.src = 'images/3.jpg';
}


// Q5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


var clicks = 0;
function add() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function rem(){
  clicks -= 1;
  document.getElementById("clicks").innerHTML = clicks;
}



//======================================================================
// ==========********* Chap 49 to 52 ********===========================
//======================================================================


// Q1. Create a signup form and display form data in your web
// page on submission.

function submits(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var num = document.getElementById('num').value;
  var pass = document.getElementById('pass').value;

  document.getElementById('form_data').innerHTML='Name: ' + name +
  '<br> Email: ' + email + '<br> Phone: ' + num + '<br> Password: ' + pass;
}


// Q2 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

function readmore(){
  document.getElementById('more').style.display='block';
  document.getElementById('btn1').style.display='block';
  document.getElementById('btn').style.display='none';
}

function readless(){
  document.getElementById('more').style.display='none';
  document.getElementById('btn1').style.display='none';
  document.getElementById('btn').style.display='block';
}

// Q3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


function details(){
  var name = document.getElementById('std_name').value;
  var email = document.getElementById('std_email').value;
  var num = document.getElementById('std_num').value;
  var table = document.getElementById('myTable1');
  var row = table.insertRow(2);
  row.innerHTML=' <td>'+ name +'</td>'+ 
  '<td>'+ email +'</td>'+'<td>'+ num +'</td> ' + 
  "<td><input type='button' value='Delete' onclick='delete_row()'></td>";
}


//======================================================================
// ==========********* Chap 52 to 57 ********===========================
//======================================================================


// Q1 Image Light box With Array

function open_img_box(){
  document.getElementById('model_gallery').style.display = 'block';
  document.getElementById('gallery').style.display = 'none';
}

var img_arr = [
  'images/10.jpg',
  'images/8.jpg',
  'images/6.jpg',
  'images/11.jpg',
  'images/1.jpg',
  'images/2.jpg',
  'images/4.png',
  'images/6.jpg'
];

var img = document.getElementById('model_img');
var i = img_arr.length;
function previous_img(){
  i--;
  img.src = img_arr[i];
  if(i<0){
    i = 7;
    img.src = img_arr[i];
  }
}

function next_img(){
  i++;
  img.src = img_arr[i];
  if(i>7){
    i = 0;
    img.src = img_arr[i];
  }
}
function close_img_model(){
  document.getElementById('model_gallery').style.display = 'none';
  document.getElementById('gallery').style.display = 'block';
}


// Q2 Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
//  On each click on “zoom in”(+) , add 10px in font size of paragraph.
//  And on each click on “zoom out”(-) , minus 10px in font size of paragraph

var p = document.getElementById('para');

function incr_f_size(){
  p.style.fontSize = '30px';
}

function dcr_f_size(){
  p.style.fontSize = '15px';
}




//======================================================================
// ==========********* Chap 58 to 67 ********===========================
//======================================================================

//    ********************     DOM     ************************

// Q1
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.

var d = document.getElementById('main-content');
d.childNodes;
console.log(d);


// iii. Get all elements of class “render” and show their innerHTML
// in browser.

var r = document.getElementsByClassName('render');
console.log(r);

// iv. Fill input value whose element id first-name using javascript.

document.getElementById('first-name').value = 'Yasir';

//// v. Repeat part iv for id ”last-name” and “email”.

document.getElementById('last-name').value = 'Shakeel';

document.getElementById('emaill').value = 'm.yasirshakil@gmail.com';


// Q2 use HTML code of question 1 and show the result on browser.


// i. What is node type of element having id “form-content”.

var x = document.getElementById("form-content").nodeType;
console.log(x);


// ii. Show node type of element having id “lastName” and its child node.

var x = document.getElementById("lastName");
x.nodeType;
x.childNodes;
console.log(x)

// iv. Get First and last child of id “main-content”.

var a = document.getElementById('main-content').firstChild;
var b = document.getElementById('main-content').lastChild;
console.log(a,b);

// v. Get next and previous siblings of id “lastName”.

var l = document.getElementById('lastName').previousSibling;
var m = document.getElementById('lastName').nextSibling;
console.log(l,m);

// vi. Get parent node and node type of element having id “email”

var e = document.getElementById('emaill');
e.parentNode;
s = e.nodeType;
console.log(e,s);












































































































































































