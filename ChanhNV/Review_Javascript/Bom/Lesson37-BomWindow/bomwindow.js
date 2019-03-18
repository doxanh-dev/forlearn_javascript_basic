

//Get height browser
var heightBrowser = window.innerHeight;
document.write('height browser is: ' + heightBrowser + '</br>');
var widthBrowser = window.innerWidth;
document.write('width browser is: ' + widthBrowser + '</br>');

var windowChild = null;

//function open a window
function openAWindow()
{
    windowChild = window.open('https://www.google.com/', "windowChild", "width=500, height=500", "top=1000, left= 300");
     return false;
}

function openWindow(tagEvent){
    document.getElementById(tagEvent).addEventListener('click', function(){
        openAWindow();
    })
}

//function close Window
function closeAWindow()
{
    windowChild.close()
    return false;
}

function closeWindow(tagEvent){
    document.getElementById(tagEvent).addEventListener('click', function(){
        closeAWindow()
    })
}

//Function remove window
function moveAWindow()
{
    windowChild.moveTo(500, 200);
    windowChild.focus();
    return false;
}

function moveWindow(tagEvent){
    document.getElementById(tagEvent).addEventListener('click', function(){
        moveAWindow();
    })
}


openWindow('openWindow');
closeWindow('closeWindow');
moveWindow('moveWindow');