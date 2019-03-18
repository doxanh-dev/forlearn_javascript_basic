// Khai báo mảng chứa các câu thông báo
var arrNotify = [
    "Bạn chưa nhập số 1 số nguyên!"
    , "Bạn phải nhập số nguyên"
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

// Hàm tìm dãy số từ số nguyên nhập vào
function getArrNum(numInput)
{
    var arrResult = [];
    for(var number= 0; number <= numInput; number++)
    {
        arrResult.push(number);
    }

    return arrResult;
}

// Hàm tìm số chia hết cho 2
function findNumEven(number)
{
    var result = false;
    if(number % 2 == 0)
    {
        result = true;
    }
    
    return result;
}

// Hàm tìm ra dãy số từ 2 đến số nguyên nhập vào
function findArrNumber(arrNumber)
{
    var arrResult = [];
    for(var i = 2; i < arrNumber.length; i++)
    {
        if(findNumEven(arrNumber[i]))
        {
            arrResult.push(arrNumber[i]);
        }
    }
    
    return arrResult;
}

// Hàm tính tích từ dãy số chia hết cho 2
function getMulNumber(arrNumber)
{
    var result = 1;
    for(var i = 0; i < arrNumber.length; i++)
    {
        result *= arrNumber[i];
    }

    return result;
}

// Hàm hiển thị danh sách dãy số chẵn từ 2
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


// Thêm sự kiện click cho button#btnTinh
document.getElementById('btnTinh').addEventListener('click', function () {
    // Lấy giá trị số nhập vào
    var soNguyen = document.getElementById('SoNguyen');

    // Lấy ra thẻ hiển thị kết quả
    var divShowArr= document.getElementById('showResult');

    // Khai báo mảng chứa dãy số từ 2 đến số nguyên nhập vào
    var arrNum = [];

     // Khai báo mảng chứa dãy số chia hết cho 2
    var arrDivTwo = [];

    // Khai báo biến để lưu tích của dãy số chia hết cho 2
    var muilArr = 1;

    // Tạo biến để hiển thị dãy số chia hết cho 2
    var arrResult = "";

    // Khai báo biển hiển thị câu thông báo
    var mesResult = "";

    // Kiểm tra số nhập vào rỗng
    if (isEmpty(soNguyen)) {
        UIkit.modal.alert(arrNotify[0]);
    }// Kiểm tra số nhập vào là nguyên hay không
    else if (isNaNumber(soNguyen)) {
        UIkit.modal.alert(arrNotify[1]);
    }
    else {
        // Chuyển đổi sang kiểu nguyên
        soNguyen = parseInt(soNguyen.value);
        if(soNguyen < 2)
        {
            // Hiển thị câu thông báo
            mesResult = 'Không tồn tại dãy số!';
        }
        else
        {
            // Tìm ra dãy số từ 2 đến số nguyên nhập vào
            arrNum = getArrNum(soNguyen);

            // Tìm ra dãy số chia hết cho 2
            arrDivTwo = findArrNumber(arrNum);

            // Tính tích của dãy số chia hết cho 2
            muilArr = getMulNumber(arrDivTwo);

            // Hiển thị dãy số chia hết cho 2
            arrResult = viewArr(arrDivTwo);

            // Hiển thị câu thông báo
            mesResult = 'Dãy số chẵn từ 2 cho đến số nhập vào là: ' + '\n \t'
            + arrResult + '\n'
            + 'Tích của dãy số là: ' + muilArr + '.';

        }

        // Hiển thị kết quả
        viewResult(divShowArr, mesResult);

    }


})
