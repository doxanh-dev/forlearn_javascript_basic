
//Function print to hundered
function printOneToHundered(id)
{
    var printNumber = document.getElementById(id);

    printNumber.addEventListener('click', function(){
        for(var i = 0; i <= 100; i++)
        {
            document.write(i + ' ');
        }
        alert('program finish');
        document.write('</ br> ');
    })
}

function printHunderedToOne(id)
{
    var printNumber = document.getElementById(id);

    printNumber.addEventListener('click', function(){
        for(var j = 100; j >= 0; j--)
        {
            document.write(j + ' ');
        }
        alert('program finish');
        document.write('</ br> ');
    })
}

printOneToHundered('printNumber');
printHunderedToOne('printNumber2');