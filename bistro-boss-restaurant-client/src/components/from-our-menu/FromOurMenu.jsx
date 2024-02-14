import { useState, useEffect } from "react";
import SectionTitle from "../section-title/SectionTitle";
import MenuList from "../menulist/MenuList";

const FromOurMenu = () => {
    return (
        <div className="container py-8">
            <SectionTitle
                subtitle={"---Check it out---"}
                title={"FROM OUR MENU"}
            />
            <MenuList path={"data/menu.json"} category={"popular"} />
        </div>
    );
};

export default FromOurMenu;
