import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { useSelector } from "react-redux";
import { RootState } from "../features/redux/Store";
import Profile from "../features/users/apis/profile";
import Loading from "../components/loading";


function ProfilePage() {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate()
    const accessToken = useSelector((state: RootState) => state.auth.accessToken);
    const [data, setData] = useState<{ email: string, createdAt: Date } | null>(null)


    const getData = async () => {
        const result = await Profile({ accessToken: accessToken })
        if (result.error) {
            setData(null)
        } else {
            setData(result.data)
        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
        getData()
    }, []);



    return <>
        {isAuthenticated && <div>
            <Header></Header>
            {data && <div className="flex-col justify-center items-center p-20">
                <div>Email: {data.email}</div>
                <div>Create At: {data.createdAt.toString()}</div>
            </div>}
            {!data && <div className="p-20"><Loading></Loading></div>}
        </div>}
    </>
}

export default ProfilePage;