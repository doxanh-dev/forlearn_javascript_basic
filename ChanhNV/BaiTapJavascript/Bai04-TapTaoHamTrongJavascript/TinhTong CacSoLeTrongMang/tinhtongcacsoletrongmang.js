
//Function Tính tổng các số lẻ trong mảng

var arrayOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];
 
// Hàm tính tổng số lẻ
function sumNumberOdd(array)
{
    // Biến lưu trữ tổng
    var sum = 0;
 
    // Lặp qua mảng và cộng thêm tổng nếu là số lẻ
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 != 0){
            sum += array[i];
        }
    }
 
    // Trả kết quả về
    return sum;
}
 
// In ra trình duyệt
document.write("Tổng số lẻ là: " + sumNumberOdd(arrayOdd));