
var dateObj = new Date();
document.write('dateObj is: ' + dateObj + '</br>');

//format ISO
var ISO_1 = new Date("2014-11-20");
document.write('format iso 01: ' + ISO_1 + '</br>');

var ISO_2 = new Date("2014-11");
document.write('format iso 02: ' + ISO_2 + '</br>');

var ISO_3 = new Date("2014");
document.write('format iso 03: ' + ISO_3 + '</br>');

//format Long
var LONG_1 = new Date("Mar 25 2015");
document.write('format LONG_1: ' + LONG_1 + '</br>');
var LONG_2 = new Date("2015 Mar 25");
document.write('format LONG_2: ' + LONG_2 + '</br>');
var LONG_3 = new Date("25 2015 Mar");
document.write('format LONG_3: ' + LONG_3 + '</br>');

//format short
var SHORT = new Date("03-25-2015");
document.write('format SHORT: ' + SHORT + '</br>');

//format enough
var d = new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (W. Europe Standard Time)");
document.write('format day enough: ' + d + '</br>');
