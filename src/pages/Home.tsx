import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";


function HomePage() {
    const navigate = useNavigate()
    const user = Cookies.get('user');
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);

    return <div>
        <Header></Header>
        <img className="w-full" src="https://images.squarespace-cdn.com/content/v1/59239926e58c6263bf72d2a4/1673227208442-U85HEVSO8AZOBHFDW62R/Coming+Soon+WEBSITE.png?format=2500w" alt="coming_soon" />
    </div>
}

export default HomePage;