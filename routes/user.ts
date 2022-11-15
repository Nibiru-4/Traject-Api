import { PrismaClient } from "@prisma/client";
import userController from "../controllers/userController";
import auth from "../middleware/auth";


const prisma = new PrismaClient();

module.exports = [
    {
        url : "/api/user/:id",
        method :"get",
        func : [auth, userController.getUserById]
    },
    {
        url : "/api/user/:id",
        method :"delete",
        func : [auth, userController.deleteUserById]
    },
    {
        url : "/api/user/:id",
        method :"post",
        func : [auth, userController.updateUserById]
    },
    
]