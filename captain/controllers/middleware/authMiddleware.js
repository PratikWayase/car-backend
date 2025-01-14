const jwt = require('jsonwebtoken')
const userModel = require('../models/captain.model');
const blacklisttokenModel = require('../models/blacklisttoken.model')

module.exports.userAuth = async ( req,res,next) => {
    try{
        const token = req.cookies.token || req.headers.autorization.split('')[1];
        if  (!token){
            return res.status(401).json({message:'unauthorized'})

        }

            const isBlacklisted = await blacklisttokenModel.find({token})

            if (isBlacklisted.length){
            return res.status(401).json({message:'unauthorized'})
            }

            const decode = jwt.verify(token,process.env.JWT_SECRET);
            const user = await userModel.findById(decode.id)

            if  (!user) {
                return res.status(401).json({message:'unauthorized'})
            }

            req.user = user;
            next ();

        

    }catch (error){
        res.status(500).json({message:error.message})

    }
}