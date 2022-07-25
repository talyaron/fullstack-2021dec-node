const axios = require("axios");
async function getJoke() {
  const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
  console.log(data.value)
}

getJoke();