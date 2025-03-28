import React from "react"
import Main from "../../Main/index.jsx";
import { Helmet } from "react-helmet";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <Main />
        </>
    )
}
export default MainPage