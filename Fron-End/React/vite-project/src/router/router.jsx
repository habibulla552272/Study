import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import Service from '../commponent/Service'
import Contact from '../commponent/Contact'
import RootLayout from '../pages/RootLayout'
import Login from '../commponent/Login'

export const rootRouter = createBrowserRouter([
    {
        path: '/', element: <RootLayout />, children: [
            {path:'/',element: <Home />},
            { path: '/service', element: <Service /> },
            { path: '/contact', element: <Contact /> },


        ]
    },
    {
        path:'/login',element: <Login />
    },


])