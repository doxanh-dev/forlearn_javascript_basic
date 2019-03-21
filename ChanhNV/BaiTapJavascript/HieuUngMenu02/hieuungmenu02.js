document.addEventListener("DOMContentLoaded",function(){
    // Truy xuất đến button để thêm sự kiện click
	var nut = document.querySelectorAll("button");
    var nut = nut[0];
    
    // Truy xuất đến menu
	var menu = document.querySelectorAll(".menu");
    var menu = menu[0];
    
    // Truy xuất đên màn hình
	var manhinhden = document.querySelectorAll(".manhinhden");
	var manhinhden = manhinhden[0];
	var manhinhtrang = document.querySelectorAll(".manhinhtrang");
    var manhinhtrang = manhinhtrang[0];
    
    // Thêm sự kiện vào nút
	nut.onclick = function(){
        // Màn hình hiện ra
		menu.classList.add('menuhienra');
		manhinhden.classList.add('manhinhdenhienra');
		manhinhtrang.classList.add('manhinhtrangquay');
    }

	manhinhden.onclick = function(){
        // Màn hình ẩn đi
		manhinhden.classList.remove('manhinhdenhienra');
		menu.classList.remove('menuhienra');
		manhinhtrang.classList.remove('manhinhtrangquay');
	}
},false)
