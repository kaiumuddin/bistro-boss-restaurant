import { useEffect, useState } from "react";
import FoodCard from "../food-card/FoodCard";
import SectionTitle from "../section-title/SectionTitle";

export default function ChefRecommends() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("data/menu.json")
            .then((res) => res.json())
            .then((data) => {
                const poplarItems = data.filter(
                    (item) => item.category == "offered"
                );
                setMenu(poplarItems);
            });

        return () => {
            setMenu([]);
        };
    }, []);

    const content = menu.map((item, inx) => {
        return <FoodCard key={item.__id} item={item} />;
    });

    return (
        <div className="container py-8 space-y-4">
            <SectionTitle
                subtitle={"---Should Try---"}
                title={"CHEF RECOMMENDS"}
            />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {content}
            </div>
        </div>
    );
}
