export async function markClient(req, res){
try {
    const {clientName} = req.cookies;
    console.log (clientName);
    
} catch (error) {
    res.send({ error: error.message });}
}