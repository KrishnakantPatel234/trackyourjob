import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/AuthSlice";

const useAuth = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [registeredUsers, setRegisteredUsers] = useState(() => {
        const users = localStorage.getItem("registeredUsers");

        return users ? JSON.parse(users) : [];
    });

    let {register , handleSubmit , reset , formState : {errors}} = useForm();

    const registerForm = (data) => {
        let arr = [...registeredUsers , data];
        setRegisteredUsers(arr);
        localStorage.setItem("registeredUsers",JSON.stringify(arr));
        toast.success("user registered successfully");
        reset();
        navigate("/home");

    }

    const loginForm = (data) => {
        console.log("registeredUsers =", registeredUsers);
        console.log("Array? =", Array.isArray(registeredUsers));
        let user = registeredUsers.find((val) => {
            return val.email === data.email && val.password === data.password;
        })
        console.log(registeredUsers);

        if(!user){
            console.log(user);
            return toast.error("Invalid credentials");
        }

        dispatch(addUser(user));
        localStorage.setItem("loggedInUser" , JSON.stringify(user));
        toast.success("user logged in successfully");
        reset();
        navigate("/home");
    }

    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
        registerForm,
        loginForm
    }
}

export {
    useAuth
}