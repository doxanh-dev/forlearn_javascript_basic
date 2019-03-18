

//Xử lý chạy đồng hồ
var h = null; // Giờ
var m = null; // Phút
var s = null; // Giây

var timeout = null; // Timeout

//Bắt đầu chạy thời gian
function start(hValue, mValue, sValue) {
    //Lấy giá trị thời gian muốn khởi tạo
    if(h === null)
    {
        h = parseInt(document.getElementById(hValue).value);
        m = parseInt(document.getElementById(mValue).value);
        s = parseInt(document.getElementById(sValue).value);
    }

    // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
    //  - giảm số phút xuống 1 đơn vị
    //  - thiết lập số giây lại 59
    if (s === -1){
        m -= 1;
        s = 59;
    }

    // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
    //  - giảm số giờ xuống 1 đơn vị
    //  - thiết lập số phút lại 59
    if (m === -1){
        h -= 1;
        m = 59;
    }

    // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
    //  - Dừng chương trình
    if (h == -1){
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }

    //Hiển thị đồng hồ
    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();

    //Giảm phút xuống 1 giây và gọi lại sau 1 giây
    timeout = setTimeout(function(){
        s--;
        start();
    }, 1000);

}

function stop() {
    clearTimeout(timeout);
}

