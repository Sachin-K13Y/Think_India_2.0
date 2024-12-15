import Photo from "../Models/photo.model.js"

export const AddPhoto = async(req,res)=>{
    try {
        const imageUrl = req.file?.path

        const photo  = new Photo({
            imageUrl,
        })

       await photo.save();

       res.status(200).json({Success:true,message:"Image Upload Successful",imageUrl});
       
    } catch (error) {
        res.status(403).json({Success:false,message:"Internal Server Error"})
    }

    
}

export const getPhoto = async(req,res)=>{
    try {
        const Photos = await Photo.find();

        res.status(200).json({Success:true,message:"Image Fetched successfully",Photos})
    } catch (error) {
        res.status(403).json({Success:false,message:"Internal Server Error"});
    }

}

