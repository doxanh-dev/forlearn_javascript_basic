

//Function change tag color
function changeTagColor(typeTag)
{
    var tags = document.getElementsByTagName(typeTag);

    for(var i = 0; i < tags.length; i++)
    {
        //even is red color
        if((i+1) % 2 == 0 )
        {
            tags[i].style.background = 'red';
        }
        else //odd is green color
        {
            tags[i].style.background = 'green';
        }
        
    }
}

//add Event
function addEvent(tagEvent,addEvent,Tag)
{
    var btnEvent = document.getElementById(tagEvent);
    btnEvent.addEventListener(addEvent,function(){
        changeTagColor(Tag);
    })
}

addEvent('tagEvent','click','h1');