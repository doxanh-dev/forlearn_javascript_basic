
//function Kiểm tra năm nhuận
function KiemTraNamNhuan(namkiemtra)
{
    var nam = parseInt(namkiemtra);
    if(nam % 4 == 0)
    {
        return true;
    }
    else if(nam % 100 == 0)
    {
        if(nam % 400 == 0)
        {
            return true;
        }
    }
    else{
        return false;
    }
}

//Them su kien Kiem tra nam nhuan cho button id#=checkYear
function checkYear(id)
{
    var checkYear = document.getElementById(id);
    checkYear.addEventListener('click', function(){
        //Nhập vào năm cần kiểm tra
        var namkiemtra = prompt('Nhap nam kiem tra: ');

        var namNhuan = KiemTraNamNhuan(namkiemtra);
        if(namNhuan)
        {
            alert(namkiemtra + ' là năm nhuận.');
        }
        else
        {
            alert(namkiemtra + ' không là năm nhuận.');
        }
    })
}

checkYear('checkYear');