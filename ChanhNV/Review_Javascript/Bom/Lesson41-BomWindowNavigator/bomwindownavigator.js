
//Check cookie
if (window.cookieEnabled){
    alert("enable cookie");
}
else{
    alert("cookie turn off");
}

//Check name browser
document.write("Browser name: " + window.navigator.appName + "<br/>");
document.write("Code Name: " + window.navigator.appCodeName + "<br/>");

//Check Engine of browser
document.write("Engine: " + navigator.product);

//Check version of browser
document.write("Method 01: " + navigator.appVersion + "<br/>");
document.write("Method 02: " + navigator.userAgent + '<br/>');

//Check platform
document.write("Platform: " + navigator.platform + '<br/>');

document.write("Language Browser: " + navigator.language + '<br/>');
