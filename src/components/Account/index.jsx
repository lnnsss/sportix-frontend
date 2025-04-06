import React from 'react';
import s from "./styles.module.css";
import {useStores} from "../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";



const Account = observer(() => {
    const {
        account: { email, name, lastName }
    } = useStores()

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
                    <button className={s.logoutButton}>Выйти</button>
                </div>
            </div>
        </div>
    );
});

export default Account;