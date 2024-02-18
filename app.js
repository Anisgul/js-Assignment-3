//Question no 1:
 
    const city = prompt("Please enter the name of the city: ");
    if (city.toLowerCase() === "karachi") {
        console.log("Welcome to the city of lights!");
    } else {
        console.log("please come  to karachi");
    }

//Question no 2:

    const gender = prompt("Please enter your gender (male or female): ");
    if (gender.toLowerCase() === "male") {
        console.log("Good Morning Sir.");
    } else if (gender.toLowerCase() === "female") {
        console.log("Good Morning Ma'am.");
    } else {
        console.log("Please enter either 'male' or 'female'.");
    }

//Question no 3:

    const fuel = parseFloat(prompt("Please enter the remaining fuel in your car (in liters): "));
    if (fuel < 0.25) {
        console.log("Please refill the fuel in your car.");
    } else {
        console.log("You Need to refill Fuel. To Secure your Journey");
    }

//Question no 4:

//a

var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
document.write("Alert message displayed for a")
}

//b

var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
document.write("Alert message displayed for b")
}

//c

var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true");
}
if(c === 14){ 
    alert("condition 4 is true"); 
    }

//d

    var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}

//e

if (true){ 
    alert("True"); 
   } if (false){ 
   alert("False"); 
   }

//f

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    }

//Question no 5:

var secretNum = 7;
var userNum = +prompt("Enter a number to take a guess (choose 1-10)");
    if (userNum  === secretNum)
    {  
    document.write("Bingo! Correct answer"); 
}
    else if (userNum + 1 === secretNum  || userNum - 1 === secretNum ) 
    {
        document.write("Close enough to the correct answer");
    }

//Question no 6:

    const number = parseInt(prompt("Please enter a number: "));
    if (number % 3 === 0) {
        console.log("The given number is divisible by 3.");
    } else {
        console.log("The given number is not divisible by 3.");
    }

//Question no 7:

var evenorodd = prompt ("check that the given number is Even or Odd")
if (evenorodd % 2 === 0) {
    alert ("Given number is Even")
}
else {
    alert ("Given number is Odd")
}
//Question no 8:

var temprature = +prompt("Enter Temprature in celcius to know the weather conditions outside: ")
if(temprature > 40){
document.write("It is too hot outside")
}
else if(temprature > 30){
    document.write("The Weather today is Normal")
}
else if(temprature > 20){
    document.write("Today’s Weather is cool.")
}
else if(temprature > 10){
    document.write("OMG! Today’s weather is so Cool.")
}

//Question no 9:

var firstNum = +prompt("Enter first number ")

var secondNum = +prompt("Enter Second number ")

var operation =  prompt("What do you want to perform?  (+, -, *, /, %)" )
if(operation === "+"){
    result =  firstNum+secondNum;
    document.write("Result : " +result);
    }else if (operation === "-"){
        result=firstNum-secondNum;
        document.write("Result : " +result);
    }else if (operation === "*"){
        result = firstNum*secondNum;
        document.write("Result : " +result)
    }else if (operation === "/"){
        result = firstNum/secondNum;
        document.write("Result : " +result)}
    else if (operation === "%") {
            result = firstNum % secondNum;
            document.write("Remainder of Division :" +result)
        }
