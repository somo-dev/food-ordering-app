import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Root = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Root