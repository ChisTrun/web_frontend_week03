// src/features/redux/AuthSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: string;
    created_at: Date;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const persistedState = localStorage.getItem('reduxState');
const parsedState = persistedState ? JSON.parse(persistedState) : null;
const initialAuthState = parsedState ? parsedState.auth : initialState;

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{ user: User; accessToken: string; refreshToken: string }>) {
            state.loading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;

            localStorage.setItem('reduxState', JSON.stringify({ auth: state }));
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            localStorage.removeItem('reduxState');
        },
        refreshTokenSuccess(state, action: PayloadAction<{ accessToken: string }>) {
            state.accessToken = action.payload.accessToken;

            localStorage.setItem('reduxState', JSON.stringify({ auth: state }));
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout, refreshTokenSuccess } = authSlice.actions;
export default authSlice.reducer;
