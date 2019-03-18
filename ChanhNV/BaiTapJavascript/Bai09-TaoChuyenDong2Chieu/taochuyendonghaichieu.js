
function taoChuyenDongHaiChieu()
{
    document.addEventListener("DOMContentLoaded", function(){
        // Khởi tạo biến node để truy xuất phần tử button
        var node = document.getElementsByTagName('button');

        // Khởi tạo biến "frame" để truy xuất phần tử div
        var frame = document.getElementsByTagName('div');

        // Khởi tạo biến "status" gán giá trị ban đầu là “click1”
        // để đặt điều kiện cho câu lệnh if
        var status = "click1";

        // Tạo sự kiện onclick cho button
        node[0].onclick = function(){
            if(status == "click1"){
                frame[0].classList.remove('action02');
                frame[0].classList.add('action01');
                status = "click2";
            }
            else if(status=="click2"){
                frame[0].classList.remove('action01');
                frame[0].classList.add('action02');
                status = "click1";
            }
        }
    },false)
}

taoChuyenDongHaiChieu();

