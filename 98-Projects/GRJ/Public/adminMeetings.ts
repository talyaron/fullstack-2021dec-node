

async function searchByDoctor(event) {
    try {
        const DoctorName = event.target.value;
        console.log(DoctorName)
        if (!DoctorName) throw new Error("couldnt find user id in url");

        // @ts-ignore
        const { data } = await axios.post("/meetings/Doc-meetings", { DoctorName });
        const { error, userDB } = data;
        console.log(data, "1");
        renderAll(data)
        if (error) throw error
    }

    catch (error) {
        console.log(error);
    }
}

function renderAll(userDB) {
    let html = "";
    

    userDB.forEach(appo => {
        html += `</br>dr. ${appo.doctorId} has an appointment</br>
      on ${appo.time}
      at ${appo.date}</br>
      <button id=${appo._id} onclick="handleDelete(event)" type="deleteAppo">Delete</button></br></br></br>`

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