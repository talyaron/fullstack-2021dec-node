const x = 4

async function handleSchedule(ev) {
    ev.preventDefault()
const date = ev.target.date.value;
const type = ev.target.type.value;

console.log(date, type)

const {data} = await axios.get('/')

}