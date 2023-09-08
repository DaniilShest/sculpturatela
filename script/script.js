$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.burger').on('click', function () {
        $('.burger,.mobile_menu').toggleClass('open')
        $('.header_fixed').toggleClass('open')
        $('body').toggleClass('lock')
    })

    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');
        if (href == '#popup') {
            return true
        }
        else if (href == '#popup_politic') {
            return true
        }
        else {
            $('html, body').animate({
                scrollTop: $(href).offset().top - 120
            }, 1000);
            $('.burger,.mobile_menu').removeClass('open')
        }

        $('body').removeClass('lock');
    });

    $('#to_sellers').on('click', function () {
        $('#to_buyers,#to_buyer').removeClass('active')
        $('#to_sellers,#to_seller').addClass('active')
    })
    $('#to_buyers').on('click', function () {
        $('#to_sellers,#to_seller').removeClass('active')
        $('#to_buyers,#to_buyer').addClass('active')
    })

    $('#checkbox').on('change', function () {
        if ($(this).is(':checked')) $('.request_btn').attr('disabled', false);
        else $('.request_btn').attr('disabled', true);
    });

    // $('.request_btn').on('click', function () {
    //     $(this).html("Отправлено!")
    // })

    // $('.popup_btn').on('click', function () {
    //     $(this).html("Отправлено!")
    // })



});

window.addEventListener('scroll', function () {

    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        document.querySelector(".header").classList.add('header_fixed')
    }

    else {
        document.querySelector(".header").classList.remove('header_fixed')
    }

});

const required = document.querySelectorAll(".request_input.star")
