
//Function: check format string URL
function isURL(url){
    //kiểm tra phải chuỗi null hay rỗng không
    if (url === ""|| url === null)
            return false;

    //Xóa các khoảng trắng ở đầu và cuối chuỗi
    url = url.trim();

    //Nếu có khoảng trắng thì trả về kết quả false
    if (url.indexOf(" ")!=-1)
            return false;

    var RegExp = /^http(s)?:\/\/[\w|\-]+(\.[^\.]+)+$/i;

    if(RegExp.test(url)){
            return true;
    }else{
            return false;
    }
}

//Function check URL
function checkURL(strCheck)
{
    //Get string to check
    var str = document.getElementById(strCheck).value;

    var checkurl = isURL(str);

    if(checkurl)
    {
        alert('URL hợp lệ!');
    }
    else{
        alert('URL không hợp lệ!');
    }

}

//get button to add Event
document.getElementById('checkURL').addEventListener('click', function(){
    checkURL('idURL');
})