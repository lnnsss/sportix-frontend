import React from 'react';
import s from "./styles.module.css"
import Header from "./components/Header.jsx";
import {observer} from "mobx-react-lite";
import Products from "./components/Products.jsx";

const Catalog = observer(() => {

    return (
        <div className={s.catalog}>
            <div className={`${s.__container} ${s.catalog__container}`}>
                <Header/>
                <Products/>
            </div>
        </div>
    );
});

export default Catalog;