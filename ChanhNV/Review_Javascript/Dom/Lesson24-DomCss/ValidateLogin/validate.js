
//Function Validate
function validate(idSubmit,idUserName, idPassword, idMessage){

    document.getElementById(idSubmit).addEventListener('click', function(){
        //get value input
        var username = document.getElementById(idUserName).value;
        var password = document.getElementById(idPassword).value;

        //get object message
        var message = document.getElementById(idMessage);

        //Validate
        if(username == "" || password == ""){
            message.innerHTML = "You need enter enough infomation!";
            message.style.color = "red";
        }
        else{
            message.innerHTML = "Congrualations! validate submit!";
            message.style.color = "green";
        }

    })

}

validate('idLogin','username', 'password', 'message');