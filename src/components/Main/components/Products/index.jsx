import React from 'react';
import s from "./styles.module.css"

const products = [
    {
        _id: "67893e8b7b0c465a87b3ab8d",
        title: "Мяч футбольный",
        brand: "PUMA",
        price: 2499,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/c42/1008_800_aa43/90436150299.jpg"
    },
    {
        _id: "67893e8b7b0c465a87b3ab8e",
        title: "Шапка",
        brand: "FILA",
        price: 1199,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/457/1008_800_c80e/93811380299.jpg"
    },
    {
        _id: "67893e8b7b0c465a87b3ab8f",
        title: "Бутсы",
        brand: "PUMA",
        price: 9999,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/054/1008_800_ae00/130009830299.jpg"
    },
    {
        _id: "67893e8b7b0c465a87b3ab90",
        title: "Щитки футбольные",
        brand: "Kappa",
        price: 2599,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/9bd/1008_800_73d7/111885410299.jpg"
    },
    {
        _id: "67893e8b7b0c465a87b3ab91",
        title: "Худи женская",
        brand: "Nike",
        price: 17299,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/335/1008_800_e038/114517570299.jpg"
    },
    {
        _id: "67893e8b7b0c465a87b3ab92",
        title: "Мяч футбольный",
        brand: "adidas",
        price: 3699,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/ab9/1008_800_0987/135388120299.jpg"
    },
    {
        _id: "678959e4544ccf1eb4a21b9d",
        title: "Перчатки вратарские",
        brand: "adidas",
        price: 8799,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/1d2/1008_800_b0ef/58866550299.jpg",
        createdAt: "2025-01-16T19:11:32.130Z",
        updatedAt: "2025-01-16T19:11:32.130Z",
        __v: 0
    },
    {
        _id: "67895b9b544ccf1eb4a21bb5",
        title: "Перчатки",
        brand: "Demix",
        price: 1599,
        image: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/2f1/1008_800_8e05/109324890299.jpg",
        createdAt: "2025-01-16T19:18:51.821Z",
        updatedAt: "2025-01-16T19:18:51.821Z",
        __v: 0
    }
];

const Products = () => {
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