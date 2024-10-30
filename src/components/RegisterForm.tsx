import { useState } from "react";
import Register from "../features/users/apis/Register";

function RegisterForm({ setAlert, setFetching }: { setAlert: Function, setFetching: Function }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (event: React.FormEvent, email: string, password: string) => {
        event.preventDefault();
        setFetching(true)
        const result = await Register({
            email: email,
            password: password,
        })
        setFetching(false)
        let alertData = {
            code: 200,
            mss: "Register success"
        }
        if (result.error) {
            alertData.code = result.code
            alertData.mss = result.error
        }
        setAlert(alertData)

    }

    return <div>
        <div className="bg-gray-900 shadow-md rounded-lg px-10 m-10 py-6 max-w-md">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">Register</h1>
            <form onSubmit={(e) => { register(e, email, password) }} >
                <div className="mb-4">
                    <label className="block text-sm font-medium  text-gray-300 mb-2">Email Address</label>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                        setAlert(null)
                    }} value={email} type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium  text-gray-300 mb-2">Password</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                        setAlert(null)
                    }} value={password} type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-300 ">Already have an account?</span>
                    <a href="/login"
                        className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</a>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
            </form>
        </div >

    </div>
}

export default RegisterForm