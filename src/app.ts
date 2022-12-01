import express, {type Application, type Request, type Response} from "express"
import loadUser from "../middleware/loadUser"



import BodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()


const app: Application = express()

/**
 * Dotenv const
 */


// Consts
const PORT: string = process.env.PORT || "3630"
app.use(cors())
app.use(BodyParser.urlencoded({extended: true}))
app.use(BodyParser.json())

app.get("/ping", (req: Request, res: Response) => {
	res.status(200).send({message: " Pong 🏓"})
})

/** MiddleWare de préparation de la requête  */
app.use("/api/user/:id", (req: Request, res: Response, next: () => void) => {
	loadUser(req, res, next)
})

/** Import des routes */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("../routes")(app)


app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT} !`)
})
