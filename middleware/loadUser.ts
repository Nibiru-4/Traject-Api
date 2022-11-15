import express, { Application, Request, Response } from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const loadUser = async (req : any, res : Response, next : any) => {
    const user = prisma.user.findUnique({
        where: {
            id: req.params.id
        }
    })

    if (!user) {
        return res.status(404).send({message: "User not found"})
    }

    req.user = user

    return next()
}

export default loadUser;