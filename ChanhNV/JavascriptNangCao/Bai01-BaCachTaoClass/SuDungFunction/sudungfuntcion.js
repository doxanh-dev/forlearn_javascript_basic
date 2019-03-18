

//Tạo hàm User như là một class.
function User()
{
    //Thuoc tinh
    this.username = '';
    this.password = '';

    //Phuong thuc
    this.setInfo = function(username, password){
        this.username = username;
        this.password = password;
    };

    this.checkLogin = function(){
        return (this.username === 'admin' && this.password === '@123');
    };

    //Return this moi tao duoc doi tuong
    return this;

}

//Su dung: Tạo hàm User
var user = new User();
user.setInfo('admin', '@123');
if(user.checkLogin())
{
    alert('Dang nhap thanh cong!');
}
else{
    alert('Dang nhap that bai!');
}   