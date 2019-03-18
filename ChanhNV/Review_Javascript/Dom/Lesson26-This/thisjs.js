
//function get object This
function getObjectThis(idChoose)
{
    document.getElementById(idChoose).addEventListener('click', function(){
        alert(this.type)
    })
}
//get object
getObjectThis('btnEvent');