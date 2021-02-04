module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#030C12",
                secondary: "#061924",
                green: "#23CF8F",
                red: "#E62D3F",
                white: "#FFF",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
