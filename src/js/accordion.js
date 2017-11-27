// ダブルクォーテーションになっている
$(function(){
  $(".ac-btn").on("click", function() {
    $(".additional-row").slideToggle();
    $(".ac-btn").toggleClass("up");
    return false;
  });
});
