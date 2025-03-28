import React from "react"
import Admin from "../../Admin/index.jsx";
import { Helmet } from "react-helmet"

const AdminPage = () => {
    return (
        <>
            <Helmet>
                <title>Админка</title>
            </Helmet>
            <Admin/>
        </>
    )
}

export default AdminPage