
//Function: find Date in week
function findDateInWeek(id)
{
    var findDate = document.getElementById(id);

    findDate.addEventListener('click', function(){

        //declare Date
        var date = new Date();

        //get order number of current day
        var current_day  = date.getDate();

        //declare a var to save name day
        var day_name = '';

        //find name date of current day
        switch (current_day)
        {
            case 0:
                day_name = 'Sunday';
                break;
            case 1:
                day_name = 'Monday';
                break;
            case 2:
                day_name = 'Tuesday';
                break;
            case 3:
                day_name = 'Wedsday';
                break;
            case 4:
                day_name = 'Thursday';
                break;
            case 5:
                day_name = 'Friday';
                break;
            case 6:
                day_name = 'Saturday';
                break;
            default :
                day_name = 'Date is error';

        }
        alert('Date in Week is: ' +day_name);
    })
}
findDateInWeek('findDate')