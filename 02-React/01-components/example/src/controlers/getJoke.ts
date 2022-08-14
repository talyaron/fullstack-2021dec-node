import axios from "axios";
export async function getJoke() {
  try {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    const { value } = data;
    if (!value) throw new Error("didnt receive a joke");
    return value;
  } catch (error) {
    return false;
  }
}
