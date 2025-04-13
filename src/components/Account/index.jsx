import React, {useEffect} from 'react';
import s from "./styles.module.css";
import {useStores} from "../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {apiUsersURL} from "../../configs/constants.js";

const Account = observer(() => {
    const {
        account: { email, name, lastName, setEmail, setName, setLastName, clear },
        token: { clearToken, getID }
    } = useStores()
    const navigate = useNavigate();
    const id = getID();

    // Выход из аккаунта
    const handleLogOut = () => {
        clear();
        clearToken()
        navigate('/registration');
    }

    // Запрос
    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await axios.get(`${apiUsersURL}/${id}`);

                const { email, name, lastName } = response.data.content;
                setEmail(email)
                setName(name)
                setLastName(lastName)
            } catch (err) {
                console.error(err)
            }
        }
        fetchInfo()
    }, [id])


    return (
        <div className={s.account}>
            <div className={`__container ${s.account__container}`}>
                <h1 className={s.accountTitle}>Личный кабинет</h1>
                <div className={s.userInfo}>
                    <div className={s.infoItem}>
                        <span className={s.label}>Имя:</span>
                        <span className={s.value}>{name}</span>
                    </div>
                    <div className={s.infoItem}>
                        <span className={s.label}>Фамилия:</span>
                        <span className={s.value}>{lastName}</span>
                    </div>
                    <div className={s.infoItem}>
                        <span className={s.label}>Email:</span>
                        <span className={s.value}>{email}</span>
                    </div>
                    <button className={s.editButton}>Редактировать</button>
                    <button onClick={handleLogOut} className={s.logoutButton}>Выйти</button>
                </div>
            </div>
        </div>
    );
});

export default Account;