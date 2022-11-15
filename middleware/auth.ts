const jwt : any = require('jsonwebtoken');

const auth = (req : any, res : any, next : any) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;

        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }

    }catch(error){
        res.status(401).send(error)
    }
}


export default auth;