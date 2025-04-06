import { Route, Routes } from "react-router-dom";
import Admin from "../../components/pages/adminPages/AdminPage.jsx";
import Users from "../pages/adminPages/UsersPage.jsx";
import Products from "../pages/adminPages/ProductsPage.jsx";
import NotFound from "../../components/pages/userPages/NotFoundPage.jsx";
import AddProduct from "../pages/adminPages/AddProductPage.jsx";

const AdminRoutes = () => {

    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/addProduct" element={<AddProduct />} />

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AdminRoutes;