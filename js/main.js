$(function() {

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

});
