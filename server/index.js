import express, { json } from 'express'
import dotenv from 'dotenv'
import { connectDB } from './Config/db.js';
import userRoute from './Routes/user.routes.js';
import cors from 'cors'
import teamRoutes from './Routes/team.routes.js';
import eventRoutes from './Routes/event.routes.js';
import  cookieParser from 'cookie-parser'
import path from "path"
dotenv.config();
const app = express();

app.use(cookieParser())
app.use(json());

const _dirname = path.resolve();


app.use(
    cors({
      origin: 'https://think-india-2-0.onrender.com',
      credentials: true,
    })
  );
app.use('/',userRoute);
app.use('/',teamRoutes);
app.use('/',eventRoutes)

app.use(express.static(path.join(_dirname,"/Frontend/dist")));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"))
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port ${process.env.PORT}`);
})
connectDB()
.then(console.log("MongoDB Connected"))
.catch( (err)=>console.log("MongoDB Connection Failed",err)
)

app.use('/',userRoute);
app.use('/',teamRoutes);
app.use('/',eventRoutes)
