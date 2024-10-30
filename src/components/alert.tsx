import { useState, useEffect } from "react";

function Alert({ data, setData }: { data: { code: number, mss: string } | null; setData: Function }) {
    if (!data) return null;

    const [theme, setTheme] = useState<{ textColor: string; borderColor: string; bgColor: string }>({
        textColor: "text-red-700",
        borderColor: "border-red-400",
        bgColor: "bg-red-100",
    });

    const closeAlert = () => {
        setData(null);
    };

    useEffect(() => {
        if (data && data.code) {
            setTheme(
                data.code < 300 && data.code >= 200
                    ? {
                        textColor: "text-teal-900",
                        borderColor: "border-teal-500",
                        bgColor: "bg-teal-100",
                    }
                    : {
                        textColor: "text-red-700",
                        borderColor: "border-red-400",
                        bgColor: "bg-red-100",
                    }
            );
        }
    }, [data?.code]);


    return (
        <div className={`${theme.bgColor} ${theme.borderColor} w-1/3 ${theme.textColor} px-4 py-3 rounded absolute top-2`} role="alert">
            <span className="block sm:inline">{data?.mss || "Có lỗi xảy ra."}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={closeAlert}>
                <svg className={`fill-current h-6 w-6 ${theme.textColor}`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>
        </div>
    );
}

export default Alert;
