import Navbar from "../Navbar/Navbar";
import Astro from "./AstroCard/Astro";
import useAstros from "./hooks/useAstros";

export default function Astros() {
  //Utilizamos el componente Astros para modificar el estado del mismo utilizando useState. Para ello usamos Astro como tarjeta base (Card) y llenamos su información consumiendo una API con useEffect

  const astros = useAstros();
    return (
    <>
 
      {/* Las llaves permiten escribir código JS dentro del return */}
      
      {
        /* Los elementos deben tener una llave única, normalmente el id, pero aquí no existe, por lo que usamos el index */
        astros.map((itemAstro, index) => (
          <Astro key={index} {...itemAstro} />
        ))
      }
    </>
  );
}


{/* 4 Formas de exportar
  
  export default function Astros() {
    return (
        <>
        </>
    )
}
----
function Astros1() {
    return(
        <>
        </>
    )
}
export default Astros1
----
const Astros2 = () => {
    return (
        <></>
    )
}
export default Astros2
----
export const Astros3 = () => {
    return(
        <>
        </>
    )
}
  
  */}