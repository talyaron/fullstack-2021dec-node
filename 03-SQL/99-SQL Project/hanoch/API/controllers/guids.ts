import { connection } from "../../server";
// import { upload } from "../../server";

export const addGuid = (req, res) => {
    try {
        const {fullName, country, city, telephon, email, imgSrc} = req.body;
        // const image = req.File.formData
        const query = `INSERT INTO find-guid.guids (full name, country, city, telephon, email, image)
         VALUES (${fullName}, ${country}, ${city}, ${telephon}, ${email}, ${imgSrc})`;
        connection.query(query, (err, result) => {
            try {
                if (err) throw err;
                if (!result) throw ('no data')
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
        const query = `SELECT * FROM find-guid.guids`;
        connection.query(query, (err, result) => {
            try {
                
                if (err) throw err;
                res.send({result: result})
            
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
}