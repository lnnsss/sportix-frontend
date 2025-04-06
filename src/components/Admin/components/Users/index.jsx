import React from 'react';
import s from "./styles.module.css";
import { users } from "./users.js";
import Card from "./components/Card.jsx";

const Users = () => {
    return (
        <div className={s.users}>
            <div className={`__container ${s.users__container}`}>
                <h1 className={s.title}>Пользователи</h1>
                {users.map((u, i) => <Card key={i} {...u} />)}
            </div>
        </div>
    );
};

export default Users;
