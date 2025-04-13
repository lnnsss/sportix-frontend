import React, {useEffect, useState} from 'react';
import s from "./styles.module.css";
import { Link } from "react-router-dom";
import Card from "./components/Card.jsx";
import axios from "axios";
import {apiProductsURL} from "../../../../configs/constants.js";

const Products = () => {
    const [products, setProducts] = useState( [
        {
            id: "67893e8b7b0c465a87b3ab8d",
            title: "Мяч футбольный",
            brand: "PUMA",
            price: 2499,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/c42/1008_800_aa43/90436150299.jpg",
            category: "Мячи",
            gender: "Унисекс",
            description: "Классический футбольный мяч PUMA для тренировок и любительских игр. Прочная конструкция из синтетической кожи обеспечивает долговечность и хорошее чувство мяча."
        },
        {
            id: "67893e8b7b0c465a87b3ab8e",
            title: "Шапка",
            brand: "FILA",
            price: 1199,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/457/1008_800_c80e/93811380299.jpg",
            category: "Аксессуары",
            gender: "Унисекс",
            description: "Удобная и стильная шапка от FILA. Мягкий акриловый материал отлично сохраняет тепло в холодную погоду. Универсальный дизайн подходит для повседневной носки."
        },
        {
            id: "67893e8b7b0c465a87b3ab8f",
            title: "Бутсы",
            brand: "PUMA",
            price: 9999,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/054/1008_800_ae00/130009830299.jpg",
            category: "Обувь",
            gender: "Унисекс",
            description: "Футбольные бутсы PUMA для игры на натуральных и искусственных покрытиях. Легкий верх обеспечивает комфорт и контроль мяча, а подошва гарантирует отличное сцепление."
        },
        {
            id: "67893e8b7b0c465a87b3ab90",
            title: "Щитки футбольные",
            brand: "Kappa",
            price: 2599,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/9bd/1008_800_73d7/111885410299.jpg",
            category: "Аксессуары",
            gender: "Унисекс",
            description: "Надежные футбольные щитки Kappa для защиты голени во время игры. Анатомическая форма и легкий вес обеспечивают комфорт и свободу движений."
        },
        {
            id: "67893e8b7b0c465a87b3ab91",
            title: "Худи женская",
            brand: "Nike",
            price: 17299,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/335/1008_800_e038/114517570299.jpg",
            category: "Одежда",
            gender: "Женский",
            description: "Стильное и комфортное женское худи Nike из мягкого флиса. Идеально подходит для тренировок и создания повседневных спортивных образов. Капюшон и карман-кенгуру."
        },
        {
            id: "67893e8b7b0c465a87b3ab92",
            title: "Мяч футбольный",
            brand: "Adidas",
            price: 3699,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/ab9/1008_800_0987/135388120299.jpg",
            category: "Мячи",
            gender: "Унисекс",
            description: "Футбольный мяч adidas для игр и тренировок на газоне. Бесшовная конструкция обеспечивает точную траекторию полета и низкое влагопоглощение."
        },
        {
            id: "678959e4544ccf1eb4a21b9d",
            title: "Перчатки вратарские",
            brand: "Adidas",
            price: 8799,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/1d2/1008_800_b0ef/58866550299.jpg",
            category: "Аксессуары",
            gender: "Унисекс",
            description: "Профессиональные вратарские перчатки adidas с латексной ладонью для превосходного сцепления с мячом в любых погодных условиях. Комфортная посадка и защита пальцев."
        },
        {
            id: "67895b9b544ccf1eb4a21bb5",
            title: "Перчатки",
            brand: "Demix",
            price: 1599,
            imageUrl: "https://cdn.sportmaster.ru/upload/mdm/media_content/resize/2f1/1008_800_8e05/109324890299.jpg",
            category: "Аксессуары",
            gender: "Унисекс",
            description: "Теплые перчатки Demix для защиты рук от холода во время активного отдыха или тренировок на улице. Эластичный материал обеспечивает удобную посадку."
        }
    ])

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
