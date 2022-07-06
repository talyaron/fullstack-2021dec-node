export async function setHello(req, res) {
  try {
    //somthing else

    console.log(req.cookies);
    const { name2 } = req.cookies;
    console.log(name2);

    if (name2) {
      console.log(`Client with id ${name2} returned!!!!`);
    } else {
      res.cookie("name2", Math.floor(Math.random() * 10000000));
      console.log("we have new user!!!!");
    }

    res.send({ ok: true }); //Sets name = express
  } catch (error) {
    res.send({ error: error.message });
  }
}
