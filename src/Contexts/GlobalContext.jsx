import { createContext, useState, useEffect, useContext, Children } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data =>
                setData(data)
            )
            .catch(error => console.error('errore nel fetch', error))

    }, [])

    return (
        <GlobalContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext(){
    return useContext(GlobalContext)
}

export {GlobalProvider, useGlobalContext}