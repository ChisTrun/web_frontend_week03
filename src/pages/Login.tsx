import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Alert from "../components/alert";
import Loading from "../components/loading";

function LoginPage() {
    const [alert, setAlert] = useState<{ code: number, mss: string } | null>(null)
    const [fetching, setFetching] = useState<boolean>(false)
    return <div className="h-screen flex justify-center items-center">
        {alert && <Alert data={alert} setData={setAlert} />}
        {!fetching && <LoginForm setAlert={setAlert} setFetching={setFetching}></LoginForm>}
        {fetching && <Loading></Loading>}
    </div >
}

export default LoginPage;