
//Function Find Min max
function findMinMax(id)
{
    var btnFindMinMax = document.getElementById(id);
    btnFindMinMax.addEventListener('click',function(){
        //get value from screen
        var numberOne = prompt('Please number one: ');
        var numberTwo = prompt('Please number one: ');

        numberOne = parseInt(numberOne);
        numberTwo = parseInt(numberTwo);

        if(numberOne > numberTwo)
        {
            alert('Min is: ' + numberOne+'\n'+
                    'Max is: '+ numberTwo);
        }
        else if(numberOne === numberTwo)
        {
            alert('Min = Max = '+numberOne );
        }
        else
        {
            alert('Min is: ' + numberTwo+'\n'+
                    'Max is: '+ numberOne);
        }
    })
}

findMinMax('findMinMax');