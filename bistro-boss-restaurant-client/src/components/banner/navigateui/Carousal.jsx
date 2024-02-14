import { useEffect, useState } from "react";

import image1 from "../images/01.jpg";
import image2 from "../images/02.jpg";
import image3 from "../images/03.png";
import image4 from "../images/04.jpg";

export const Carousel1 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderImages = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
    ];
    // const sliderImages = [
    //     { img: "https://source.unsplash.com/1200x1200/?nature/?1" },
    //     { img: "https://source.unsplash.com/1200x1200/?nature/?2" },
    //     { img: "https://source.unsplash.com/1200x1200/?nature/?3" },
    //     { img: "https://source.unsplash.com/1200x1200/?nature/?4" },
    // ];

    const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
        );
    const nextSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
        );

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    return (
        <>
            <div className="mx-auto max-w-[1920px] h-[340px] md:h-[670px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 ">
                <div className="relative overflow-hidden">
                    {/* arrow */}
                    <div className="absolute w-full h-full flex items-center justify-between z-5 px-5">
                        {/* arrow left */}
                        <button
                            onClick={prevSlider}
                            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                className="w-4 h-4 md:w-6 md:h-6 icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        fill="#0095FF"
                                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                        {/* arrow right */}
                        <button
                            onClick={nextSlider}
                            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                className="w-4 h-4 md:w-6 md:h-6 icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                transform="rotate(180)"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill="#0095FF"
                                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    {/* dots */}
                    <div className="flex justify-center items-center rounded-full z-5 absolute bottom-4 w-full gap-1">
                        {sliderImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentSlider(index);
                                }}
                                className={`rounded-full duration-300 bg-secondary ${
                                    currentSlider === index ? "w-10" : "w-2"
                                } h-2`}
                            ></button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div
                        className="ease-in-out duration-300 flex transform-gpu relative"
                        style={{
                            transform: `translateX(-${currentSlider * 100}%)`,
                        }}
                    >
                        {/* sliders */}
                        {sliderImages.map((slide, index) => (
                            <div
                                key={index}
                                className="min-w-full duration-200"
                            >
                                <img
                                    src={slide.img}
                                    className="w-full h-72 sm:h-96 md:h-[670px] object-cover"
                                    alt={`Slider - ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliderImages.map((slide, inx) => (
                    <img
                        onClick={() => setCurrentSlider(inx)}
                        key={inx}
                        src={slide.img}
                        className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
                            currentSlider === inx
                                ? "border-2 border-black p-px"
                                : ""
                        } rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}
                    />
                ))}
            </div>
        </>
    );
};
