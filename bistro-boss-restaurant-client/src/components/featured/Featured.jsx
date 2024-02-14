import React from "react";
import SectionTitle from "../section-title/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import { Button } from "../ui/button";

const Featured = () => {
    // const bg = `'./assets/home/featured.jpg'`;
    return (
        <div
            className={`bg-[url('./assets/home/featured.jpg')] bg-cover bg-no-repeat bg-center bg-fixed`}
        >
            <div className="w-full h-full backdrop-brightness-50 py-8">
                <div className="container space-y-4">
                    <SectionTitle
                        subtitle={"---Check it out---"}
                        title={"FROM OUR MENU"}
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <img src={featuredImg} alt="" />
                        </div>
                        <div className="text-white flex-1 flex flex-col items-start justify-center gap-2">
                            <p>Aug 20, 2023</p>
                            <p>WHERE CAN I GET SOME?</p>
                            <p className="text-sm">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Accusamus temporibus obcaecati
                                itaque sed error. Non perferendis consequuntur
                                commodi voluptates unde!
                            </p>
                            <Button>Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
