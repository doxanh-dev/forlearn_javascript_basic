

//Anonymous functions
//được sinh ra đúng vào thời điểm chạy của chương trình
//khai báo bằng cách sử dụng toán tử thay vì sử dụng cú pháp định nghĩa hàm thông thường.

// Gọi hàm này trước sẽ bị lỗi vì hàm này chưa tồn tại
//showWelcome();

var showWelcome = function()
{
    alert('Welcome to javascript');
};
 
// gọi sau hàm hoạt động vì hàm đã tồn tại
showWelcome();
console.log('-------------');

//Anonymous function là hàm không tên