async function handleGetJoke1() {
    try {
      console.log("get joke1");
    console.log("get user After fetch (2)");
      
      
      const { data } = await axios.get("/api/joke1");
      console.log(data)
      const { joke, error } = data;
    console.log("get user After fetch (2.5)");
      
      if (error) throw new Error(error);
     
      renderJoke(joke);
      console.log("get user After the end of fetch (3)");

    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetJoke2() {
    try {
      console.log("get joke2");
    console.log("get user After fetch (2)");
      
      
      const { data } = await axios.get("/api/joke2");
      console.log(data)
      const { joke, error } = data;
    console.log("get user After fetch (2.5)");
      
      if (error) throw new Error(error);
     
      renderJoke(joke);
      console.log("get user After the end of fetch (3)");

    } catch (error) {
      console.error(error);
    }
  }
  async function handleGetJoke3() {
    try {
      console.log("get joke3");
    console.log("get user After fetch (2)");
      
      
      const { data } = await axios.get("/api/joke3");
      console.log(data)
      const { joke, error } = data;
    console.log("get user After fetch (2.5)");
      
      if (error) throw new Error(error);
     
      renderJoke(joke);
      console.log("get user After the end of fetch (3)");

    } catch (error) {
      console.error(error);
    }
  }



  function renderJoke(joke) {
    const root1: HTMLElement = document.querySelector("#root1");
    const root2: HTMLElement = document.querySelector("#root2");
    const root3: HTMLElement = document.querySelector("#root3");

    // root1.innerHTML = joke[0].title;
    // root1.innerHTML = joke[1].title;
    // root1.innerHTML = joke[2].title;

    root1.innerHTML = joke[0];
    root2.innerHTML = joke[1];
    root3.innerHTML = joke[2];


  }