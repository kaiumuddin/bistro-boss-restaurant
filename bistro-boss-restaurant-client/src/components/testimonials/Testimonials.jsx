import SectionTitle from "../section-title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import Quote from "../../assets/quote-left.png";
import Quote from "@/assets/quote-left.png";

export default function Testimonials() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("data/reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));

        return () => {
            setReviews([]);
        };
    }, []);

    const content = reviews.map((item, inx) => (
        <SwiperSlide key={item.__id}>
            <div className="m-16 flex flex-col justify-center items-center gap-4">
                <Rating
                    style={{ maxWidth: 150 }}
                    value={item.rating}
                    readOnly
                />
                <img src={Quote} alt="" className="w-24" />
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center">{item.details}</p>
                    <h3 className="text-2xl">{item.name}</h3>
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="container py-8 bg-background">
            {reviews.length}
            <SectionTitle
                subtitle={"---What Our Clients Say---"}
                title={"TESTIMONIALS"}
            />
            <Swiper
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {content}
            </Swiper>
        </div>
    );
}

// {
//         "_id": "643010e0f5a7e52ce1e8fa65",
//         "name": "Jane Doe",
//         "details": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//         "rating": 3
//     },
