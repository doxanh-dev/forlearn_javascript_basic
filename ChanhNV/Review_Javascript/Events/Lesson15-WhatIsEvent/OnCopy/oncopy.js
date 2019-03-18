

//Function show message when copy
function showMesCopy()
{
    alert('You copy success!!!');
}

function  evenCopy(id)
{
    var divcopy = document.getElementById(id);
    divcopy.addEventListener('copy', function(){
        showMesCopy();
    })

}

evenCopy('copy');