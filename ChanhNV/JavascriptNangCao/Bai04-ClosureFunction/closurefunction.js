
//Closure function có tham số
// Bước 1: Tạo hàm closure
function showMessage(message)
{
    return function(time){
        for (var i = 1; i <= time; i++){
            alert(message + ' - shaisunkan');
        };
    };
}
 
// Bước 2: khởi tạo hàm closure
var messageFunc = showMessage('Welocome to ');
 
// Bước 3: Chạy hàm closure: ví có tham số truyền vào nên bước 3 cần truyền vào 1 tham số mới chạy được
// messageFunc(3);

//Closure thay đổi giá trị biến toàn cục lẫn cục bộ
// Bước 1: Tạo hàm closure
function Student()
{
    var name = '';
    var address = '';
 
    return {
        set : function(in_name, in_address){
            name = in_name;
            address = in_address;
        },
        getName : function(){
            return name;
        },
        getAddress : function(){
            return address;
        }
    };
}
 
// Bước 2: khởi tạo hàm closure
var studentObj = Student();
 
// Bước 3: Chạy hàm closure
studentObj.set('Chanhnv', 'Co Nhue');
alert(studentObj.getName());
alert(studentObj.getAddress());


//Return nhiều Closure Function
//phải sử dụng một object, trong đó mỗi phần tử sẽ là một closure function.
function multiClosure()
{
    return {
        func1 : function(){
            console.log('Closure1');
        },
        func2 : function(){
            console.log('Closure2');
        }
    };
}
 
// nhiều Closure Function
var object = multiClosure();
object.func1();
object.func2();


//Độ ưu tiên các biến
// Bước 1: Tạo hàm closure
var message = 'Biên toàn cục';
function showMessage()
{
    var message = 'Biến cục bộ của hàm cha';
    return function(){
        alert(message);
    };
}
 
// Bước 2: khởi tạo hàm closure
var messageFunc = showMessage();
 
// Bước 3: Chạy hàm closure
messageFunc();