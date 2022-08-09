
async function createSingleAppo() {
    const createSingleAppo: HTMLDivElement = document.querySelector(".createSingleAppo");

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

      <div class="doctorsNameBox">
    
      </div>

    <button class="button" type="submit">Create</button>
  </form>
`
}
async function changeDoctorsList() {


    const doctorType = document.getElementById('doctorType').value;
    const { data } = await axios.post('/doctors/getDoctorsByType', { doctorType })
    const allDoctors = data;
    let doctorsList = "";
    const doctorsNameBox: HTMLDivElement = document.querySelector(".doctorsNameBox");
    doctorsNameBox.innerHTML = ""

    allDoctors.forEach(doctor => {
        doctorsList += `<option value="${doctor._id}">Dr. ${doctor.lastName} (${doctor.doctorId})</option>`
    });

    doctorsNameBox.innerHTML =
        `<select class="form__input" id="doctorsNames" name="doctorsNames">
    ${doctorsList}
    </select>`
}

async function handleCreateAppo(ev) {
    ev.preventDefault()

    try {

        const date: string = ev.target.date.value;
        const doctorType: string = ev.target[2].value;
        const doctorId: string = ev.target[3].value;
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
        const { data } = await axios.get('/doctors/getAllDoctors');

        const allDoctors = data;
        console.log(allDoctors)
        let html = ""
        allDoctors.forEach(doctor => {
            html += `<button id="${doctor._id}" onclick ='handleSelectDoctor(event)' >Dr. ${doctor.lastName} (${doctor.doctorType}) </button>`

        });
        doctorsBtns.innerHTML = html;

    } catch (error) {
        console.error(error)
    }
}

function handleSelectDoctor(ev) {
    ev.preventDefault()
    const form: HTMLDivElement = document.querySelector(".createWorkSchedule");
    form.innerHTML = "";

    const selectedDoctor_id = ev.target.id;
    let html: string = "";

    var today: any = new Date();


    for (let i = 0; i < 7; i++) {
        today.setDate(today.getDate() + i)

        let dayName = today.toLocaleString('en-us', { weekday: 'long' })

        html += `<input type="checkbox" id="${todayDate(i)}"/> ${todayDate(i)} ${dayName} <br>`
    }


    form.innerHTML = `
 <form  id="${selectedDoctor_id}" onsubmit="createDoctorSchedule(event)">
${html}
<button class="button" type="submit">Create work schedule</button>
</form>
`

}




function todayDate(addDays) {
    var today: any = new Date();
    today.setDate(today.getDate() + addDays)
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today
}


function createDoctorSchedule(ev) {
    ev.preventDefault()
    const doctor_id = ev.target.id
    const daysLenght = ev.srcElement.length -1;
console.log(doctor_id);
console.log(ev.target[0].checked);
console.log(daysLenght);

    const detailsArray = [];

    for (let i = 0; i < daysLenght; i++) {
let checkbox = ev.target[i].checked;
console.log(checkbox);

let date = ev.target[i].id;
if(checkbox === true){
    let workday = {date: date};
    detailsArray.push(workday);
}
    }
    
console.log(detailsArray);


}