import express from 'express'
import { addMember, deleteMember, getMembers, updateMember } from '../Controllers/team.controller.js';
import { upload } from '../Config/cloudinary.js';
import { isAdmin } from '../utils/isAdmin.js';

const teamRoutes = express.Router();

teamRoutes.post('/team/addmember',upload.single('image'),addMember);
teamRoutes.delete('/team/deletemember/:id',deleteMember)
teamRoutes.put('/team/updatemember/:id',updateMember);
teamRoutes.get('/team/getmember',getMembers);
teamRoutes.get('/team/getmember/:id',getMembers);

export default teamRoutes