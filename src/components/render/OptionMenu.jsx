import React, { useContext } from "react";
import AppContext from "../functional/AppContext";

import { Gear as GearButton, List as ListButton } from "../functional/MenuItems";

const handleGearClick = (e) => {};

const handleListClick = (e) => {};

const OptionMenu = () => {
    const context = useContext(AppContext);
    return (
        <div className="w-screen p-4 flex flex-row justify-between">
            <div></div>
            <div class="optionmenu">
                <GearButton />
                <ListButton />
            </div>
        </div>
    );
};

export default OptionMenu;
