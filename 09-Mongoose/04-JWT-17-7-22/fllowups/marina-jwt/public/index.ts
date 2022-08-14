let axios;
const video: any = document.querySelector("#video");
const videoPouseBtn: any = document.querySelector("#videoPouseBtn");

async function handleRegister(e) {
  try {
    e.preventDefault();
    let {name, email, password} = e.target.elements;
    name = name.value;
    email = email.value;
    password = password.value;
    const {data} = await axios.post('/users/register', {name, email, password});
    const {error, user} = data;
    // if(error) throw error;
    console.log(user);
    // e.target.reset();
    if (error) {
      alert("Couldn`t register user");
    } else {
      window.location.href = "./user.html";
    }
    
  } catch (error) {
    console.error(error.message);
  }
}

async function handleLogin(e) {
  try {
    e.preventDefault();
    let {email, password} = e.target.elements;
    email = email.value;
    password = password.value;
    const {data} = await axios.post('/users/login', {email, password});
    const {error, user, entrances} = data;

    console.log('This is the user from handleLogin:', user);
    console.log("This is the Data from handleLogin:", data);

    // e.target.rest();
    if(!user) {
      alert("Username or password is incorrect");     
    } else {
      window.location.href = "./user.html";
    }
    if(error && error.includes('E11000')) alert('This email is already in use');

  } catch (error) {
    console.error(error.message);
  }
}


async function getUserByCookie() {
  try {
    const {data} = await axios.get('/users/user-by-cookie');
    const { user, decodedCookie } = data;
    if(!user)  throw new Error('User not found');
    console.log("This user from getUserByCookie:", user);

    const { name } = user;
    console.log("name is:", name);   
    console.log("decodedCookie is:", decodedCookie);

    const welcomeRoot: any = document.querySelector("#welcomeRoot");
    welcomeRoot.innerHTML = `<h1>Wellcome, ${decodedCookie.name}!</h1>`;

  } catch (error) {
    console.error(error.message);
  }
}


function videoBackground() {
  if (video.paused) {
    video.play();
    videoPouseBtn.innerHTML = "Pause";
  } else {
    video.pause();
    videoPouseBtn.innerHTML = "Play";
  }
}
