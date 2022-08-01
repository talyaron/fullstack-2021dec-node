

async function handleSchedule(ev) {
    ev.preventDefault()
    const date: string = ev.target.date.value;
    const kind: string = ev.target.kind.value;

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

        if (!date || !time || !doctorId || !kind) throw new Error('one of the insert is missing')
        // @ts-ignore
        const { data } = await axios.post("/appo/createAppo", { date, kind, doctorId, time })
        console.log(data)
        const { user, error } = data;
        console.log(user)
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