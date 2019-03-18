
//Get object
 var input = document.getElementById("txt-val");
             
 // add event for object
 input.addEventListener('keyup', function(){
     // get value for tag div
     document.getElementById('result').innerHTML = input.value;
 });

 //add event for object
 input.addEventListener('keyup', function(){
    if (input.value.length > 5){
        alert("You enter more 5 words");
    }
});