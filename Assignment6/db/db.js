const { default: mongoose } = require("mongoose");
const Registration = require("../api/models/registration");


const postRegister = async (req)=>{
    
    const register = new Registration({
    _id: mongoose.Types.ObjectId(),
                fullname: req.body.fullname,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                age: req.body.age,
                gender: req.body.gender,
                consent: req.body.consent,
                bio: req.body.bio,
});

return await register.save();

};
module.exports = postRegister;