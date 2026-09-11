import { createSlice } from "@reduxjs/toolkit";

const getSavedUser = () => {
    try {
        const user = localStorage.getItem("loggedInUser");
        return user ? JSON.parse(user) : null;
    } catch {
        return null;
    }
};

const getSavedToken = () => {
    return localStorage.getItem("token") || null;
};

const initialState = {
    user: getSavedUser(),
    token: getSavedToken(),
    isAuthenticated: !!getSavedToken(),
    waitTime: 0,
    attemptsLeft: 5,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { user, token } = action.payload || {};
            if (user) {
                state.user = user;
                localStorage.setItem("loggedInUser", JSON.stringify(user));
            } else if (action.payload && !token) {
                // fallback if payload is just user object
                state.user = action.payload;
                localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
            }
            if (token) {
                state.token = token;
                localStorage.setItem("token", token);
            }
            state.isAuthenticated = true;
        },
        removeUser: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("token");
        },
        setWaitTime: (state, action) => {
            state.waitTime = action.payload;
        },
        setAttemptsLeft: (state, action) => {
            state.attemptsLeft = action.payload;
        },
        decrementAttempts: (state) => {
            if (state.attemptsLeft !== undefined && state.attemptsLeft > 0) {
                state.attemptsLeft -= 1;
            }
        }
    }
});

export const { addUser, removeUser, setWaitTime, setAttemptsLeft, decrementAttempts } = authSlice.actions;

export default authSlice.reducer;