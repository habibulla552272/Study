import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/database.js';
dotenv.config({
    path:'./.env'
})

const startServer=async ()=>{
    try{
        await connectDB();

        app.on('error',(error)=>{
            console.log('Error',error);
            throw error;


        });
        app.listen(process.env.PORT|| 8000,()=>{
            console.log(`Server is Running on Port ${
                process.env.PORT || 8000
            }`)
        });
    }catch(error){
        console.log("Failed to Connect to Database",error);
        process.exit(1);
    }
}

startServer();