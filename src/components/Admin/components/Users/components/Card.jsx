import React from 'react';
import s from "../styles.module.css";

const Card = ({name, lastName, email}) => {
    return (
        <div className={s.userCard}>
            <div className={s.avatar}>
                {name.slice(0, 1)}{lastName.slice(0, 1)}
            </div>
            <div className={s.info}>
                <p className={s.name}>{name} {lastName}</p>
                <p className={s.email}>{email}</p>
            </div>
        </div>
    );
};

export default Card;