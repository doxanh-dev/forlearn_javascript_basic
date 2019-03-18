

function GiaiPtBacNhat(a, b)
{
    var ipResult = document.getElementById('ipResult');
    if (a == 0 && b == 0){
        ipResult.value = 'Phương trình vô số nghiệm';
        ipResult.style.backgroundColor = 'yellow';
        ipResult.style.border = 'solid 2px green';
    }
    else if (a != 0 && b == 0){
        ipResult.style.width = '100';
        ipResult.value = 'Nghiệm: x = 0';
    }
    else if (a == 0 && b != 0){
        ipResult.value = 'PT vô nghiệm';
    }
    else {
        var re = (-b/a);
        ipResult.value = 'PT có nghiệm: ' + re;
    }
    
}

//Call function GiaiPTBacNhat
function addEvent(idAddEvent, event, inpA, inpB)
{
    return document.getElementById(idAddEvent).addEventListener(event, function(){
        //Get a
        var a = document.getElementById(inpA).value;
        //Get b
        var b = document.getElementById(inpB).value;
        GiaiPtBacNhat(a, b);
    })
}

addEvent('ipGet', 'click', 'ipA', 'ipB');
