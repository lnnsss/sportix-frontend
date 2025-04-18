import React, {useEffect} from 'react';
import s from "../styles.module.css";
import {observer} from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.js";
import Product from "./Product.jsx";
import axios from "axios";
import {apiProductsURL} from "../../../configs/constants.js";

const Products = observer(() => {
    const {
        catalog: { products, priceRange, brand, category, gender, setProducts }
    } = useStores();

    // Запрос
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(apiProductsURL)

                const arr = response.data.content

                setProducts(arr)

            } catch (err) {
                console.error(err)
            }
        }
        fetchProducts()
    }, [])

    // Фильтрация товаров
    const filteredProducts = products.filter(product => {
        const minPrice = priceRange?.min ?? 0;
        const maxPrice = priceRange?.max ?? Infinity;

        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        const brandMatch = brand === '' || product.brand === brand;
        const categoryMatch = category === '' || product.category === category;
        const genderMatch = gender === '' || product.gender === gender;

        return priceMatch && brandMatch && categoryMatch && genderMatch;
    });

    // Проверка на наличие товаров
    if (filteredProducts.length === 0) {
        return <div className={s.noProductsMessage}>Нет товаров.</div>;
    }

    return (
        <div className={`__container ${s.product__grid}`}>
            {filteredProducts.map(product => (
                <Product
                    key={product.id}
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    brand={product.brand}
                    category={product.category}
                    price={product.price}
                />
            ))}
        </div>
    );
});

export default Products;