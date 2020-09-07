$(function () {
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    /* Fixed Header */
    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate(
            {
                scrollTop: elementOffset + 5,
            },
            700
        );
    });

    /* Nav Toggle */

    // let nav = $("#nav");                 //объявил вверху
    // let navToggle = $("#navToggle");      //объявил вверху

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* Slider   https://kenwheeler.github.io/slick/  */

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });
});
