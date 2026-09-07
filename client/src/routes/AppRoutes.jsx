import {createBrowserRouter , RouterProvider} from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";

const AppRoutes = () => {

    let dispatch = useDispatch();

    const hydrateUser = () => {
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if(!loggedInUser){
            toast.error("unauthorized access");
            return;
        }

        dispatch(addUser(loggedInUser));
    }

    useEffect(() => {
        hydrateUser();
    }, []);

    let router = createBrowserRouter([
        {
            path : "/",
            element : <PublicProtected />,
            children : [
                {
                    path : "",
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
                }
            ]
        },
        {
            path : "/home",
            element : <MainProtected />,
            children : [
                {
                    path : "",
                    element : <MainLayout />,
                    children : [
                        {
                            path : "",
                            element : <Home /> 
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default AppRoutes;