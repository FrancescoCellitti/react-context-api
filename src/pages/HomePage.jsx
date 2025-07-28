export default function HomePage() {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Benvenuto nel nostro shop!</h1>
                    <p className="col-md-8 fs-4">
                        Siamo felici di averti qui! Scopri un’ampia selezione di prodotti scelti con cura per offrirti qualità, stile e convenienza.
                        Che tu stia cercando qualcosa di speciale o semplicemente voglia lasciarti ispirare, sei nel posto giusto.
                        Buono shopping!
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        <a href="/products" className="text-reset text-decoration-none">scopri il nostro catalogo</a>
                    </button>
                </div>
            </div>
            <div className="container-liquid d-flex justify-content-center">
                <img src="https://www.oneminutesite.it/wp-content/uploads/2019/03/influencer-online.jpg" alt="" />
            </div>


        </>
    )
}