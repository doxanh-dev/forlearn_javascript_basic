

//Function  Xuất thông báo lỗi
function UserError()
{
    this.throwLogin = function(){
        throw new Error ('Invalid username and password');
    };

    this.throwSession = function(){
        throw new Error('Your request is timeout');
    };

    return this;

}

//sử dụng function báo lỗi
var username = 'chanhnv';
var password = 'admin@';
try{
    if(username !== 'admin' || password != 'admin@'){
        var UserError = new UserError();
        UserError.throwLogin();
    }

}catch (ex){
    console.log(ex.message);
}