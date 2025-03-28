import { Route, Routes } from "react-router-dom";
import Admin from "../../components/pages/adminPages/AdminPage.jsx";
import NotFound from "../../components/pages/userPages/NotFoundPage.jsx";

const AdminRoutes = () => {

    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AdminRoutes;