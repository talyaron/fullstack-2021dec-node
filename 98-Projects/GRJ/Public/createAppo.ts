
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


async function handleCreateNewDoctor(ev) {
    ev.preventDefault()
    try {
        const firstName: string = ev.target.doctorFirstName.value;
        const lastName: string = ev.target.doctorLastName.value;
        const doctorId: number = ev.target.doctorId.value;
        const doctorType: string = ev.target.doctorType.value;
        console.log(firstName);
        console.log(lastName);
        console.log(doctorId);
        console.log(doctorType);
        if (!firstName || !lastName || !doctorId || !doctorType) throw new Error("One of the parameters is missing")
        // @ts-ignore

        const { data } = await axios.post('/doctors/createNewDoctor', { firstName, lastName, doctorId, doctorType })
        console.log(data);

        const { doctor, error } = data;
        if (error) throw error;
        console.log(doctor);


        console.log(`Dr.${doctor.lastName} is succesfuly created`)


    } catch (error) {
        console.error(error)
    }

}


async function handleGetAllDoctors() {
  
    const doctorsBtns: HTMLDivElement = document.querySelector("#doctorsBtns")

    try {
        console.log("Getting all doctors");

        // @ts-ignore
        const { data } = await axios.get('/doctors/getAllDoctors')

        const allDoctors = data;

        let html = ""
        allDoctors.forEach(doctor => {
            html += `<button onclick="handleSelectDoctor(event)" id='${doctor.doctorId}'> Dr.${doctor.lastName} (${doctor.doctorType})</button>`

        });
        doctorsBtns.innerHTML = html

    } catch (error) {
        console.error(error)
    }

}


async function handleSelectDoctor(ev){
ev.preventDefault();
console.log(ev.target.id);
const doctorId = ev.target.id
const doctorsBtns: HTMLDivElement = document.querySelector("#doctorsBtns");
doctorsBtns.innerHTML = ``


doctorsBtns.innerHTML = `<form onsubmit="handleCreateDoctorWeeklySchedule(event)">





<button type="submit">Create</button>

</form>`


}

