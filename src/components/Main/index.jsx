import React from 'react';
import Shop from "./components/Shop/index.jsx";
import About from "./components/About/index.jsx";
import Products from "./components/Products/index.jsx";
import Brands from "./components/Brands/index.jsx";
import Adventages from "./components/Adventages/index.jsx";

const Main = () => {
    return (
        <div>
            <Shop />
            <Products />
            <About />
            <Brands />
            <Adventages />
        </div>
    );
};

export default Main;