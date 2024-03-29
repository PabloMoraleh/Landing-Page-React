import React from "react"; //1. Importamos react
//creamos un componente jsx
function Navbar () {


  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )  
}

//3. Exportar componente
export default Navbar