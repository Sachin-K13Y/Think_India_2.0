import express from 'express'
import { Login, Register } from '../Controllers/user.controller.js';
import { isAdmin } from '../utils/isAdmin.js';

const userRoute = express.Router();

userRoute.post('/user/register',Register);
userRoute.post('/user/login',Login)
userRoute.get('/user/isadmin',isAdmin);
export default userRoute;