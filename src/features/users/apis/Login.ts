const Register = async (loginData: {
    email: string;
    password: string;
}) => {
    try {
        const response = await fetch(`api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to login"); // Customize error message
        }
        const rsp = await response.json();
        return rsp
    } catch (error: any) {
        return { error: error.message };
    }
}

export default Register