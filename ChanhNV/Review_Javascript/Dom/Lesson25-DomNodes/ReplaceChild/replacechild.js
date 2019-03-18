

//Function replace child
function replaceTagChild(tagEvent,tagNeedReplace, tagParent){
    document.getElementById(tagEvent).addEventListener('click', function(){
        //create a tag
        var h6 = document.createElement('h6');
        h6.innerHTML = 'Jvascript';

        //Get tag need to replace
        var tagReplace = document.getElementsByTagName(tagNeedReplace)[0];

        //Replace
        document.getElementById(tagParent).replaceChild(h6, tagReplace);
    })
}

//Call function replaceTagChild
replaceTagChild('btn-replace','h5', 'content');