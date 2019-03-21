
function isSlug(val){
    //kiểm tra phải chuỗi null hay rỗng không
    if (val === ""|| val === null)
            return false;

    //Xóa các khoảng trắng ở đầu và cuối chuỗi
    val = val.trim();

    //Nếu có khoảng trắng thì trả về kết quả false
    if (val.indexOf(" ")!=-1)
            return false;

    var reg = /^[a-z0-9-_]+$/;

    if(reg.test(val)){
            return true;
    }else{
            return false;
    }        
}

function checSlug(strCheck)
{
    //Get string to check
    var str = document.getElementById(strCheck).value;

    var checSlug = isSlug(str);

    if(checSlug)
    {
        alert('Đây là chuỗi Slug!');
    }
    else{
        alert('Đây không là chuỗi Slug!');
    }

}


//get button to add Event
document.getElementById('checkSlug').addEventListener('click', function(){
    checSlug('idSlug');
})