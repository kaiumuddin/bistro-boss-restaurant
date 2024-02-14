import { useEffect, useState } from "react";

const MenuList = ({ path, category }) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(path)
            .then((res) => res.json())
            .then((data) => {
                const poplarItems = data.filter(
                    (item) => item.category == category
                );
                setMenu(poplarItems);
            });

        return () => {
            setMenu([]);
        };
    }, [path, category]);

    const content = menu.map((item, inx) => {
        return <MenuItem key={item.__id} item={item} />;
    });

    return <div className="grid md:grid-cols-2 gap-4 py-8">{content}</div>;
};

const MenuItem = ({ item }) => {
    return (
        <div key={item.__id} className="flex gap-4">
            <img
                src={item.image}
                alt=""
                className="w-24 rounded-r-[200px] rounded-bl-[200px]"
            />
            <div className="">
                <h3 className="uppercase">{item.name}</h3>
                <p className="text-sm">{item.recipe}</p>
            </div>
            <p>{item.price}</p>
        </div>
    );
};

export default MenuList;

// {
//         "_id": "642c155b2c4774f05c36eeaa",
//         "name": "Haddock",
//         "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//         "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
//         "category": "salad",
//         "price": 14.7
//     },
