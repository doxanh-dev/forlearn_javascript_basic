

//Xóa thẻ div có vị trĩ chẵn

//Function Xóa thẻ div có vị trí chẵn
function deleteElement(){
    //Lấy ra danh sách thẻ div
    var divs = document.getElementsByTagName('div');

    // Mảng chứa divs cần xóa
    var divs_remove = [];

    // Lặp để lấy thẻ div cần xóa
    var index = 0;
    while (index < divs.length){
        if (index % 2 != 0 && index != 0){
            divs_remove.push(divs[index]);
        }
        index++;
    }

    // Thực hiện xóa
    index = 0;
    while (index < divs_remove.length){
        divs_remove[index].remove();
        index++;
    }

}