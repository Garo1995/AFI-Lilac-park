

let lilacSwiper = new Swiper(".lilac-park-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
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
        el: ".news-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
    },
});
