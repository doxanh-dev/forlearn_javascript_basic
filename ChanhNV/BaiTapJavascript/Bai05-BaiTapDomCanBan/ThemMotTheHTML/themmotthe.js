
//Function Thêm thẻ mới
function addTag(tagTitle)
{
    var title = document.getElementById(tagTitle).value;

    if(title == ''){
        alert('Bạn chưa nhập tiêu đề');
    }
    else{
        var html = '<div style="background: red; margin: 5px; padding: 5px; color: #fff;">'+ title +'</div>';
        document.getElementById('result').insertAdjacentHTML('afterend', html);
    }

}

addTag('title');