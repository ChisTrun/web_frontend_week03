import { loginStart, loginSuccess, loginFailure, logout } from '../../redux/AuthSlice';
import { AppDispatch } from '../../redux/Store';


const Profile = async (profileData: { accessToken: string }) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/users/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${profileData.accessToken}`,
            },

        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to logout");
        }
        const rsp = await response.json();
        return { data: rsp }
    } catch (error: any) {
        return { error: error.message, code: error.code || 500 };
    }
}

export default Profile