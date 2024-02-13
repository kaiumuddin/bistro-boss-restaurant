import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const CategorySlider = () => {
    const sliderImages = [
        {
            img: "https://source.unsplash.com/312x450/?food/?2",
            title: "salad",
        },
        {
            img: "https://source.unsplash.com/312x450/?food/?3",
            title: "soups",
        },
        {
            img: "https://source.unsplash.com/312x450/?food/?4",
            title: "pizzas",
        },
        {
            img: "https://source.unsplash.com/312x450/?food/?5",
            title: "desserts",
        },
        {
            img: "https://source.unsplash.com/312x450/?food/?6",
            title: "Dessert",
        },
        {
            img: "https://source.unsplash.com/312x450/?food/?7",
            title: "Dessert",
        },
        {
            img: "https://source.unsplash.com/312x450/?food/?8",
            title: "Dessert",
        },
    ];
    let slidePerView = 1;
    return (
        <div className="container py-8">
            <Swiper
                slidesPerView={slidePerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    el: ".swiper-custom-pagination",
                }}
                breakpoints={{
                    450: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {sliderImages.map((slide, inx) => (
                    <SwiperSlide key={inx} className="relative">
                        <img src={slide.img} alt="" className="w-full" />
                        <h3 className="uppercase text-center absolute z-10 bottom-0 right-0 left-0 py-4 backdrop-blur-md text-white font-semibold text-2xl">
                            {slide.title}
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-custom-pagination py-2 space-x-2 text-center"></div>
        </div>
    );
};

export default CategorySlider;
