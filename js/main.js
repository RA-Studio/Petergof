$(document).ready(function () {
    resizewindow();
    $(window).resize(function(e){
        resizewindow();
    });

    if($('body').is('.features-page')) {
        const sliderCount = $('.slider__item').length;
        const slider = $('.slider-wrapper');
        const slider2 = $('.left-wrapper-slider');
        const progressBar = $('.progress');
        progressBar.css('background-size', '100%' + 100 / sliderCount + '%');

        slider.on('wheel', (function(e) {
            e.preventDefault();

            if (e.originalEvent.deltaY < 0) {
                $(this).slick('slickPrev');
            } else {
                $(this).slick('slickNext');
            }
        }));
        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            let calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
            if(screen.width > 768){
                progressBar
                    .css('background-size', '100%' + calc + '%')
                    .attr('aria-valuenow', calc );
            } else {
                progressBar
                    .css('background-size', calc + '%' + '100%')
                    .attr('aria-valuenow', calc );
            }


        });
        slider.slick({
            arrows: false,
            vertical: true,
            infinite: false,
            dots: false,
            asNavFor: slider2,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: true,
                        vertical: true
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        vertical: true,
                        adaptiveHeight: true
                    }
                }

            ]
        });
        slider2.slick({
            arrows: false,
            vertical: false,
            infinite: false,
            dots: false,
            fade: true,
            draggable: false,
            swipe: false,
        });
    }
    let modalMenu = $(".menu-wrapper__modal-menu");
    let menuWrapper = $(".menu-wrapper");
    let menuWrapperBg = $(".menu-wrapper__bg");

    $( ".hamburger-header" ).click(function() {
        modalMenu.toggleClass( "flex" );
        menuWrapper.toggleClass( "block" );
        menuWrapperBg.toggleClass( "block" );
        $( ".menu-wrapper__modal-menu .hamburger" ).toggleClass( "is-active" );

        if (modalMenu.hasClass("flex") && $(window).width() < 500) {
            $(".logo-wrapper").css("z-index", "0");
            $(".right-wrapper").css("display", "none");
            $(".left-wrapper").css("display", "none");
        } else if (modalMenu.hasClass("flex") && $(window).width() < 769) {
            $(".right-wrapper").css("display", "none");
            $(".left-wrapper").css("display", "none");
        } else {
            $(".logo-wrapper").css("z-index", "10");
            $(".right-wrapper").css("display", "flex");
            $(".left-wrapper").css("display", "flex");
        }
    });
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            if (!modalMenu.is(e.target) // если клик был не по нашему блоку
                && modalMenu.has(e.target).length === 0 && modalMenu.hasClass('flex')) { // и не по его дочерним элементам
                modalMenu.toggleClass( "flex" );
                menuWrapper.toggleClass( "block" );
                menuWrapperBg.toggleClass( "block" );
                $( ".menu-wrapper__modal-menu .hamburger" ).toggleClass( "is-active" );
            }
        });
    });


    if ($('#calendar').length) {
        $('#calendar').datepicker({
            dateFormat: "MM yyyy",
            view: 'months',
            minView: 'months',
            position: "bottom right",
            language: "ru",
            endDate: new Date(),
        });
    }
});
function resizewindow() {
    if(screen.width < 769) {
        $(document).find('.progress').css('width', $(document).find('.right-wrapper').width() + 'px');
    } else {
        $(document).find('.progress').css('width', 3 + 'px');
    }
}

