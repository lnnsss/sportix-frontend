import React from "react"
import Header from './Header/index.jsx'
import Footer from './Footer/index.jsx'
import MainRoutes from './routes/MainRoutes.jsx'

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="main__container">
                    <MainRoutes />
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Layout