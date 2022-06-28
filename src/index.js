import './styles/index.scss'
import Swiper, {Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination';

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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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