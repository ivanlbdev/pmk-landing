import Swiper, {Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles/index.scss'


let plusesBlock = {}
let plusesBlockInit = false

const makePlusesSlider = () => {
    if (window.innerWidth < 769 && !plusesBlockInit) {
        plusesBlockInit = true
        plusesBlock = new Swiper('.swiper', {
            modules: [Pagination],
            direction: 'horizontal',
            loop: true,
            slideClass: 'block-items__item',
            spaceBetween: 20,
            centeredSlides: true,

            pagination: {
                el: '.swiper-pagination',
            },
        });
    } else if (plusesBlockInit && window.innerWidth > 769) {
        plusesBlockInit = false
        plusesBlock.destroy()
    }
}


document.addEventListener('DOMContentLoaded', () => {
    makePlusesSlider()
    const bigSlider = new Swiper('.block-slider__slider', {
        modules: [Pagination, Navigation],
        direction: 'horizontal',
        spaceBetween: 20,
        centeredSlides: true,

        navigation: {
            nextEl: '.swiper-button-next-album',
            prevEl: '.swiper-button-prev-album',
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });

    const personSlider = new Swiper('.persons-slider__container', {
        modules: [Pagination, Navigation],
        direction: 'horizontal',
        spaceBetween: 20,
        centeredSlides: true,
        slideClass: 'media-block-container',

        navigation: {
            nextEl: '.swiper-button-next-pers',
            prevEl: '.swiper-button-prev-pers',
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });
})

window.addEventListener('resize', () => {
    makePlusesSlider()
    console.log('resize')
})