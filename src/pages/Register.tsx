import { useState } from "react";
import Alert from "../components/alert";
import RegisterForm from "../components/RegisterForm";
import Loading from "../components/loading";

function RegisterPage() {
    const [alert, setAlert] = useState<{ code: number, mss: string } | null>(null)
    const [fetching, setFetching] = useState<boolean>(false)
    return <div className="h-screen flex justify-center items-center">
        {alert && <Alert data={alert} setData={setAlert} />}
        {!fetching && <RegisterForm setAlert={setAlert} setFetching={setFetching}></RegisterForm>}
        {fetching && <Loading></Loading>}
    </div >
}

export default RegisterPage;