import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute.jsx';
import Main from '../Main/index.jsx';
import Products from "../pages/userPages/ProductsPage.jsx";
import Registration from '../Registration/index.jsx';
import Login from '../Login/index.jsx';
import Account from '../Account/index.jsx';
import NotFound from '../../components/pages/userPages/NotFoundPage.jsx';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />

            {/* Публичные маршруты для регистрации и входа */}
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