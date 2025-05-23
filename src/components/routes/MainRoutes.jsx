import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute.jsx';
import Main from '../Main/index.jsx';
import Catalog from "../pages/userPages/CatalogPage.jsx";
import Product from "../pages/userPages/ProductPage.jsx";
import Reviews from "../pages/userPages/ReviewsPage.jsx";
import Cart from "../pages/userPages/CartPage.jsx";
import Registration from '../Registration/index.jsx';
import Login from '../Login/index.jsx';
import Account from '../Account/index.jsx';
import NotFound from '../../components/pages/userPages/NotFoundPage.jsx';
import ResetPassword from "../pages/userPages/ResetPasswordPage.jsx";

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Product />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/cart" element={<Cart />} />

            {/* Публичные маршруты  */}
            <Route element={<ProtectedRoute isProtected={false} redirectTo="/account" />}>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* Защищенные маршруты для обычных пользователей */}
            <Route element={<ProtectedRoute isProtected={true} redirectTo="/registration" />}>
                <Route path="/account" element={<Account />} />
            </Route>

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRoutes;
