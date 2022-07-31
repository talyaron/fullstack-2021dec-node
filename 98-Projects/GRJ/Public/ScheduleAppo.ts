

async function handleSchedule(ev) {
    ev.preventDefault()
    const date: string = ev.target.date.value;
    const kind: string = ev.target.kind.value;

    console.log(date, kind)
    // @ts-ignore
    const { data } = await axios.post("/appo/getAppo", { kind, date })

    const filteredAppos = data
    console.log(filteredAppos)


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

        const appoArray = data;
        console.log(appoArray)


    } catch (error) {
        console.error(error)
    }

}

function renderAppo(apposArray) {

    const filteredAppo: HTMLDivElement = document.querySelector('#filteredAppo');
    let html = ""
    console.log(apposArray.lenght)
    for (let i = 0; i < apposArray.lenght; i++) {

        html += `date: ${apposArray[i].date} <br>
        kind: ${apposArray[i].kind} <br>
        doctorId: ${apposArray[i].doctorId} <br>
        time: ${apposArray[i].time} <br>
        `
    }

    filteredAppo.innerHTML = html

}