import React from "react"
import { Helmet } from "react-helmet"
import Users from "../../Admin/components/Users/index.jsx";

const UsersPage = () => {
    return (
        <>
            <Helmet>
                <title>Админка | Пользователи</title>
            </Helmet>
            <Users/>
        </>
    )
}

export default UsersPage