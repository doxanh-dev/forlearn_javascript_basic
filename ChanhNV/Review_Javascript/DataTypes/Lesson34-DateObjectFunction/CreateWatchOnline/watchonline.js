

//Function Declare Watch
function startTime()
{
    //get DateTime now
    var dateNow = new Date();

    //Hours, Minutes, Seconds
    var hours = dateNow.getHours();
    var minutes = dateNow.getMinutes();
    var seconds = dateNow.getSeconds();

    //Change formart 01...09
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);


    //Write in browser
    document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds;

    //get watch 0.5s/turn
    var watch = setTimeout(function(){
        startTime();
    }, 500)
}

//Function change 1..9-> 01...09
function checkTime(i)
{
    if(i < 10)
    {
        i = "0" + i;
    }
    return i;
}

function watchOnline(idWatch)
{
    document.getElementById(idWatch).addEventListener('load', function(){
        startTime();
    })
}
