// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt : any = require("jsonwebtoken")

const auth = (req : any, res : any, next : any) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        const JwtUserId = decodedToken.id
        const QueryUserId = req.params.id

        if (JwtUserId != QueryUserId) {
            throw "Invalid user ID"
        } else {
            next()
        }

    }catch(error){
        res.status(401).send(error)
    }
}


export default auth