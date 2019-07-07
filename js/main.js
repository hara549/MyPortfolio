$(function() {
  //slicker
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
            }
        },
    ]
  });

  //prevボタン、nextボタンの表示非表示
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }

  // インデックスボタン押下時
  $('.index-btn').click(function() {
    $('.active').removeClass('active');

    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');

    toggleChangeBtn();
  });

  // prevボタン、nextボタン押下時
  $('.change-btn').click(function() {
    // 現在表示されているスライドを変数に退避する
    var $displaySlide = $('.active');

    $displaySlide.removeClass('active');

    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });

  //topへ戻るボタン
  $('#back-to-top').hide();
  //スクロールが十分されたら表示、スクロールが戻ったら非表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  //クリック時topへ戻る
  $('#back-to-top a').click(function() {
    $('body').animate({
      scrollTop:100
    }, 800);
    return false;

  });

  //introductionへ遷移
  //introducitonの位置を取得
  var introductionLine = document.getElementById("introduction");
  //取得した位置へ遷移
  $('#introduction-header').click(function(){
    console.log(introductionLine);
    $('body').animate({
      scrollTop:introductionLine
    }, 500);
    return false;
  });


});
