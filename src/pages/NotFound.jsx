import { useGlobalContext } from "../Contexts/GlobalContext"
import { useEffect } from "react";
export default function NotFound() {
    const { alert, setAlert } = useGlobalContext()
    useEffect(() => {
        const alertData = {
            type: 'error',
            message: 'La pagina che stai cercando non esiste.'
        };
        setAlert(alertData);
        console.log(alertData);
    }, []);
    return (
        <div className="container mt-5 ">
            <h1><b>404-not Found</b></h1>
            {alert.message && (
                <div style={{
                    padding: '10px',
                    backgroundColor: '#ccc',
                    marginTop: '1rem'
                }}>
                    <strong>{alert.type.toUpperCase()}:</strong> {alert.message}
                </div>
            )}
        </div>
    )


}