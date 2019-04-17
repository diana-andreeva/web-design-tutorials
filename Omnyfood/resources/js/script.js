$(document).ready(function () {
    /* Sticky Navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        // 60px before .js--section-features
        offset: '60px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000)
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000)
    });

    $('a').click(function () {
        if(this.hash !== '') {
            var hash = this.hash;
        }

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000)
    });

});