import { logout } from '../../redux/AuthSlice';
import { AppDispatch } from '../../redux/Store';


const Logout = async (dispatch: AppDispatch, logoutData: { accessToken: string }) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/users/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${logoutData.accessToken}`,
            },

        });
        console.log(response)
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to logout");
        }
        dispatch(logout())
        return { mss: "ok" }
    } catch (error: any) {
        return { error: error.message, code: error.code || 500 };
    }
}

export default Logout