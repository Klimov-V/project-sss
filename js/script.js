$(document).ready(function () {
  new WOW().init();

  $("#commentsSlider").slick({
    autoplay: true,
    autoplaySpeed: 5e3,
    centerMode: true,
    centerPadding: "10%",
    slidesToShow: 1,
    focusOnSelect: !0,
    variableWidth: true,
    arrows: !0,
    swipe: !0,
    prevArrow: '<a class="slick-prev" id="prev">Previous</a>',
    nextArrow: '<a class="slick-next" id="next">Next</a>',
  });

  if ($(window).width() < 768) {
    $("#companysSlider").slick({
      autoplay: true,
      autoplaySpeed: 5e3,
      centerMode: true,
      respondTo: "min",
      centerPadding: "10%",
      slidesToShow: 1,
      focusOnSelect: !0,
      variableWidth: true,
      arrows: false,
      swipe: !0,
    });
  } else {
    $("#companysSlider").attr("id", "");
  }

  $("#screenshotsSlider").slick({
    autoplay: !0,
    autoplaySpeed: 3e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: "#screenshotsThumbler",
    arrows: !0,
    dots: true,
    fade: !0,
    appendDots: $(".pagination__dots"),
    appendArrows: $(".pagination__buttons"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: !1,
        },
      },
    ],
  });
  $("#screenshotsThumbler").slick({
    slidesToShow: 11,
    slidesToScroll: 1,
    asNavFor: "#screenshotsSlider",
    dots: !1,
    focusOnSelect: !0,
    adaptiveHeight: !0,
    speed: 50,
  });
  $("#screenshotsSlider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".pagination__counter b").html("0" + (currentSlide + 1));
    }
  );
  $(".slick-arrow").on("click", function (e) {
    // $(this).preventDefault();
    $(this).blur();
  });

  function togglerHeightToSlide(e) {
    e.preventDefault();
    $(e.target).parent(".comment").toggleClass("open");

    if ($(e.target).parent(".comment").hasClass("open")) {
      $(e.target).html("Свернуть");
    } else {
      $(e.target).html("Читать полностью ");
    }
  }

  $(".openText").click(togglerHeightToSlide);

  var courses = document.getElementById("courses");
  var btnScroll = document.querySelectorAll(".scrollToCourses");

  function handleButtonClick(e) {
    e.preventDefault();

    courses.scrollIntoView({ behavior: "smooth" });
  }

  btnScroll.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
  });

  var arrowBtns = document.querySelectorAll("#commentsSlider .slick-arrow"),
    arrowBtnPrev = document.querySelector("#prev"),
    arrowBtnNext = document.querySelector("#next");

  arrowBtns &&
    arrowBtns.forEach((arrowBtn) => {
      arrowBtn.addEventListener("mouseover", (e) => {
        e.target.classList.add("slick-arrow_hover");
      });
      arrowBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        e.target.classList.add("slick-arrow_hover");
      });
      arrowBtn.addEventListener("mouseout", (e) => {
        e.target.classList.contains("slick-arrow_hover") &&
          e.target.classList.remove("slick-arrow_hover");
      });
      arrowBtn.addEventListener("touchend", (e) => {
        e.preventDefault();
        e.target.classList.remove("slick-arrow_hover");
      });
    });

  arrowBtnPrev &&
    arrowBtnPrev.addEventListener("touchstart", () => {
      $("#commentsSlider").slick("slickPrev");
    });
  arrowBtnNext &&
    arrowBtnNext.addEventListener("touchstart", () => {
      $("#commentsSlider").slick("slickNext");
    });
});
