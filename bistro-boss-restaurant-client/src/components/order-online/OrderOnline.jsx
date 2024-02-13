import CategorySlider from "./CategorySlider";

const OrderOnline = () => {
    return (
        <div className="container py-8">
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <p className="text-primary">---From 11:00am to 10:00pm---</p>
                <h2 className="text-lg tracking-widest font-semibold text-center border-t-2  border-b-2 px-6 py-1 max-w-fit">
                    ORDER ONLINE
                </h2>
            </div>
            <CategorySlider />
        </div>
    );
};

export default OrderOnline;
