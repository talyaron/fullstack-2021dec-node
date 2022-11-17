import { connection } from "../../server";

export const addCostumer = (req, res) => {
    try {
        const {fullName, telephon, email} = req.body;
        const query = `INSERT INTO find-guid.costomer (full name, telephon, email) VALUES (${fullName}, ${telephon}, ${email})`;
        connection.query(query, (err, result) => {
            try {
                res.send({ok: true})
                if (err) throw err;
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
};



