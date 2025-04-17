import React, { useState } from 'react';
import s from "./styles.module.css";
import FormGroup from "./components/FormGroup.jsx";
import {observer} from "mobx-react-lite";
import axios from "axios";
import {apiProductsURL} from "../../../../configs/constants.js";
import {useNavigate} from "react-router-dom";

const AddProduct = observer(() => {
    const [formData, setFormData] = useState({
        title: '',
        brand: '',
        price: '',
        imageUrl: '',
        category: '',
        gender: '',
        description: ''
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddProduct = () => {
        const fetch = async () => {
            try {

                const dataToSend = {
                    ...formData,
                    price: Number(formData.price) || 0
                };

                const response = await axios.post(
                    apiProductsURL,
                    dataToSend
                );

                navigate('admin/products')

            } catch (err) {
                console.error(err)
            }
        }
        fetch()
    }

    return (
        <div className={s.addProduct}>
            <div className={`__container ${s.addProduct__container}`}>
                <h1 className={s.title}>Добавить Продукт</h1>
                <form className={s.form}>
                    <FormGroup name="Название" title="title" value={formData.title} handleChange={handleChange}  />
                    <FormGroup name="Бренд" title="brand" value={formData.brand} handleChange={handleChange}  />
                    <FormGroup type="number" name="Цена" title="price" value={formData.price} handleChange={handleChange}  />
                    <FormGroup type="url" name="Ссылка на изображение" title="imageUrl" value={formData.imageUrl} handleChange={handleChange}  />
                    <FormGroup name="Категория" title="category" value={formData.category} handleChange={handleChange}  />
                    <FormGroup name="Пол" title="gender" value={formData.gender} handleChange={handleChange}  />
                    <FormGroup name="Описание" title="description" value={formData.description} handleChange={handleChange}  />

                    <button onClick={handleAddProduct} className={s.submitButton}>Добавить</button>
                </form>
            </div>
        </div>
    );
});

export default AddProduct;
