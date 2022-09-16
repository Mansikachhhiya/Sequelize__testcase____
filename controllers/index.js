const {User} = require('../models');
const createUser = async(req,res)=>{
    try{
        const user = await User.create(req.body);
            return res.status(200).json({
                user,
            });

    }catch (error){
        return res.status(404).json({error:error.massage })
    }
}
module.exports={
    createUser
}
