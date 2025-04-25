//Imports
import express from "express";
import dotenv from "dotenv";
import gradeRoutes from './routes/gradeRoutes.mjs';


//SetUps
const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();


//Middleware
app.use(express.json());

//Routes
app.use('/grades', gradeRoutes);

//Error Middleware

//Listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });