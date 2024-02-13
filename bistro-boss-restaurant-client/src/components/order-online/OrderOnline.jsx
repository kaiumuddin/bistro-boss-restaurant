import SectionTitle from "../section-title/SectionTitle";
import BistroBoss from "./BistroBoss";
import CategorySlider from "./CategorySlider";

const OrderOnline = () => {
    return (
        <div className="container py-8">
            <SectionTitle
                subtitle={"---From 11:00am to 10:00pm---"}
                title={"ORDER ONLINE"}
            />
            <CategorySlider />
            <BistroBoss />
        </div>
    );
};

export default OrderOnline;
