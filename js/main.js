function debounce(func, wait = 1260, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const heading = document.querySelector('.sign');
const box = document.querySelector('.quote');

box.addEventListener("mouseenter", debounce(function(e) {
    heading.setAttribute("src", "images/opt-sign.gif");
}));
box.addEventListener("mouseleave", function(e) {
    heading.setAttribute("src", "img/blank.png");
});



var swiperOne = new Swiper('.project-swiper', {
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 60,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: '.swiper-pagination'
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});

var swiperTwo = new Swiper('.exp-container', {
    slidesPerView: 3,
    spaceBetween: 60,
    grabCursor: true,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});