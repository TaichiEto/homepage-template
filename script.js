$(document).ready(function() {
  // ナビゲーションリンクがクリックされたときのスムーズスクロール
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // お問い合わせフォームの送信ボタンがクリックされたときの処理
  $('#contact-form').submit(function(event) {
    event.preventDefault();
    // 送信処理やバリデーションなどの実装をここに追加
    alert('お問い合わせが送信されました！');
    $(this).get(0).reset();
  });
});
