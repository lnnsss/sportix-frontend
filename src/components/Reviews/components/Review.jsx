import React from 'react';
import s from "../styles.module.css";

const Review = ({ name, text, imageURL }) => {
    return (
        <div className={s.slideWrapper}>
            <div className={s.reviewItem}>
                {imageURL && (
                    <div className={s.reviewImageContainer}>
                        <img src={imageURL} alt={`Фото ${name}`} className={s.reviewImage} />
                    </div>
                )}
                {!imageURL && (
                    <div className={s.reviewImagePlaceholder}>
                        👤
                    </div>
                )}
                <div className={s.reviewContent}>
                    <h3 className={s.reviewName}>{name}</h3>
                    <p className={s.reviewText}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;