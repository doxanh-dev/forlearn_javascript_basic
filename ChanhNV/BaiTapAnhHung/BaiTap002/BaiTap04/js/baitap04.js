// Khai báo mảng chứa các câu thông báo
var arrNotify = [
    "Bạn chưa nhập Họ tên!"
    , "Bạn phải nhập điểm Toán!"
    , "Bạn phải nhập điểm Anh!"
    , "Bạn phải nhập điểm đúng định dạng!"
    , "Phải nhập điểm Toán từ 0 -> 10!"
    , "Phải nhập điểm Anh từ 0 -> 10!"
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

// Hàm kiểm tra dữ liệu có phải số
function isNaNumber(tagText) {
    // Lấy giá trị input
    textValue = tagText.value;

     // Khai báo biến kết quả là false
    var result = false;

    if (isNaN(textValue)) {
        result = true;
        tagText.style.border = 'solid 2px red';
    }
    else {
        result = false;
        tagText.style.border = 'solid 2px green';
    }

    return result;
}

// Hàm kiểm tra điểm có trên 8 hay không
function isOverEight(diem)
{
    var result = false;
    if(diem >= 8)
    {
        result = true;
    }
    return result;
}

// Hàm kiểm tra điểm nhập từ 0->10
function isScore(tagText)
{
    var result = true;
    diem = tagText.value;
    if(diem >= 0 && diem <= 10)
    {
        result = false;
    }
    else
    {
        tagText.style.border = 'solid 1px red';
    }
    return result;
}

// Hàm tính điểm trung bình
// kết quả trả về là điểm trung bình
function getAvg(diemToan, diemAnh)
{
    return (diemToan + diemAnh) / 2;
}
// Hàm hiển thị kết quả
function viewResult(tagResult, message)
{
    // Hiển thị kết quả
    tagResult.innerHTML = message;
    tagResult.style.border = 'grey solid 1px';
    tagResult.style.color = 'blue';
    UIkit.modal.alert(message);
}

// Thêm sự kiện click cho button#btnKiemTra
document.getElementById('btnKiemTra').addEventListener('click', function () {
    // Lấy họ tên nhập vào
    var hoTen = document.getElementById('HoTen');

    // Lấy điểm môn Toán
    var diemToan = document.getElementById('DiemToan');

    // Lấy điểm môn Toán
    var diemAnh = document.getElementById('DiemAnh');

    // Khai báo biến điểm trung bình
    var diemTb = 0;

    // Khai báo biển hiển thị câu thông báo
    var mesResult = "";

    // Lấy ra thẻ hiển thị kết quả
    var divShowArr = document.getElementById('showResult');

    // Kiểm tra họ tên  nhập vào rỗng
    if (isEmpty(hoTen)) {
        UIkit.modal.alert(arrNotify[0]);
    }// Kiểm tra điểm Toán nhập vào rỗng
    else if(isEmpty(diemToan))
    {
        UIkit.modal.alert(arrNotify[1]);
    }// Kiểm tra điểm Anh nhập vào rỗng
    else if(isEmpty(diemAnh))
    {
        UIkit.modal.alert(arrNotify[2]);
    }// Kiểm tra sdữ liệu nhập vào là số nguyên
    else if (isNaNumber(diemToan) || isNaNumber(diemAnh)) {
        UIkit.modal.alert(arrNotify[3]);
    }// Kiểm tra điểm Toán nhập vào từ 0 -> 10
    else if(isScore(diemToan))
    {
        UIkit.modal.alert(arrNotify[4]);
    }// Kiểm tra điểm Anh nhập vào từ 0 -> 10
    else if(isScore(diemAnh))
    {
        UIkit.modal.alert(arrNotify[5]);
    }
    else {

        // Chuyển đổi điểm sang kiểu nguyên
        diemToan = parseInt(diemToan.value);
        diemAnh = parseInt(diemAnh.value);

        // Tính điểm trung bình
        diemTb = getAvg(diemToan, diemAnh);

        // Kiểm tra sinh viên đạt học bổng hay không
        if(isOverEight(diemToan) && isOverEight(diemAnh) && isOverEight(diemTb))
        {
            mesResult = 'Chúc mừng bạn ' + hoTen.value + ' đạt học bổng';
        }
        else
        {
            mesResult = 'Bạn ' + hoTen.value + ' không đạt học bổng, cố gắng lần sau';
        }

        // Hiển thị kết quả
        viewResult(divShowArr, mesResult);

    }

})
