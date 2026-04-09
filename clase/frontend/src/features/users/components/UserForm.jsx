import { Button, Select, Input, Checkbox} from '@/shared/components'
import userSchema from '../schemas/userSchema'
// import "../services/selectService";
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../services/selectService";
import AvatarUploader from "@/shared/components/avatarUploader";
import {createUser} from '../services/userService';
import { useNavigate} from "react-router-dom"


export default function UserForm(){

    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        userEmail: '',
        phone: '',
        documentType: '',
        documentNumber: '',
        password: '',
        avatarUrl: null,

        // flags booleanos
        isStaff: false,
        isActive: true,
        isSuperuser: false,

    });

    // una validación básica
    // Función que se ejecuta cada vez que cambia el valor de un input del formulario 
    const handleChange = (e) => { 
        // Se obtiene el nombre del campo (name) y su valor actual (value) 
        // desde el elemento que disparó el evento 
    const { name, value, type, checked } = e.target; 
        // Se actualiza el estado del formulario 
        // prev representa el estado anterior del formulario 
    setFormData((prev) => ({ 
        // Se copian todos los valores anteriores del estado 
    ...prev, 
        // Se actualiza únicamente el campo que cambió 
        // [name] permite usar el nombre del input como clave dinámica 
    [name]: type === "checkbox" ? checked : value, 
    }));	
}
    //============= Estado de los errores =====================
    const [errors,setErrors] = useState({});

/*     //============== HANDLE SUBMIT ============== 
        // Función que se ejecuta cuando se envía el formulario 
        const handleSubmit = (e) => { 
            // Evita que el formulario recargue la página 
            e.preventDefault(); 
            // Se valida el objeto formData usando el esquema definido con Zod 
            // safeParse devuelve un objeto indicando si la validación fue exitosa o no 
            const result = userSchema.safeParse(formData); 
            // Si la validación falla 
            if (!result.success) { 
            // Objeto donde se almacenarán los errores por campo 
            const fieldErrors = {}; 
            // Zod devuelve los errores en un arreglo llamado issues 
            // Se recorren para asociar cada error a su campo correspondiente 
            result.error.issues.forEach((issue) => { 
            // issue.path contiene la ruta del campo que falló 
            const field = issue.path[0]; 
            // Se guarda el mensaje de error en el objeto fieldErrors 
            fieldErrors[field] = issue.message; 
            }); 
            // Se actualiza el estado de errores para mostrarlos en el formulario 
            setErrors(fieldErrors); 
            // Se detiene la ejecución porque el formulario tiene errores 
        return; 
} 
    // Si la validación es exitosa se limpian los errores anteriores 
     setErrors({}); 
    // result.data contiene los datos ya validados por Zod 
    console.log("Usuario válido:", result.data); 
    }; */
 //============== HANDLE SUBMIT ==============
  const handleSubmit = async (e) => {
    e.preventDefault();


    const result = userSchema.safeParse(formData);


    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }


    setErrors({});
    setIsSubmitting(true);


    try {
      const response = await createUser(result.data);
      console.log("✅ Usuario creado:", response);


      alert("Usuario creado correctamente");
      navigate(-1);
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };





    //============= Estado de los tipos de documentos =====================
    const [documentTypes, setDocumentTypes] = useState([])
    
    useEffect (() =>{
        getDocumentTypes().then(setDocumentTypes)
    }, []);

return(
        <div>
            {/* Formulario para crear el usuario */}
            <form 
            onSubmit={handleSubmit}
            className="
            px-6 py-12 
            grid grid-cols-2 gap-6
            bg-white/50 
            dark:bg-neutral-800/20
            backdrop-blur-sm
            shadow-xl
            ring-1
            rounded-xl
            "
            >
                <Input
                    label="nombre"
                    name='name'
                    placeholder="Ingrese su nombre"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                >
                </Input>

                <Input
                    name="userEmail"
                    label="email"
                    placeholder="Ingrese su email"
                    value={formData.userEmail}
                    onChange={handleChange}
                    error={errors.userEmail}                   
                >
                </Input>
                <Input
                    type="tel"
                    name='phone'
                    label="telefono"
                    placeholder="Ingrese su telefono"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                >
                </Input>

                <Select
                    label="tipo de documento"
                    name='documentType'
                    options = {documentTypes}
                    value={formData.documentType}
                    onChange={handleChange}
                    error={errors.documentType}
                >
                </Select>

                <Input
                    label="Número de documento"
                    name='documentNumber'
                    placeholder="Ingrese su documento"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    error={errors.documentNumber}
                >
                </Input>
                <Input
                    type="password"
                    label="Contraseña"
                    name='password'
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                >
                </Input>
                <Checkbox
                    id = "isStaff"
                    name = "isStaff"
                    label = "Es Staff"
                    checked = {formData.isStaff}
                    onChange = {handleChange}  
                />
                <Checkbox
                    id = "isActive"
                    name = "isActive"
                    label = " Esta Activo "
                    checked = {formData.isActive}
                    onChange = {handleChange}  
                />
                <Checkbox
                    id = "isSuperuser"
                    name = "isSuperuser"
                    label = "Es super usuario"
                    checked = {formData.isSuperuser}
                    onChange = {handleChange}  
                />


                    <div className="w-[320px] text-white">
                        <AvatarUploader 
                            onUpload={(url) => 
                            setFormData((prev) => ({ 
                            ...prev, 
                            avatarUrl: url, 
                            })) 
                            } 
                        />

                    </div>

                {/* Actions */}
                <div className= "flex items-center justify-center gap-12">
                    <Button
                        variant = "secondary"
                        size = "sm"
                        onClick = {() => console.log("Oprimió cancelar")}
                    >
                        Cancelar
                    </Button>

                    <Button
                        type="submit"
                        variant = "primary"
                        size = "md"
                        disabled = {isSubmitting}
                    >
                        {isSubmitting ? "Guardando" : "Guardar"}
                    </Button>
                    
                </div>
            </form>
        </div>
    )
}