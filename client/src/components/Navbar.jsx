import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/authHooks";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { logoutUser } = useAuth();

  return (
    <nav className="border-b border-slate-200 bg-white shadow-xs sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate("/home")}
          className="text-xl font-bold tracking-tight text-slate-900 cursor-pointer flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
            TJ
          </div>
          <span>Track<span className="text-blue-600">YourJob</span></span>
        </button>

        {/* Right side: Profile photo/username & Logout */}
        <div className="flex items-center gap-4">
          {user && (
            <div className="flex items-center gap-3 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name || user.email || 'User')}`}
                alt="Profile Avatar"
                className="w-7 h-7 rounded-full bg-blue-200 border border-white object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/avatars/01.png";
                }}
              />
              <span className="text-sm font-semibold text-slate-800 max-w-[140px] truncate">
                {user.name || user.email?.split("@")[0]}
              </span>
            </div>
          )}

          <button
            onClick={logoutUser}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium
                       text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100
                       border border-red-200/60 rounded-lg transition duration-150 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;