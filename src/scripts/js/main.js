;
$(document).ready(function() {
    new WOW().init();
    $('[data-toggle="tooltip"]').tooltip();
    if ($(window).width() < 1199) {
        if ($('.langdingpage').length = 0) {
            $('header').scrollToFixed({ zIndex: 110 });
        }
    }
    $('.landing-header').scrollToFixed({
        zIndex: 110,
    });
    // RESPONSIVE TABS
    $('#responsivetabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.btn-up').fadeIn(300);
        } else {
            $('.btn-up').fadeOut(300);
        }
    });

    $('.btn-up').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 900);
    });

    if ($(window).width() < 1200) {
        $('.tool').insertBefore($('.menulink'));
        $('.topmenu').insertAfter($('.menulink'));
        $('.language').insertAfter($('.topmenu'));
    }

    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
    });
    $('.btn-closemenu').click(function() {
        $('.menu').removeClass('open');
        $('.overlay').fadeOut(500);
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('.sub').removeClass('open');
    });

    $('.btn-showsub').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    });
    $('.btn-closesub').click(function() {
        $('.sub').removeClass('open');
    });

    $('.btn-shownav').append($('.sidelink li.active a').html());
    $('.btn-shownav').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sidelink').slideToggle(300);
    });

    $(".pagename").append($('.breadcrumb li a.active').find('span').html());

    $(".counter").countimator({
        duration: 1000
    });

    // PRODUCT SLIDE

    $('.product-banner').slick({
        slidesToShow: 1,
        slidesToScroll1: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
    });

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        swipe: true,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 3,
                    // vertical: false,
                    // verticalSwiping: false
                }
            }
        ]
    });

    $('.category-slide').slick({
        dots: true,
        autoplay: false,
        infinite: false,
        arrows: false,
        fade: true
    });

    $('.upcoming-slide').slick({
        dots: true,
        autoplay: false,
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 544,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.newproduct-slide').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        infinite: true,
    });

    $('.brand-slide').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.bigproduct-slide',
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        prevArrow: $('#brand-prev'),
        nextArrow: $('#brand-next'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        }]
    });

    $('.bigproduct-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.brand-slide'
    });

    // Instagram
    $('.ver-slide').slick();
    $('div[id^="inModal-"]').on('shown.bs.modal', function(e) {
        e.preventDefault();
        $(this).find('.ver-slide').slick('unslick');
        $(this).find('.ver-slide').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true,
            infinite: true,
            prevArrow: $('#ver-prev'),
            nextArrow: $('#ver-next'),
            vertical: true,
            verticalSwiping: true
        });
    });

    $('.other-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 1
            }
        }]

    });

    $('.store-img').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]

    });

    $('.shopbanner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });

    $('.news-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.sale-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#sale-prev'),
        nextArrow: $('#sale-next'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.cart-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#cart-prev'),
        nextArrow: $('#cart-next'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]

    });

    // $('.countdown[data-countdown]').each(function() {
    //     var datecount = $(this).data('countdown');
    //     $(this).countdown(datecount, function(event) {
    //         var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    //         $(this).html(event.strftime(totalHours + ':%M:%S'));
    //     });
    // });

    $(".facebook,.google").on('click', function() {
        var url = $(this).data('url');
        window.open(url, "popupWindow", "width=660,height=480,scrollbars=yes");
        return false;
    });

    $('.close-btn').click(function(event) {
        $(this).parent().addClass('hidden');
    });

    // $('.fancybox-img').fancybox({
    //     'padding': 0,
    //     helpers: {
    //         overlay: {
    //             locked: false
    //         }
    //     }
    // });

    // $('.btn-spin').click(function() {

    //     var $button = $(this);
    //     var oldValue = $button.parent().find('input').val();

    //     if ($button.text() == '+') {
    //         var newVal = parseFloat(oldValue) + 1;
    //     } else {
    //         // Don't allow decrementing below zero
    //         if (oldValue > 0) {
    //             var newVal = parseFloat(oldValue) - 1;
    //         } else {
    //             newVal = 0;
    //         }
    //     }

    //     $button.parent().find('input').val(newVal);
    //     if ($('.carttable').length)
    //         AjaxCart.updatecart();
    // });

    $('.detail-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                centerMode: false
            }
        }, {
            breakpoint: 543,
            settings: {
                vertical: false,
                verticalSwiping: false,
                centerMode: false
            }
        }, ]
    });


    // FILTER SCRIPT

    $('.btn-showsubfilter').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });
    $('.btn-showcate').click(function() {
        $(this).toggleClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.option-group').removeClass('open');
        $('.category-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-showfilter').click(function() {
        $(this).toggleClass('active');
        $('.btn-showcate').removeClass('active');
        $('.category-group').removeClass('open');
        $('.option-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-closefilter').click(function() {
        $('.btn-showcate').removeClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.filter-wrap').removeClass('open');
        $('.filter-wrap2').removeClass('open');
        // $('html').css('overflow', 'auto');
    });

    $('.filter-group .filter-title').click(function() {
        var _parent = $(this).parent();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            _parent.find('.filter-option').slideUp(300);
        } else {
            $('.filter-group .filter-title').removeClass('active');
            $('.filter-group .filter-option').slideUp();
            $(this).addClass('active');
            _parent.find('.filter-option').slideDown(300);
        }
    });

    // PROMOTION PAGE SCRIPT
    $('.promotion-banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: false,
        asNavFor: '.promotion-banner-nav'
    });
    $('.promotion-banner-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.promotion-banner-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // PRODUCT DETAIL SCRIPT
    if ($('.product-description .product-content .content').height() < 700) {
        $('.product-description .product-content').addClass('open');
        $('.product-description .btn-viewmore').remove();
    }

    $('.product-description .btn-viewmore').click(function() {
        $(this).parent().prev('.product-content').addClass('open');
        $(this).remove();
    });

    // SYSTEM SLIDE
    $('.system-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: 5000,
    });

    $('.system-star').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });


});

// PAGE SCROLL TO ID

$(window).on("load", function() {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 60,
        forceSingleHighlight: true
    });
    $("a[rel='m_PageScroll2id2']").mPageScroll2id({
        offset: 100,
        forceSingleHighlight: true
    });
});

;

// CSS MENU LINE

// (function($) {

//     $.fn.menumaker = function(options) {
//         var cssmenu = $(this),
//             settings = $.extend({
//                 title: "Menu",
//                 format: "dropdown",
//                 sticky: false
//             }, options);
//     };
// })(jQuery);

// (function($) {
//     $(document).ready(function() {

//         $(document).ready(function() {
//             $("#cssmenu").menumaker({
//                 title: "Menu",
//                 format: "multitoggle"
//             });

//             $("#cssmenu").prepend("<div id='menu-line'></div>");

//             var foundActive = false,
//                 activeElement, linePosition = 0,
//                 menuLine = $("#cssmenu #menu-line"),
//                 lineWidth, defaultPosition, defaultWidth;

//             $("#cssmenu > a").each(function() {
//                 if ($(this).hasClass('mPS2id-highlight')) {
//                     activeElement = $(this);
//                     foundActive = true;
//                 }
//             });

//             if (foundActive === false) {
//                 activeElement = $("#cssmenu > a").first();
//             }

//             defaultWidth = lineWidth = activeElement.width();

//             defaultPosition = linePosition = activeElement.position().left;

//             menuLine.css("width", lineWidth);
//             menuLine.css("left", linePosition);

//             $("#cssmenu > a").hover(function() {
//                     activeElement = $(this);
//                     lineWidth = activeElement.width();
//                     linePosition = activeElement.position().left;
//                     menuLine.css("width", lineWidth);
//                     menuLine.css("left", linePosition);
//                 },
//                 function() {
//                     menuLine.css("left", defaultPosition);
//                     menuLine.css("width", defaultWidth);
//                 });

//         });

//     });
// })(jQuery);