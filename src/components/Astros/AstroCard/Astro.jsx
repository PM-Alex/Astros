import './Astro.css'

//Las llaves indican que son propos y no parametros de una funcion
const Astro = ( { name, craft } ) => {

  return(

    <div className="astro--container" >

      <h3>{ name }</h3>
      <p>{ craft }</p>

    </div>

  )

}

/*

const Astro = ( props ) => {

  return(

    <div className="astro--container" >

      <h3>{ props.name }</h3>
      <p>{ props.craft }</p>

    </div>

  )

}

*/


export default Astro