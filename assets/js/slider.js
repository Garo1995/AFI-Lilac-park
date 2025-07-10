

let lilacSwiper = new Swiper(".lilac-park-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".lilac-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".lilac-button-next",
        prevEl: ".lilac-button-prev",
    },
});

let spacesSwiper = new Swiper(".spaces-children-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '600': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".spaces-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".spaces-button-next",
        prevEl: ".spaces-button-prev",
    },
});



let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '600': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
});


let favorableSwiper = new Swiper(".favorable-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '620': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".favorable-pagination",
        clickable: true,
    },
});








let constructionSwiper = new Swiper(".construction-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1299': {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        '1020': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '620': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".construction-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".construction-button-next",
        prevEl: ".construction-button-prev",
    },
});



let newsSwiper = new Swiper(".news-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '620': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".news-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
    },
});






let commercialSwiper = new Swiper(".commercial-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '575': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".commercial-pagination",
        clickable: true,
    },

});


let calculateSwiper = new Swiper(".calculate-standard-slid", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '530': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".calculate-pagination",
        clickable: true,
    },

});










let galleryModSlider = new Swiper(".gallery-mod-slider", {
    slidesPerView: 1,
    spaceBetween: 4,
    loop: true,
    speed: 600,
    pagination: {
        el: ".gallery-mod-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".gallery-mod-button-next",
        prevEl: ".gallery-mod-button-prev",
    }
});




let residentialSlider = new Swiper(".residential-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    pagination: {
        el: ".residential-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".residential-button-next",
        prevEl: ".residential-button-prev",
    }
});



























document.addEventListener("DOMContentLoaded", function () {

    // Основной слайдер с картинками
    let floorSwiper = new Swiper(".floor-plan-slider", {
        slidesPerView: 1,
        loop: true,
        fadeEffect: { crossFade: true },
        virtualTranslate: true,
        effect: "fade",
        speed: 600,
        navigation: {
            nextEl: ".floor-button-next",
            prevEl: ".floor-button-prev",
        },
    });


    const activeFloorSpans = document.querySelectorAll(".active-floor");

    const floorCountSwiper = new Swiper(".count-slid", {
        slidesPerView: 7,
        direction: "vertical",
        spaceBetween: 5,
        centeredSlides: true,
        breakpoints: {
            1199: {
                slidesPerView: 7,
                slidesPerGroup: 1,
            },
            620: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                direction: "horizontal",
            },
            320: {
                direction: "horizontal",
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
        },
        navigation: {
            nextEl: ".floor-button-next",
            prevEl: ".floor-button-prev",
        },
        on: {
            init: updateActiveNumber,
            slideChangeTransitionEnd: updateActiveNumber,
        },
    });

    function updateActiveNumber() {
        const activeSlides = document.querySelectorAll(".count-slid .swiper-slide-active:not(.swiper-slide-duplicate)");
        if (activeSlides.length === 0) return;

        const middleIndex = Math.floor(activeSlides.length / 2);
        const centralSlide = activeSlides[middleIndex];
        if (!centralSlide) return;

        const numberEl = centralSlide.querySelector(".count-slid-floor");
        if (!numberEl) return;

        // Обновим все элементы с классом .active-floor
        activeFloorSpans.forEach(span => {
            span.textContent = numberEl.textContent.trim();
        });
    }

});
