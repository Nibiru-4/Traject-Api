import { PrismaClient } from "@prisma/client"
import {type Request, type Response} from "express"
import {create} from "domain"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt")

const prisma  = new PrismaClient()




const doctor = {

    async getDoctorById(req : Request, res : Response) {

        const idDoctor : number = parseInt(req.params.id)

        const doctor  = await prisma.doctor.findUnique({
            where: {
                id: idDoctor
            },
            include: {
                speciality : true
            }
        })

        res.status(200).send(doctor)
    },
    async deleteDoctorById(req: Request,res: Response) {
        const idDoctor: number = parseInt(req.params.id)

        const doctor = await prisma.doctor.delete({
            where: {
                id: idDoctor
            }
        })

        res.status(200).send({message : "Doctor deleted"})
    },
    async updateDoctorById (req: Request, res : Response) {
        const idDoctor : number = parseInt(req.params.id)

        const doctor = await prisma.doctor.update({
            where: {
                id: idDoctor
            },
            data : {
                ...req.body
            }
        })

        res.status(200).send(doctor)
    },

    async createDoctor( req: Request, res: Response) {
        if( !req.body.email || !req.body.firstname){
            res.status(400).send({message: "Missing credentials"})
        }

        const doctor = await prisma.doctor.findUnique({
            where: {
                email: req.body.email
            }
        })

        if(doctor){
            res.status(400).send({message: "Doctor Already exists"})
        }

        const hash = await bcrypt.hash(req.body.password, 10)

            .then( (hash : string) => {
                prisma.doctor.create({
                    data: {
                        email: req.body.email,
                        password: hash,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        specialityId : parseInt(req.body.specialityId),

                    }

                }).then((data) => {
                    res.status(201).send({response : data})
                })

                    .catch((err) => {
                        console.log(err)
                        res.status(500).send("could not create doctor")
                    })
            })


    }

}


export default doctor