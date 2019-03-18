// Khai báo mảng chưa các số vào để kiểm tra
var arrNumber = [];

// Hàm kiểm tra dữ liệu trống
function isEmpty(tagText) {
    textValue = tagText.value;
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
    textValue = tagText.value;
    var result = false;
    if (isNaN(textValue)) {
        result = true;
        tagText.style.border = 'solid 2px red';
    }
    else {
        tagText.style.border = 'solid 2px green';
    }

    return result;
}

//Hàm tìm số lớn nhất trong mảng
function findMaxNumber(arrNumber) {
    var maxNum = arrNumber[0];
    for (var i = 0; i < arrNumber.length; i++) {
        if (maxNum <= arrNumber[i]) {
            maxNum = arrNumber[i];
        }
    }
    return maxNum;
}

// Khai báo mảng chứa các câu thông báo
var arrNotify = [
    "Bạn chưa nhập số thứ nhất!"
    , "Bạn chưa nhập số thứ hai!"
    , "Bạn chưa nhập số thứ ba!"
    , "Bạn phải nhập số nguyên"
];

// Hàm hiển thị kết quả
function viewResult(tagResult, message)
{
    // Hiển thị kết quả
    tagResult.innerHTML = message;
    tagResult.style.border = 'grey solid 1px';
    tagResult.style.color = 'blue';
    UIkit.modal.alert(message);
}


document.getElementById('btnKiemTra').addEventListener('click', function () {
    // Lấy giá trị 3 số nhập vào
    var soThuNhat = document.getElementById('SoThuNhat');
    var soThuHai = document.getElementById('SoThuHai');
    var soThuBa = document.getElementById('SoThuBa');

     // Lấy ra thẻ hiển thị kết quả
    var divShowArr = document.getElementById('showResult');

    // Khai báo biển hiển thị câu thông báo
    var mesResult = "";

    // Khai báo biến tìm số lớn nhất
    var maxNumber = 0;

    // Kiểm tra dữ liệu rỗng số thứ nhất
    if (isEmpty(soThuNhat)) {
        UIkit.modal.alert(arrNotify[0]);
    }// Kiểm tra dữ liệu rỗng số thứ hai
    else if (isEmpty(soThuHai)) {
        UIkit.modal.alert(arrNotify[1]);
    }// Kiểm tra dữ liệu rỗng số thứ ba
    else if (isEmpty(soThuBa)) {
        UIkit.modal.alert(arrNotify[2]);
    }// Kiểm tra dữ liệu có phải dữ liệu số
    else if (isNaNumber(soThuNhat) || isNaNumber(soThuHai) || isNaNumber(soThuBa)) {
        UIkit.modal.alert(arrNotify[3]);
    }
    else {
        // Thêm 2 số vào mảng dữ liệu
        arrNumber.push(parseInt(soThuNhat.value), parseInt(soThuHai.value), parseInt(soThuBa.value));

        // Tìm số lớn nhất trong mảng
        maxNumber = findMaxNumber(arrNumber);

        // Hiển thị kết quả
        mesResult = 'Số lớn nhất trong dãy số: ' + '[ ' +
                    + soThuNhat.value + '\t' + soThuHai.value+ '\t' + soThuBa.value + '] ' + '\n' +' là: ' + maxNumber;

        viewResult(divShowArr, mesResult);

    }


})
