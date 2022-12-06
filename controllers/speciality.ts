import { PrismaClient } from "@prisma/client"
import {type Request, type Response} from "express"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt")

const prisma  = new PrismaClient()


const speciality = {
    async getSpecialityById(req : Request, res : Response) {
        const idSpeciality : number = parseInt(req.params.idSpeciality)

        const speciality  = await prisma.speciality.findUnique({
            where: {
                id: idSpeciality
            }
        })

        return res.status(200).send(speciality)
    },
    async deleteSpecialityById(req: Request,res: Response) {
        const idSpeciality: number = parseInt(req.params.idSpeciality)

        const speciality = await prisma.speciality.delete({
            where: {
                id: idSpeciality
            }
        })

        return res.status(200).send(speciality)
    },
    async updateSpecialityById (req: Request, res : Response) {
        const idSpeciality : number = parseInt(req.params.idSpeciality)

        const speciality = await prisma.speciality.update({
            where: {
                id: idSpeciality
            },
            data : {
                ...req.body
            }
        })

        return res.status(200).send(speciality)
    },
    async createSpeciality( req: Request, res: Response) {
        if( !req.body.label){
            return res.status(400).send({message: "Missing credentials"})
        }

        const speciality = await prisma.speciality.create({
            data: {
                ...req.body
            }
        })

        return res.status(200).send(speciality)
    }

}


export default speciality