import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          Track<span className="text-blue-600">YourJob</span>
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-sm font-medium
                       text-slate-600 hover:text-slate-900
                       transition cursor-pointer"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 text-sm font-semibold
                       text-white bg-blue-600
                       hover:bg-blue-700 rounded-lg
                       transition cursor-pointer"
          >
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;