//function indexOf
var strIndexOf = 'Welcome to shaisunkan';
document.write('Position of shaishunkan is: ' + strIndexOf.indexOf('shaisunkan') + '</br>');


//function lastIndexOf()
var strLastIndexOf = "Study javascript and Reactjs. Reactjs is good";
document.write("Position last of Reactjs is : " + strLastIndexOf.lastIndexOf("Reactjs") + '</br>');

//function search()
var strSearch = "Javascript, Reactjs, Asp.net";
document.write("Position Asp.net is: " + strSearch.search("Asp.net") + '</br>');
document.write('</br>');

//slice(start, end)
var strSlice = "Welcome to shaisunkan on Sunday";
document.write(strSlice);
document.write('</br>');
document.write("Using function slice, String will have: " + strSlice.slice(0, 6) + '</br>');
document.write('</br>');

//substring(start, end)
var strSubstring = "Welcome to shaisunkan on Sunday";
document.write(strSubstring);
document.write('</br>')
document.write("Using function substring, String will have: " + strSubstring.substring(11, 23) + '</br>');
document.write('</br>')

//substr(start, length)
var strSubstr= "Welcome to shaisunkan";
document.write(strSubstr);
document.write('</br>');
document.write("Using function substr, String will have: " + strSubstr.substr(8, 2) + '</br>');
document.write('</br>');

//replace(str_find, str_replace)
var strFinRep = "Hello World";
document.write(strFinRep);
document.write('</br>');
document.write('After find and replace string is: ' + strFinRep.replace("World", "earth"));
document.write('</br>');

//toUpperCase(), toLowerCase().
var strBasic = 'Javascript';
document.write('</br>');
document.write('String basic: '+ strBasic + '</br>');
document.write('String toUpperCase: ' + strBasic.toUpperCase() + "<br/>");
document.write('String toLowerCase: ' + strBasic.toLowerCase());
document.write('</br>');

//charAt(),charCodeAt()
document.write('String charAt() 1: ' +strBasic.charAt(1) + "<br/>");
document.write('String charCodeAt() 1: ' +strBasic.charCodeAt(1) + "<br/>");



//add string using concat()
var strSai = "Welcome " + "to" + " shaisunkan";
document.write(strSai + "<br/>");
// hoặc
var strSaishunKan = "Hello ";
document.write(strSaishunKan + "<br/>");
strSaishunKan = strSaishunKan.concat("to ", "Shai");
document.write(strSaishunKan + "<br/>");

//split()
stringShai = "Shaisunkan company  dfdh";
document.write(stringShai.split(" ").length);



