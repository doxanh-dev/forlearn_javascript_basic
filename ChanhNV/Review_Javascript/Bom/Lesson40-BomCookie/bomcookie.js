
//Function create cookie
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Function get cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

//function get cookie for button
function setBtnCookie(idbtn)
{
    document.getElementById(idbtn).addEventListener('click', function(){
        setCookie('username', 'lemon', 2000);
        alert('cookie');
    })
}
function getBtnCookie(idbtn)
{
    document.getElementById(idbtn).addEventListener('click', function(){
        getCookie('username');
        alert(getCookie('username'));
    })
}

setBtnCookie('setCookie');
getBtnCookie('getCookie');
