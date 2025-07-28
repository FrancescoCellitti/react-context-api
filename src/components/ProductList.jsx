import Card from './Card'

export default function ProductsList({ data }) {
    return (
        <div className="container">
            <div className="row">
                {data.map((dato, index) => (


                    <Card data={dato} key={dato.id}></Card>


                )
                )
                }
            </div>
        </div>
    )
}