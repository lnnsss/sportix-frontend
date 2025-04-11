import React, {useState} from 'react';
import s from "./styles.module.css"
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';
import {Link, useNavigate} from "react-router-dom";
import {useStores} from "../../stores/root-store-context.js";
import axios from "axios";
import {apiAuthURL} from "../../configs/constants.js";

const Registration = () => {
    const [formError, setFormError] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const {
        token: { setToken }
    } = useStores()
    const navigate = useNavigate();

    const handleBtnClick = async (e) => {
        e.preventDefault()
        try {

            // тело запроса (форматирование имени, фамилии)
            const body = {
                name: (name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()).trim(),
                lastName: (lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1).toLowerCase()).trim(),
                email: email.trim(),
                password: password.trim(),
            };

            // проверка на пустые поля
            if (!name.trim() || !lastName.trim() || !email.trim() || !password.trim() ||!passwordRepeat.trim() ) {
                return setFormError("Все поля должны быть заполнены")
            }

            // проверка на email
            if (!/\S+@\S+\.\S+/.test(email.trim())) {
                return setFormError("Некорректный email");
            }

            // проверка на совпадение паролей
            if (password !== passwordRepeat) {
                return setFormError("Пароли не совпадают")
            }

            // запрос на сервер
            const response = await axios.post(`${apiAuthURL}/registration`, body);

            // очистка полей
            setName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setPasswordRepeat("")
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
            setFormError(err.response?.data.message || "Произошла ошибка при регистрации.");
            console.error(err)
        }
    }

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
                    <button className={s.form__button} onClick={handleBtnClick}>
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