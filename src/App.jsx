import Button from './components/Button/Button'
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Products from './components/Products/Products'
import RecipeReviewCard from './components/Card/Card'

//Comentaio Fuera de la Función

function App() {

//Guardar las rutas de las imagenes en constantes
const tenisMorados = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
const tenisNegros = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
const tenisCafes = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"

// Estilos para la card de Material UI
const stylesCard = {
  display: 'flex', 
  justifyContent: 'center',
  marginTop: '50px',
  marginBottom: '50px'
}


  return(
    <>
    <Navbar />


    <h1>Hola React</h1>

    <Products image={tenisMorados} 
              title="Tenis Morados" 
              description="Tenis aerodinamico para runnnig" 
              price="$2599.00" />

    <Products image={tenisNegros} 
              title="Tenis Negros" 
              description="Tenis elegantes y sofisticados" 
              price="$1855.00" />

    <Products image={tenisCafes} 
              title="Tenis Morados" 
              description="Tenis para el viernes en la oficina" 
              price="$2850.00" />
              
    {/* Aplicando estilos en linea */}
    <h2 style={ {color: "#94bbe9", fontSize: 35, border: "1px solid white", borderRadius: "20px"} }>Material UI - Component</h2>
    
    {/* Componente de Material UI */}

    <div style={stylesCard} >
    <RecipeReviewCard />
    </div>

    {/* Comentario Dentro de la Función
    <Button texto="Registrarse" />
    <br />
    <Button texto="Iniciar Sesión" />
    */}

    </>
    

  )
}

export default App
