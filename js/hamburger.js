'use strict';{
    
// //ハンバーガーボタン
// document.querySelector('.js-hamburger').addEventListener(
//     'click',() => {
//         document.querySelector('.js-hamburger').classList.toggle('is-open');
//         document.querySelector('.p-gmenu').classList.toggle('is-open');
//     }

// );


//メインメニュードロップダウン
$(function() {
    $('.js-hamburger').on('click', function() {
        $(this).toggleClass("is-open");
        $('.p-gmenu').slideToggle(200);
    });
});

//サブメニュードロップダウン
$(function() {
    $(".js-dropdown").hover(
        function() {
            $(".p-submenu:not(:animated)", this).slideDown(200);
        },
        function() {
            $(".p-submenu", this).slideUp(100);
        }
    );
});

}