import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();


const user = {

    async getUserById(req : any, res : any) {

        const idUser : number = parseInt(req.params.id);
        
        const user = await prisma.user.findUnique({
            where: {
                id: idUser
            }
        })
        res.status(200).send(user)
    },
    async deleteUserById(req : any, res : any) {

        const idUser : number = parseInt(req.params.id);

        const user = await prisma.user.delete({
            where: {
                id: idUser
            }
        })
        res.status(200).send(user)
    },
    async updateUserById(req : any, res : any) {
        const idUser : number = parseInt(req.params.id);

        const user = await prisma.user.update({
            where: {
                id: idUser
            },
            data: {
                ...req.body
            }
        })
        res.status(200).send(user)
    } 
}



export default user