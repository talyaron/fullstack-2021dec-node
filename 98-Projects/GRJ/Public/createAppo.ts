
async function createSingleAppo() {
    const createSingleAppo: HTMLDivElement = document.querySelector(".createSingleAppo");

    const { data } = await axios.get('/doctors/getAllDoctors');
    const allDoctors = data;
    console.log(allDoctors);

    let doctorsList = "";

    allDoctors.forEach(doctor => {
        doctorsList += `<option value="${doctor._id}">Dr. ${doctor.lastName} (${doctor.doctorId})</option>`
    });

    createSingleAppo.innerHTML =
        `<h1 class="h1">Create single Appo</h1>
<div class="formsDiv">
  <form class="form" onsubmit="handleCreateAppo(event)">
    <input
      class="form__input"
      type="date"
      name="date"
      placeholder="When?"
    />
    <input
      class="form__input"
      type="time"
      name="time"
      placeholder="Select a time"
    />
    <select onChange="changeDoctorsList(event);" class="form__input" id="doctorType" name="doctorType">
      <option value="family">Family</option>
      <option value="bloodTest">Blood test</option>
      <option value="nurse">Nurse</option>
      </select>


    <button class="button" type="submit">Create</button>
  </form>
`

}
async function changeDoctorsList() {
 

    const doctorType = document.getElementById('doctorType').value;
    const { data } = await axios.post('/doctors/getDoctorsByType', { doctorType })
    const allDoctors = data;
    let doctorsList = "";
    const createSingleAppo: HTMLDivElement = document.querySelector(".createSingleAppo");
    createSingleAppo.innerHTML = ""

    allDoctors.forEach(doctor => {
        doctorsList += `<option value="${doctor._id}">Dr. ${doctor.lastName} (${doctor.doctorId})</option>`
    });

    createSingleAppo.innerHTML =
        `<h1 class="h1">Create single Appo</h1>
<div class="formsDiv">
  <form class="form" onsubmit="handleCreateAppo(event)">
    <input
      class="form__input"
      type="date"
      name="date"
      placeholder="When?"
    />
    <input
      class="form__input"
      type="time"
      name="time"
      placeholder="Select a time"
    />
    <select onChange="changeDoctorsList();" class="form__input" id="doctorType" name="doctorType">
      <option value="family">Family</option>
      <option value="bloodTest">Blood test</option>
      <option value="nurse">Nurse</option>
      </select>

      <select class="form__input" id="doctorsNames" name="doctorsNames">
    ${doctorsList}


    </select>

    <button class="button" type="submit">Create</button>
  </form>
`
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

        // @ts-ignore
        const { data } = await axios.get('/doctors/getAllDoctors')

        const allDoctors = data;
        console.log(allDoctors)
        let html = ""
        allDoctors.forEach(doctor => {
            html += `<button id="${doctor.doctorId} onclick="handleSelectDoctor(event)">Dr. ${doctor.lastName} (${doctor.doctorType})</button> `

        });
        doctorsBtns.innerHTML = html



    } catch (error) {
        console.error(error)
    }


}

