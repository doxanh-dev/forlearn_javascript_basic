

//Hiểu hơn Về Hàm call Và Apply
//Dùng hàm call gán giá trị cho hàm khởi tạo
// Hàm này dùng để xử lý khởi tạo
function initProduct(name, price) {
    this.name = name;
    this.price = price;
}
 
function Food(name, price) {
    initProduct.call(this, name, price);
}
 
function Hat(name, price) {
    initProduct.call(this, name, price);
}
 
var food = new Food('Cơm', 5);
var hat = new Hat('Mu Len', 6);
 
console.log(food);
console.log(hat);

//Dùng hàm call để gọi hàm anonymous
(function(name) {
    console.log(name);
}).call(this, "Chanhnv");

//Dùng hàm call để đổi giá trị của this
function showMessage(message)
{
    this.message = message;
    return this;
}
 
var user = showMessage.call({"key" : "value01"}, "Chanhnv");
console.log(user);


// Hàm apply() trong Javascript
document.write('Hàm apply() trong Javascript');

var helloWorld = function(name, message){
    console.log(message + name);
};
 
 
helloWorld.call(helloWorld, 'chanh', ' hello ');
helloWorld.apply(helloWorld, ['chanh', ' hello ']);
