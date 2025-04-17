import React, {useEffect} from 'react';
import s from "./styles.module.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import {apiProductsURL} from "../../configs/constants.js";


const Product = () => {
    const [product, setProduct] = useState();
    const params = useParams();
    const productId = params.id; // id продукта

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${apiProductsURL}/${productId}`);

                const product = response.data.content;
                setProduct(product);

            } catch (err) {
                console.error(err)
            }
        }
        fetchProduct();
    }, [productId])

    return (
        <div className={s.product}>
            <div className={`__container ${s.product__container}`}>

                <div className={s.productContent}>

                    <div className={s.productImageWrapper}>
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className={s.productImage}
                        />
                    </div>

                    <div className={s.productDetails}>
                        <h1 className={s.productTitle}>{product.title}</h1>

                        <p className={s.productBrand}>
                            <span>Бренд:</span> {product.brand}
                        </p>

                        <p className={s.productCategory}>
                            <span>Категория:</span> {product.category}
                        </p>

                        {product.gender && (
                            <p className={s.productGender}>
                                <span>Пол:</span> {product.gender}
                            </p>
                        )}

                        {product.description && (
                            <div className={s.productDescription}>
                                <h3>Описание:</h3>
                                <p>{product.description}</p>
                            </div>
                        )}

                        <p className={s.productPrice}>{product.price} руб.</p>

                        <button className={s.addToCartButton}>
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;