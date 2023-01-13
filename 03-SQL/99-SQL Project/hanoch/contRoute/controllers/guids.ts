import { connection } from "../../server";
// import { upload } from "../../server";

export const addGuid = (req, res) => {
    try {
        
        const {fullName, country, city, telephon, email, image} = req.body;
        const query = `INSERT INTO guids (fullname, country, city, telephon, email, image)
         VALUES ('${fullName}', '${country}', '${city}', '${telephon}', '${email}', '${image}')`;
        connection.query(query, (err, result) => {
            try {
                if (err) throw err;
                res.send({ok: true})
                console.log(result.data);
                
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
}

export const findAllGuides = (req, res) => {
    try {
        const query = `SELECT * FROM guids`;
        connection.query(query, (err, result) => {
            try {
                
                if (err) throw err;
                res.send( result )
            
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
};

export const guidesByFilter = (req, res) => {
    try {
        const {country, city} = req.query;
       const query = `SELECT * FROM guids WHERE country = '${country}' AND city = '${city}'` 
       connection.query(query, (err, result) => {
        try {
            if (err) throw new err;
            res.send(result)
        } catch (error) {
            console.error(error);
            
        }
       })
    } catch (error) {
        res.send({error: error.message})
    }
}