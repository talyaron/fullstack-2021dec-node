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
  
  
  async function onscondPageLoad() {
    try {
      //get params of userId
      const userId = getUserId();
  
      if (!userId) throw new Error("couldnt find user id in url");
  
      // @ts-ignore
      const { data } = await axios.post("/profile/get-name", { userId });
      const { error, userDB } = data;
      console.log(data);
      if (error) throw error;
      const name = data.name
  
  
      const email = data.email
      if (name) {
        const nav = document.querySelector("#Navbar");
        nav.innerHTML = `<img
        src="https://toppng.com/uploads/preview/medical-symbol-11563573249uiwcpj6pbe.png"/>
        <h1>Hello ${name}! What would you like to do?</h1>`;
      } else {
        const nav = document.querySelector("#Navbar");
        nav.innerHTML = `<img src="https://toppng.com/uploads/preview/medical-symbol-11563573249uiwcpj6pbe.png"/>
        <h1>Hello ${email}! What would you like to do?</h1>`;
      }
      renderAll(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  function renderAll(data) {
    const userDB = data
    let html = "";
    html = `<div class="ScheduleApointmant">
     <button class="scheduleMeeting">
       <a href="./createAppo.html?userId=${userDB._id}" alt="scheduleMeeting">
         <i id="calenderPlusIcon" class="fas fa-calendar-plus"></i>
       </a>
     </button>
     <p>schedule a meeting</p>
   </div>
   <div>
     <button class="scheduleMeeting">
       <a href="./adminMeetings.html?userId=${userDB._id}" alt="my meetings">
       <i class="fas fa-calendar-check"></i>
     </a>
     </button>
     <p>check my meetings</p>
   </div>
   <div>
     <button class="ContactADoctor">
       <a href="./Connect.html?userId=${userDB._id}" alt="online Doctor">
         <i class="fas fa-comment-medical"></i>
       </a>
       </button>
       <p>online Doctor</p>
   </div>
   <div>
   <button class="ContactADoctor">
   <a href="./createAppo.html?userId=${userDB._id}" alt="online Doctor">
     <i class="fas fa-user-md"></i>
   </a>
   <p>Scheduling the Doctors</p>
  </button>
  
  </div>
  
  
  `
  
  
  
    const actions = document.querySelector('#actions')
    actions.innerHTML = html
  
  
  }
  