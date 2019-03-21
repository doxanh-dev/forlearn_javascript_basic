
//Function watch Page History
function watchPageHistoty(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        alert("Total saved " + window.history.length);
    })
}

//Function back history page
function historyBack(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        window.history.back();
    })
}

//function forward a page
function historyForward(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        window.history.forward();
    })
}

//function forward a page
function historyGo(tagEvent)
{
    document.getElementById(tagEvent).addEventListener('click', function(){
        window.history.go(-5);
    })
}

watchPageHistoty('pagesHistory');
historyBack('historyBack');
historyForward('forwardPage');
historyGo('goPage');