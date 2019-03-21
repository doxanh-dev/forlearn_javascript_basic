//Function show content
function showContent(idMessage, idResult)
{
    //Get 2 tag HTML
    var input = document.getElementById(idMessage);
    var div = document.getElementById(idResult);

    //Set content to tag input
    div.innerHTML = input.value;
}

//get input
function getInput(idInput,idMessage,idResult)
{
    var inputValue = document.getElementById(idInput);
    inputValue.addEventListener('keyup', function(){
        showContent(idMessage, idResult)
    })

}
getInput('inputValue','inputValue','result');
