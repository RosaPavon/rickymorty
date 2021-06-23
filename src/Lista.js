function Lista(props){
    let respuesta= props.results.map((personaje, index)=>{
        return <li>{personaje.name}</li>
    })
    return(
        <ul>
            {respuesta}
        </ul>

    )
}

export default Lista