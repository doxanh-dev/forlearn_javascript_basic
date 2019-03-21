
//Declare number object
var x = 12;
document.write(x + '</br>');
var y = 12.534;
document.write(y + '</br>');
var z = 123e5;
document.write(z + '</br>');
var t = 123e-5;
document.write(t + '</br>');

//number.toString(type)
var myNumber = 128;
document.write('number first: '+  myNumber + '</br>');
var myNumber16 = myNumber.toString(16);
document.write('myNumber16: '+  myNumber16 + '</br>');
myNumber8 =  myNumber.toString(8);
document.write('myNumber8 : '+  myNumber8 + '</br>');
myNumber2 = myNumber.toString(2);
document.write('myNumber2 : '+  myNumber2 + '</br>');

//Infinity
var numberInf = 2;
while (numberInf != Infinity) {
    numberInf = numberInf * numberInf;
}
document.write("Value of numberInf is: " + numberInf + '</br>');

//NaN - Not a Number
var x = 2/"lemon";//NaN

var y = 100 / "10"; //result = 10
