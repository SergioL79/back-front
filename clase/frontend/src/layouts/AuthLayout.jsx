import authBg from "../assets/images/auth-background.jpeg"
import { UserForm } from "../features/users"
import { Outlet} from "react-router-dom"


export default function AuthLayout (){
 
    return (
        <div className="min-h-screen text-text-mute ">
            <section
                className="relative min-h-screen w-full flex items-center justify-center text-black"
                style={
                    {
                        backgroundImage: `url(${authBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                }
            >
                <UserForm/> 
            </section>
            {/* contenido externo que se inyecta */}
            <main className="mx-auto">
                <Outlet/>
            </main>
        </div>
    )
};