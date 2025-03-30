import React from "react"
import { Helmet } from "react-helmet";
import Catalog from "../../Catalog/index.jsx";

const CatalogPage = () => {
    return (
        <>
            <Helmet>
                <title>Каталог</title>
            </Helmet>
            <Catalog />
        </>
    )
}
export default CatalogPage