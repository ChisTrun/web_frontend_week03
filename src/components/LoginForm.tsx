import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../features/users/apis/Login";
import Cookies from "js-cookie";

function LoginForm({ setAlert, setFetching }: { setAlert: Function, setFetching: Function }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toRegister = () =>  {
        navigate('/register')
    }

    const login = async (event: React.FormEvent, email: string, password: string) => {
        event.preventDefault();
        setFetching(true)
        const result = await Login({
            email: email,
            password: password,
        })
        setFetching(false)
        if (result.error) {
            setAlert({
                code: result.code,
                mss: result.error
            })
        } else {
            Cookies.set('user', JSON.stringify(result), { expires: 1 / 48, path: '/' });
            navigate('/home')
        }
    }
    return <div className="bg-gray-900 shadow-md rounded-lg px-10 m-10 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">Welcome Back!</h1>
        <form onSubmit={(e) => { login(e, email, password) }} >
            <div className="mb-4">
                <label className="block text-sm font-medium  text-gray-300 mb-2">Email Address</label>
                <input onChange={(e) => {
                    setEmail(e.target.value)
                    setAlert(null)
                }} type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium  text-gray-300 mb-2">Password</label>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                    setAlert(null)
                }} type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
            </div>
            <div className="flex items-center justify-between mb-4">
                <a onClick={ () =>{ toRegister()}}
                    className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
                    Account</a>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </form>
    </div >
}

export default LoginForm
