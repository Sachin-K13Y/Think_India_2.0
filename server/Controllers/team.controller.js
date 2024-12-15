import Team from "../Models/team.model.js";

export const addMember = async(req,res)=>{
    try{
    const {name,branch,team,description} = req.body;
        const imageUrl = req.file?.path;
    const newMember = Team({
        name,
        branch,
        team,
        description,
        imageUrl
    })

    await newMember.save();
    res.status(200).json({Success:true,message:"Member Added Successfully",newMember});
}
catch(err){
    res.status(403).json({Success:false,message:"Internal Server Error",err})
}
}

export const deleteMember = async(req,res)=>{
    try{
    const {id} = req.params;
    const deletedMember = await Team.findByIdAndDelete(id);

    if (!deletedMember) {
        return res.status(404).json({ success: false, message: "Member not found" });
    }

    res.status(200).json({ success: true, message: "Member deleted successfully" });
}
    catch(err){
       
        res.status(500).json({ success: false, message: "Internal Server Error",err });
    }
}
export const updateMember = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, imageUrl,team,branch } = req.body;

     
        const updatedMember = await Team.findByIdAndUpdate(
            id,
            { name,branch,team,description, imageUrl },
            { new: true } 
        );

        if (!updatedMember) {
            return res.status(404).json({ success: false, message: "Member not found" });
        }

        res.status(200).json({ success: true, message: "Member updated successfully", updatedMember });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal Server Error", err });
    }
};
export const getMembers = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
           
            const member = await Team.findById(id);
            if (!member) {
                return res.status(404).json({ success: false, message: "Member not found" });
            }
            return res.status(200).json({ success: true, member });
        }

        
        const members = await Team.find();
        res.status(200).json({ success: true, members });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error", err });
    }
};

