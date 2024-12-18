import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
    },
    team:{
        type:String,
    },

    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    linkedin:{
        type:String,
    },
    instagram:{
        type:String,
    },
    github:{
        type:String,
    }

})

 const Team = mongoose.model('Team',teamSchema);
 export default Team;