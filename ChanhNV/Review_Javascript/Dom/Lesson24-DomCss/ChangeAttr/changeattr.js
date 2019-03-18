
//function change background
function changeBackground(idEvent,idChange, color){
    document.getElementById(idEvent).addEventListener('click', function(){
        document.getElementById(idChange).style.background = color;
    })
}

//function change color
function changeColor(idEvent,idChange, color){
    document.getElementById(idEvent).addEventListener('click', function(){
        document.getElementById(idChange).style.color = color;
    })
}

//function change height
function changeHeight(idEvent,idChange, height){
    document.getElementById(idEvent).addEventListener('click', function(){
        document.getElementById(idChange).style.height = height;
    })
}

//function change fontSize

function changefontSize(idEvent,idChange, fontSize){
    document.getElementById(idEvent).addEventListener('click', function(){
        document.getElementById(idChange).style.fontSize = fontSize;
    })
}

changeBackground('changeBackground','changeAttr', 'green');
changeColor('changeColor','changeAttr', 'red');
changeHeight('changeHeight','changeAttr', '150px');
changefontSize('changeFontSize','changeAttr', '20px');