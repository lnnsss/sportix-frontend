import React from "react"
import { Helmet } from "react-helmet";
import Reviews from "../../Reviews/index.jsx";

const ReviewsPage = () => {
    return (
        <>
            <Helmet>
                <title>Отзывы</title>
            </Helmet>
            <Reviews />
        </>
    )
}
export default ReviewsPage