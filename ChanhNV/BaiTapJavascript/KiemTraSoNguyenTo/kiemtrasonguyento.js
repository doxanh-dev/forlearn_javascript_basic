

//Function KiemTraSoNguyenTo
function KiemTraSoNguyenTo(number)
{
    //flag to check
    var isSNT = true;

    //Nếu number < 2 thì không phải Số nguyên tố
    if(number < 2)
    {
        isSNT = false;
    }
    else if(number == 2)
    {
        isSNT = true;
    }
    else if (number % 2 == 0){
        isSNT = false;
    }
    else
    {
        // Lặp từ 3 tới number-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(number); i+=2)
        {
            if (number % i == 0){
                isSNT = false;
                break;
            }
        }

    }

    return isSNT;
}

//call funtion KiemTraSoNguyenTo
function addEvent(idAddEvent,event, number, ipresult)
{
    return document.getElementById(idAddEvent).addEventListener(event, function(){
        //Get b
        var numberCheck = document.getElementById(number).value;
        var isSNT = KiemTraSoNguyenTo(numberCheck);
        var result = document.getElementById(ipresult);
        if(isSNT)
        {
            //show result
            result.value = numberCheck + ' là số nguyên tố';
            result.style.border = '2px solid green';
            result.style.backgroundColor = 'yellow';
        }
        else
        {
            //show result
            result.value = numberCheck + ' không là số nguyên tố';
            result.style.border = '2px solid red';
            result.style.backgroundColor = 'yellow';
        }
    })
    
}

addEvent('ipEvent','click', 'numberCheck','result');