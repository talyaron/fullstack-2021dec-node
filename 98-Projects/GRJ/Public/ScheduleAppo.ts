




function getUserId(): string | false {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const userId = urlParams.get("userId");
      console.log(userId)
      return userId;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function handleSelectDoctorType(ev){
    ev.preventDefault()
console.log(ev.target.id)
const doctorType = ev.target.id;

const searchBox = document.querySelector("#searchBox");

let html = ` <br> <form onsubmit="handleSchedule(event)">
<input type="date" name="date" >
<input type="hidden" name="doctorType" id=${doctorType}>
<button type="submit">Search</button>

</form>`

searchBox.innerHTML = html

  }

async function handleSchedule(ev) {
    ev.preventDefault()
    console.log()
    const date: string = ev.target.date.value;
    const doctorType: string = ev.target.doctorType.id;

    console.log(date, doctorType)
    // @ts-ignore
    const { data } = await axios.post("/appo/getAppo", { doctorType, date })

    const filteredAppos = data

    renderAppo(filteredAppos)

}


async function handleCreateAppo(ev) {
    ev.preventDefault()

    try {

        const date: string = ev.target.date.value;
        const doctorType: string = ev.target.doctorType.value;
        const doctorId: string = ev.target.doctorId.value;
        const time: string = ev.target.time.value;

        console.log(date, doctorType, doctorId, time)

        if (!date || !time || !doctorId || !doctorType) throw new Error('one of the insert is missing')
        // @ts-ignore
        const { data } = await axios.post("/appo/createAppo", { date, doctorType, doctorId, time })
        console.log(data)
        const { user, error } = data;
        if (error) throw error;

        if (user) {
            const appoArray = data;
            console.log(appoArray)
        }


    } catch (error) {
        console.error(error)
    }

}

function renderAppo(apposArray) {
console.log(apposArray)
    const filteredAppo: HTMLDivElement = document.querySelector('#filteredAppo');
    let html = ""


    apposArray.forEach(appo => {

        html += `<button id="${appo._id}" onclick="handlePickAppoTime(event)">${appo.time}</button>`
        // html += `date: ${appo.date} <br>
        // doctorType: ${appo.doctorType} <br>
        // doctorId: ${appo.doctorId} <br>
        // time: ${appo.time} <br>
        // `
    });
  console.log(apposArray[0])
    filteredAppo.innerHTML = html

}

function handlePickAppoTime(ev) {

const appoId = ev.path[0].id;
const userId = getUserId()
console.log(userId)
console.log(ev.path[0].id)

pairAppoToUser(appoId, userId)
}


async function pairAppoToUser(userId, appoId){
 // @ts-ignore
    const { data} = await axios.put("/appo/pairAppoToUser", {userId, appoId})
    const {pairedAppo, error} = data
    console.log(data)

}51