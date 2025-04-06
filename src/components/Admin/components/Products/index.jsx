import React from 'react';
import s from "./styles.module.css";
import { Link } from "react-router-dom";
import { products } from "./products.js";
import Card from "./components/Card.jsx";

const Products = () => {
    return (
        <div className={s.products}>
            <div className={`__container ${s.products__container}`}>
                <div className={s.productsHeader}>
                    <h1 className={s.title}>Товары</h1>
                    <Link to="/admin/addProduct" className={s.addButton}>Добавить товар</Link>
                </div>
                <div className={s.productsList}>
                    {products.map((p) => <Card key={p.id} {...p} />)}
                </div>
            </div>
        </div>
    );
};

export default Products;
