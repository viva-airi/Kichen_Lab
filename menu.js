$(function () {
  // MenuIconが存在する場合のみ実行
  if ($("#MenuIcon").length) {
    const $menuIcon = $("#MenuIcon");
    const $openIcon = $("#OpenIcon");
    const $closeIcon = $("#CloseIcon");
    const $spNav = $(".sp-nav");

    // メニューアイコンをクリックしたとき
    $menuIcon.on("click", function () {
      $openIcon.toggle();
      $closeIcon.toggle();
      $spNav.toggleClass("show");
    });

    // 画面サイズが959px以上になったときにSPナビを強制的に閉じる
    $(window).on("resize", function () {
      if ($(window).width() > 958) {
        $spNav.removeClass("show");
        $openIcon.show();
        $closeIcon.hide();
      }
    });
  }
});
