import {PrismaClient} from "@prisma/client"
import {type Request, type Response} from "express"
import bcrypt from "bcrypt"


const prisma = new PrismaClient()


const patient = {

    async getPatientById(req: Request, res: Response) {
        const idPatient: number = parseInt(req.params.idPatient)
        const patient = await prisma.patient.findUnique({
            where: {
                id: idPatient
            },
            include: {
                doctor: true
            }
        })
        return res.status(200).send(patient)
    },
    async deletePatientById(req: Request, res: Response) {
        const idPatient: number = parseInt(req.params.idPatient)
        const patient = await prisma.patient.delete({
            where: {
                id: idPatient
            }
        })
        return res.status(200).send({message: "Patient deleted", patient})
    },
    async updatePatientById(req: Request, res: Response) {
        const idPatient: number = parseInt(req.params.idPatient)
        const patient = await prisma.patient.update({
            where: {
                id: idPatient
            },
            data: {
                ...req.body
            }
        })
        return res.status(200).send(patient)
    },
    async createPatient(req: Request, res: Response) {
        if (!req.body.email || !req.body.firstname) {
            return res.status(400).send({message: "Missing credentials"})
        }
        const patient = await prisma.patient.findUnique({
            where: {
                email: req.body.email
            }
        })
        if (patient) {
            return res.status(400).send({message: "Patient already exists"})
        }

        const hash = await bcrypt.hash(req.body.password, 10)
            .then((hash: string) => {
                prisma.patient.create({
                    data: {
                        email: req.body.email,
                        password: hash,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        phone: req.body.phone,
                        doctorId: parseInt(req.body.doctorId)
                    }
                })
                    .then((patient: any) => {
                        return res.status(200).send(patient)
                    })
                    .catch((error: any) => {
                        return res.status(400).send(error)
                    })
            })
            .catch((error: any) => {
                return res.status(400).send(error)
            })
    }

}

export default patient