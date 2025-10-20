import Swiper from 'swiper';
import 'swiper/css';

export const useBlogActivitySwiper = () => {
    new Swiper('.activity__swiper', {
        loop: true,
        slidesPerView: '1',
        spaceBetween: 16,
        breakpoints: {
            1201: {
                slidesPerView: '2',
                spaceBetween: 32,
                slidesPerGroup: 1,
            },
            993: {
                slidesPerView: '1.5',
                spaceBetween: 32,
                slidesPerGroup: 1,
            },
            577: {
                slidesPerView: '1.2',
                spaceBetween: 16,
            },
        },
    });
};
