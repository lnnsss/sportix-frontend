import React from 'react';
import s from "../styles.module.css";

const FormGroup = ({type="text", name, title, value, handleChange}) => {
    return (
        <div className={s.formGroup}>
            <label htmlFor={title} className={s.label}>{name}</label>
            <input
                type={type}
                id={title}
                name={title}
                value={value}
                onChange={handleChange}
                className={s.input}
                required
            />
        </div>
    );
};

export default FormGroup;