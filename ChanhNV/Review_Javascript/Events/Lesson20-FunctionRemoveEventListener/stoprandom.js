

//Get objects
var result = document.getElementById("result");
var button = document.getElementById("stop_random");
var html = document.getElementsByTagName("html")[0];

// Define randoms
function do_random()
{
    var randomString = Math.random();
    result.innerHTML = randomString;
}
 
// Add action random for event mousemove tag <html>, 
html.addEventListener("mousemove", do_random);

//Add event click for button
button.addEventListener("click", function(){
    // Remove event mousemove
    html.removeEventListener("mousemove", do_random);
});
button.addEventListener("click", function(){
    // Add event mousemove
    html.addEventListener("mousemove", do_random);
});     