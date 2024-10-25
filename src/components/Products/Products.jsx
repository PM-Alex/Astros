import "./Products.css"

//Props Desestructurados. No posee la palabra reservada "props", se asinga con base en el contexto
// Se ponen como argumentos de la función y deben ir entre llaves

const Products = ({ image, title, description, price }) => {
  return (
    <div className="card--container">
      <div className="product--card">
        <img src={image} alt="imagen del producto"></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Products