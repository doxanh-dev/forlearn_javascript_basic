//khoi tao doi tuong danhSachSinhVien
var danhSachSinhVien = new DanhSachSinhVien();

function ThemSinhVien() {
    //Lấy đối tương từ người dùng nhập vào trên màn hình
    var masv = document.getElementById("masv");
    var hoTen = document.getElementById("hoTen");
    var diaChi = document.getElementById("diaChi");
    var sdt = document.getElementById("sdt");
    var email = document.getElementById("email");
    var action = document.getElementById("action");

    //kiem tra validate
    if (masv.value == "") {
        UIkit.modal.alert("Bạn chưa nhập maSV !").then(function () {
            masv.focus();
            return;
        });
    }
    else if (isNaN(masv.value)) {
        UIkit.modal.alert("Mã sinh viên phải là số !").then(function () {
            masv.focus();
            masv.value = "";
            return;
        });
    }
    else if (hoTen.value == "") {
        UIkit.modal.alert("Bạn chưa nhập họ tên !").then(function () {
            hoTen.focus();
            return;
        });
    }
    else if (diaChi.value == "") {
        UIkit.modal.alert("Bạn chưa nhập địa chỉ !").then(function () {
            diaChi.focus();
            return;
        });
    }
    else if (sdt.value == "") {
        UIkit.modal.alert("Bạn chưa nhập số điện thoại !").then(function () {
            sdt.focus();
            return;
        });
    }
    else if (!validatePhone(sdt.value)) {
        UIkit.modal.alert("Bạn nhập số điện thoại không đúng định dạng !").then(function () {
            sdt.value = "";
            sdt.focus();
            return;
        });
    }
    else if (email.value == "") {
        UIkit.modal.alert("Bạn chưa nhập email !").then(function () {
            email.focus();
            return;
        });
    }
    else if (!validateEmail(email.value)) {
        UIkit.modal.alert("Bạn nhập email không đúng định dạng !").then(function () {
            email.value = "";
            email.focus();
            return;
        });
    }
    else {
        //Khởi tạo đối tượng SV với các tham số là các giá trị trên màn hình
        var sinhvien = new SinhVien(masv.value, hoTen.value, email.value, sdt.value, diaChi.value);

        //kiểm tra giá trị của biến action
        //Nếu action == add thì thực hiện thêm SV vào d.sách
        if (action.value == "add") {
            //gọi hàm TimSV theo maSV , xem sv có mã có trong d.sach hay chưa
            var sinhVienFind = danhSachSinhVien.TimSV(masv.value);

            //nếu sv có maSV k có trong ds thì thực hiện Thêm mới
            //nếu maSV đã có thì thông báo maSv đã tồn tại
            if (sinhVienFind == null) {
                //goi ham ThemmoiSV 
                danhSachSinhVien.ThemmoiSV(sinhvien);
            }
            else {
                UIkit.modal.alert("Mã Sinh viên <b>" + masv.value + "</b> đã có trong danh sách !").then(function () {
                    masv.focus();
                    return;
                });
            }
        }
        else {
            //goi ham CapnhatSV 
            danhSachSinhVien.CapnhatSV(sinhvien);

            //đổi tên button là Thêm sinh viên khi thực hiện Cập nhật xong
            document.getElementById("button").innerHTML = "Thêm sinh viên";

            //xóa thuộc tính readonly để có thể nhập đc MaSV để thêm mới SV
            masv.removeAttribute("readonly");

            //set value của action là add để thêm mới đc SV
            action.value = "add";
        }

        //goi ham CapNhatListSV để update lại sv vào bảng hiển thị danh sách SV
        CapNhatListSV(danhSachSinhVien);

        //khi thực hiện Thêm mới hoặc Cập nhật xong thì các input trên màn hình sẽ cho về Blank
        masv.value = "";
        hoTen.value = "";
        diaChi.value = "";
        sdt.value = "";
        email.value = "";
    }
}

function CapNhatListSV(DanhSachSinhVien) {
    var lstTableSV = document.getElementById("tbodySinhVien");
    lstTableSV.innerHTML = "";

    for (var i = 0; i < DanhSachSinhVien.DSSV.length; i++) {
        var sv = DanhSachSinhVien.DSSV[i];

        //Tạo thẻ tr
        var trSV = document.createElement("tr");

        //Tạo các thẻ td và đẩy dữ liệu sinh viên thứ i vào
        //tạo thẻ td chứa input checkbox
        var tdCheckBox = document.createElement('td');
        tdCheckBox.className = "uk-text-center";

        //tạo thẻ input checkbox
        var ckbMaSV = document.createElement('input');

        ckbMaSV.setAttribute("class", "ckbMaSV uk-checkbox");
        ckbMaSV.setAttribute("type", "checkbox");
        ckbMaSV.setAttribute("value", sv.MaSV);
        tdCheckBox.appendChild(ckbMaSV);

        //tạo các thẻ td để hiển thị giá trị các thuộc tính của SV
        var tdMaSV = CreateTD(sv.MaSV);
        var tdHoTen = CreateTD(sv.HoTen);
        var tdDiaChi = CreateTD(sv.DiaChi);
        var tdEmail = CreateTD(sv.Email);
        var tdSoDT = CreateTD(sv.SoDT);

        //tạo thẻ td chứa button
        var tdButton = document.createElement('td');
        tdButton.className = "uk-text-center";

        //tạo thẻ button Edit
        var buttonEditMaSV = document.createElement('button');

        buttonEditMaSV.setAttribute("onclick", "LayThongTinSinhVien('" + sv.MaSV + "')");
        buttonEditMaSV.setAttribute("type", "button");
        buttonEditMaSV.setAttribute("class", "uk-button button-edit");
        buttonEditMaSV.setAttribute("uk-icon", "icon: file-edit");

        //tạo thẻ button Del
        var buttonDelMaSV = document.createElement('button');

        buttonDelMaSV.setAttribute("onclick", "XoaSvTheoMaSV('" + sv.MaSV + "')");
        buttonDelMaSV.setAttribute("type", "button");
        buttonDelMaSV.setAttribute("class", "uk-button button-del mr-left-7px");
        buttonDelMaSV.setAttribute("uk-icon", "icon: trash");

        //Append các button vào td
        tdButton.appendChild(buttonEditMaSV);
        tdButton.appendChild(buttonDelMaSV);

        //Append các td vào tr
        trSV.appendChild(tdCheckBox);
        trSV.appendChild(tdMaSV);
        trSV.appendChild(tdHoTen);
        trSV.appendChild(tdDiaChi);
        trSV.appendChild(tdEmail);
        trSV.appendChild(tdSoDT);
        trSV.appendChild(tdButton);

        //Append các tr vào tbody
        lstTableSV.appendChild(trSV);
    }

    //khi danh sach SV khong co ban ghi nao
    if (DanhSachSinhVien.DSSV.length == 0) {
        //Tạo thẻ tr
        var tr0Record = document.createElement("tr");

        //Tạo thẻ td
        var td0Record = document.createElement('td');
        td0Record.colSpan = "7";
        td0Record.id = "thongbao";
        td0Record.innerHTML = "Không có Sinh viên trong danh sách !";

        tr0Record.appendChild(td0Record);
        lstTableSV.appendChild(tr0Record);

        //ẩn button xoaSV theo checkbox
        document.getElementById("div-button-del").style.display = "none";
    }
    else {
        //hiển thị button xoaSV theo checkbox
        document.getElementById("div-button-del").style.display = "block";
    }
}

//xoa SV theo listCheckbox chon
function XoaSinhVien() {
    var listMaSV = document.getElementsByClassName("ckbMaSV");

    var listMaSVDuocCheck = [];

    for (var i = 0; i < listMaSV.length; i++) {
        //kiểm tra checkbox nào dc check thì add vào mảng listMaSVDuocCheck
        if (listMaSV[i].checked) {
            listMaSVDuocCheck.push(listMaSV[i].value);
        }
    }

    //gọi hàm XoaSV để thực hiện xóa theo listMaSVDuocCheck
    danhSachSinhVien.XoaSV(listMaSVDuocCheck);

    //gọi hàm cập nhật lại ListSV
    CapNhatListSV(danhSachSinhVien);

    TimKiemTenSinhVien();
}

//xoaSV theo MaSV
function XoaSvTheoMaSV(maSV) {
    //gọi hàm xóa SV theo maSV đc chọn
    danhSachSinhVien.XoaSvTheoMaSV(maSV);

    //gọi hàm cập nhật lại ListSV
    CapNhatListSV(danhSachSinhVien);

    TimKiemTenSinhVien();
}

//Tim kiem theo ten sinh vien
function TimKiemTenSinhVien() {
    var tenSvTimKiem = document.getElementById("tenSvTimKiem");

    //listSV duoc tim kiem
    var listSvTimKiem = danhSachSinhVien.TimKiemTheoTenSV(tenSvTimKiem.value);

    //gọi hàm cập nhật lại ListSV
    CapNhatListSV(listSvTimKiem);
}

//lay thong tin cua sinh vien khi click button edit
function LayThongTinSinhVien(maSV) {
    //goi hàm TimSV theo maSV để lấy thông tin của sv đc chọn
    var sinhVien = danhSachSinhVien.TimSV(maSV);

    //hiển thị thông tin sv lên màn hình
    if (sinhVien != null) {
        document.getElementById("masv").value = sinhVien.MaSV;
        document.getElementById("masv").setAttribute("readonly", "readonly");
        document.getElementById("hoTen").value = sinhVien.HoTen;
        document.getElementById("diaChi").value = sinhVien.DiaChi
        document.getElementById("sdt").value = sinhVien.SoDT;
        document.getElementById("email").value = sinhVien.Email;
        document.getElementById("action").value = "edit";
        document.getElementById("button").innerHTML = "Cập nhật Sinh viên";
    }
}

//tao the td 
function CreateTD(value) {
    var td = document.createElement("td");
    td.className = "uk-text-center";
    td.innerHTML = value;
    return td;
}

//validate text là Email
function validateEmail(email) {
    var regExp = /^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    var result = email.match(regExp);
    if (result) {
        return true;
    }
    return false;
}

//validate text là Phone
function validatePhone(phone) {
    var regExp = /((09|03|07|08|05)+([0-9]{8})\b)/;
    var result = phone.match(regExp);
    if (result) {
        return true;
    }
    return false;
}