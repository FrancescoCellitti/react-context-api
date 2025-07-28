import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function SingleProduct() {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const url = `https://fakestoreapi.com/products/${id}`


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [id])

    return (
        <>
            <div className="container">
                <div className="card border-0 col-6 mx-auto">
                    <img src={product.image} alt="" style={{
                        height: '300px',
                        objectFit: 'contain',
                        backgroundColor: '#fff'
                    }} />
                    <div className="card-body">
                        <h3 className="card-title">{product.title}</h3>
                        <p>{product.price}</p>
                        <sub>{product.description}</sub>
                    </div>
                    
                </div>
            </div>
        </>
    )
}