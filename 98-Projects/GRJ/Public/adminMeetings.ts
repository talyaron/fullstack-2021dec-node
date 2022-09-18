async function changeDoctorsList(event) {
 
event.preventDefault()
  const doctorType = event.target.value;
  console.log(doctorType)
  // @ts-ignore
  const { data } = await axios.post('/doctors/getDoctorsByType', { doctorType })
  const allDoctors = data;
  let doctorsList = "";
  const doctorsNameBox: HTMLDivElement = document.querySelector("#doctorsNameBox");
 

  allDoctors.forEach(doctor => {
      doctorsList += `<div class="formsDiv_row"> <button class="buttonLoad" value="${doctor._id}" onclick="searchByDoctor(event)">Dr. ${doctor.lastName}</button> </div>`
  });
  
  doctorsNameBox.innerHTML=doctorsList
      
 
 
}

async function searchByDoctor(event) {
    try {
        const DoctorName = event.target.value;
        console.log(DoctorName)
        if (!DoctorName) throw new Error("couldnt find user id in url");

        // @ts-ignore
        const { data } = await axios.post("/meetings/Doc-meetings", { DoctorName });
        const { error, userDB, firstName } = data;
        console.log(data, "1");
        renderAll(data)
        if (error) throw error
    }

    catch (error) {
        console.log(error);
    }
}

function renderAll(data) {
    let html = "";
    let userDB= data.newUserDB
    let firstName= data.doctorName

    userDB.forEach(appo => {
        html += `</br>dr. ${firstName} has an appointment</br>
      on ${appo.time}
      at ${appo.date}</br>
     <div class="formDiv"> <button class="button" id=${appo._id} onclick="handleDelete(event)" type="deleteAppo">Delete</button></br></br></br></div>`

    });
    const root = document.querySelector('#root')
    root.innerHTML = html;
}

async function handleDelete(event) {
    
    const appoId = event.path[0].id;
  
    // @ts-ignore
    const { data } = await axios.delete("/meetings/delete-meetings", { data: { appoId } });
    const { error, AppoDB } = data;
    console.log(data)
    if(!AppoDB){
      document.location.reload()
    }
  }