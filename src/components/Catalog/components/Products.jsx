import React from 'react';
import s from "../styles.module.css"
import {observer} from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.js";
import Product from "./Product.jsx";

const Products = observer(() => {
    const {
        catalog: { priceRange, brand, category, gender }
    } = useStores()

    const products = [
        { id: 1, name: 'Футболка', price: 25, brand: 'Nike', category: 'Одежда', gender: 'Мужской', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Кроссовки', price: 80, brand: 'Adidas', category: 'Обувь', gender: 'Женский', image: 'https://images.unsplash.com/photo-1606107557195-0a29a5b4aa16?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Джинсы', price: 60, brand: 'Levi\'s', category: 'Одежда', gender: 'Унисекс', image: 'https://images.unsplash.com/photo-1612909086840-c88c2748481b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    // Фильтрация товаров
    const filteredProducts = products.filter(product => {
        return (
            product.price >= priceRange.min &&
            product.price <= priceRange.max &&
            (brand === '' || product.brand === brand) &&
            (category === '' || product.category === category) &&
            (gender === '' || product.gender === gender)
        );
    });

    return (
        <div className={s.product__grid}>
            {filteredProducts.map(product => <Product key={product.id} image={product.image} name={product.name} brand={product.brand} category={product.category} price={product.price} />)}
        </div>
    );
});

export default Products;