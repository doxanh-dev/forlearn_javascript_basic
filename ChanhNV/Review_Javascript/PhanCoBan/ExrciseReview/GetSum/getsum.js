
//Function getSum from number enter your screen
function getSum(id)
{
    var btnGetSum = document.getElementById(id);
    btnGetSum.addEventListener('click', function(){
        confirm('Hello! This is program get sum from screen!'+ '\n' +
            'Click Ok to continue!');
        var numberOne = prompt('Please number One: ');
        var numberTwo = prompt('Please number Two: ');
        var sum = numberOne+numberTwo;
        alert(sum);
        document.write('Sum is: '+ sum);
    });

}

getSum('btnGetSum')