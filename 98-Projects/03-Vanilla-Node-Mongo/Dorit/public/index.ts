
let socket = io();

const form =  document.querySelector('#form');
const input = document.querySelector('#input') as HTMLInputElement;
const messages = document.querySelector('#messages');


form.addEventListener('submit', function(e:any) 
{
  e.preventDefault();
  if(input.value) {
    socket.emit('chat message', input.value)
  }
  input.value = '';
})

socket.on('chat message', function(msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})
async function handleLogin(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    console.log(password, email);

     //@ts-ignore
     const { data } = await axios.post("/users/login", { password, email });
     console.log(data);
     const {ok} = data;
     if(ok){
        window.location.href= './products.html'
     }
  } catch (error) {
    console.error(error);
  }
}

async function handleRegister(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/users/register", { password, email });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
