import React from "react"
import Login from "../../Login/index.jsx";
import { Helmet } from "react-helmet";

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Login />
        </>
    )
}
export default LoginPage