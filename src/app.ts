import express, { Application, Request, Response } from 'express'
import loadUser from '../middleware/loadUser'


const cors = require('cors')
const bodyParser = require('body-parser')


const app: Application = express()


/**
 * Dotenv const
 */
 const dotenv = require("dotenv").config();

 //consts
 const PORT : string = process.env.PORT || "3630";
 app.use(cors());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());



app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send({message:" Pong 🏓"})
})


/** MiddleWare de préparation de la requête  */
app.use("/api/user/:id", (req: Request, res: Response, next: any) => { 
    loadUser(req, res, next)
})

/** import des routes */
require('../routes')(app)


app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT} !`)
})