import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import FloatCart from '../shared/FloatCart'
import '../component_styles/cart.scss'

const Root = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
                <FloatCart />
            </main>
            <Footer />
        </>
    )
}

export default Root