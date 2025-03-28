import React from "react"
import Account from "../../Account/index.jsx";
import { Helmet } from "react-helmet";

const AccountPage = () => {
    return (
        <>
            <Helmet>
                <title>Личный кабинет</title>
            </Helmet>
            <Account />
        </>
    )
}
export default AccountPage