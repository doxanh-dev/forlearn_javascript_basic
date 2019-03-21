 
 //Function find Min, Max
 function findMinMax(tagAddEvent){
    document.getElementById(tagAddEvent).addEventListener('click', function(){

    //Declare var to save min, max
    var min = null;
    var max = null;

    //var save value when enter in screen
    var value = '';

    //find min, max
    while(value != null)
    {
        //get value
        value = prompt('Please enter your number!');

        //if you don't choose cancle
        if(value != null)
        {
            //if enter first input, min = max
            if(min == null)
            {
                min = value;
                max = value;
            }
            else 
            {
             // ngược lại sẽ kiểm tra gán min và max
                if (min > value){
                    min = value;
                }
                if (max < value){
                    max = value;
                }
            }

        }
    }

    //show result
    document.write('Result Min is: '+ min + ' Max is: '+ max)

    });

 }
 
 findMinMax('findMinMax');