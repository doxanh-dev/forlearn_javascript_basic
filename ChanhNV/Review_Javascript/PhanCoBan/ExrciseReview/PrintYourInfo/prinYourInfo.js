
//Function to print your infomation
function printYourInfo(id)
{
    var btnprintYourInfo = document.getElementById(id);
    btnprintYourInfo.addEventListener('click', function(){
        var yourName = prompt('Plase enter your name');
        var yourEmail = prompt('Plase enter your email');
        
        alert('Your name is: '+ yourName);
        alert('your Email is: '+ yourEmail);
    
    })
}

printYourInfo('btnPrint');