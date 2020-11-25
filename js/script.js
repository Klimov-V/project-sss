$(document).ready(function(){
    $('#commentsSlider').slick({
        autoplay: true,
        autoplaySpeed: 5e3,
        centerMode: true,
        centerPadding: "10%",
        slidesToShow: 1,
        focusOnSelect: !0,
        arrows: !0,
        swipe: !0,
        responsive: [{
            breakpoint: 991.98,
            settings: {
                arrows: !1
            }
        }]
    });
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
});