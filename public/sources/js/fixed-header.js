var limit = 0.9, //implies 40 vh or 40% of viewport height
  scrollLimit = 0;

$(window)
  .resize(function () {
    scrollLimit = $(window).height() * limit;
  })
  .scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollLimit) {
      $(".logo-fixed-header").addClass("darkHeader");
    } else {
      $(".logo-fixed-header").removeClass("darkHeader");
    }
  })
  .trigger("resize")
  .trigger("scroll"); // trigger both events on start to force initial setup
