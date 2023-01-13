import { connection } from "../../server";

export const addCostumer = (req, res) => {
    try {
        const {fullname, telephon, email, password} = req.body;
        const query = `INSERT INTO costomer (fullname, telephon, email, password) VALUES 
        ('${fullname}', '${telephon}', '${email}', '${password}')`;
        connection.query(query, (err, result) => {
            try {
                if (err) throw err;
                res.send({ok: true})
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
};

export const login = (req, res) => {
    try {
        const {email, password} = req.query;
        
        const query = `SELECT * FROM costomer WHERE costomer.email = '${email}' AND costomer.password = '${password}' `
        connection.query(query, (err, result) => {
            try {
                console.log(result);
                
                if (err) throw err;
                if (result > []) {
                    res.send({ok: true})}
                else res.send('no result')
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message});
        
    }
}



