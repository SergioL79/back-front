/* Hook useState */

/* import { useState } from "react" */

/* export default function DeleteCounter(){

    // state Es el valor actual del estado
    // setState es la funcion para actualizar
    // useState() es el valor inicial

    const [count,setCount] = useState(0);
    

    return(
        <div>

            <p>Counter:{count}</p>
            <button onClick={() => setCount(count + 1) }>Incremental</button>
        </div>
    )
} */

// ======================================
// ========= CONTADOR ===================
// ======================================

export default function DeleteCounter(){

    let count = 0

    const incrementar = (count) =>{
        count = count + 1;
        console.log(`El nuevo valor es ${count}`)
    }

    return (
        <div>
            <p>contador: {count}</p>
            <button onClick={(incrementar)}>incrementar</button>
        </div> 
    )
}

// 1- React solo actualiza la interfaz cuando cambia el estado useState
// 2- La UI en este ultimo ejemplo deja de actualizarse por que no estamos llamando a setCount, que es el mecanismo que le indica a React que debe re-renderizar
// 3- Cada vez que llamamos a setCount, le estamos diciendo a React el estado debe actualizarse y el componente debe volver a rendrizarse.
// 4- Solo renderiza el componente no la pagina.