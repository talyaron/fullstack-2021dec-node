import {db} from '../../server'

export function addApartment(req, res){
    const {city,address,size,rooms,price,image,owner} = req.body;

    try {
        const query = `INSERT INTO  apartments (city,address,size,rooms,price,image,owner)
            VALUES ('${city}',${address}',${size}',${rooms}',${price}',${image}',${owner})`
            db.query(query, (err)=>{
                try {
                 if (err) throw err;
                 res.send({ok:true, apartment:{city,address}, message:"apartment added"})   
                // res.send({ok:true, apartment:{city,address}})

                } catch (error) {
                    console.error(error);
                    res.status(500).send({error:error.message})  
                }
            })
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.message})
    }
}