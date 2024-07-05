  import { createBrowserRouter } from "react-router-dom";
  import App from "../App";
  import Home from "../pages/Home";
  import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import Adminpanel from "../pages/Adminpanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword/>

            },
            {
                path: 'Sign-up',
                element: <SignUp/>
            },
            {
                path:'admin-panel',
                element:<Adminpanel/>,
                children:[
                    {
                        path:'all-users',
                        element:<AllUsers/>

                    },
                    {
                        path:'All-product',
                        element:<AllProducts/>
                    }
                ]
            }
        ]
    }

  ])

  export default router