import { Link } from "react-router-dom"

export default function Card({data}) {
    return (
        <div className="col-4">
            <Link to={`/product/${data.id}`} className="text-reset text-decoration-none">
                <div className="card h-100 border-0 mt-5" style={{ width: "18rem" }}>
                    <img src={data.image} className="card-img-top" alt="..." style={{
                        height: '300px',
                        objectFit: 'contain',
                        backgroundColor: '#fff'
                    }} />
                    <div className="card-body">
                        <h4 className="card-text">{data.title}</h4>
                        <p>{data.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}