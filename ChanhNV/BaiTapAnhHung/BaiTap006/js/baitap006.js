
// Lấy ra ô phép tính
var boxCal = document.querySelector(".box-calculation");

// Lấy ra ô kết quả
var boxResult = document.querySelector(".box-result");

// Lấy ra các nút phép toán
var btnOperation = document.querySelectorAll(".operation");

// Lấy ra nút nhân
var boxTimes = document.querySelector(".times");

// Lấy ra nút chia
var boxDivide = document.querySelector(".divide");

// Lấy ra nút bằng
var equal = document.getElementById('equal');

// Lấy ra dấu chấm
var dot = document.getElementById('dot');

// Lấy ra nút refresh
var refresh = document.getElementById('refresh');

// Lấy ra nút del
var del = document.getElementById('del');

// Lấy ra các nút số
var btnNumber = document.getElementsByClassName("number");

// Lấy ra các nút phép toán
var btnOperation = document.querySelectorAll(".operation");



// Thực hiện các hành động bên trong khi tài liệu html của trang web được load xong
window.onload = function () {
    // Vô hiệu hóa ô phép tính
    boxCal.setAttribute("disabled", true);
    boxCal.style.border = "none";

    // Vô hiệu hoá ô kết quả
    boxResult.setAttribute("disabled", true);

    // Vô hiệu hoá nút nhân
    boxTimes.setAttribute("disabled", true);

    // Vô hiệu hoá nút chia
    boxDivide.setAttribute("disabled", true);

    // Vô hiệu hoá nút bằng
    equal.setAttribute("disabled", true);
    equal.style.backgroundColor = 'black';

}

// Hàm thêm dấu chấm vào số khi click vào dấu chấm
function AddDot()
{
    // Lấy dấu chấm
    var dotVal =  dot.value;

    // Lấy chuỗi giá trị trong ô phép tính
    // Thêm dấu chấm vào sau chuỗi giá trị trong ô phép tính
    boxCal.value += dotVal;

    // Vô hiệu hoá các nút phép toán
    for (var i = 0; i < btnOperation.length; i++) {
        btnOperation[i].setAttribute("disabled", true);
    }
    
    // Vô hiệu hoá nút dấu chấm
    dot.setAttribute("disabled", true);
    dot.style.backgroundColor = 'black';
}

// Hàm refresh ô phép tính và ô kết quả
function Refresh(){
    // Làm trống ô phép tính
    boxCal.value = '';

    // Làm trống ô kết quả
    boxResult.value = '';

    // Vô hiệu hóa dấu bằng
    equal.setAttribute("disabled", true);

    // Xóa hiển thị ô kết quả
    boxResult.innerHTML = '';
}

// Hàm xóa ký tự cuối
function DelChar()
{
    // Lấy giá trị trong ô phép tính
    var valChar = boxCal.value;

    // Xoá ký tự cuối cùng chuỗi giá trị trong ô phép tính
    boxCal.value = valChar.substring(0, valChar.length - 1);

    // Nếu chuỗi hết giá trị thì không cho nhấn dấu bằng và xóa ô kết quả
    if(valChar.length <= 1)
    {
        equal.setAttribute("disabled", true);
        boxResult.innerHTML = '';
    }
}

// Hàm thêm các số khi click vào các nút số
var numFunc = function() {

    if(boxCal.value != '')
    {
        dot.removeAttribute("disabled");
    }

    // Lấy giá trị các số
    var char =  this.value;

    // Lấy chuỗi giá trị trong ô kết quả
    boxResult.setAttribute("disabled", true);

    // Lấy chuỗi giá trị trong ô phép tính
    // Thêm số vào ô phép tính khi click vào mỗi số muốn thêm
    boxCal.value += char;

    // Gỡ bỏ vô hiệu hoá các nút phép toán
    for (var i = 0; i < btnOperation.length; i++) {
        btnOperation[i].removeAttribute("disabled");
    }

    // Gỡ bỏ vô hiệu hoá nút bằng
    equal.removeAttribute("disabled");

};

// Hàm thêm phép toán
var operaFunc= function () {
    // Lấy dấu phép toán vừa click
    var charOpera = this.value;

    // Lấy chuỗi giá trị trong ô phép tính
    var valChar = boxCal.value;

    // Thêm dấu phép toán vừa click vào sau chuỗi giá trị trong ô phép tính
    boxCal.value = valChar + charOpera;

    // Vô hiệu hoá các nút phép toán
    for (var i = 0; i < btnOperation.length; i++) {
        btnOperation[i].setAttribute("disabled", true);
    }

    // Gỡ bỏ vô hiệu hoá nút dấu chấm
    dot.removeAttribute("disabled");
    dot.style.backgroundColor = 'black';

}

// Thực hiện thêm các số trong khi click vào các nút số
// Thêm sự kiện click và hàm thêm các số khi click
for (var i = 0; i < btnNumber.length; i++) {
    btnNumber[i].addEventListener('click', numFunc, false);
}


// Gọi hàm thêm dấu chấm vào số khi click vào dấu chấm
// Thực hiện thêm dấu chấm khi click vào nút dấu chấm
dot.addEventListener('click', function(){
    AddDot();
})

// Thực hiện refresh khi click vào các nút CE
// Thêm sự kiện click và hàm refresh
refresh.addEventListener('click', function(){
    Refresh();
})

// Thực hiện refresh khi click vào các nút DEL
// Thêm sự kiện click và hàm xóa ký tự cuối
del.addEventListener('click', function(){
    DelChar();
})

// Thực hiện thêm phép toán khi click vào các nút phép toán
// Thêm sự kiện click và hàm thêm phép toán
for (var i = 0; i < btnOperation.length; i++) {
    btnOperation[i].addEventListener('click', operaFunc, false);
}


// Hiển thị kết quả
// Thêm sự kiện click và hàm hiển thị kết quả
equal.addEventListener('click', function(){
    var reCurrent = 0;
    reCurrent = boxCal.value;
    boxCal.value = eval(reCurrent);
    
    if(isFinite(boxCal.value))
    {
        boxResult.innerHTML = boxCal.value;
    }
    else
    {
        boxResult.innerHTML = 'Không thể chia cho 0';
        boxResult.style.fontSize = '12px';
        boxCal.value = '';
    }
    
    // Lấy giá trị trong ô phép tính, nếu hết giá trị thì vô hiệu hóa dấu bằng
    var valChar = boxCal.value;
    if(valChar.length <= 1)
    {
        equal.setAttribute("disabled", true);
    }

})