
//Create a new object
var price = new Number(20.56789);
document.write('price is: ' + price + '<br/>');

//using method
document.write('toString() is: ' + toString()+ '<br/>');
document.write('price.toFixed() is: ' + price.toFixed() + '<br/>');
document.write('price.toPrecision() is: ' + price.toPrecision() + '<br/>');
document.write('price.valueOf() is: ' + price.valueOf() + '<br/>');

//add data to object
Number.prototype.plus = function(value){
    return this.valueOf() + parseInt(value);
};

// Create new object
var age = Number(12);
document.write(age.plus(12) + "<br/>");
 
// Create another object
var year = 2014;
document.write(year.plus(12) + '<br/>');


function Student(){
    //properties
    this.name = '';
    this.email = '';
    this.address = '';

    //method
    this.showInfo = function(){
        document.write("Name is: " + this.name + "<br/>");
        document.write("Email is: " + this.email + "<br/>");
        document.write("Address is: " + this.address + "<br/>");
    }
}

// Tạo mới
var Dat = new Student();
 
// Gán thuộc tính
Dat.name = "Nguyễn Văn Hai";
Dat.email = "hoanghai@gmail.com";
Dat.address = "Ha Noi";
 
// Gọi phương thức
Dat.showInfo();