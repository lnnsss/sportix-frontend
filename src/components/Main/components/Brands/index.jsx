import React from 'react';
import s from "./style.module.css"

const Brands = () => {
    return (
        <section className={s.brands}>
            <div className={`${s.__container} ${s.brands__container}`}>
                <h2 className={s.title}>Бренды</h2>
                <div className={s.brands__blocks}>
                    <div className={s.brands__block}>
                        <img src="/images/brands/nike.svg" alt="nike"/>
                    </div>
                    <div className={s.brands__block}>
                        <img src="/images/brands/fila.svg" alt="fila"/>
                    </div>
                    <div className={s.brands__block}>
                        <img src="/images/brands/adidas.svg" alt="adidas"/>
                    </div>
                    <div className={s.brands__block}>
                        <img src="/images/brands/kappa.svg" alt="kappa"/>
                    </div>
                    <div className={s.brands__block}>
                        <img src="/images/brands/puma.svg" alt="puma"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;