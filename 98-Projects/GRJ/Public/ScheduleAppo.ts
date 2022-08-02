




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
    const kind: string = ev.target.doctorType.id;

    console.log(date, kind)
    // @ts-ignore
    const { data } = await axios.post("/appo/getAppo", { kind, date })

    const filteredAppos = data
    console.log(filteredAppos[0].date)
    renderAppo(filteredAppos)

}


async function handleCreateAppo(ev) {
    ev.preventDefault()

    try {

        const date: string = ev.target.date.value;
        const kind: string = ev.target.kind.value;
        const doctorId: string = ev.target.doctorId.value;
        const time: string = ev.target.time.value;

        console.log(date, kind, doctorId, time)

        // if (!date || !time || !doctorId || !kind) throw new Error('one of the insert is missing')
        // @ts-ignore
        const { data } = await axios.post("/appo/createAppo", { date, kind, doctorId, time })
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
        html += `date: ${appo.date} <br>
        kind: ${appo.kind} <br>
        doctorId: ${appo.doctorId} <br>
        time: ${appo.time} <br>
        `
    });
  
    filteredAppo.innerHTML = html

}