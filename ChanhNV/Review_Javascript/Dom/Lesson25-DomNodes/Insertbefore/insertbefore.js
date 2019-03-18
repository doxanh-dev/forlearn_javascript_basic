
//Function insert tag before
function inserttagBefore(btnGet,tagFinal,tagInsert){
    //get button
    var button = document.getElementById(btnGet);
    button.addEventListener('click', function(){
        //create a tag h1
        var h1 = document.createElement("h1");

        //add content h1
        h1.innerHTML = "Study SQL";

        //get tag insert final
        var element = document.getElementById(tagFinal);

        // get tag insert
        var element_child = document.getElementsByTagName(tagInsert)[1];
        
        // Insert Before
        element.insertBefore(h1, element_child);

    })
}

inserttagBefore('btn-view','content','h5');