import { useEffect, useState } from "react";
  
  const useAstros = () => {
  
  // 1. Guardar en una constante la ruta de la API
  const URL_ASTROS = "http://api.open-notify.org/astros.json"

  // 2. Definir el useState (hook)
  const [astros, setAstros] = useState([]);

  // 3. Consumir la API utilizando useEffect (hook)
  useEffect(() => {

    fetch(URL_ASTROS)
        .then(response => response.json())
        .then(data => setAstros(data.people) )
  }, [] );
  
  return astros;

}

export default useAstros