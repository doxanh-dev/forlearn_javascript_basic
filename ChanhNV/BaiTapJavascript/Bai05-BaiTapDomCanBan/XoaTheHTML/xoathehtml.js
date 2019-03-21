window.onload = function(){
    RemoveTagHTML('input');
}



//Function XoaTheHTML
function RemoveTagHTML(tagName)
{
    //Lấy danh sách thẻ cần thêm sự kiện
    var arrTag = document.getElementsByTagName(tagName);

    //Lặp qua từng thẻ
    for (var i = 0; i < arrTag.length; i++){

        //Gán sự kiện onclick cho từng thẻ
        arrTag[i].addEventListener('click', function(){
            //Lấy thẻ cha: tr
            var parent = this.parentElement.parentElement;

            //thực hiện sự kiện xóa dòng
            parent.remove();


        });

    }

}