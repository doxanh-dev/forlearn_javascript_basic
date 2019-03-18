
//Create a tag p
var p = document.createElement('p');

//Add content HTML add tag p
p.innerHTML = 'Welcome to shaisunkan';

//Add p on tag body
document.getElementsByTagName('body')[0].appendChild(p);

//appendChild()

function appendChild(tagEvent, tagAddCont){
    document.getElementById(tagEvent).addEventListener('click', function(){
        //create a tag H1
        var h1 = document.createElement('h1');

        //add content to tag h1
        h1.innerHTML = 'Study javascript';

        //append h1 to div id=TOP
        document.getElementById(tagAddCont).appendChild(h1);
    })
}

appendChild('btnAppend', 'TOP');
