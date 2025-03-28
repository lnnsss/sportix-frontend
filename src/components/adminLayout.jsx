import React from "react"
import AdminRoutes from "./routes/AdminRoutes.jsx"
import AdminHeader from "./Admin/components/Header/index.jsx";

const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <main>
                <AdminRoutes />
            </main>
        </>
    )
}

export default AdminLayout