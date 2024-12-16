import { upload } from "../Config/cloudinary.js";
import { addEvent, deleteEvent, getEvents, updateEvent } from "../Controllers/event.controller.js";
import express from 'express'
import { isAdmin } from "../utils/isAdmin.js";
import { AddPhoto, getPhoto } from "../Controllers/Photo.controller.js";

const eventRoutes = express.Router();

eventRoutes.post('/events/addevents',upload.single('image'),addEvent);
eventRoutes.delete('/events/deleteevent/:id',deleteEvent);
eventRoutes.put('/events/updateevent/:id',updateEvent);
eventRoutes.get('/events/getevents',getEvents);
eventRoutes.post('/events/addphoto',upload.single('image'),AddPhoto);
eventRoutes.get('/events/getphoto',getPhoto);
export default eventRoutes

