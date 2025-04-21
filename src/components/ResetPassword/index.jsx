import React, {useState} from 'react';
import s from "./styles.module.css";
import {Link, useNavigate} from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim() !== "") {
            alert(`Инструкция по сбросу пароля отправлена на ${email}`)
            navigate("/login")
        }
    }

    return (
        <section className={s.resetPassword}>
            <div className={`${s.__container} ${s.resetPassword__container}`}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h3>Сброс пароля</h3>
                    <label htmlFor="">Введите email: </label>
                    <input className={s.form__input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className={s.form__button} type="submit" >
                        Восстановить
                    </button>
                    <span className={s.form__text}>
                        Уже есть аккаунт?
                        <Link className={s.form__text__link} to="/login">
                          Войти
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;