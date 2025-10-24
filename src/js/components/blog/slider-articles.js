import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBlogArticlesSwiper = () => {
    new Swiper('.articles__swiper', {
        loop: true,
        slidesPerView: '1',
        spaceBetween: 16,
        slidesPerGroup: 1,
        modules: [Navigation],
        navigation: {
            prevEl: '.articles__btn--prev',
            nextEl: '.articles__btn--next',
        },
        breakpoints: {
            1201: {
                slidesPerView: '2.7',
                spaceBetween: 32,
                slidesPerGroup: 1,
            },
            993: {
                slidesPerView: '2.4',
                spaceBetween: 32,
                slidesPerGroup: 1,
            },
            577: {
                slidesPerView: '2',
                spaceBetween: 16,
            },
        },
    });
};
