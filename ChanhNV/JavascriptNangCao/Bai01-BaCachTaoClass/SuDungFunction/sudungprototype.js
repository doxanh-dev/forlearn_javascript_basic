

//Sử dụng prototype
function User()
{
    // Thuoc tinh
    this.username = '';
    this.password = '';
     
    // return this để tạo đối tượng
    return this;
}
 
// Bổ sung phương thức bằng prototype
User.prototype.setInfo = function(username, password){
    this.username = username;
    this.password = password;
};
 
User.prototype.checkLogin = function(){
    return (this.username === 'admin' && this.password === '@123');
};

// Cách sử dụng prototype
var user = new User();
user.setInfo('admin', '@123');
if (user.checkLogin()){
    alert('Đăng nhập thành công');
}
else{
    alert('Đăng nhập thất bại');
}