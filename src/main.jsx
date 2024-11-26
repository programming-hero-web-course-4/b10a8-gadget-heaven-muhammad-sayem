import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import Statistics from './Pages/Statistics.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Cards from './Components/Cards/Cards.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <Cards></Cards>,
                        loader: ()=> fetch('../productsData.json')
                    },

                    {
                        path: '/category/:category',
                        element: <Cards></Cards>,
                        loader: ()=> fetch('../productsData.json')
                    }, 
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: ()=> fetch('../productsData.json'),
            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path:'/dashboard',
                        element: <Cart></Cart>
                    },
                    {
                        path: '/dashboard/cart',
                        element: <Cart></Cart>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <Wishlist></Wishlist>
                    },
                ]
            },

            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ()=> fetch('../productsData.json')
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
