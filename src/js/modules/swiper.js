import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiper () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return `
                    <span class="${className}">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
                        </svg>
                    </span>`;
            },
        },
        navigation: {
            nextEl: ".reviews__arrow-button-next",
            prevEl: ".reviews__arrow-button-prev",
        },
        breakpoints: {
            1024: {
                spaceBetween: 50,
                centeredSlides: true,
            },
            320: {
                spaceBetween: 30,
                centeredSlides: false,
            }
        }
    });
}

export default swiper;