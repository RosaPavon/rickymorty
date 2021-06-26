import { useState, useEffect } from 'react';

import './App.css';

function App() {
  
  const [loading, setLoading] =useState(false)
  const [url, setUrl]=useState("https://rickandmortyapi.com/api/character/")
  const [data, setData]=useState([])

 

 
  useEffect(()=>{
    setLoading(true)
    fetch(url).then(res => res.json()).then((datos)=>setData(datos.results))
    setLoading(false)
  },[url])

  
  if(loading){
    return <h2>Cargando....</h2>
  }else{

  return (
    <>
     <h1>Personajes</h1>
   <ul>
     {data.map((data, index)=>{
       if(index<=9){//esto condiciona que solo se puedan mostrar 10 elementos
        return <li key={data.id}>{data.name},<br/><img src={data.image}></img></li>

       }
       
     })}
   </ul>
   <button onClick={()=>{setUrl("https://rickandmortyapi.com/api/character/?page=2")}}>Siguiente</button>
   <button onClick={()=>{setUrl("https://rickandmortyapi.com/api/character/?page=1")}}>Anterior</button>

    </> 
  );
    }
}

export default App;
