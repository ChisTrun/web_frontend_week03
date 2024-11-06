import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { useSelector } from "react-redux";
import { RootState } from "../features/redux/Store";


function HomePage() {
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    return <>
        {isAuthenticated && <div>
            <Header></Header>
            <div className="flex justify-center">
                <h1 className="text-3xl p-10">Hi {user.email}</h1>
            </div>
            <img className="w-full" src="https://images.squarespace-cdn.com/content/v1/59239926e58c6263bf72d2a4/1673227208442-U85HEVSO8AZOBHFDW62R/Coming+Soon+WEBSITE.png?format=2500w" alt="coming_soon" />
        </div>}
    </>
}

export default HomePage;