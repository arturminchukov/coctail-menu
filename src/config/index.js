import pinaColada from '../assets/coctails/pina-colada.png';
import otvertka from '../assets/coctails/otvertka.png';
import whiteRussian from '../assets/coctails/0954cd9b929e95675fc89ff22f4097c4-removebg-preview.png';
import tequillaSunrise from '../assets/coctails/i-removebg-preview.png';
import ginTonic from '../assets/coctails/gin-tonic-removebg-preview.png';
import mohito from '../assets/coctails/mohito.png';
import daikiri from '../assets/coctails/Daiquiri-Cocktail-Wallpaper-For-IPhone-removebg-preview.png';
import margarita from '../assets/coctails/1455899697-removebg-preview.png';
import blueLaguna from '../assets/coctails/00b23aee3cfd68cb183644e0fc67544f-removebg-preview.png';

import karolJanRuby from '../assets/beers/ocr-removebg-preview.png';
import alivariaBarhatnoe from '../assets/beers/i-removebg-preview.png';

export const MENU = [
    {
        title: 'Coctails',
        items: [
            {
                name: 'Pina colada',
                structure: ['ром', 'ананасовый сок', "сливки", "кокосовое молоко"],
                img: pinaColada,
                extraInfo: 'Доступен также в банановом и клубничной варианциях'
            },
            {
                name: 'Отвертка',
                structure: ['Водка', 'Сок'],
                img: otvertka,
                extraInfo: 'Сок вишневый, апельсиновый, ананасовый'
            },{
                name: 'Белый русский',
                structure: ['Водка', 'кофейный ликер, сливки'],
                img: whiteRussian,
                extraInfo: ''
            },{
                name: 'Текилла санрайз',
                structure: ['Текила, гренадин, апельсиновый сок'],
                img: tequillaSunrise,
                extraInfo: ''
            },{
                name: 'Джин тоник',
                structure: ['Джин, тоник'],
                img: ginTonic,
                extraInfo: ''
            },{
                name: 'Мохито',
                structure: ['Белый ром, спрайт, мята, сахарный сироп, лимон'],
                img: mohito,
                extraInfo: ''
            },{
                name: 'Дайкири',
                structure: ['Белый ром, сахарный сироп, лимон'],
                img: daikiri,
                extraInfo: ''
            },{
                name: 'Маргарита',
                structure: ['Текилла, трипл сек, сахарный сироп, лимон'],
                img: margarita,
                extraInfo: ''
            },{
                name: 'Голубая лагуна',
                structure: ['Водка, кюрасау блю, спрайт'],
                img: blueLaguna,
                extraInfo: ''
            }
        ]
    },
    {
        title: 'Beers',
        items: [
            {
                name: 'Karol Jan Ruby',
                structure: [],
                img: karolJanRuby,
                extraInfo: ''
            },{
                name: 'Лидское бархатное',
                structure: [],
                img: alivariaBarhatnoe,
                extraInfo: ''
            },
        ]
    },
];