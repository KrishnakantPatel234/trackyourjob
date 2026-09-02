import {createBrowserRouter , RouterProvider} from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path : "/",
            element : <AuthLayout />,
            children : [
                {
                    path : "",
                    element : <Login />
                },
                {
                    path : "login",
                    element : <Login />
                },
                {
                    path : "/register",
                    element : <Register />
                }
            ]
        },
        {
            path : "/home",
            element : <MainLayout />,
            children : [
                {
                    path : "",
                    element : <Home /> 
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default AppRoutes;