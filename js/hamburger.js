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

// パララックス
$(window).on('scroll', function() {
    const scrollPosition = $(this).scrollTop();
    $('.parallax').css('transform', 'translateY(' + scrollPosition * 0.2 + 'px)');
    
});  

//レスポンシブ時にメニュー表示

const mediaQueryList = window.matchMedia('(min-width: 1199px)');
const gmenu = document.querySelector(".p-gmenu");
    
/**
 * イベントリスナー
 */
const listener = (event) => {
  // リサイズ時に行う処理
  if (event.matches) {
    // 1199px以上
    gmenu.style.display = 'block';
  } else {
    // 1199px未満
    gmenu.style.display = 'none';
  }
};

// リスナー登録
// mediaQueryList.addListener(listener); // @deprecated
mediaQueryList.addEventListener("change", listener);

// 初期化処理
listener(mediaQueryList);
     

}