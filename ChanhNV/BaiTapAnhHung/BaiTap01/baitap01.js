
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
        alert('Bạn chưa điền từ!');
        word.style.border = "solid 2px red";
    }// Kiểm tra nhập từ định dạng tiếng Anh
    else if(isLettersEnglish(word.value) === false)
    {
        word.style.border = "solid 2px red";
        alert('Nhập lại từ có định dạng tiếng Anh');
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
            var isExist = confirm('Từ đã có tại vị trí ' + (index + 1) + '\n' + 'Bạn có muốn xóa từ đi!');
            // Xác nhận xóa
            if (isExist) {
                wordExists.splice(index, 1);
                alert('Đã xóa từ ' + word.value);
                word.value = "";
            }
        }

    }
}

// Thêm sự kiện click vào btn#btnKiemTra
document.getElementById('btnKiemTra').addEventListener('click', function () {
    addWord();
    viewWords('showWords');
})