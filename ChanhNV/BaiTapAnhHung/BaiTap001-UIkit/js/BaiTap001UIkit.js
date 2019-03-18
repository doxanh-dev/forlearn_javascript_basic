
// Khai báo mảng để chưa danh sách từ hiển thị
var wordExists = [];

// function hiển thị từ
function viewWords(idTagShow) {
    var divShow = document.getElementById(idTagShow);
    divShow.innerHTML = "";
    for (var i = 0; i < wordExists.length; i++) {
        divShow.innerHTML += wordExists[i] + '\n';
    }

}

// function kiểm tra nhập từ tiếng anh
function isLettersEnglish(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}

// function thêm từ
function addWord() {
    var word = document.getElementById('wordCheck');
    // kiểm tra từ có nhập hay chưa
    if (word.value == "") {
        UIkit.modal.alert("Bạn chưa nhập từ tiếng Anh!");
        word.style.border = "solid 2px red";
    }// Kiểm tra nhập từ định dạng tiếng Anh
    else if(isLettersEnglish(word.value) === false)
    {
        UIkit.modal.alert('Bạn phải nhập từ có định dạng tiếng Anh');
        word.style.border = "solid 2px red";
    }
    else {
        // Nếu có thực hiện thêm từ
        var index = wordExists.indexOf(word.value.toLowerCase());
        if (index == -1) {
            word.style.border = "solid 2px green";
            wordExists.push(word.value.toLowerCase());
            word.value = "";
        }
        else {
            // Kiểm tra xem có muốn xóa hay không
            var isExist = UIkit.modal.confirm("Từ tiếng Anh xuất hiện ở ví thứ " + (index + 1) + " trong danh sách, bạn có muốn xóa!").then(function(){
                // Xác nhận xóa
                if (isExist) {
                    wordExists.splice(index, 1);
                    UIkit.modal.alert('Đã xóa từ ' + word.value + ' trong danh sách');
                    word.value = "";
                    viewWords('showWords');
                }
            });
            
        }

    }
}

// Thêm sự kiện click vào btn#btnKiemTra
document.getElementById('btnKiemTra').addEventListener('click', function () {
    addWord();
    viewWords('showWords');
})