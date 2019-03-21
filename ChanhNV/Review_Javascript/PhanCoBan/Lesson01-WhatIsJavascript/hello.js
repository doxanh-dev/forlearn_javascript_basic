
function helloWorld(id)
{
    //get id#clickHello
    var clickHello =  document.getElementById(id);
    clickHello.addEventListener('click', function(){
        alert('button id#' + id);
    })
}


helloWorld('clickHello');