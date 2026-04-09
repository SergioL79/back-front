import MainLayout from "../../layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import HomePage from "../../features/home/pages/HomePage";
import ProfilePage from "../../features/users/pages/ProfilePage";
import { createBrowserRouter } from "react-router-dom"
import ConfigUserPage from "../../features/users/pages/ConfigUserPage"
import ListUserPage from "../../features/users/pages/ListUserPage";

const router = createBrowserRouter ([
    {
    
        
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "usuario",
                element: <ConfigUserPage/>
            },
            {
                path: "users/:id/edit",
                element: <h1 className="p-4">Contacto</h1>
            },
            {
                path: "videos",
                element: <h1 className="p-4">Videos</h1>
            },
            {
                path: "perfil",
                element: <ProfilePage/>
            }
        ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <ListUserPage/>
            },
            {
                path: "forgot-password",
                element: <h1 className="p-4">recuperar contraseña</h1>
            },
            {
                path: "reset-password",
                element: <h1 className="p-4">Cambiar contraseña</h1>
            },
    ]

}
]);

export default router;