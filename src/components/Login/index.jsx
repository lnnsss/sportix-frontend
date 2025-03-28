import React, {useState} from 'react';
import s from "./styles.module.css"
import {Link} from "react-router-dom";
import axios from "axios";
import {useStores} from "../../stores/root-store-context.js";

const Login = () => {
    const [formError, setFormError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {
        token: { setToken }
    } = useStores()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            // const response = await axios.post(`${backURL}/auth/login`, {
            //     email,
            //     password,
            // });
            // setToken(response.data.token);
            //
            // console.log("Успешный вход:", response.data);

            setEmail("");
            setPassword("");
            setFormError("");
        } catch (err) {
            console.error("Ошибка при входе:", err);
            setFormError(err.response.data.message);
        }
    };

    return (
        <section className={s.login}>
            <div className={s.__container + " " + s.login__container}>
                <form className={s.form}>
                    <h3>Авторизация</h3>
                    {formError && <h4 className={s.form__error}>Error: {formError}</h4>}
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
                    <button className={s.form__button} onClick={handleLogin}>
                        Войти
                    </button>
                    <span className={s.form__text}>
            Ещё нет аккаунта?
            <Link className={s.form__text__link} to="/registration">
              Зарегистрироваться
            </Link>
          </span>
                </form>
            </div>
        </section>
    );
};

const FormInput = ({reason, text, type, value, setValue}) => {
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

export default Login;