import { useState, useEffect } from "react";
import SectionTitle from "../section-title/SectionTitle";
import MenuList from "../menulist/MenuList";
import { Button } from "../ui/button";

const FromOurMenu = () => {
    return (
        <div className="container py-8 space-y-4">
            <SectionTitle
                subtitle={"---Check it out---"}
                title={"FROM OUR MENU"}
            />
            <MenuList path={"data/menu.json"} category={"popular"} />
            <div className="flex flex-col items-center">
                <Button>View Full Menu</Button>
            </div>
        </div>
    );
};

export default FromOurMenu;
