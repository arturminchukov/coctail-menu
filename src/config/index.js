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
import crusoviceCerne from '../assets/beers/dda1361aaabc889ea299d3311bd9f5aa-removebg-preview.png';
import alivariaPorter from '../assets/beers/f8c3d8b6743011eaa7ae54a05054786b_32d18fc78b9411eaa7af54a05054786b-removebg-preview.png';
import guiness from '../assets/beers/Guinness-Beer-WhatsApp-4915213365384--removebg-preview.png';
import masterCollection from '../assets/beers/wheat_beer_can-500x500-removebg-preview.png';
import vambergCerne from '../assets/beers/4729f9572a1b3b98845061e498f422c7-1-e1609673507812-800x796-removebg-preview.png';
import keltskiDedictiv from '../assets/beers/14981567189460-removebg-preview.png';

import treeOfLifeRuby from '../assets/vine/i-removebg-preview.png';
import allazaniValley from '../assets/vine/37185_0-removebg-preview.png';

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
        title: 'Beer',
        items: [
            {
                name: 'Karol Jan Ruby',
                structure: [],
                img: karolJanRuby,
                extraInfo: 'Вишневое'
            },{
                name: 'Лидское бархатное',
                structure: [],
                img: alivariaBarhatnoe,
                extraInfo: 'Темное'
            },{
                name: 'Crusovice',
                structure: [],
                img: crusoviceCerne,
                extraInfo: 'Темное'
            },{
                name: 'Аливария портер',
                structure: [],
                img: alivariaPorter,
                extraInfo: 'Темное'
            },{
                name: 'Vamberg',
                structure: [],
                img: vambergCerne,
                extraInfo: 'Темное'
            },{
                name: 'Keltski dedictvi',
                structure: [],
                img: keltskiDedictiv,
                extraInfo: 'Темное'
            },{
                name: 'Guinness',
                structure: [],
                img: guiness,
                extraInfo: 'Темное'
            },{
                name: 'Калекцыя Майстра',
                structure: [],
                img: masterCollection,
                extraInfo: 'Светлое пшеничное'
            },
        ]
    },
    {
        title: 'Vine',
        items: [
            {
                name: 'Tree of life',
                structure: [],
                img: treeOfLifeRuby,
                extraInfo: 'Красное полусладкое'
            },{
                name: 'Alazani Valley',
                structure: [],
                img: allazaniValley,
                extraInfo: 'Красное полусладкое'
            },
        ]
    },
];