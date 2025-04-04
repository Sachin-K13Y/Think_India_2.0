import mongoose  from "mongoose";

const eventSchema = mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String
    },
    imageUrl:{
        type:String,
    }
})

const Event = mongoose.model('Event',eventSchema);
export default Event;