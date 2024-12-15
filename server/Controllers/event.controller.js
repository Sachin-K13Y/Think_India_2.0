import Event from "../Models/event.model.js";


export const addEvent = async(req,res)=>{
    try{
    const{title,description} = req.body;
    const imageUrl = req.file?.path;

    const newEvent = new Event({
        title,
        description,
        imageUrl
    })

     await newEvent.save();
    res.status(200).json({Success:true,message:"Event Added Successfully",newEvent});
}
    catch(err){
        res.status(403).json({Success:false,message:"Internal Server Error"});
    }
}

export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

       
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(403).json({ success: false, message: "Event Not Found" });
        }

        res.status(200).json({ success: true, message: "Event Deleted Successfully", deletedEvent });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal Server Error", err });
    }
};
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({ success: true, events });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal Server Error", err });
    }
};
export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, date, location } = req.body;

       

        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            { name, description, date, location },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ success: false, message: "Event Not Found" });
        }

        res.status(200).json({ success: true, message: "Event Updated Successfully", updatedEvent });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal Server Error", err });
    }
};

