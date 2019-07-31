$(function() {
  //slicker
  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   responsive:[
  //       {
  //           breakpoint: 1024,
  //           settings:{
  //               slidesToShow:3,
  //           }
  //       },
  //       {
  //           breakpoint: 768,
  //           settings:{
  //               slidesToShow:2,
  //           }
  //       },
  //       {
  //           breakpoint: 480,
  //           settings:{
  //               slidesToShow:1,
  //           }
  //       },
  //   ]
  // });
  var mainSlider = "#slider"; //メインスライダーid
  var thumbnailSlider = "#thumbnail_slider"; //サムネイルスライダーid

   $(mainSlider).slick({
     autoplay: false,
     speed: 1000,
     arrows: false,
     asNavFor: thumbnailSlider
   });
   $(thumbnailSlider).slick({
     slidesToShow: 3,
     speed: 1000,
     asNavFor: mainSlider
   });
   //#thumbnail_sliderでクリックしたスライドをカレントにする
   $(thumbnailSlider+" .slick-slide").on('click',function(){
     var index = $(this).attr("data-slick-index");
     $(thumbnailSlider).slick("slickGoTo",index,false);
   });

  // //スクロール
  // $('#introduction-header').on('click', function() {
  //     $("html,body").animate({scrollTop:$('.introduction').offset().top-70});
  // })
  // $('#products-header').on('click', function() {
  //     $("html,body").animate({scrollTop:$('.products').offset().top-70});
  // })
  // $('#contact-header').on('click', function() {
  //     $("html,body").animate({scrollTop:$('.contact').offset().top-70});
  // })
  //
  // //topへ戻るボタン
  // $('#back-to-top').hide();
  // //スクロールが十分されたら表示、スクロールが戻ったら非表示
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 300) {
  //     $('#back-to-top').fadeIn();
  //   } else {
  //     $('#back-to-top').fadeOut();
  //   }
  // });
  // //クリック時topへ戻る
  // $('#back-to-top').click(function() {
  //   $('html,body').animate({
  //     scrollTop:100
  //   }, 400);
  //   return false;
  //
  // })

});
