import React from 'react';
import Slider from "react-slick";
import s from './styles.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from "./settings.js";
import {reviews} from "./reviews.js";
import Review from "./components/Review.jsx";

const Reviews = () => {

    return (
        <div className={s.reviews}>
            <div className={`__container ${s.reviews__container}`}>
                <h2 className={s.title}>Отзывы наших покупателей</h2>

                <Slider {...settings} className={s.slider}>
                    {reviews.map(r => <Review {...r} />)}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;