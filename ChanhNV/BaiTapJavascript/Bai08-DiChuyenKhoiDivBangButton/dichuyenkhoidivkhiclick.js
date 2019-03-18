
//Function: Di chuyển khối div
function DiChuyenKhoiDiv(btnClick){
    //Chọn button muốn thêm sự kiện click
    document.getElementById(btnClick).addEventListener('click', function(){
        //chọn button thêm sự kiện ckick di chuyển
        var node = document.querySelectorAll('button');
        
        //chọn khối nhận sự kiện, thêm class .move khi click
        var frame = document.querySelectorAll('div');
        node[0].onclick = function(){
            frame[0].classList.toggle('move');}
    }, false)
}

DiChuyenKhoiDiv('btnClick');

