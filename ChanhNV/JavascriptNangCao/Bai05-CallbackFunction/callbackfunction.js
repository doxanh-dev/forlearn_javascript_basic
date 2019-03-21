
//Callback Function
//Ví dụ
var keywords = ["value0", "value1", "value2", "value3"];

//Lặp qua từng phần tử và xử lý trong hàm callback
keywords.forEach(function(eachName, index){
    console.log(index + 1 + '. ' + eachName);
})


// Hàm tạo chuỗi mật khẩu
function createAccount(callback) {
    return callback('chanhnv');
}
 
// Sử dụng
var acc = createAccount(function (secret_key) {
    return secret_key;
});
 
alert('Tài khoản được tạo là: ' +acc);