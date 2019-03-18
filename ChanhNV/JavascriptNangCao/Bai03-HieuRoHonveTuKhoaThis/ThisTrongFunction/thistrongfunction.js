
//This trong function
function Student()
{
    this.name = '';
    this.age = '';
 
    this.showInfo = function()
    {
        console.log(this.name);
        console.log(this.age);
    };
}

//Khởi tạo đối tượng Student
var student = new Student();

//Gán giá trị thuộc tính
student.name = 'chanhnv -shaisunkan';
student.age = '27';

//hiển thị thông tin
student.showInfo();

setTimeout(function(){
    // Log1
    console.log(this);
}, 2000);
 
// Log2
console.log(this);