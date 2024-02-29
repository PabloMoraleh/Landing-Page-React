import React from "react"; //1. Importamos react
//creamos un componente jsx
function Card () {
    // style={{marginRight: spacing + 'em'}}

  return(
<div className="card mt-5" style={{width: "100%"}}>
  <img className="card-img-top" src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  )
}
export default Card