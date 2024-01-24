
$(".category-btn").on( {
  mouseenter: function() {
    $(this).children(".arrow").addClass("arrowTranslateX");
  },
  mouseleave: function() {
    $(this).children(".arrow").removeClass("arrowTranslateX");
  },
});

$("td").on( {
  mouseenter: function() {
    $(this).addClass("arrowTranslateX");
  },
  mouseleave: function() {
    $(this).removeClass("arrowTranslateX");
  },
});

$(".ft-link-item").on( {
  mouseenter: function() {
    $(this).addClass("arrowTranslateX");
  },
  mouseleave: function() {
    $(this).removeClass("arrowTranslateX");
  },
});

$(".contact-btn").on({
  mouseenter: function() {
    $(this).find("span").addClass("arrowTranslateX");
  },
  mouseleave: function() {
    $(this).find("span").removeClass("arrowTranslateX");
  }
});

$(".ft-bottom-link-item").on({
  mouseenter: function() {
    $(this).find(".arrow").addClass("arrowTranslateX");
  },
  mouseleave: function() {
    $(this).find(".arrow").removeClass("arrowTranslateX");
  }
});