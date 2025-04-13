import React, {useEffect, useState} from 'react';
import s from "./styles.module.css"
import axios from "axios";
import {apiProductsURL} from "../../../../configs/constants.js";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(apiProductsURL)

                const sixProducts = response.data.content.slice(0, 6)

                setProducts(sixProducts)

            } catch (err) {
                console.error(err)
            }
        }
        fetchProducts()
    }, [])

    return (
        <section id="products" className={s.products}>
            <div className={s.__container + " " + s.products__container}>
                <h2 className={s.title}>Ассортимент</h2>
                <div className={s.products__blocks}>
                    {products.map((product) => (
                        <Product key={product._id} product={product}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Product = ({ product }) => {
    return (
        <div className={s.products__block}>
            <img
                src={product.image}
                alt={product.title}
                className={s.products__block__image}
            />
            <h3>{product.title}</h3>
            <h4>{product.brand}</h4>
            <h5>{product.price} руб.</h5>
            <button className={s.button}>Купить</button>
        </div>
    );
};

export default Products;