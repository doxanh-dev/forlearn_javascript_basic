

//Function: KiemTraSoChinhPhuong
function KiemTraSoChinhPhuong(number)
{
    var result;
    if (Math.sqrt(number) % 1 == 0){
        result = 1;
    }
    else {
        result = 2;
    }
    return result;
}

//Call function KiemTraSoChinhPhuong
function addEvent(idAddEvent,event, number, ipresult)
{
    return document.getElementById(idAddEvent).addEventListener(event, function(){
        //Get b
        var numberCheck = document.getElementById(number).value;
        var isCheck = KiemTraSoChinhPhuong(numberCheck);
        var result = document.getElementById(ipresult);
        if(isCheck === 1)
        {
            //show result
            result.value = numberCheck + ' là số chính phương';
            result.style.border = '2px solid green';
            result.style.backgroundColor = 'yellow';
        }
        else
        {
            //show result
            result.value = numberCheck + ' không là số chính phương';
            result.style.border = '2px solid red';
            result.style.backgroundColor = 'yellow';
        }
    })
}

addEvent('ipEvent','click', 'numberCheck','result');