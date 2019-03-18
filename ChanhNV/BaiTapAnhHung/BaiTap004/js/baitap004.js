// Chương trình sắp xếp tên lớp

// Khai báo mảng chứa tên học sinh trong lớp
var lstNameStd = [];

var DS = [];
// Hàm lấy danh sách lớp
function getLstNameStd() {
    var soLuong =  prompt('Mời bạn nhập số lượng học sinh của lớp', 10);

    for (var i = 0; i < soLuong; i++) {
        DS[i] = prompt('Mời bạn nhập vào họ tên học sinh: ', "");
        lstNameStd.push(DS[i]);
    }

    return lstNameStd.sort();
}

// Hàm hiển thị kết quả
function viewResult(tagResult, strName)
{
    //Hiển thị kết quả
    tagResult.innerHTML = strName;
    tagResult.style.border = 'grey solid 1px';
    tagResult.style.color = 'blue';
    UIkit.modal.alert(message);
}

// Hàm trả về chuối danh sách tên đã được sắp xếp
function viewLstName(lstName)
{
    var strName = '';
    for(var i = 0; i < lstName.length; i++)
    {
        strName += (i+1) + '. ' + lstName[i] + '\n';
    }
    return strName;
}

// Thêm sự kiện click cho button#btnSort
document.getElementById('btnSort').addEventListener('click', function () {
    var strSortName = '';

    var strName = '';

    // Lấy ra thẻ hiển thị kết quả
    var divShowArr = document.getElementById('showResult');

    strSortName = viewLstName(getLstNameStd());
    var strName = 'Danh sách tên học sinh của lớp bạn là: ' + '\n' + strSortName;
    viewResult(divShowArr, strName);
    
})

// function myFunction() {
//     var person = prompt("Please enter your name", "Harry Potter");
//     if (person != null) {
//       document.getElementById("demo").innerHTML =
//       "Hello " + person + "! How are you today?";
//     }
//   }

// UIkit.util.on('#btnSort', 'click', function (e) {
//     e.preventDefault();
//     e.target.blur();
//     UIkit.modal.prompt('Name:', 'Your name').then(function (name) {
//         console.log('Prompted:', name)
//     });
// });