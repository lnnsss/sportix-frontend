import React, {useState} from 'react';
import s from "./styles.module.css"
import {Link} from "react-router-dom";

const Registration = () => {
    const [formError, setFormError] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const handleAddBtnClick = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email,
                password,
            };

            setEmail("");
            setPassword("");
            setFormError("");
        } catch (err) {
            console.error("Ошибка при регистрации:", err);
            setFormError(err.response.data.message);
        }
    };

    return (
        <section className={s.registration}>
            <div className={`${s.__container} ${s.registration__container}`}>
                <form className={s.form}>
                    <h3>Регистрация</h3>
                    {formError && <h4 className={s.form__error}>{formError}</h4>}
                    <FormInput
                        reason="name"
                        text="Имя"
                        type="text"
                        value={name}
                        setValue={setName}
                    />
                    <FormInput
                        reason="lastName"
                        text="Фамилия"
                        type="text"
                        value={lastName}
                        setValue={setLastName}
                    />
                    <FormInput
                        reason="email"
                        text="Email"
                        type="text"
                        value={email}
                        setValue={setEmail}
                    />
                    <FormInput
                        reason="password"
                        text="Пароль"
                        type="password"
                        value={password}
                        setValue={setPassword}
                    />
                    <FormInput
                        reason="passwordRepeat"
                        text="Повторите пароль"
                        type="password"
                        value={passwordRepeat}
                        setValue={setPasswordRepeat}
                    />
                    <button className={s.form__button} onClick={handleAddBtnClick}>
                        Зарегистрироваться
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

const FormInput = ({ reason, text, type, value, setValue }) => {
    const handleChangeInputValue = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className={s.form__input}>
            <label htmlFor={reason}>{text}</label>
            <input
                type={type}
                id={reason}
                value={value}
                onChange={handleChangeInputValue}
            />
        </div>
    );
};

export default Registration;