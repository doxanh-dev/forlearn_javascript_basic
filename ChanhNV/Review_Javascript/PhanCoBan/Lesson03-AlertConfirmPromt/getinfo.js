
//Function to get infomation person
function getInfoPerson(id)
{
    var btnClick = document.getElementById(id);

    btnClick.addEventListener('click', function(){
        var username = prompt('Enter your name: ');
        var yourBirhDate = prompt('Enter your birthdate: ');

        alert('Your name is: ' + username + '\n' +
        'Your birthdate is: ' + yourBirhDate);
    });
}

getInfoPerson('btnGetInfo')