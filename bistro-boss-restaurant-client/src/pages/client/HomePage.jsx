import { Carousel1 } from "@/components/banner/navigateui/Carousal";
import ChefRecommends from "@/components/chef-recommends/ChefRecommends";
import FromOurMenu from "@/components/from-our-menu/FromOurMenu";
import OrderOnline from "@/components/order-online/OrderOnline";

export default function HomePage() {
    return (
        <>
            <Carousel1 />
            <OrderOnline />
            <FromOurMenu />
            <ChefRecommends />
        </>
    );
}
