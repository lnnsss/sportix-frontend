import React from 'react';
import s from "../styles.module.css"
import {useStores} from "../../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    const {
        catalog: { priceRange, setPriceRange, brand, setBrand, category, setCategory, gender, setGender }
    } = useStores()

    return (
        <div className={s.catalog__header}>
            <div className={s.filter__group}>
                <label htmlFor="minPrice">Мин. цена:</label>
                <input
                    type="number"
                    id="minPrice"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value)})}
                />
            </div>
            <div className={s.filter__group}>
                <label htmlFor="maxPrice">Макс. цена:</label>
                <input
                    type="number"
                    id="maxPrice"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value)})}
                />
            </div>
            <div className={s.filter__group}>
                <label htmlFor="brand">Бренд:</label>
                <select id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="">Все</option>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Levi's">Puma</option>
                </select>
            </div>
            <div className={s.filter__group}>
                <label htmlFor="category">Категория:</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Все</option>
                    <option value="Одежда">Одежда</option>
                    <option value="Обувь">Обувь</option>
                </select>
            </div>
            <div className={s.filter__group}>
                <label htmlFor="gender">Пол:</label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Все</option>
                    <option value="Мужской">Мужской</option>
                    <option value="Женский">Женский</option>
                </select>
            </div>
        </div>
    );
});

export default Header;