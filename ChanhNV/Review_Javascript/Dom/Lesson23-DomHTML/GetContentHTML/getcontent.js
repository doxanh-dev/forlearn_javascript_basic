

//Function set content tag
function setContent(tagAddEvent, divsetContent)
{
    var tagAddEvent = document.getElementById(tagAddEvent);
    tagAddEvent.addEventListener('click', function(){
        var tagContent = document.getElementById(divsetContent); 
        tagContent.innerHTML = '<h3>Content changed</h3>';
    })
}

//function get content
function getContent(tagAddEvent, divGetContent)
{
    var tagAddEvent = document.getElementById(tagAddEvent);

    tagAddEvent.addEventListener('click', function(){
        var tagGetContent = document.getElementById(divGetContent);
        var html = tagGetContent.innerHTML;
        alert('Content get: '+ html);
    });
}

setContent('set_content', 'content');
getContent('get_content','content');