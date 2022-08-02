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
    console.log(data);
    renderAll(userDB)
    if(error) throw error 
    }
    
   catch (error) {
    console.log(error);
  }
}

function renderAll(userDB){
  let html="";
  userDB.forEach(appo => {
    html=`you have an appointment to ${appo.doctorType} doctor- dr. ${appo.doctorId}
    on ${appo.time}
    at ${appo.date}
    <button onclick="handleDelete(appo)" type="deleteAppo">Delete</button>`
    
  });
}

async function handleDelete(appo){
  const userId = getUserId();
  const date= appo.date;
  const time= appo.time;
  const doctor= appo.doctorId
  // @ts-ignore
  const { data } = await axios.delete("/meetings/get-meetings", {  date, time, doctor });
  const { error, success } = data;
  console.log(data)

}

