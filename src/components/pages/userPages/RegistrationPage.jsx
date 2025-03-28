import React from "react"
import Registration from "../../Registration/index.jsx";
import { Helmet } from "react-helmet";

const RegistrationPage = () => {
    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <Registration />
        </>
    )
}
export default RegistrationPage