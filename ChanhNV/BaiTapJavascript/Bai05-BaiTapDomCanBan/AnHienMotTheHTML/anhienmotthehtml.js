

//Functon TimKiemNangCao
function TimKiemNangCao(tagTimKiemNC,tagCategory){
    // Lấy thẻ a và danh muc (category)
    var a = document.getElementById(tagTimKiemNC);
    var category = document.getElementById(tagCategory);

    //Lấy nội dung thẻ a
    var content = a.innerHTML;

    //Kiểm tra xử lý hiển thị và ẩn + đổi nội dung thẻ a
    if(content == 'Tìm kiếm nâng cao'){
        category.style.display = 'table-row';
        a.innerHTML = 'Bỏ tìm kiếm nâng cao';
    }
    else{
        category.style.display = 'none';
        a.innerHTML = 'Tìm kiếm nâng cao';
    }

    // Return false để khi click vào thẻ a sẽ không bị chuyển trang
    return false;

}