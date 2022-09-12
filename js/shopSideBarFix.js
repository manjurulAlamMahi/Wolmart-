// Shop side menu fix 
// var abc = $('#shop_body').offset().top;

$(window).on('scroll', function () {
    var def = $(this).scrollTop();

    if (def > 950) {
        $('.shop_sidebar').addClass('shop_main_side_bar_fix');
    } else {
        $('.shop_sidebar').removeClass('shop_main_side_bar_fix');
    }
});