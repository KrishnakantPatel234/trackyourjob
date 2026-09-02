import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const useAuth = () => {
    let navigate = useNavigate();

    let {register , handleSubmit , reset , formState : {errors}} = useForm();

    const registerForm = (data) => {
        console.log(data);
    }

    const loginForm = (data) => {
        console.log(data);
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