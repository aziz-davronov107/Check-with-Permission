import { CustomError } from "../CustomError/customError.js";

export default async (req, res, next) => {
    try {
        let user = req.user;
        if (user.role.toLowerCase() == "superadmin"){
           return next();
        }
        throw new CustomError("Permission denied!",403);
        
    } catch (error) {
        next(error)
    }
}