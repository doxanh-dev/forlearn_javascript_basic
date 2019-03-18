// Khai báo mảng chứa các câu thông báo
var arrNotify = [
    "Bạn chưa nhập Tiêu đề!"
    , "Bạn chưa nhập màu nền!"
    , "Bạn chưa nhập màu chữ!"
    , "Bạn chưa nhập trạng thái cửa sổ!"
];


// Hàm kiểm tra dữ liệu trống
function isEmpty(tagText) {
    // Lấy giá trị input
    textValue = tagText.value;

    // Khai báo biên kết quả, có dữ liệu là false
    var result = false;

    if (textValue == "") {
        result = true;
        tagText.style.border = 'solid 2px red';
    }
    else {
        result = false;
        tagText.style.border = 'solid 2px green';
    }

    return result;
}


// Thêm sự kiện click cho btn#btnThayDoi
document.getElementById('btnThayDoi').addEventListener('click', function(){
    var tieuDe = document.getElementById('TieuDe');
    var mauNen = document.getElementById('MauNen');
    var mauChu = document.getElementById('MauChu');
    var trangThai = document.getElementById('TrangThai');
    var changeColorText = document.getElementById('ChangeColorText');
    
    // Kiểm tra tiêu đề nhập vào rỗng
    if (isEmpty(tieuDe)) {
        UIkit.modal.alert(arrNotify[0]);
    }// Kiểm tra màu nền nhập vào rỗng
    else if(isEmpty(mauNen)){
        UIkit.modal.alert(arrNotify[1]);
    }// Kiểm tra màu chữ nhập vào rỗng
    else if(isEmpty(mauChu)){
        UIkit.modal.alert(arrNotify[2]);
    }// Kiểm tra trạng thái nhập vào rỗng
    else if(isEmpty(trangThai)){
        UIkit.modal.alert(arrNotify[3]);
    }
    else{
        document.title = tieuDe.value;
        document.bgColor = mauNen.value;
        // document.fgColor = mauChu.value;
        window.defaultStatus = trangThai.value;
        changeColorText.style.color = mauChu.value;
    }

    
})
