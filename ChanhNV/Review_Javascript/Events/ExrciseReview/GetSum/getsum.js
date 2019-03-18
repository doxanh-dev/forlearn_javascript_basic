

//Function get sum
function getSum(idBtnEvent, idNumOne, idNumTwo, idResult)
{
    var btnEvent = document.getElementById(idBtnEvent);
    btnEvent.addEventListener('click', function(){
        //Get value
        var numOne = document.getElementById(idNumOne);
        var numTwo = document.getElementById(idNumTwo);
        var result = document.getElementById(idResult);

        //Get Sum two number
        var sum = parseFloat(numOne.value) + parseFloat(numTwo.value);

        if(!isNaN(sum))
        {
            //Set value in tag id#result
            result.value = sum;
            alert('Sum is: ' + result.value);
        }
    });

}

//Call function getSum
getSum('getSum','numOne','numTwo','result' );