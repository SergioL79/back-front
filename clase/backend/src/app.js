// src/app.js
import express from "express";
import cors from "cors";
import userRoutes from "./features/users/user.routes.js";


const app = express();


app.use(cors({ origin: "http://localhost:5173" })); // tu frontend Vite
app.use(express.json());


app.use("/api/users", userRoutes);


export default app;


