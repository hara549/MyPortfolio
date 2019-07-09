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

  //スクロール
  $('#introduction-header').on('click', function() {
      $("html,body").animate({scrollTop:$('.introduction').offset().top-70});
  })
  $('#products-header').on('click', function() {
      $("html,body").animate({scrollTop:$('.products').offset().top-70});
  })
  $('#contact-header').on('click', function() {
      $("html,body").animate({scrollTop:$('.contact').offset().top-70});
  })

  //topへ戻るボタン
  $('#back-to-top').hide();
  //スクロールが十分されたら表示、スクロールが戻ったら非表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  //クリック時topへ戻る
  $('#back-to-top').click(function() {
    $('html,body').animate({
      scrollTop:100
    }, 400);
    return false;

  })

});
