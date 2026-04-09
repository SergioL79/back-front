// useEffect

/* import { useEffect, useState } from "react"; */

/**
* useEffect es un hook que permite ejecutar efectos secundarios en componentes funcionales.
* Un efecto secundario es cualquier operacion que:
* 1- Ocurre fuera del render
* 2- Interactua con el mundo exterior al componente
* 
* Ejemplos:
* - Llamadas a APIs
* - Manipulación del DOM
* - Actualizar un título del navegador.
*
* ====== SINTAXIS =========
* useEffect(() => {
        fecto *  -> codigo que se ejecuta
    },[]);       -> En los corchetes se colocan los arreglos de dependencias
*
*/


// ======== Efecto con el array vacío ========

/* function DeleteUseEffect(){
    
    const [message,setMessage] = useState('Cargando...');

    useEffect(() =>{
        setTimeout(() => {
            setMessage('Se acaba de ejecutar el efecto...')
        }, 3000);
    }),[];

    return(
            <h1>{message}</h1>
    );
};

export default DeleteUseEffect; */

// ====================================================

/** 
 * Hook useEffect con una dependencia
 * 
 * Entender que useEffect se vuelve a ejecutar cuando cambia una dependencia
 *  - useEffect puede ejecutarse otra vez si algo cambia 
 *  - Ese algo se declara en el array de dependencias
 */

import {useEffect, useState } from "react";

function DeleteUseEffect (){

    const [count, setCount] = useState(0) 
    const [message, setMessage] = useState('El contador no ha cambiado')

    useEffect(() => {
        setMessage(`El contador cambió a ${count}`)
    },[count]);

    return(
        <div>
            <h2>{count}</h2>
            <p>{message}</p>
            <button className="border border-border p-2" onClick={() => setCount (count + 1)}>
                Botón de incremento
            </button>
        </div>
    );
};

export default DeleteUseEffect;

/**
 * IMPORTANTE 
 * - Si una dependencia cambia el efecto se ejecuta
 * - Si no no se cambia el efecto no se ejecuta 
 */