import jwt from 'jsonwebtoken';;

export const xtokenAuthenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        console.log(userId)
        
        req.auth = {
            userId: userId
        }
     next();
    } catch(error) {
        res.status(401).json({ error: "error auuthentication" });
    }
}

export default xtokenAuthenticate;