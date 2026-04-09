import Navbar from "./Navbar"
import { Outlet, useLocation } from "react-router-dom"


export default function MainLayout (){
    /* useLocation es un hook de react router que te da acceso al objeto location el cual contiene la información 
    * de la URL actual
    * pathname: la ruta actual(/about,etc)
    */
    const location = useLocation();
    const isHome = location.pathname === "/"

    return (
        /**
         * Navbar transparente solo en el home
         * si la ruta es exactamente esta entonces el nabvar es transparente
         * si es cualquier otra ruta es solido
         */
        <div className="min-h-screen text-text-mute ">

            {/* componente Nabvar creado anteriormente */}
            <Navbar variant={isHome ? "transparent" : "solid"} />
            
            {/* contenido externo que se inyecta */}
            <main className="mx-auto">
                <Outlet/>
            </main>
        </div>
    )
};