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
      origin: 'https://think-india-nitp.vercel.app',
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

<<<<<<< HEAD

=======
app.use('/',userRoute);
app.use('/',teamRoutes);
app.use('/',eventRoutes)
>>>>>>> 8650b216410f20af75144cd548ab09d3b87fd3a4
