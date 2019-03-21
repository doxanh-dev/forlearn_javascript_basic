document.write("hash:" +window.location.hash + "<br/>");
document.write("host:" +window.location.host + "<br/>");
document.write("hostname:" +window.location.hostname + "<br/>");
document.write("href:" +window.location.href + "<br/>");
document.write("origin:" +window.location.origin + "<br/>");
document.write("pathname:" +window.location.pathname + "<br/>");
document.write("port:" +window.location.port + "<br/>");
document.write("search:" +window.location.search + "<br/>");



//Function RefershPage: window.location.reload(url)
function refershPage(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        window.location.reload();
    })
}

//Function replace Page
function replacePage(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        window.location.replace('https://www.google.com/'); 
    })
}

//Function hrefPage
function hrefPage(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        window.location.href = 'https://www.google.com/';
    })
}


//window.location.assign(url) 
function assignPage(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        window.location.assign('https://www.google.com/');
    })
}


refershPage('refeshPage');
replacePage('replacePage');
hrefPage('hrefPage');
assignPage('assignPage');
