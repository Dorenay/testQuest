function hideGetButton(){
    $('.get-button button').click(function(){
        $('.get-button button').css('visibility', 'hidden');
        $('.input-alternative-placegolder').css('display', 'block');
        $('.get-button input').css('visibility', 'visible').focus();
        $('.input-subtitle').css('visibility', 'visible');                        
    });
    $('.get-button input').blur(function(){
        $('.get-button button').css('visibility', 'visible');
        $('.input-alternative-placegolder').css('display', 'none');
        $('.get-button input').css('visibility', 'hidden');
        $('.input-subtitle').css('visibility', 'hidden');        
    });
}
function checkInputValue(){
    $('.get-button input').keydown(function(e){
        if(e.keyCode == 8){var j = false;}else{var j = true;}
        var a =$('.get-button input').val().length,
            strA = String($('input').val()),
            numA = Number(strA.slice(0, - 1)),
            nuOfLi = $('.input-alternative-placegolder li').length;
        if(a > (nuOfLi - 1)){
              $('.get-button input').val(numA);
            }
        for(var i = 0; i <= a; i++){
            $('.input-alternative-placegolder li').eq(i).css('visibility', 'hidden');
        }
        if(!j){
            for(var i = a-1; i <= nuOfLi; i++){
                $('.input-alternative-placegolder li').eq(i).css('visibility', 'visible');
            }
        }else{
            for(var i = a+1; i <= nuOfLi; i++){
                $('.input-alternative-placegolder li').eq(i).css('visibility', 'visible');
            }
        }   
    });
}

function missClick(targetBlock, childBlock, className){
    $(document).mouseup(function (e){   
        if($(childBlock).hasClass(className)){
        var div = $(targetBlock);
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                   $(childBlock).removeClass(className);
            }
        }
    });
}

function dropDownMenu(targetBlock, childBlock, className){
    $(targetBlock).click(function(){
        $(childBlock).toggleClass(className);
    });

}

function slideSlider(time){
    var t;
    $( document ).ready(function(){
        $('.timer-status[data-slide="current"]').css({'animation':'timerLoading ' + time/1000 + 's'});
        t = setInterval(function(){
            $('.arrow-prev').click();
        },time);        
    });
    var mouseOver = false;
    function playAnimation(){
        if(!mouseOver){
            $('.timer-status[data-slide="current"]').css({'animation':'timerLoading ' + time/1000 + 's'});
        }
    }
    $('.arrow-next').click(function(){
        var current= $('.slide[data-slide="current"]');
        var currentL=$('.timer-status[data-slide="current"]');
        currentL.css({'animation':'none'});
        if  (current.is('.slide:last')){
            currentL.removeAttr('data-slide');          
            current.removeAttr('data-slide');
            $('.slide').eq(0).attr('data-slide', 'current');
            $('.box-empty:eq(0) .timer-status').attr('data-slide', 'current');
            playAnimation();
        }else{           
            current.removeAttr('data-slide');
            currentL.removeAttr('data-slide'); 
            current.next('.slide').attr('data-slide', 'current');
            currentL.parents('.box-empty').next('.box-empty').children('.timer-status').attr('data-slide', 'current');
            playAnimation();
        }
    });
    $('.arrow-prev').click(function(){
        var current= $('.slide[data-slide="current"]');
        var currentL=$('.timer-status[data-slide="current"]');
        currentL.css({'animation':'none'});
        if  (current.is('.slide:first')){
            current.removeAttr('data-slide');
            currentL.removeAttr('data-slide'); 
            $('.slide:last').attr('data-slide', 'current');
            $('.box-empty:last .timer-status').attr('data-slide', 'current');
            playAnimation();
        }else{           
            current.removeAttr('data-slide');
            currentL.removeAttr('data-slide');
            current.prev('.slide').attr('data-slide', 'current');
            currentL.parents('.box-empty').prev('.box-empty').children('.timer-status').attr('data-slide', 'current');
            playAnimation();         
        }
    });
    $('.slider-body').mouseleave(function(){
        mouseOver = false;
        $('.timer-status[data-slide="current"]').css({'animation':'timerLoading ' + time/1000 + 's'});
        t = setInterval(function(){
            $('.arrow-prev').click();
        },time);
    });
    $('.slider-body').mouseenter(function(){
        mouseOver = true;
        $('.timer-status[data-slide="current"]').css({'animation':'none'});
        clearInterval(t);
    });
}
function showSideMenu(){
    $('.nav-bar__left-menu').click(function(){
        $('.side-menu').addClass('show');
    });
}
function hideSideMenu(){
    $('.nav-bar__close-side-menu').click(function(){
        $('.side-menu').removeClass('show');
    });
}
function showVideoSection(){
    $('.main-section__title-block__video-button').click(function(){
        $('.video-section').addClass('show');
    });
}
function hideVideoSection(){
    $('.video-section__close').click(function(){
        $('.video-section').removeClass('show');
    });
}

$( document ).ready(function(){
    showVideoSection();
    hideVideoSection();
    showSideMenu();
    hideSideMenu();
    checkInputValue();
    hideGetButton();
    dropDownMenu('.right-dropdown-container', '.right-dropdown-menu', 'show');
    dropDownMenu('.lang-bar', '.lang-bar__drop-down-list', 'show');
    dropDownMenu('.side-menu__lang-block', '.side-menu__drop-down-lang-list', 'show');
    missClick('.lang-bar__drop-down-list', '.lang-bar__drop-down-list', 'show');    
    missClick('.right-dropdown-menu', '.right-dropdown-menu', 'show');
    missClick('.side-menu__drop-down-lang-list', '.side-menu__drop-down-lang-list', 'show');    
    slideSlider(10000);
});
