import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import '../component_styles/cart.scss'
import { Provider } from 'react-redux'
import { store } from '../store/index'

const Root = () => {
    return (
        <Provider store={store}>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Provider>
    )
}

export default Root