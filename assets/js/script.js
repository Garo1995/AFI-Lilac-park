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

})


$('.open-filter').on('click', function () {
    $('.commercial-filter').addClass('commercial-filter-open')
    $('body').addClass('body-hidden')


})

$('.close-filter').on('click', function () {
    $('.commercial-filter').removeClass('commercial-filter-open')
    $('body').removeClass('body-hidden')


})


$('.floor-path').on('click', function () {
    $('.floor-plan-mod').toggleClass('floor-plan-mod-act')

})

$('.queue-floor li').on('click', function () {
    $('.queue-floor li').removeClass('queue-floor-act')
    $(this).addClass('queue-floor-act')

})


$('.master-plan-click').on('click', function (e) {
    $(this).parent().toggleClass('master-plan-menu-act');
    e.stopPropagation();
});

$('.master-plan-menu ul li').on('click', function () {
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








$('.infrast-map-cnt li').on('click', function () {
    $('.infrast-map-cnt li').removeClass('map-act')
    $(this).addClass('map-act')
})





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

