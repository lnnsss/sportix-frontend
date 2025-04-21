import React from "react"
import { Helmet } from "react-helmet";
import ResetPassword from "../../ResetPassword/index.jsx";

const AccountPage = () => {
    return (
        <>
            <Helmet>
                <title>Сброс пароля</title>
            </Helmet>
            <ResetPassword />
        </>
    )
}
export default AccountPage