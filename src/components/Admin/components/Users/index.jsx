import React, {useEffect, useState} from 'react';
import s from "./styles.module.css";
import Card from "./components/Card.jsx";
import axios from "axios";
import {apiUsersURL} from "../../../../configs/constants.js";

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(apiUsersURL)
                setUsers(response.data.content)
            } catch (err) {
                console.error(err)
            }
        }
        fetchUsers()
    }, [])

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
