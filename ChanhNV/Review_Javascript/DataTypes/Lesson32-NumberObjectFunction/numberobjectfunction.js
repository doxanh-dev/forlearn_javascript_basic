
//Number()
var boolean_true = true;
var numberBooTrue = Number(boolean_true);    // returns 1
document.write(numberBooTrue + '</br>'); 

var boolean_false = false;
numberBooFal = Number(boolean_false);//return 0
document.write(numberBooFal + '</br>');

var string_str = 'freetuts.net';
numberString =  Number(string_str);             // returns NaN
document.write(numberString + '</br>');
 
var string_num = '100';
numberStrNum = Number(string_num); // returns 100
document.write(numberStrNum + '</br>');
 
var date = new Date();
numberDate = Number(boolean_true);//return 1
document.write(numberDate + '</br>');

//toString()
var x = 12345;
typeof x;   // number
x = x.toString();
typeof x;   // string

//toFixed(n)
var Percent = 7.56857;
document.write(Percent.toFixed(0) + '</br>');// returns 8
document.write(Percent.toFixed(2) + '</br>');
document.write(Percent.toFixed(4) + '</br>');
document.write(Percent.toFixed(6) + '</br>');

//valueOf()
var num = 12 + 16;
num.valueOf();
(2 + 3).valueOf();

