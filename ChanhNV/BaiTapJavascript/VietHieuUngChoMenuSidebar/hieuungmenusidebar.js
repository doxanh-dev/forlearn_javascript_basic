document.addEventListener("DOMContentLoaded",function(){
    // Gọi đến button để thêm sự kiện
    var node = document.querySelectorAll("button");
    var node = node[0];

    // Gọi đến menu
    var menu = document.querySelectorAll(".menu");
    var menu = menu[0];

    // Gọi màn hình hiện ra
    var manhinhden = document.querySelectorAll(".manhinhden");
    var manhinhden = manhinhden[0];

    // Thêm sự kiện onclick
    node.onclick = function(){
        menu.classList.add('menuhienra');
        manhinhden.classList.add('manhinhdenhienra');
    }

    manhinhden.onclick = function(){
        manhinhden.classList.remove('manhinhdenhienra');
        menu.classList.remove('menuhienra');
    }
},false)