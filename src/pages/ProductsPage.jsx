import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../Contexts/GlobalContext"


export default function ProductsPage() {
 const {data} = useGlobalContext()
    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((dato, index) => (
                        <div key={index} className="col-4">
                            <Link to={`/product/${dato.id}`}>
                                <div className="card h-100 border-0" style={{ width: "18rem" }}>
                                    <img src={dato.image} className="card-img-top" alt="..." style={{
                                        height: '300px',
                                        objectFit: 'contain',
                                        backgroundColor: '#fff'
                                    }} />
                                    <div className="card-body">
                                        <h4 className="card-text">{dato.title}</h4>
                                        <p>{dato.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    )
                    )
                    }
                </div>
            </div>
        </>
    )
}