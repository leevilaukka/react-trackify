import React from "react";

import Loader from "./Loader";

function FullscreenLoader() {
    return (
        <div className="w-screen h-screen bg-secondary flex absolute inset-0" style={{ zIndex: 99999 }}>
            <Loader />
        </div>
    );
}

export default FullscreenLoader;
