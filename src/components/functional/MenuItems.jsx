import React from "react";

const handleGearClick = (e) => {};

export const Gear = () => {
    return (
        <button onClick={handleGearClick} className="icon py-1 px-2 text-2xl">
            gear
        </button>
    );
};

const handleListClick = (e) => {};

export const List = () => {
    return (
        <button onClick={handleListClick} className="icon py-1 px-2 text-2xl">
            three-bars
        </button>
    );
};
