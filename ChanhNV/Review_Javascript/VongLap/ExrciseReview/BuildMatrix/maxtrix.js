

//Function build maxtrix
function buildMatrix(id)
{
    
    var buildMaxtrix = document.getElementById(id);
    buildMaxtrix.addEventListener('click', function(){
        //loop rows
        var cols = prompt('Please enter cols: ');
         var rows = prompt('Please enter cols: ');
        for(var row= 1; row <= rows; row++)
        {
            //loop cols
            for(var col = 1; col <= cols; col++)
            {
                //print matrix
                document.write('['+row+']['+col+']' + '\n');
            }
            //add a row
            document.write('\n');
        }
        
    });
}
//Call function build matrix
 buildMatrix('btnMatrix');