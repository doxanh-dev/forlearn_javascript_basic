
//funcion ẩn hiện menu
function AnHienMenu(){
    document.addEventListener("DOMContentLoaded", function(){
        // Khởi tạo biến icon để truy xuất phần tử icon
        var icon = document.querySelectorAll('i');

        // Khởi tạo biến "content" để truy xuất phần tử div có class = "content"
        var content = document.querySelectorAll('div.menuContent');

        // Khởi tạo biến "status" gán giá trị ban đầu là “click1” để đặt điều kiện cho câu lệnh if
        var status ="click1";

        // Tạo sự kiện onclick cho icon bằng function anonymous
        icon[0].onclick = function(){
            if(status == "click1"){
                // Làm cái icon tam giác biến thành màu trắng khi click lần 1
                this.style.color = "white";
                // Hiện thị ra cái div "content"
                content[0].style.display = "block";
                status = "click2";
            }
            else if(status == "click2"){
                //Làm cái icon tam giác biến thành màu đen khi click lần 2
                this.style.color = "black";
                // Ẩn div "content" đi
                content[0].style.display = "none";
                status = "click1";
            }

        }
    }, false)
}

AnHienMenu();