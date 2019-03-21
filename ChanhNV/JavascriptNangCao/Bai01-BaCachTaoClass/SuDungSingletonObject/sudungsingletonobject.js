

//Sử dụng Singleton Object tạo class

var Person = new function(){
     
    // Thuộc tính
   this.username = '';
   this.password = '';
    
   // Phương thức
   this.setInfo = function(username, password){
       this.username = username;
       this.password = password;
   };
    
   this.checkLogin = function(){
       return (this.username === 'admin' && this.password === '@123');
   };
    
};

// Cách sử dụng Singleton Object
Person.setInfo('admin', '@123');
if (Person.checkLogin()){
    alert('Đăng nhập thành công');
}
else{
    alert('Đăng nhập thất bại');
}