import mongoose, { Mongoose } from "mongoose";

const photoschema = mongoose.Schema({
    imageUrl:{
        type:String,
        require:true,
    },
    title:{
        type:String,
    
    }
})

const Photo =  mongoose.model('Photo',photoschema);
export default Photo;