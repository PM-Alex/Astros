import { Link } from "react-router-dom";
import Button from "../Button/Button"
import "./Navbar.css"
// Importar una imagen desde una ruta
import logoNasa from "/src/assets/logo.png"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

//NO debe haber anchors anidaos con <Link>

const Navbar = () => {
  return (
    // Se puede prescindir de los fragmentos en este caso
    <>
    <nav className="navbar--container">
      {/* Logo */}
      <div className="navbar--logo"> 

        {/*  Componente que me permite linkear a otro sitio */}
        <Link to='/'>
          <img src={logoNasa} alt="Logo de la NASA" />
        </Link>

      </div>
       {/* Menu */}
      <div className="navbar--menu">

        <div className="menu--link">

          {/* Debio haberse hecho un una <ul> y <li> y <Navlink>*/}
          <Link to='/astros-api'>
            <a>Astros</a>
          </Link>
          <a href="#">NASA</a>
          <a href="#">ISS</a>
        </div>

        
        {/* Button */}
        <Button texto="Buscar" />

        <Link to={'/login'}>
          <span class="material-icons-outlined">
            <AccountCircleRoundedIcon style={({fontSize: "xx-large"})}/>
          </span>
        </Link>

      </div>
    </nav>
    </>
  )

}

export default Navbar