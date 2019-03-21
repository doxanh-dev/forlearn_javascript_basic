
// Khai báo mảng chứa các câu thông báo
var arrNotify = [
    "Bạn chưa nhập số thứ nhất!"
    , "Bạn chưa nhập số thứ hai!"
    , "Bạn phải nhập số nguyên"
];

// Hàm kiểm tra dữ liệu trống
function isEmpty(tagText) {
    // Lấy ra value để kiểm tra
    textValue = tagText.value;

    // Khai báo kết quả trả về
    var result = false;

    // Nếu rỗng thì true
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
    // Lấy ra value để kiểm tra
    textValue = tagText.value;
    // Khai báo kết quả trả về
    var result = false;

    // Nếu không phải số nguyên thì true
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

// Hàm tìm số lớn nhất trong mảng
function findMaxNumber(arrNumber) {
    var maxNum = arrNumber[0];
    for (var i = 0; i < arrNumber.length; i++) {
        if (maxNum <= arrNumber[i]) {
            maxNum = arrNumber[i];
        }
    }
    return maxNum;
}

// Hàm tìm số dãy số từ 2 số nhập vào
function findArrNum2num(numOne, numTwo)
{
    var arrResult = [];
    var bNum = 0;
    var sNum = 0;
    if(numOne > numTwo)
    {
        bNum = numOne;
        sNum = numTwo;
    }
    else{
        bNum = numTwo;
        sNum = numOne;
    }

    for(sNum;sNum <= bNum; sNum++)
    {
        arrResult.push(sNum);
    }

    return arrResult;
}

// Hàm tìm số chia hết cho 3 nhưng không chia hết cho 9
function isNumDivThree(number){
    var result = false;
    if(number % 3 == 0 && number % 9!= 0)
    {
        result = true;
    }
    return result;
}

// Hàm tìm ra dãy số chia hết cho 3
function findArrDivThree(arrNumber)
{
    var arrResult = [];
    for(var i = 0; i < arrNumber.length; i++)
    {
        if(isNumDivThree(arrNumber[i]))
        {
            arrResult.push(arrNumber[i]);
        }
    }
    
    return arrResult;
}

// Hàm hiển thị danh sách dãy số chia hết cho 3
function viewArr(arrShow) {
    var arr = "";
    for (var i = 0; i < arrShow.length; i++) {
        arr += arrShow[i] + '\t';
    }
    return arr;

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

// Thêm sự kiện click vào button#btnTinh
document.getElementById('btnTinh').addEventListener('click', function () {
    // Khai báo mảng chứa dãy số từ 2 số nguyên
    var arrNum2num = [];

    // Khai báo mảng chứa dãy số chia hết cho 3 nhưng không chia hết cho 9
    var arrNum = [];

    // Khai báo mảng hiển thị dãy số chia hết cho 3 nhưng không chia hết cho 9
    var arrResult = "";

    // Lấy giá trị 2 số nhập vào
    var soThuNhat = document.getElementById('SoThuNhat');
    var soThuHai = document.getElementById('SoThuHai');

    // Lấy ra thẻ hiển thị kết quả
    var divShowArr= document.getElementById('showResult');

    // Khai báo biển hiển thị câu thông báo
    var mesResult = "";

    // Kiểm tra dữ liệu rỗng số thứ nhất
    if (isEmpty(soThuNhat)) {
        UIkit.modal.alert(arrNotify[0]);
    }// Kiểm tra dữ liệu rỗng số thứ hai
    else if (isEmpty(soThuHai)) {
        UIkit.modal.alert(arrNotify[1]);
    }// Kiểm tra dữ liệu phải số nguyên
    else if (isNaNumber(soThuNhat) || isNaNumber(soThuHai)) {
        UIkit.modal.alert(arrNotify[2]);
    }
    else {
        // Chuyển đổi 2 số sang kiểu nguyên
        soThuNhat = parseInt(soThuNhat.value);
        soThuHai = parseInt(soThuHai.value);

        // Tìm ra mảng chứa dãy số từ 2 số nguyên
        arrNum2num = findArrNum2num(soThuNhat, soThuHai);

        // Tìm mảng chứa dãy số chia hết cho 3 nhưng không chia hết cho 9
        arrNum = findArrDivThree(arrNum2num);

        // Hiển thị dãy số chia hết cho 3 nhưng không chia hết cho 9
        arrResult = viewArr(arrNum);

        // Hiển thị kết quả
        mesResult = 'Dãy số chia hết cho 3 mà nhưng không chia hết cho 9 là: ' + '\n \t'
                                + arrResult + '\n'
                                + 'Vậy có ' + arrNum.length + ' số thỏa điều kiện.';

        viewResult(divShowArr, mesResult);

    }


})
