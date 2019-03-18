// Chương trình hiển thị ngày giờ của hệ thống
// Khai báo mảng hiển thị 12 tháng
var months =
 ["tháng 1","tháng 2","tháng 3","tháng 4","tháng 5","tháng 6","tháng 7","tháng 8","tháng 9","tháng 10","tháng 11","tháng 12"];

// Khai báo mảng hiển thị ngày trong tuần
var days = ["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"];

// Khai báo chuổi hiển thị thông báo
var mess = "";
// Khai báo biến nhận ngày trong tuần
var dayWeek = "";
// Khai báo biến nhận ngày hiện tại
var dayNow = "";
// Khai báo biến nhận tháng hiện tại
var monNow = "";
// Khai báo biến nhận năm hiện tại
var yearNow = "";

// Khởi tạo ngày tháng đầy đủ thông tin
var date = new Date();

// Hàm hiển thị thông tin ngày tháng năm hiện tại
function ShowInforDay(dateInfo)
{
    // Lấy ra ngày trong tuần
    dayWeek = days[date.getDay()];
    // Lấy ra ngày hiện tại
    dayNow = date.getDate();
    // Lấy ra tháng hiện tại
    monNow = months[date.getMonth()];
    // Lấy ra năm hiện tại
    yearNow = date.getFullYear();
    
    // Hiển thị  thông báo
    mess = 'Hôm nay là ' + dayWeek + ', ' + 'ngày ' + dayNow + ' ' + monNow + ' năm ' + yearNow;

    UIkit.modal.alert(mess);
}
ShowInforDay(date);