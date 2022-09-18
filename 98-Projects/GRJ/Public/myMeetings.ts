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


async function searchMeetings() {
  try {
    //get params of userId
    const userId = getUserId();

    if (!userId) throw new Error("couldnt find user id in url");

    // @ts-ignore
    const { data } = await axios.post("/meetings/get-meetings", { userId });
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
  console.log(userDB)
  userDB.forEach(appo => {
    html += `<div class="formsDiv_row"> ${appo.doctorType}</br>you have an appointment to ${appo.doctorType} doctor</br>
    on ${appo.time}
    at ${appo.date}</br>
      <button id=${appo._id} onclick="handleDelete(event)" type="deleteAppo">Delete</button></br></br></br> </div>`

  });
  const root = document.querySelector('#root')
  root.innerHTML = html;
}

async function handleDelete(event) {
  const userId = getUserId();
  const appoId = event.path[0].id;

  // @ts-ignore
  const { data } = await axios.delete("/meetings/delete-meetings", { data: { appoId } });
  const { error, AppoDB } = data;
  console.log(data)
  if(!AppoDB){
    document.location.reload()
  }
}

