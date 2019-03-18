
//Function Dropdowmenu

function dropDowMenu(selecParent, selectChild)
{
    //Get list menu
    var lstMenu = document.querySelectorAll(selecParent);
    
    //Set event foreach menu
    for(var i = 0; i < lstMenu.length; i++)
    {
        lstMenu[i].addEventListener('click', function(){

            //unknown menu child
            var menuList = document.querySelectorAll(selectChild);
            for(var j = 0; j < menuList.length; j++)
            {
                menuList[j].style.display = 'none';
            }

            //show menu now
            this.children[1].style.display = 'block';
        });

        lstMenu[i].addEventListener('dblclick', function(){

            //unknown menu child
            var menuList = document.querySelectorAll(selectChild);
            for(var k = 0; k < menuList.length; k++)
            {
                menuList[k].style.display = 'none';
            }
        });

        lstMenu[i].addEventListener('mouseover', function(){

            //unknown menu child
            var menuList = document.querySelectorAll(selectChild);
            for(var k = 0; k < menuList.length; k++)
            {
                menuList[k].style.background = 'green';
            }
        });
    }
}

dropDowMenu('#dropdown > li', '#dropdown > li > ul');