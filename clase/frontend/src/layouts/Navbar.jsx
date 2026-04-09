import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
/* import { useState } from "react"; */
import {
      IconButton,
      /* IconAction. */
      Dropdown,
      DropdownTrigger,
      DropdownContent,
      DropdownItem,
} from "@/shared/components";

const Navbar = ({variant = "solid"}) => {
/*     const [isOpen, setIsOpen] = useState(false); */

  return (
    <nav className= 
      // Estos son los estilos del navbar para que quede transparente  
      { `w-full border-b transition-colors duration-300 ${
          variant === "transparent"
          ? "bg-transparent border-transparent absolute top-0 left-0 z-30"
          : "bg-brand border-border"
        }`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo de marca */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Rico Programar
            </Link>
          </div>


          {/* Links de navegación */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/usuario" className="hover:text-primary transition">
                usuario
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-primary transition">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/videos" className="hover:text-primary transition">
                Videos
              </Link>
            </li>
          </ul>


          {/* Sección derecha: búsqueda + usuario */}
          <div className="flex items-center gap-4">
            
            {/* Buscador */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
            
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-9 pr-4
                 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>


            {/* Icono de usuario */}
            {/* <button className="flex items-center justify-center size-10 rounded-full border hover:bg-gray-100 transition">
              <User className="size-5" />
            </button> */}


            {/* Usuario */}
{/*             <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center size-10 rounded-full border hover:bg-surface transition"
              >
                <User className="size-5" />
              </button>


              {isOpen && (
                // <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-background shadow-lg">
                  <div className="
                    absolute right-0 mt-2 w-48
                    bg-white
                    dark:bg-neutral-800/90
                    backdrop-blur-md
                    shadow-xl
                    ring-1
                    rounded-xl
                  ">
                  <ul className="py-2 text-sm">
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-surface transition"
                        onClick={() => setIsOpen(false)}
                      >
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-surface transition"
                        onClick={() => {
                          setIsOpen(false);
                          console.log("Cerrar sesión");
                        }}
                      >
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div> */}

            <div className="p-10">
              <Dropdown>
                <DropdownTrigger>
                    <IconButton arialabel="Menu de usuario">
                      <User/>
                    </IconButton>
                </DropdownTrigger>
                <DropdownContent className="right-0 w-48">
                    <DropdownItem>
                      <Link to="/login" className="block w-full">
                        Perfil
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/login" className="block w-full">
                        Configuracion
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/login" className="block w-full">
                        Cerrar sesion
                      </Link>
                    </DropdownItem>
                </DropdownContent>

              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// para dirigirme o navegar a una ruta uso link
// para ejecutar logica se utiliza button