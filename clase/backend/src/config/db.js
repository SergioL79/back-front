// src/config/db.js
// Importar el módulo PostgreSQL y desestructurar la clase Pool para gestionar conexiones
import pkg from "pg";
const { Pool } = pkg;
// Importar dotenv para cargar variables de entorno desde un archivo .env
import dotenv from "dotenv";


// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear y exportar una instancia de Pool de conexiones a PostgreSQL
// El Pool gestiona un conjunto de conexiones reutilizables a la base de datos
export const pool = new Pool({
  // Datos de conexión obtenidos de las variables de entorno
  host: process.env.DB_HOST,        // Dirección del servidor PostgreSQL
  port: process.env.DB_PORT,        // Puerto en el que corre PostgreSQL
  user: process.env.DB_USER,        // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario
  database: process.env.DB_NAME,    // Nombre de la base de datos
  max: 10,                          // Número máximo de conexiones simultáneas
  idleTimeoutMillis: 30000,         // Tiempo en ms para cerrar una conexión inactiva (30 segundos)
});


// Escuchar el evento de conexión exitosa
pool.on("connect", () => {
    console.log("Conectado a PostgreSQL");
});

// Escuchar y registrar cualquier error que ocurra en el pool de conexiones
pool.on("error", (err) => {
    console.error("Error en la conexión con PostgreSQL", err);
});
