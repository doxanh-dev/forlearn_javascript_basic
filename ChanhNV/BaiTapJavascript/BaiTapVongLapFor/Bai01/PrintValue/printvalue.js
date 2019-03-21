
//Function Print Value
function printValue(ipNumber, idResult)
{
    //Get value
    var value = document.getElementById(ipNumber).value;

    //PartInt int
    value = parseInt(value);

    //Repeat to prtint result
    var result = '';
    for (var i = 1; i <= value; i++)
    {
        result += i + ' ';
    }

    //print result
    document.getElementById(idResult).innerHTML = result;

}

//addEvent
function addEventPrint(idEvent,addevent,idInput,idResult)
{
    var btnEvent = document.getElementById(idEvent);
    btnEvent.addEventListener(addevent, function(){
        printValue(idInput, idResult);
    }) 
}

addEventPrint('ipEvent','click','ipNumber','ipResult');

