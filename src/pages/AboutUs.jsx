export default function AboutUs() {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <p className="lead">
        il nostro E-commerce
        <img src="https://www.drcommodore.it/wp-content/uploads/2019/03/photo5810197553365495636.jpg"  className="ms-2" alt="" style={{
                                    height: '300px',
                                    objectFit: 'contain',
                                    backgroundColor: '#fff'
                                }} />
      </p>
      <hr />
      <h4>La nostra missione</h4>
      <p>
        offriamo tutto per le tue esigienze
      </p>
      <h4>Il nostro team che ha lavorato al sito web</h4>
      <ul>
        <li>Anna - Project Manager</li>
        <li>Marco - Frontend Developer</li>
        <li>Luca - Backend Developer</li>
      </ul>
    </div>
  );
}