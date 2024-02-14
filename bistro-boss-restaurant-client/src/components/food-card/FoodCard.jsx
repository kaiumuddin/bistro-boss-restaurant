import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const FoodCard = ({ item }) => {
    return (
        <Card className="gap-2 flex flex-col">
            <CardHeader>
                <img src={item.image} alt="" />
            </CardHeader>
            <CardContent className="flex-1 my-2 space-y-1">
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.recipe}</CardDescription>
            </CardContent>
            <CardFooter className="py-2">
                <Button>Add to Cart</Button>
            </CardFooter>
        </Card>
    );
};

export default FoodCard;

//  {
//         "_id": "642c155b2c4774f05c36ee98",
//         "name": "Breton Fish Stew",
//         "recipe": "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
//         "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg",
//         "category": "pizza",
//         "price": 12.9
//     },
