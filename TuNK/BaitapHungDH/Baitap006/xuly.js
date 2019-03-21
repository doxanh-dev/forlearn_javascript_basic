//Phim chon
var phim_chon = '';

function ClickSelect(obj) {
	//ket qua
	var result = document.getElementById('result');

	//gia tri cua phim duoc chon
	var type = obj.innerHTML;

	if (type != '=') {
		if (type == '+/-') {
			if (phim_chon != "") {
				//doi dau bang nhan voi -1
				phim_chon = phim_chon*(-1);
			}
			else {
				result.value = "0";
				return;
			}
		}
		//CE
		else if (type == 'CE') {
			phim_chon = '';
			result.value = "0";
			return;
		}
		//DEL
		else if (type == 'DEL') {
			if (phim_chon.length > 0) {
				//xoa phần tử cuối trong biến phim_chon
				phim_chon = phim_chon.substring(0, phim_chon.length - 1);
			}
			else {
				phim_chon = '';
				result.value = "0";
				return;
			}
		}
		//Ans
		else if (type == 'Ans') {
			if(result != "" && result.value != "Không hợp lệ"){
				//lấy giá trị đã được tính gán vào biến phim_chon để làm giá trị thực hiện tiếp phép tính
				phim_chon = result.value;
			}
			else {
				phim_chon = '';
				result.value = "0";
				return;
			}
		}
		else {
			phim_chon += type;

			//kiem tra khi tồn tai 2 ký tự ".." thì sẽ xóa đi ký tự cuối
			if (phim_chon.indexOf("..") != -1) {
				phim_chon = phim_chon.substring(0, phim_chon.length - 1);
			}
			//lay ky tu dau tien
			var firtChar = phim_chon.substring(0, 1);

			//kiem tra nếu ký tự đầu tiên chọn mà là các phép toán thì khong thêm vào biên Phim_chon
			if (kiemTraKyTuDau(firtChar) && phim_chon.length == 1 || firtChar == "0") {
				phim_chon = '';
				result.value = '0';
				return;
			}
			else {
				//lay ra ky tu truoc ký tự cuối 
				var chooseChar = phim_chon.substring(phim_chon.length - 2, phim_chon.length - 1);

				//kiểm tra ký tự đó có phải là dấu không
				if (kiemTraKyTuDau(chooseChar)) {
					//lay ky tự cuối cùng
					var lastChar = phim_chon.substring(phim_chon.length - 1);

					//kiểm tra ký tự cuối có phải dấu không, 
					//nếu là ký tự dấu thì xóa ký tự dấu trước đó và chọn ký tự dấu mới
					if (kiemTraKyTuDau(lastChar)) {
						phim_chon = phim_chon.replace(chooseChar, "");
					}
				}
			}
		}
		// Thay đổi hiển thị
		result.value = phim_chon;
	}
	//Tinh gia tri khi click "="
	else {
		if (phim_chon != '') {
			//lay ra ky tu truoc ký tự cuối 
			var chooseChar = phim_chon.substring(phim_chon.length - 2, phim_chon.length - 1);

			//lay ky tự cuối cùng
			var lastChar = phim_chon.substring(phim_chon.length - 1);

			//neu phep chia cho 0 thì sẽ hiển thị "Không hợp lệ"
			if (phim_chon.indexOf("/0") != -1) {
				result.value = "Không hợp lệ";
			}
			else if((chooseChar == "." 
					|| chooseChar == "1" 
					|| chooseChar == "2"
					|| chooseChar == "3"
					|| chooseChar == "4"
					|| chooseChar == "5"
					|| chooseChar == "6"
					|| chooseChar == "7"
					|| chooseChar == "8"
					|| chooseChar == "9")
					&& kiemTraKyTuDau(lastChar)
					|| lastChar == ".") {
				result.value = "Sai định dạng";
			}
			else {
				//tính kết quả phép toán
				result.value = eval(phim_chon);
			}

			//xoa nhung so' đã được gán vào biến phim_chon
			phim_chon = '';
		}
	}
}

function kiemTraKyTuDau(value) {
	var check = false;
	if (value == "+" || value == "-" || value == "*" || value == "/") {
		check = true;
	}
	return check;
}