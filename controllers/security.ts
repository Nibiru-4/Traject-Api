import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const security = {
    async login(req : Request, res : Response) {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
                
            }})

        if( !user){
            res.status(404).send("User not found")
        }
        const valid = await bcrypt.compare(req.body.password, user!.password)

        if(!valid){
            res.status(401).send("Invalid password")
        }

        const data = {
            userId : user!.id,
            jwt : jwt.sign({id: user!.id},process.env.JWT_SECRET , {expiresIn: "1h"})
         }  
        
         res.status(200).send(data)
    },

    async register(req : Request, res : Response) {
        if( !req.body.email || !req.body.password){
            res.status(400).send("Missing email or password")
        }

        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }})
        
    
        if(user){
            res.status(400).send("User already exists")
        }

        const hash = await bcrypt.hash(req.body.password, 10)
        .then((hash : any) => {
            prisma.user.create({
                data: {
                    email: req.body.email,
                    password: hash,
                    fisrtname: req.body.firstname,
                    lastname: req.body.lastname,
                }
        }).then((data) => {
            res.status(201).send(data)
        })

        .catch((err : any) => {
            res.status(500).send(err)
        })
    })
    }

    
}

export default security