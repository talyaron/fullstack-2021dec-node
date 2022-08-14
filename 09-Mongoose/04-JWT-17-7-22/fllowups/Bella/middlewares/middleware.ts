import jwt from 'jwt-simple';

export function isAdmin(req : any, res : any, next : any) {
    try {

        //check if admin decode the cookie, and if it has  role "admin"
        const {user} = req.cookies;
        if (!user) 
            throw new Error('no cookie on path');
        
        const secret = process.env.JWT_SECRET;

        const decodedCookie = jwt.decode(user, secret);
        console.log(decodedCookie)

        const {role} = decodedCookie;

        //if not return 403
        if (role !== 'admin') {
            res
                .status(403)
                .send({error: 'Not authorized'})
        } else {
            next()
        }

    } catch (error) {
        res.send({error: error.message})
    }
};