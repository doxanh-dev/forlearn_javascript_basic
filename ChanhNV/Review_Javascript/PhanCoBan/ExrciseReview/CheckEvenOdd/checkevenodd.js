
//Function check even number- odd number
function checkEvenOdd(id)
{
    var btnCheckEvenOdd = document.getElementById(id);
    btnCheckEvenOdd.addEventListener('click', function(){
        var numberCheck = parseInt(prompt('Please enter number: '));
        if(numberCheck % 2 == 0)
        {
            alert(numberCheck + ' is number odd');
        }
        else
        {
            alert(numberCheck + ' is number even');
        }

    });
}
checkEvenOdd('checkEvenOdd');