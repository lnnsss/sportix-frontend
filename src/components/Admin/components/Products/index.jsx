import React, {useEffect, useState} from 'react';
import s from "./styles.module.css";
import { Link } from "react-router-dom";
import Card from "./components/Card.jsx";
import axios from "axios";
import {apiProductsURL} from "../../../../configs/constants.js";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(apiProductsURL)
                setProducts(response.data.content)
            } catch (err) {
                console.error(err)
            }
        }
        fetchProducts()
    }, [])

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
