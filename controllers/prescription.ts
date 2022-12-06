import {PrismaClient} from "@prisma/client"
import {type Request, type Response} from "express"
import bcrypt from "bcrypt"


const prisma = new PrismaClient()


const prescription = {
    async getPrescriptionById(req: Request, res: Response) {
        const idPrescription: number = parseInt(req.params.idPrescription)
        const prescription = await prisma.prescription.findUnique({
            where: {
                id: idPrescription
            },
            include: {
                patient: true,
                doctor: true
            }
        })
        res.status(200).send(prescription)
    },
    async deletePrescriptionById(req: Request, res: Response) {
        const idPrescription: number = parseInt(req.params.idPrescription)
        const prescription = await prisma.prescription.delete({
            where: {
                id: idPrescription
            }
        })
        res.status(200).send({message: "Prescription deleted", prescription})
    },
    async updatePrescriptionById(req: Request, res: Response) {
        const idPrescription: number = parseInt(req.params.idPrescription)
        const prescription = await prisma.prescription.update({
            where: {
                id: idPrescription
            },
            data: {
                ...req.body
            }
        })
        res.status(200).send(prescription)
    },
    async createPrescription(req: Request, res: Response) {

        if (!req.body.patientId || !req.body.doctorId) {
            res.status(400).send({message: "Missing credentials"})
        }

        prisma.prescription.create({
            data: {
                patientId:  parseInt(req.body.patientId),
                doctorId: parseInt(req.body.doctorId),
                label: req.body.label,
                description: req.body.description,
                status: req.body.status
            }
        })
            .then((prescription: any) => {
                res.status(201).send(prescription)
            })
            .catch((err: any) => {
                res.status(500).send({message: err.message})
            })

    }
}

export default prescription