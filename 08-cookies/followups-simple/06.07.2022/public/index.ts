let axios;



function handleLoad() {
  try {
    helloServer();
  } catch (error) {
    console.error(error);
  }
}

async function helloServer() {
   try {
    const {data} = await axios.get('/client/hello');
    console.log(data);
     
    
   } catch (error) {
    console.error(error);
   }
}