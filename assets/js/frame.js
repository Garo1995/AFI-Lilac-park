const tooltip = document.getElementById("floorTooltip");

const floorData = {


    // frame-one


    "/genplan/1/1/2": {
        floor: "16 этаж",
        warehouse: 0,
        warehousePrice: "от 5 108 873₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 10 961 969₽"
    },
    "/genplan/1/1/9": {
        floor: "16 этаж",
        warehouse: 2,
        warehousePrice: "от 6 478 710₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 7 008 162₽"
    },
    "/genplan/1/1/10": {
        floor: "25 этаж",
        warehouse: 1,
        warehousePrice: "от 2 453 674₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 14 801 495₽"
    },
    "/genplan/1/1/14": {
        floor: "13 этаж",
        warehouse: 0,
        warehousePrice: "от 6 219 868₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 12 856 276₽"
    },
    "/genplan/1/1/15": {
        floor: "23 этаж",
        warehouse: 2,
        warehousePrice: "от 2 577 628₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 116 018₽"
    },
    "/genplan/1/1/16": {
        floor: "5 этаж",
        warehouse: 1,
        warehousePrice: "от 3 626 258₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 8 929 402₽"
    },
    "/genplan/1/1/17": {
        floor: "6 этаж",
        warehouse: 3,
        warehousePrice: "от 2 467 322₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 582 451₽"
    },
    "/genplan/1/1/18": {
        floor: "6 этаж",
        warehouse: 1,
        warehousePrice: "от 6 167 503₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 7 558 600₽"
    },
    "/genplan/1/1/19": {
        floor: "8 этаж",
        warehouse: 1,
        warehousePrice: "от 3 898 366₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 179 721₽"
    },
    "/genplan/1/1/20": {
        floor: "2 этаж",
        warehouse: 1,
        warehousePrice: "от 2 311 019₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 8 892 419₽"
    },
    "/genplan/1/1/21": {
        floor: "12 этаж",
        warehouse: 2,
        warehousePrice: "от 4 062 570₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 575 945₽"
    },
    "/genplan/1/1/22": {
        floor: "9 этаж",
        warehouse: 0,
        warehousePrice: "от 4 836 746₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 14 310 952₽"
    },
    "/genplan/1/1/23": {
        floor: "17 этаж",
        warehouse: 3,
        warehousePrice: "от 4 949 466₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 9 882 020₽"
    },
    "/genplan/1/1/24": {
        floor: "15 этаж",
        warehouse: 1,
        warehousePrice: "от 6 885 171₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 126 298₽"
    },
    "/genplan/1/1/25": {
        floor: "25 этаж",
        warehouse: 1,
        warehousePrice: "от 3 559 834₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 8 177 791₽"
    },
    "/genplan/1/2/4": {
        floor: "25 этаж",
        warehouse: 2,
        warehousePrice: "от 5 769 038₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 138 767₽"
    },
    "/genplan/1/2/6": {
        floor: "25 этаж",
        warehouse: 3,
        warehousePrice: "от 4 802 883₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 11 135 591₽"
    },
    "/genplan/1/2/7": {
        floor: "9 этаж",
        warehouse: 0,
        warehousePrice: "от 6 932 989₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 274 164₽"
    },
    "/genplan/1/3/14": {
        floor: "7 этаж",
        warehouse: 2,
        warehousePrice: "от 4 622 836₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 155 370₽"
    },
    "/genplan/1/3/15": {
        floor: "3 этаж",
        warehouse: 3,
        warehousePrice: "от 3 052 562₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 14 920 948₽"
    },
    "/genplan/1/3/16": {
        floor: "2 этаж",
        warehouse: 2,
        warehousePrice: "от 2 582 115₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 769 414₽"
    },
    "/genplan/1/3/17": {
        floor: "5 этаж",
        warehouse: 1,
        warehousePrice: "от 5 876 363₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 14 567 849₽"
    },
    "/genplan/1/3/18": {
        floor: "9 этаж",
        warehouse: 1,
        warehousePrice: "от 4 219 845₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 14 859 535₽"
    },
    "/genplan/1/3/19": {
        floor: "16 этаж",
        warehouse: 0,
        warehousePrice: "от 4 144 424₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 8 560 451₽"
    },
    "/genplan/1/3/20": {
        floor: "8 этаж",
        warehouse: 3,
        warehousePrice: "от 5 234 710₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 8 690 340₽"
    },
    "/genplan/1/3/21": {
        floor: "3 этаж",
        warehouse: 1,
        warehousePrice: "от 2 992 769₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 6 205 938₽"
    },
    "/genplan/1/3/22": {
        floor: "3 этаж",
        warehouse: 3,
        warehousePrice: "от 3 729 919₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 030 958₽"
    },
    "/genplan/1/3/23": {
        floor: "7 этаж",
        warehouse: 3,
        warehousePrice: "от 3 673 236₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 10 816 211₽"
    },
    "/genplan/1/3/24": {
        floor: "21 этаж",
        warehouse: 3,
        warehousePrice: "от 6 273 086₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 439 349₽"
    },
    "/genplan/1/3/25": {
        floor: "13 этаж",
        warehouse: 1,
        warehousePrice: "от 4 480 405₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 7 860 686₽"
    },
    "/genplan/1/4/9": {
        floor: "3 этаж",
        warehouse: 0,
        warehousePrice: "от 5 783 451₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 208 488₽"
    },
    "/genplan/1/4/12": {
        floor: "14 этаж",
        warehouse: 3,
        warehousePrice: "от 5 541 613₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 723 827₽"
    },
    "/genplan/1/4/13": {
        floor: "2 этаж",
        warehouse: 3,
        warehousePrice: "от 5 387 261₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 7 934 900₽"
    },
    "/genplan/1/4/14": {
        floor: "22 этаж",
        warehouse: 1,
        warehousePrice: "от 3 585 628₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 13 875 549₽"
    },
    "/genplan/1/4/15": {
        floor: "14 этаж",
        warehouse: 0,
        warehousePrice: "от 4 860 667₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 14 121 225₽"
    },
    "/genplan/1/4/16": {
        floor: "13 этаж",
        warehouse: 0,
        warehousePrice: "от 3 561 935₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 841 603₽"
    },
    "/genplan/1/4/17": {
        floor: "21 этаж",
        warehouse: 1,
        warehousePrice: "от 4 064 167₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 9 524 460₽"
    },
    "/genplan/1/4/18": {
        floor: "5 этаж",
        warehouse: 2,
        warehousePrice: "от 3 348 400₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 7 665 659₽"
    },
    "/genplan/1/4/19": {
        floor: "23 этаж",
        warehouse: 3,
        warehousePrice: "от 5 891 901₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 350 206₽"
    },
    "/genplan/1/5/2": {
        floor: "8 этаж",
        warehouse: 0,
        warehousePrice: "от 3 769 683₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 6 010 530₽"
    },
    "/genplan/1/5/9": {
        floor: "13 этаж",
        warehouse: 2,
        warehousePrice: "от 3 830 127₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 14 941 655₽"
    },
    "/genplan/1/5/10": {
        floor: "15 этаж",
        warehouse: 0,
        warehousePrice: "от 6 977 085₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 6 545 867₽"
    },
    "/genplan/1/5/12": {
        floor: "9 этаж",
        warehouse: 3,
        warehousePrice: "от 4 117 715₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 282 143₽"
    },
    "/genplan/1/5/13": {
        floor: "15 этаж",
        warehouse: 2,
        warehousePrice: "от 6 198 907₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 8 115 582₽"
    },


    // frame-2


    "/genplan/2/6/7": {
        floor: "14 этаж",
        warehouse: 1,
        warehousePrice: "от 3 789 453₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 11 295 720₽"
    },
    "/genplan/2/6/10": {
        floor: "18 этаж",
        warehouse: 2,
        warehousePrice: "от 4 598 377₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 880 663₽"
    },
    "/genplan/2/7/2": {
        floor: "21 этаж",
        warehouse: 1,
        warehousePrice: "от 6 703 110₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 13 569 201₽"
    },
    "/genplan/2/7/3": {
        floor: "3 этаж",
        warehouse: 2,
        warehousePrice: "от 6 482 999₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 11 233 875₽"
    },
    "/genplan/2/7/7": {
        floor: "19 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 14 775 199₽"
    },
    "/genplan/2/7/8": {
        floor: "11 этаж",
        warehouse: 2,
        warehousePrice: "от 3 246 999₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 882 901₽"
    },
    "/genplan/2/7/9": {
        floor: "4 этаж",
        warehouse: 3,
        warehousePrice: "от 6 540 875₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 643 123₽"
    },
    "/genplan/2/7/10": {
        floor: "8 этаж",
        warehouse: 1,
        warehousePrice: "от 3 872 120₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 352 801₽"
    },
    "/genplan/2/7/11": {
        floor: "13 этаж",
        warehouse: 2,
        warehousePrice: "от 5 541 250₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 7 920 841₽"
    },
    "/genplan/2/7/14": {
        floor: "6 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 423 090₽"
    },
    "/genplan/2/7/15": {
        floor: "23 этаж",
        warehouse: 1,
        warehousePrice: "от 2 961 834₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 10 582 993₽"
    },
    "/genplan/2/7/16": {
        floor: "10 этаж",
        warehouse: 2,
        warehousePrice: "от 5 321 928₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 13 678 000₽"
    },
    "/genplan/2/7/17": {
        floor: "5 этаж",
        warehouse: 3,
        warehousePrice: "от 6 931 288₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 12 303 000₽"
    },
    "/genplan/2/7/18": {
        floor: "7 этаж",
        warehouse: 2,
        warehousePrice: "от 4 310 749₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 14 040 500₽"
    },
    "/genplan/2/7/19": {
        floor: "17 этаж",
        warehouse: 1,
        warehousePrice: "от 3 120 991₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 901 112₽"
    },
    "/genplan/2/7/20": {
        floor: "15 этаж",
        warehouse: 2,
        warehousePrice: "от 4 880 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 300 000₽"
    },
    "/genplan/2/7/21": {
        floor: "12 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 13 000 000₽"
    },
    "/genplan/2/7/22": {
        floor: "20 этаж",
        warehouse: 3,
        warehousePrice: "от 6 000 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 12 400 000₽"
    },
    "/genplan/2/7/23": {
        floor: "9 этаж",
        warehouse: 1,
        warehousePrice: "от 2 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 200 000₽"
    },
    "/genplan/2/7/24": {
        floor: "2 этаж",
        warehouse: 1,
        warehousePrice: "от 3 600 000₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 14 100 000₽"
    },
    "/genplan/2/7/25": {
        floor: "25 этаж",
        warehouse: 3,
        warehousePrice: "от 6 999 999₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 15 000 000₽"
    },
    "/genplan/2/8/4": {
        floor: "11 этаж",
        warehouse: 2,
        warehousePrice: "от 3 990 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 700 000₽"
    },
    "/genplan/2/8/11": {
        floor: "6 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 600 000₽"
    },
    "/genplan/2/9/2": {
        floor: "5 этаж",
        warehouse: 1,
        warehousePrice: "от 2 600 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 200 000₽"
    },
    "/genplan/2/9/7": {
        floor: "13 этаж",
        warehouse: 3,
        warehousePrice: "от 6 400 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 12 100 000₽"
    },
    "/genplan/2/9/11": {
        floor: "4 этаж",
        warehouse: 2,
        warehousePrice: "от 4 200 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 600 000₽"
    },
    "/genplan/2/9/13": {
        floor: "16 этаж",
        warehouse: 1,
        warehousePrice: "от 3 900 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 10 900 000₽"
    },
    "/genplan/2/9/15": {
        floor: "7 этаж",
        warehouse: 2,
        warehousePrice: "от 4 888 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 12 777 000₽"
    },
    "/genplan/2/9/17": {
        floor: "22 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 13 500 000₽"
    },
    "/genplan/2/9/20": {
        floor: "10 этаж",
        warehouse: 1,
        warehousePrice: "от 3 550 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/2/9/23": {
        floor: "14 этаж",
        warehouse: 3,
        warehousePrice: "от 5 000 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 13 800 000₽"
    },
    "/genplan/2/9/25": {
        floor: "24 этаж",
        warehouse: 1,
        warehousePrice: "от 2 990 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 400 000₽"
    },




    // frame-7B

    "/genplan/7%D0%92/7/12": {
        floor: "12 этаж",
        warehouse: 1,
        warehousePrice: "от 6 426 886₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 15 550 960₽"
    },

    // frame-7A


    "/genplan/7%D0%90/3/7": {
        floor: "12 этаж",
        warehouse: 1,
        warehousePrice: "от 6 426 886₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 15 550 960₽"
    },


    // frame-two


    "/genplan/3/1/2": {
        floor: "5 этаж",
        warehouse: 2,
        warehousePrice: "от 6 426 886₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 11 053 273₽"
    },
    "/genplan/3/1/3": {
        floor: "6 этаж",
        warehouse: 2,
        warehousePrice: "от 5 865 486₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 7 305 272₽"
    },
    "/genplan/3/1/6": {
        floor: "23 этаж",
        warehouse: 1,
        warehousePrice: "от 4 001 270₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 11 795 228₽"
    },

    "/genplan/3/1/7": {
        floor: "7 этаж",
        warehouse: 1,
        warehousePrice: "от 3 500 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/1/9": {
        floor: "9 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 000 000₽"
    },
    "/genplan/3/1/10": {
        floor: "10 этаж",
        warehouse: 1,
        warehousePrice: "от 2 800 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 7 500 000₽"
    },
    "/genplan/3/1/11": {
        floor: "11 этаж",
        warehouse: 3,
        warehousePrice: "от 5 000 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 4 000 000₽"
    },
    "/genplan/3/1/13": {
        floor: "13 этаж",
        warehouse: 2,
        warehousePrice: "от 3 700 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 500 000₽"
    },
    "/genplan/3/1/14": {
        floor: "14 этаж",
        warehouse: 1,
        warehousePrice: "от 4 200 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/3/1/15": {
        floor: "15 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 15 000 000₽"
    },
    "/genplan/3/1/16": {
        floor: "16 этаж",
        warehouse: 2,
        warehousePrice: "от 6 000 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 500 000₽"
    },
    "/genplan/3/1/17": {
        floor: "17 этаж",
        warehouse: 1,
        warehousePrice: "от 3 800 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 000 000₽"
    },
    "/genplan/3/1/18": {
        floor: "18 этаж",
        warehouse: 2,
        warehousePrice: "от 5 500 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 800 000₽"
    },
    "/genplan/3/1/20": {
        floor: "20 этаж",
        warehouse: 1,
        warehousePrice: "от 4 900 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 7 200 000₽"
    },
    "/genplan/3/1/21": {
        floor: "21 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 13 000 000₽"
    },
    "/genplan/3/1/22": {
        floor: "22 этаж",
        warehouse: 3,
        warehousePrice: "от 7 200 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 800 000₽"
    },
    "/genplan/3/1/23": {
        floor: "23 этаж",
        warehouse: 1,
        warehousePrice: "от 3 600 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 500 000₽"
    },
    "/genplan/3/1/24": {
        floor: "24 этаж",
        warehouse: 2,
        warehousePrice: "от 5 000 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 000 000₽"
    },
    "/genplan/3/1/25": {
        floor: "25 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 000 000₽"
    },

    "/genplan/3/2/3": {
        floor: "3 этаж",
        warehouse: 1,
        warehousePrice: "от 3 200 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 000 000₽"
    },
    "/genplan/3/2/4": {
        floor: "4 этаж",
        warehouse: 2,
        warehousePrice: "от 4 100 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 000 000₽"
    },
    "/genplan/3/2/5": {
        floor: "5 этаж",
        warehouse: 1,
        warehousePrice: "от 3 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/2/8": {
        floor: "8 этаж",
        warehouse: 2,
        warehousePrice: "от 5 000 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 13 500 000₽"
    },
    "/genplan/3/2/9": {
        floor: "9 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 14 000 000₽"
    },
    "/genplan/3/2/10": {
        floor: "10 этаж",
        warehouse: 1,
        warehousePrice: "от 4 500 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 500 000₽"
    },
    "/genplan/3/2/13": {
        floor: "13 этаж",
        warehouse: 1,
        warehousePrice: "от 4 000 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/3/2/14": {
        floor: "14 этаж",
        warehouse: 2,
        warehousePrice: "от 5 200 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 500 000₽"
    },
    "/genplan/3/2/16": {
        floor: "16 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 5,
        apartmentsPrice: "от 16 000 000₽"
    },
    "/genplan/3/2/17": {
        floor: "17 этаж",
        warehouse: 3,
        warehousePrice: "от 6 500 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 7 000 000₽"
    },
    "/genplan/3/2/20": {
        floor: "20 этаж",
        warehouse: 2,
        warehousePrice: "от 5 800 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 000 000₽"
    },

    "/genplan/3/3/3": {
        floor: "3 этаж",
        warehouse: 1,
        warehousePrice: "от 3 300 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 000 000₽"
    },
    "/genplan/3/3/4": {
        floor: "4 этаж",
        warehouse: 2,
        warehousePrice: "от 4 400 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 5 500 000₽"
    },
    "/genplan/3/3/5": {
        floor: "5 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 13 000 000₽"
    },
    "/genplan/3/3/6": {
        floor: "6 этаж",
        warehouse: 1,
        warehousePrice: "от 3 700 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/3/8": {
        floor: "8 этаж",
        warehouse: 2,
        warehousePrice: "от 5 100 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 12 000 000₽"
    },

    "/genplan/3/4/2": {
        floor: "2 этаж",
        warehouse: 1,
        warehousePrice: "от 2 500 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 7 000 000₽"
    },
    "/genplan/3/4/3": {
        floor: "3 этаж",
        warehouse: 2,
        warehousePrice: "от 3 200 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 5 000 000₽"
    },
    "/genplan/3/4/5": {
        floor: "5 этаж",
        warehouse: 1,
        warehousePrice: "от 4 100 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/3/4/6": {
        floor: "6 этаж",
        warehouse: 2,
        warehousePrice: "от 5 000 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/4/7": {
        floor: "7 этаж",
        warehouse: 1,
        warehousePrice: "от 3 600 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 11 500 000₽"
    },
    "/genplan/3/4/8": {
        floor: "8 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/3/4/9": {
        floor: "9 этаж",
        warehouse: 2,
        warehousePrice: "от 4 700 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 000 000₽"
    },
    "/genplan/3/4/10": {
        floor: "10 этаж",
        warehouse: 1,
        warehousePrice: "от 4 300 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 7 000 000₽"
    },
    "/genplan/3/4/11": {
        floor: "11 этаж",
        warehouse: 3,
        warehousePrice: "от 6 000 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/4/12": {
        floor: "12 этаж",
        warehouse: 1,
        warehousePrice: "от 3 900 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 8 000 000₽"
    },
    "/genplan/3/4/13": {
        floor: "13 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 000 000₽"
    },
    "/genplan/3/4/14": {
        floor: "14 этаж",
        warehouse: 2,
        warehousePrice: "от 5 300 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 500 000₽"
    },
    "/genplan/3/4/15": {
        floor: "15 этаж",
        warehouse: 1,
        warehousePrice: "от 4 200 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/3/4/17": {
        floor: "17 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 5 000 000₽"
    },
    "/genplan/3/4/19": {
        floor: "19 этаж",
        warehouse: 2,
        warehousePrice: "от 5 800 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 14 000 000₽"
    },
    "/genplan/3/4/20": {
        floor: "20 этаж",
        warehouse: 1,
        warehousePrice: "от 4 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/4/21": {
        floor: "21 этаж",
        warehouse: 3,
        warehousePrice: "от 6 200 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 000 000₽"
    },
    "/genplan/3/4/22": {
        floor: "22 этаж",
        warehouse: 1,
        warehousePrice: "от 3 700 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 000 000₽"
    },
    "/genplan/3/4/24": {
        floor: "24 этаж",
        warehouse: 2,
        warehousePrice: "от 5 600 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 500 000₽"
    },

    "/genplan/3/5/3": {
        floor: "3 этаж",
        warehouse: 1,
        warehousePrice: "от 2 800 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/5/4": {
        floor: "4 этаж",
        warehouse: 2,
        warehousePrice: "от 3 600 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 7 500 000₽"
    },
    "/genplan/3/5/6": {
        floor: "6 этаж",
        warehouse: 1,
        warehousePrice: "от 4 000 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 000 000₽"
    },
    "/genplan/3/5/8": {
        floor: "8 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 13 000 000₽"
    },
    "/genplan/3/5/9": {
        floor: "9 этаж",
        warehouse: 2,
        warehousePrice: "от 5 200 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 6 000 000₽"
    },
    "/genplan/3/5/11": {
        floor: "11 этаж",
        warehouse: 1,
        warehousePrice: "от 3 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 000 000₽"
    },
    "/genplan/3/5/13": {
        floor: "13 этаж",
        warehouse: 3,
        warehousePrice: "от 6 500 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 500 000₽"
    },
    "/genplan/3/5/17": {
        floor: "17 этаж",
        warehouse: 1,
        warehousePrice: "от 4 300 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 5 500 000₽"
    },
    "/genplan/3/5/18": {
        floor: "18 этаж",
        warehouse: 2,
        warehousePrice: "от 5 400 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 000 000₽"
    },
    "/genplan/3/5/22": {
        floor: "22 этаж",
        warehouse: 1,
        warehousePrice: "от 3 600 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 000 000₽"
    },
    "/genplan/3/5/23": {
        floor: "23 этаж",
        warehouse: 0,
        warehousePrice: "от 0₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 5 000 000₽"
    },

    "/genplan/3/6/2": {
        floor: "2 этаж",
        warehouse: 2,
        warehousePrice: "от 3 000 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 7 000 000₽"
    },
    "/genplan/3/6/3": {
        floor: "3 этаж",
        warehouse: 1,
        warehousePrice: "от 3 300 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 500 000₽"
    },
    "/genplan/3/6/4": {
        floor: "4 этаж",
        warehouse: 2,
        warehousePrice: "от 4 200 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 5 500 000₽"
    },
    "/genplan/3/6/6": {
        floor: "6 этаж",
        warehouse: 1,
        warehousePrice: "от 4 800 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 8 000 000₽"
    },
    "/genplan/3/6/10": {
        floor: "10 этаж",
        warehouse: 3,
        warehousePrice: "от 6 000 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 8 000 000₽"
    },


    // frame


    "/genplan/4/10/2": {
        floor: "22 этаж",
        warehouse: 2,
        warehousePrice: "от 11 764 125₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 11 764 125₽"
    },
    "/genplan/4/10/4": {
        floor: "21 этаж",
        warehouse: 1,
        warehousePrice: "от 10 000 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 850 000₽"
    },
    "/genplan/4/10/6": {
        floor: "20 этаж",
        warehouse: 3,
        warehousePrice: "от 12 500 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 900 000₽"
    },
    "/genplan/4/10/7": {
        floor: "19 этаж",
        warehouse: 2,
        warehousePrice: "от 11 100 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 200 000₽"
    },
    "/genplan/4/10/8": {
        floor: "18 этаж",
        warehouse: 1,
        warehousePrice: "от 9 850 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 9 700 000₽"
    },
    "/genplan/4/10/10": {
        floor: "17 этаж",
        warehouse: 0,
        warehousePrice: "–",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 500 000₽"
    },
    "/genplan/4/11/2": {
        floor: "16 этаж",
        warehouse: 1,
        warehousePrice: "от 10 500 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/4/11/4": {
        floor: "15 этаж",
        warehouse: 2,
        warehousePrice: "от 11 000 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 900 000₽"
    },
    "/genplan/4/11/6": {
        floor: "14 этаж",
        warehouse: 1,
        warehousePrice: "от 9 800 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 700 000₽"
    },
    "/genplan/4/11/7": {
        floor: "13 этаж",
        warehouse: 2,
        warehousePrice: "от 10 900 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 200 000₽"
    },
    "/genplan/4/11/9": {
        floor: "12 этаж",
        warehouse: 1,
        warehousePrice: "от 9 600 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 550 000₽"
    },
    "/genplan/4/11/10": {
        floor: "11 этаж",
        warehouse: 0,
        warehousePrice: "–",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 300 000₽"
    },
    "/genplan/4/12/2": {
        floor: "10 этаж",
        warehouse: 1,
        warehousePrice: "от 10 400 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 100 000₽"
    },
    "/genplan/4/12/3": {
        floor: "9 этаж",
        warehouse: 2,
        warehousePrice: "от 11 200 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 900 000₽"
    },
    "/genplan/4/12/4": {
        floor: "8 этаж",
        warehouse: 1,
        warehousePrice: "от 9 900 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 9 800 000₽"
    },
    "/genplan/4/12/6": {
        floor: "7 этаж",
        warehouse: 0,
        warehousePrice: "–",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 200 000₽"
    },
    "/genplan/4/12/7": {
        floor: "6 этаж",
        warehouse: 1,
        warehousePrice: "от 10 200 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/4/12/8": {
        floor: "5 этаж",
        warehouse: 2,
        warehousePrice: "от 11 000 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 700 000₽"
    },
    "/genplan/4/12/9": {
        floor: "4 этаж",
        warehouse: 1,
        warehousePrice: "от 9 700 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 600 000₽"
    },
    "/genplan/4/12/10": {
        floor: "3 этаж",
        warehouse: 0,
        warehousePrice: "–",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 400 000₽"
    },
    "/genplan/4/12/11": {
        floor: "2 этаж",
        warehouse: 1,
        warehousePrice: "от 10 300 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 100 000₽"
    },
    "/genplan/4/12/13": {
        floor: "1 этаж",
        warehouse: 2,
        warehousePrice: "от 11 100 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 11 000 000₽"
    },
    "/genplan/4/13/2": {
        floor: "22 этаж",
        warehouse: 1,
        warehousePrice: "от 10 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 800 000₽"
    },
    "/genplan/4/13/3": {
        floor: "21 этаж",
        warehouse: 2,
        warehousePrice: "от 11 700 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 400 000₽"
    },
    "/genplan/4/13/4": {
        floor: "20 этаж",
        warehouse: 1,
        warehousePrice: "от 9 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 800 000₽"
    },
    "/genplan/4/13/5": {
        floor: "19 этаж",
        warehouse: 0,
        warehousePrice: "–",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 500 000₽"
    },
    "/genplan/4/13/9": {
        floor: "18 этаж",
        warehouse: 1,
        warehousePrice: "от 10 200 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/4/13/10": {
        floor: "17 этаж",
        warehouse: 2,
        warehousePrice: "от 11 100 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 900 000₽"
    },
    "/genplan/4/13/11": {
        floor: "16 этаж",
        warehouse: 1,
        warehousePrice: "от 9 800 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 700 000₽"
    },
    "/genplan/4/13/12": {
        floor: "15 этаж",
        warehouse: 0,
        warehousePrice: "–",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 600 000₽"
    },
    "/genplan/4/13/13": {
        floor: "14 этаж",
        warehouse: 1,
        warehousePrice: "от 10 300 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 100 000₽"
    },
    "/genplan/4/13/14": {
        floor: "13 этаж",
        warehouse: 2,
        warehousePrice: "от 11 000 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 900 000₽"
    },
    "/genplan/4/13/16": {
        floor: "12 этаж",
        warehouse: 1,
        warehousePrice: "от 9 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 800 000₽"
    },
    "/genplan/4/13/17": {
        floor: "11 этаж",
        warehouse: 0,
        warehousePrice: "от 9 900 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 700 000₽"
    },
    "/genplan/4/13/20": {
        floor: "10 этаж",
        warehouse: 1,
        warehousePrice: "от 10 400 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 200 000₽"
    },
    "/genplan/4/13/25": {
        floor: "9 этаж",
        warehouse: 2,
        warehousePrice: "от 11 200 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 11 000 000₽"
    },
    "/genplan/4/7/2": {
        floor: "8 этаж",
        warehouse: 1,
        warehousePrice: "от 9 900 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 9 800 000₽"
    },
    "/genplan/4/7/3": {
        floor: "7 этаж",
        warehouse: 2,
        warehousePrice: "от 10 500 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 200 000₽"
    },
    "/genplan/4/7/4": {
        floor: "6 этаж",
        warehouse: 1,
        warehousePrice: "от 9 600 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 9 500 000₽"
    },
    "/genplan/4/7/7": {
        floor: "5 этаж",
        warehouse: 2,
        warehousePrice: "от 9 600 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 100 000₽"
    },
    "/genplan/4/7/8": {
        floor: "4 этаж",
        warehouse: 1,
        warehousePrice: "от 10 000 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 900 000₽"
    },
    "/genplan/4/7/9": {
        floor: "3 этаж",
        warehouse: 2,
        warehousePrice: "от 11 100 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 800 000₽"
    },
    "/genplan/4/8/2": {
        floor: "2 этаж",
        warehouse: 1,
        warehousePrice: "от 9 700 000₽",
        apartmentsCount: 1,
        apartmentsPrice: "от 9 600 000₽"
    },
    "/genplan/4/8/3": {
        floor: "1 этаж",
        warehouse: 2,
        warehousePrice: "от 10 300 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 000 000₽"
    },
    "/genplan/4/8/4": {
        floor: "22 этаж",
        warehouse: 1,
        warehousePrice: "от 10 900 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 700 000₽"
    },
    "/genplan/4/8/6": {
        floor: "21 этаж",
        warehouse: 2,
        warehousePrice: "от 7 300 000",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 300 000₽"
    },
    "/genplan/4/8/7": {
        floor: "20 этаж",
        warehouse: 1,
        warehousePrice: "от 10 100 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 900 000₽"
    },
    "/genplan/4/8/8": {
        floor: "19 этаж",
        warehouse: 2,
        warehousePrice: "от 11 200 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 800 000₽"
    },
    "/genplan/4/8/9": {
        floor: "18 этаж",
        warehouse: 1,
        warehousePrice: "от 9 900 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 800 000₽"
    },
    "/genplan/4/9/2": {
        floor: "17 этаж",
        warehouse: 60,
        warehousePrice: "от 13 400 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 400 000₽"
    },
    "/genplan/4/9/3": {
        floor: "16 этаж",
        warehouse: 1,
        warehousePrice: "от 10 300 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 100 000₽"
    },
    "/genplan/4/9/4": {
        floor: "15 этаж",
        warehouse: 2,
        warehousePrice: "от 11 100 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 900 000₽"
    },
    "/genplan/4/9/5": {
        floor: "14 этаж",
        warehouse: 1,
        warehousePrice: "от 9 800 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 9 700 000₽"
    },
    "/genplan/4/9/6": {
        floor: "13 этаж",
        warehouse: 2,
        warehousePrice: "от 6 800 000₽",
        apartmentsCount: 4,
        apartmentsPrice: "от 12 600 000₽"
    },
    "/genplan/4/9/7": {
        floor: "12 этаж",
        warehouse: 1,
        warehousePrice: "от 10 400 000₽",
        apartmentsCount: 2,
        apartmentsPrice: "от 10 200 000₽"
    },
    "/genplan/4/9/9": {
        floor: "11 этаж",
        warehouse: 2,
        warehousePrice: "от 11 200 000₽",
        apartmentsCount: 3,
        apartmentsPrice: "от 10 900 000₽"
    }


};


document.querySelectorAll(".genplan-map-floor").forEach(path => {
    const link = path.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    const data = floorData[href];

    path.addEventListener("mouseenter", (e) => {
        if (!data) return;

        tooltip.querySelector(".warehouse").textContent = data.warehouse;
        tooltip.querySelector(".warehouse-price").textContent = data.warehousePrice;
        tooltip.querySelector(".apartments-count").textContent = data.apartmentsCount;
        tooltip.querySelector(".apartments-price").textContent = data.apartmentsPrice;
        tooltip.querySelector(".number-floor").textContent = data.floor;

        // Показываем тултип сразу
        tooltip.style.display = "block";

        // Обновим позицию сразу при наведении
        updateTooltipPosition(e, path);
    });

    path.addEventListener("mousemove", (e) => {
        // Обновляем позицию тултипа при движении мыши
        updateTooltipPosition(e, path);
    });

    path.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});

// Функция обновления позиции тултипа
function updateTooltipPosition(event, path) {
    const rect = path.getBoundingClientRect();

    // Вертикальная позиция — чуть выше элемента (например, 220px сверху)
    const top = window.scrollY + rect.top - tooltip.offsetHeight - 140;

    // Горизонтальная позиция — привязываем к позиции мыши относительно страницы
    // Добавим небольшой сдвиг по горизонтали, чтобы тултип не был прямо под мышкой
    const left = window.scrollX + event.clientX + 15;

    tooltip.style.top = top + "px";
    tooltip.style.left = left + "px";
}