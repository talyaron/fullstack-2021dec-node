import { AdminModel } from "./adminModel"

export async function  getAdmins(req:any, res:any) {
    try {
        //const emailInput = req.body
        //console.log(emailInput, passwordInput)
        //const adminDB= await AdminModel.find({email:emailInput, password:passwordInput})
        //res.send(emailInput)
        
        const allAdmins:any[]= await AdminModel.find({})
        console.log(allAdmins)
        res.send({ok:true})
    } catch (error) { 
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}