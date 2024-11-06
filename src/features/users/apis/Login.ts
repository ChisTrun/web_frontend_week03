import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, logout, refreshTokenSuccess } from '../../redux/AuthSlice';
import { AppDispatch } from '../../redux/Store';


const Login = async (loginData: {email: string;password: string;}) => {
    const dispatch = useDispatch<AppDispatch>();
    try {
        dispatch(loginStart())
        const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData),
        });
        if (!response.ok) {
            const errorData = await response.json();
            dispatch(loginFailure(errorData.messagse))
            throw new Error(errorData.message || "Failed to login"); // Customize error message
        }
        const rsp = await response.json();
        dispatch(loginSuccess({
            user: rsp.user,
            accessToken: rsp.access_token,
            refreshToken: rsp.refresh_token
        })) 
        return rsp
    } catch (error: any) {
        return { error: error.message, code: error.code || 500 };
    }
}

export default Login