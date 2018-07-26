function dropDownMenu(targetBlock, childBlock, className){
    $(targetBlock).click(function(){
        $(childBlock).toggleClass(className);
    });

}


$( document ).ready(function(){
    dropDownMenu('.burder', '.nav>ul', 'show');
    dropDownMenu('.nav>ul>li.cross', '.nav>ul', 'show');  
});
