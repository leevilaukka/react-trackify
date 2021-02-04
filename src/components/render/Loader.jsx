import React from "react";

//css
import "../../css/loader.css";

import logo from "../../assets/trackify.svg";

function Loader() {
    return (
        <div className="loader">
            <img src={logo} alt="Trackify logo" className="w-48 mb-8" />
            <div className="spinner"></div>
        </div>
    );
}

export default Loader;
