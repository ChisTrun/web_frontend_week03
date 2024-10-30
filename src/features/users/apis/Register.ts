const Register = async (registerData: {
    email: string;
    password: string;
}) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw { message: errorData.message || "Failed to register", code: response.status };
        }

        const rsp = await response.json();
        return rsp;
    } catch (error: any) {
        return { error: error.message, code: error.code || 500 };
    }
}

export default Register;
