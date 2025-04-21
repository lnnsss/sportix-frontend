import React, {useState} from 'react';
import s from "./styles.module.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useStores} from "../../stores/root-store-context.js";
import {apiAuthURL} from "../../configs/constants.js";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const Login = () => {
    const [formError, setFormError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const {
        token: { setToken }
    } = useStores()

    const handleBtnClick = async (e) => {
        e.preventDefault()
        try {

            // тело запроса
            const body = {
                email: email.trim(),
                password: password.trim(),
            };

            // проверка на пустые поля
            if ( !email.trim() || !password.trim() ) {
                return setFormError("Все поля должны быть заполнены")
            }

            // проверка на email
            if (!/\S+@\S+\.\S+/.test(email.trim())) {
                return setFormError("Некорректный email");
            }

            // запрос на сервер
            const response = await axios.post(`${apiAuthURL}/login`, body);

            // очистка полей
            setEmail("")
            setPassword("")
            setFormError("")

            // Сохранение токена в cookies
            setToken(response.data.content.token);
            Cookies.set('jwt', response.data.content.token, { secure: true, sameSite: 'Strict' });

            // переход на следующую страницу
            const tokenPayload = jwtDecode(response.data.content.token);
            if (tokenPayload.roles && Array.isArray(tokenPayload.roles) && tokenPayload.roles.includes('ADMIN')) {
                navigate('/admin');
            } else {
                navigate('/account');
            }

        } catch (err) {
            setFormError(err.response?.data.message || "Произошла ошибка при входе.");
            console.error(err)
        }
    }

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
                    <button className={s.form__button} onClick={handleBtnClick}>
                        Войти
                    </button>
                    <span className={s.form__text}>
                        <div>
                            Забыли пароль?
                            <Link className={s.form__text__link} to="/resetPassword">
                              Сбросить
                            </Link>
                        </div>
                        <div>
                            Ещё нет аккаунта?
                            <Link className={s.form__text__link} to="/registration">
                              Зарегистрироваться
                            </Link>
                        </div>
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