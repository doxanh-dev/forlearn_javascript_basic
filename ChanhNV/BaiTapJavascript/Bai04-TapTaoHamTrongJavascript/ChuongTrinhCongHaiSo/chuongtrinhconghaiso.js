
//Chương trình công hai số

//Function Công hai số
function TinhTongHaiSo(soThuNhat, soThuHai){
    return (soThuNhat + soThuHai);
}

//Lấy thông tin từ người dùng nhập vào, chuyển dữ liệu sáng kiểu int
var soThuNhat = parseInt(prompt("Nhập số thứ nhất: "));
var soThuHai = parseInt(prompt("Nhập số thứ hai"));

//Tính tồng hai số
var sum = TinhTongHaiSo(soThuNhat, soThuHai);

//In kết quả ra màn hình
// In ra màn hình
document.write("Tổng hai số " + soThuNhat + " + " + soThuHai + " là: " + sum);