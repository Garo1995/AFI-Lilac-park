
$(document).ready(function () {
    $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
    $(".mask-phone").mask("+7 (h99) 999-99-99");
});

$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $('.menu-content').addClass('transition-menu');
        $('body').addClass('body_fix');
    });
    $('.close-menu').on('click', function () {
        $('.menu-content').removeClass('transition-menu');
        $('body').removeClass('body_fix');
    });

});


$('.price-ascending-click').on('click', function () {
    $(this).parent().toggleClass('price-ascending-act');
})


$('.price-ascending-down li').on('click', function () {
    $('.price-ascending').removeClass('price-ascending-act');
})

$('.favorite-heart').on('click', function () {
    $(this).toggleClass('favorite-heart-act');
})

$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});


$('.family-mortgage').on('click', function () {
    $('.family-mortgage').addClass('standard-opacity')
    $(this).removeClass('standard-opacity')
})

$('.calculate-click').on('click', function () {
    $('.calculate-click').removeClass('calculate-act');
    $(this).addClass('calculate-act');
    $('.calculate-mort-main').addClass('calculate-mort-none')
    $('.view-options').addClass('view-options-act')
    $('.calculate-standard').addClass('calculate-standard-open')
    $('.nothing-was-found').removeClass('nothing-was-found-open')

})
$('.standard').on('click', function () {
    $('.calculate-mort-main').addClass('calculate-mort-none')
    $('.view-options').addClass('view-options-act')
    $('.calculate-standard').removeClass('calculate-standard-open')
    $('.nothing-was-found').addClass('nothing-was-found-open')


})


$(document).ready(function () {


    function formatRUB(num) {
        return num.toLocaleString('ru-RU') + ' ₽';
    }

    function updateProgress(el) {
        const percent = (el.value - el.min) / (el.max - el.min) * 100;
        el.style.setProperty('--progress', percent + '%');
    }

// Все range input'ы
    const rangeInputs = document.querySelectorAll('.mortgage-slider input[type="range"]');
    rangeInputs.forEach(input => {
        updateProgress(input);
        input.addEventListener('input', () => updateProgress(input));
    });

// Стоимость недвижимости
    const priceInput = document.getElementById('mortgage-price');
    const priceVal = document.getElementById('mortgage-price-val');
    if (priceInput && priceVal) {
        priceVal.textContent = formatRUB(+priceInput.value);
        priceInput.addEventListener('input', () => {
            priceVal.textContent = formatRUB(+priceInput.value);
        });
    }

// Первый взнос
    const downInput = document.getElementById('mortgage-down');
    const downVal = document.getElementById('mortgage-down-val');
    if (downInput && downVal) {
        downVal.textContent = formatRUB(+downInput.value);
        downInput.addEventListener('input', () => {
            downVal.textContent = formatRUB(+downInput.value);
        });
    }

// Срок кредита
    const termInput = document.getElementById('mortgage-term');
    const termVal = document.getElementById('mortgage-term-val');
    if (termInput && termVal) {
        termVal.textContent = termInput.value + ' лет';
        termInput.addEventListener('input', () => {
            termVal.textContent = termInput.value + ' лет';
        });
    }

});


$('.compare-btn').on('click', function () {
    $('.calculate-mort-main').removeClass('calculate-mort-none')
    $('.view-options').removeClass('view-options-act')
    $('.calculate-standard').removeClass('calculate-standard-open')
    $('.nothing-was-found').removeClass('nothing-was-found-open')

})


$('.open-filter').on('click', function () {
    $('.commercial-filter').addClass('commercial-filter-open')
    $('body').addClass('body-hidden')


})

$('.close-filter').on('click', function () {
    $('.commercial-filter').removeClass('commercial-filter-open')
    $('body').removeClass('body-hidden')


})


$('.queue-floor li').on('click', function () {
    $(this).toggleClass('queue-floor-act')
})
$('.queue-floor-two').on('click', function () {
    $('.genplan-map-stage-two').toggleClass('genplan-map-stage-act')
})

$('.queue-floor-three').on('click', function () {
    $('.genplan-map-stage-three').toggleClass('genplan-map-stage-act')
})

$('.queue-floor-four').on('click', function () {
    $('.genplan-map-stage-four').toggleClass('genplan-map-stage-act')
})


$('.master-plan-click').on('click', function (e) {
    $(this).parent().toggleClass('master-plan-menu-act');
    e.stopPropagation();
});

$('.master-plan-menu ul li a').on('click', function () {
    $('.master-plan-min').removeClass('master-plan-menu-act')
    // let text_in = $('.master-plan-click span').html();
    let selected_text = $(this).html();
    $('.master-plan-click span').html(selected_text);
    // $(this).html(text_in)
});
$(window).on('click', function (e) {
    let menuSort = $('.master-plan-min');
    if (e.target !== menuSort) {
        menuSort.removeClass('master-plan-menu-act');
    }
});

$('.menu-scroll').on('click', function (e) {
    $('.menu-scroll').removeClass('master-active');
    $(this).addClass('master-active');
})


$('.click-mount').on('click', function (e) {
    $(this).parent().toggleClass('mount-box-mob-act');
    e.stopPropagation();
});

$('.mount-box-drop ul li').on('click', function () {
    $('.mount-box-mob').removeClass('mount-box-mob-act')

    $('.mount-box-drop ul li').removeClass('plan-menu-active');
    $(this).addClass('plan-menu-active');

    // let text_in = $('.click-mount span').html();
    let selected_text = $(this).html();
    $('.click-mount span').html(selected_text);
    // $(this).html(text_in)
});
$(window).on('click', function (e) {
    let menuMount = $('.master-plan-min');
    if (e.target !== menuMount) {
        menuMount.removeClass('mount-box-mob-act');
    }
});







$('.menu-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-30;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});







$('.time-call-click').on('click', function (e) {
    $(this).parent().toggleClass('time-call-act');
    e.stopPropagation();
});

$('.time-call-drop ul li').on('click', function () {
    $('.time-call').removeClass('time-call-act')

    let selected_text = $(this).html();
    $('.time-call-click ').html(selected_text);
});
$(window).on('click', function (e) {
    let timeCall = $('.time-call');
    if (e.target !== timeCall) {
        timeCall.removeClass('time-call-act');
    }
});












$('.construction-menu ul li').on('click', function () {
    $('.construction-menu li').removeClass('construction-act')
    $(this).addClass('construction-act')
})









$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body-hidd');
});

$('.close').on('click', function () {
    $('body').removeClass('body-hidd');
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});


$(window).on('click', function (event) {
    $('.modal').each(function () {

        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $('body').removeClass('body-hidd');

                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $('body').removeClass('body-hidd');

                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});






document.querySelectorAll('.favorable-box').forEach(box => {
    box.addEventListener('click', () => {
        // 1. Получаем элементы внутри карточки
        const imgSrc = box.querySelector('img').getAttribute('src');
        const date = box.querySelector('.favorable-data')?.textContent || '';
        const title = box.querySelector('h4')?.textContent || '';
        const text = box.querySelector('p')?.textContent || '';
        const dataNew = box.querySelector('.favorable-desc span')?.textContent || '';

        // 2. Находим модальное окно
        const modal = document.getElementById('favorable');
        const modalPhoto = modal.querySelector('.favorable-photo');
        const modalText = modal.querySelector('.favorable-modal-text');

        // 3. Заполняем содержимое модалки
        modalPhoto.innerHTML = `
      <span class="favorable-data">${date}</span>
      <img src="${imgSrc}" alt="favorable">
    `;

        modalText.innerHTML = `
      <span>${dataNew}</span>
      <h4>${title}</h4>
      <p>${text}</p>
    `;

        // 4. Показываем модалку
        modal.classList.add('active');
    });
});






const hoverColor = '#754abc';
const hoverOpacity = 0.5;

const pathMap = new Map();
document.querySelectorAll('.general-path').forEach(link => {
    const path = link.querySelector('path');
    const href = link.getAttribute('href');
    if (path && href) {
        pathMap.set(href, path);
    }
});

function getBlockHref(block) {
    return block.getAttribute('href') || block.querySelector('a')?.getAttribute('href');
}

pathMap.forEach((path, href) => {
    const originalColor = path.getAttribute('fill') || path.style.fill;
    const originalOpacity = path.getAttribute('fill-opacity') || path.style.fillOpacity;

    const relatedBlock = document.querySelector(`.corps-queue[href="${href}"], .corps-queue a[href="${href}"]`)?.closest('.corps-queue');

    path.addEventListener('mouseenter', () => {
        if (path.dataset.ready !== 'true') return;

        path.dataset.hover = 'true';
        path.dataset.colored = 'true';
        path.style.fill = hoverColor;
        path.style.fillOpacity = hoverOpacity;

        if (relatedBlock) relatedBlock.classList.add('active');
    });

    path.addEventListener('mouseleave', () => {
        path.dataset.hover = 'false';
        setTimeout(() => {
            if (path.dataset.hover === 'false') {
                if (path.dataset.colored === 'true') {
                    path.style.fill = originalColor || '';
                    path.style.fillOpacity = originalOpacity || '';
                    path.dataset.colored = '';
                }
                if (relatedBlock) relatedBlock.classList.remove('active');
            }
        }, 50);
    });
});

document.querySelectorAll('.corps-queue').forEach(block => {
    const href = getBlockHref(block);
    const path = pathMap.get(href);

    if (path) {
        const originalColor = path.getAttribute('fill') || path.style.fill;
        const originalOpacity = path.getAttribute('fill-opacity') || path.style.fillOpacity;

        block.addEventListener('mouseenter', () => {
            if (path.dataset.ready !== 'true') return;

            path.dataset.hover = 'true';
            path.dataset.colored = 'true';
            path.style.fill = hoverColor;
            path.style.fillOpacity = hoverOpacity;
            block.classList.add('active');
        });

        block.addEventListener('mouseleave', () => {
            path.dataset.hover = 'false';
            setTimeout(() => {
                if (path.dataset.hover === 'false') {
                    if (path.dataset.colored === 'true') {
                        path.style.fill = originalColor || '';
                        path.style.fillOpacity = originalOpacity || '';
                        path.dataset.colored = '';
                    }
                    block.classList.remove('active');
                }
            }, 50);
        });
    }
});






document.addEventListener("DOMContentLoaded", () => {
    const cookieBlock = document.querySelector(".cookie");
    const acceptBtn = document.querySelector(".cookie__btn");

    // Показываем баннер, если не было принятия
    if (!localStorage.getItem("cookieAccepted")) {
        cookieBlock.style.display = "flex";
    } else {
        cookieBlock.style.display = "none";
    }

    // При нажатии — скрываем и сохраняем в localStorage
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieAccepted", "true");
        cookieBlock.style.display = "none";
    });
});






const slider = document.querySelector('.master-plan-menu ul');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // множитель скорости
    slider.scrollLeft = scrollLeft - walk;
});





function updateSlider(minId, maxId, displayId, trackId, unit = '', divider = 1) {
    const minEl = document.getElementById(minId);
    const maxEl = document.getElementById(maxId);
    const displayEl = document.getElementById(displayId);
    const track = document.getElementById(trackId);

    function update() {
        let min = parseFloat(minEl.value);
        let max = parseFloat(maxEl.value);
        if (min > max) [min, max] = [max, min];
        displayEl.textContent = `${min / divider}${unit} - ${max / divider}${unit}`;

        const range = parseFloat(minEl.max) - parseFloat(minEl.min);
        const left = ((min - parseFloat(minEl.min)) / range) * 100;
        const right = ((max - parseFloat(minEl.min)) / range) * 100;

        track.style.left = left + '%';
        track.style.width = (right - left) + '%';
    }

    minEl.addEventListener('input', update);
    maxEl.addEventListener('input', update);
    update();
}

updateSlider('price-min', 'price-max', 'price-val', 'price-track');
updateSlider('sqm-min', 'sqm-max', 'sqm-val', 'sqm-track');
updateSlider('area-min', 'area-max', 'area-val', 'area-track');
updateSlider('floor-min', 'floor-max', 'floor-val', 'floor-track');

