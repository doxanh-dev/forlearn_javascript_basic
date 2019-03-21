

//Function Kiem Tra So Nguyen To
function kiemTraSoNguyenTo(number)
{
    //flag to check
    var isSNT = true;

    //If < 2 is false
    if(number < 2)
    {
        isSNT = false;
    }
    else if (number == 2){
        isSNT = true;
    }
    else if (number % 2 == 0){
        isSNT = false;
    }
    else{
        // Repeat 3 -> number -1 with step = 2 (i+=2)
        for (var i = 3; i < number - 1; i+=2)
        {
            if (number % i == 0){
                isSNT = false;
                break;
            }
        }
    }

    return isSNT;
}


//Function Print So Nguyen To
function printSoNguyenTo(numberLimit, idResult)
{
    //get limit
    var limit = document.getElementById(numberLimit).value;

    //convert to int
    limit = parseInt(limit);

    //Repeate to print result
    var result = '';
    for(var i = 1; i <= limit; i++)
    {
        //if isSNT to print
        var isSNT = kiemTraSoNguyenTo(i);

        if(isSNT)
        {
            result += i + ' ';
        }
        document.getElementById(idResult).innerHTML = result;

    }

}

//addEvent
function addEventPrint(idEvent,addevent,numberLimit,idResult)
{
    var btnEvent = document.getElementById(idEvent);
    btnEvent.addEventListener(addevent, function(){
        printSoNguyenTo(numberLimit, idResult);
    }) 
}

addEventPrint('addEvent','click','numLimit','result');
