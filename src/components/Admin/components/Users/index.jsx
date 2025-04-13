import React, {useEffect, useState} from 'react';
import s from "./styles.module.css";
import Card from "./components/Card.jsx";
import axios from "axios";
import {apiUsersURL} from "../../../../configs/constants.js";

const Users = () => {
    const [users, setUsers] = useState([
        {
            name: "Иван",
            lastName: "Петров",
            email: "ivan.petrov@example.com",
            password: "Qwe123!@#"
        },
        {
            name: "Алина",
            lastName: "Кузнецова",
            email: "alina.kuz@example.com",
            password: "Asd456$%^"
        },
        {
            name: "Михаил",
            lastName: "Смирнов",
            email: "mikhail.smirnov@example.com",
            password: "Zxc789&*("
        },
        {
            name: "Екатерина",
            lastName: "Орлова",
            email: "ekaterina.orlova@example.com",
            password: "P@ssW0rd123"
        },
        {
            name: "Дмитрий",
            lastName: "Волков",
            email: "d.volkov@example.com",
            password: "VolkDima2024!"
        },
        {
            name: "Ольга",
            lastName: "Сидорова",
            email: "olga.sidorova@example.com",
            password: "OlgaSid@22"
        },
        {
            name: "Артем",
            lastName: "Лебедев",
            email: "artem.leb@example.com",
            password: "ArtL2023@@"
        },
        {
            name: "Наталья",
            lastName: "Кириллова",
            email: "nat.kirillova@example.com",
            password: "NatK!321"
        },
        {
            name: "Сергей",
            lastName: "Морозов",
            email: "sergey.morozov@example.com",
            password: "S3rM0r2022#"
        },
        {
            name: "Татьяна",
            lastName: "Григорьева",
            email: "tat.grig@example.com",
            password: "TGrig!456"
        }
    ]);

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
