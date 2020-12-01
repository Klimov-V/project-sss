$(document).ready(function(){
    new WOW().init();

    $('#commentsSlider').slick({
        autoplay: true,
        autoplaySpeed: 5e3,
        centerMode: true,
        centerPadding: "10%",
        slidesToShow: 1,
        focusOnSelect: !0,
        variableWidth: true,
        arrows: !0,
        swipe: !0,
    });

    if ($(window).width() < 768 ) {
        $('#companysSlider').slick({
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
        $('#companysSlider').attr('id', '');
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
        appendDots: $('.pagination__dots'),
        appendArrows: $('.pagination__buttons'),
        responsive: [{
        breakpoint: 992,
        settings: {
            arrows: !1
        }
        }]
    }); 
    $("#screenshotsThumbler").slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        asNavFor: "#screenshotsSlider",
        dots: !1,
        focusOnSelect: !0,
        adaptiveHeight: !0,
        speed: 50
    });
    $("#screenshotsSlider").on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".pagination__counter b").html('0' + (currentSlide + 1));
    });
    $(".slick-arrow").click((e) => {
        $(".slick-arrow").blur();
        
    })

    function togglerHeightToSlide (e) {
      e.stopPropagation();
      $(this).parent(".comment").toggleClass("open");
    //   $(this).closest(".slick-list").height("auto")
    }
    $('.openText').click(togglerHeightToSlide);


    var courses = document.getElementById("courses");
    var btn = document.querySelectorAll('.scrollToCourses');

    function handleButtonClick(e) {
        e.preventDefault();

        courses.scrollIntoView({block: "center", behavior: "smooth"});
    }

    btn.forEach(btn => {
        btn.addEventListener('click', handleButtonClick);
    });

});
