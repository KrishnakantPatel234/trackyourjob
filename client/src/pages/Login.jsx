import React from "react";
import { useAuth } from "../hooks/authHooks";

const Login = () => {

    let {navigate , register, handleSubmit , errors , loginForm} = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <form 
        onSubmit={handleSubmit(loginForm)}
        className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            TrackYourJob
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Welcome back! Login to track your job applications.
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email
          </label>

          <input
            {...register("email" , {
                required : "email is required",
            })}
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-300
                       text-slate-900 placeholder-slate-400
                       outline-none transition
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.email && <p className="text-sm text-red-500" >{errors.email.message}</p>}

        </div>

        {/* Password */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </a>
          </div>

          <input
            {...register("password" , {
                required : "password is required",
                minLength : {
                    value : 8,
                    message : "minimum 8 characters are required",
                }
            })}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg border border-slate-300
                       text-slate-900 placeholder-slate-400
                       outline-none transition
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.password && <p className="text-sm text-red-500" >{errors.password.message}</p>}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg
                     bg-blue-600 hover:bg-blue-700
                     text-white font-semibold
                     transition duration-200
                     cursor-pointer"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;