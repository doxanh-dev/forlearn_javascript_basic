//get object
var a_list = document.getElementsByClassName("show");
             
// Lặp và gán sự kiện
for (var i = 0; i < a_list.length; i++){
    a_list[i].onclick = function()
    {
        alert('Hello, you click tag');
       
        // return false để khỏi reload trang
        return false;
    };
}