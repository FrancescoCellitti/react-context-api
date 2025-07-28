import { createContext, useState, useEffect, useContext, Children } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [data, setData] = useState([])
    const [alert, setAlert] = useState({
        type: "info",
        message: ''
    })
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Errore HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => {
                const alertData = {
                    type: 'error',
                    message: error.message
                };
                setAlert(alertData)
               console.log(alertData) 
            })
            
    }, []);

    return (
        <GlobalContext.Provider value={{
            data,
            setData, 
            alert, 
            setAlert
        }}>
            {children}
        </GlobalContext.Provider>


    )

}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }