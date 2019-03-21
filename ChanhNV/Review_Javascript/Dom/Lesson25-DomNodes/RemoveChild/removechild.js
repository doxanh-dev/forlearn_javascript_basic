

//Function remove child
function removeContent(btnAddEvent, tagRemove, tagParent){
    document.getElementById(btnAddEvent).addEventListener('click', function(){
        //get tag need remove
        var needRemove = document.getElementsByTagName(tagRemove)[0];
        //Remove
        document.getElementById(tagParent).removeChild(needRemove);
    })
}

removeContent('btnAddEvent1', 'h1', 'content');
removeContent('btnAddEvent2', 'h2', 'content');
removeContent('btnAddEvent3', 'h3', 'content');
removeContent('btnAddEvent4', 'h4', 'content');