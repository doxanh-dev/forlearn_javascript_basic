//Function Tính giá trị biểu thức
function tinhGiaTriBieuThuc(number)
{
    // Khai báo biển để lưu tổng
    var sum = 0;
 
    // Tính toán
    for (var i = 1; i <= number; i++){
        sum += (1/i);
    }
 
    return sum;
}

//Lấy giá trị người dùng nhập vào
var n = parseInt(prompt("Nhập số cần tính: "));
console.log(n);
// Kiểm tra giá trị
if(isNaN(n)){
    alert("Bạn phải nhập số");
    document.write("Bạn phải nhập số!!!");
}
else if (n <= 0){
        alert("Bạn phải nhập số lớn hơn 0");
}
else{
    document.write("Tổng giá trị biểu thức là: " + tinhGiaTriBieuThuc(n));
}
