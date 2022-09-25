$(function() {
  // let url = $(location).attr("pathname");

  // includeHTML
  $("header").load("/lab/include/header.html");
  $("footer").load("/lab/include/footer.html");
});

// 숫자 추출
function extNumber(res) {
  return Number(res.replace(/[^0-9]/g, ""));
}
