
//function isEmpty(str): Hàm kiểm tra dữ liệu có tồn tại
// hoặc bằng rỗng hay null hay không
function isEmpty(str)
{
    //str = str || null;

    if((typeof str == "undefined" || str == null)){
        return true;
    }
    else{
        return false;
    }
}

//kiểm tra một biến có phải được lưu trữ một mảng hay không.
function isArray(object)
{
    if (object.constructor === Array) 
            return true;    
    else return false;
}


// kiểm tra một giá trị nào đó có xuất hiện trong mảng hay không.
// haystack = [1,2,3,4,5,6]

function inArray(needle, haystack)
{
    var i = haystack.length;
    while (i >= 0) 
    {
        if (haystack[i] === needle) 
        {
            return true;
        }
        i--;
    }
    return false;
}


function isEmpty(str)
{
    str = str || null;
    if( (typeof str == "undefined" || str == null) ){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById('btnCheck').addEventListener('click', function(){
    //Biến kiểm tra đơn lẻ
    var valCheck = document.getElementById('dataCheck').value;
    console.log('Biến ô input 1: ' + valCheck);

    //khai báo biễn lỗi
    var err = 0;

    //Khai báo biến để kiểm tra giá trị trong mảng
    var needle= document.getElementById('checkArr').value;
    console.log('Biến ô input 2: ' + needle);
    //Giá trị mảng
    var haystack= document.getElementById('dataArr').value;
    console.log('Biến ô input 3: ' + haystack);

    //Kiểm tra empty
    if(isEmpty(valCheck)){
        err = 1;
    }

    //Kiểm tra biến có phải là mảng
    if( isArray(valCheck)){
        err = 2;
    }

    //Kiểm tra biến chứa giá trị trong mảng
    if ( inArray(needle, haystack)){
        err = 3;
    }

    //Xuất câu thông báo
    switch(err){
        case 1: //thông báo chưa điền dữ liệu
            alert('Chưa điền dữ liệu');
            break;
        case 2: //thông báo Biến được lưu trữ một mảng
            alert('Biến được lưu trữ một mảng');
            break;
        case 3://thông báo Biến không chứa trong mảng
            alert('Biến chứa trong mảng!');
            break;
        default:
            break;
    }

})