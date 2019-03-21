
//Function to apply form
function applyForm(id)
{
    var btnClick = document.getElementById(id);
    btnClick.addEventListener('click', function(){
        var isOk = confirm('Please choose: ');
        if(isOk)
        {
            alert('Your choose is OK');
        }
        else
        {
            alert('Your choose is cancle');
        }
        
    })
}

applyForm('btnClick')