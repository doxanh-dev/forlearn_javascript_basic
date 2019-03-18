
//Sử dụng object tạo class
var Person = {
     
    // Thuộc tính
    username : "",
    password : "",
     
    // Phương thức
    setInfo : function(username, password){
        this.username = username;
        this.password = password;
    },
    checkLogin : function(){
        return (this.username === 'admin' && this.password === '@123');
    }
     
};

//// Cách sử dụng object
Person.setInfo('admin', '@123');
if (Person.checkLogin()){
    alert('Đăng nhập thành công');
}
else{
    alert('Đăng nhập thất bại');
}