
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



async function handleGetAllDoctors() {

    const doctors: HTMLDivElement = document.querySelector("#doctorsBtns")

    // @ts-ignore
    const { data } = await axios.get('/doctors/getAllDoctors')



}

