$(window).on("hashchange", function () {
    if (location.hash.slice(1) == "signup") {
      $(".page").addClass("extend");
      $("#login").removeClass("active");
      $("#signup").addClass("active");
    } else {
      $(".page").removeClass("extend");
      $("#login").addClass("active");
      $("#signup").removeClass("active");
    }
  });
  $(window).trigger("hashchange");

  async function validateLoginForm(ev: any) {
    try {
      ev.preventDefault();
      const elements = ev.target.elements
      const name = elements.userName.value;
      const password = elements.password.value;
      
      console.log(name, password);
    
    // @ts-ignore
      const { data } = await axios.get("/users/login", {
        name,
        password
      });
      console.log(data)
    
      if (!Array.isArray(data)) throw new Error("data should be an array and it is not")
      throwError(data)
      ev.target.reset();
    
    } catch (error) {
      console.error(error);
    }
  
  };
  
  
  
  
  function validateSignupForm(ev: any) {
    try {
      ev.preventDefault();
      const elements = ev.target.elements
      const email = elements.email.value;
      const name = elements.userName.value;
      const password = elements.password.value;
    
      console.log(name, email, password);
      
          // @ts-ignore
          const { data } = await axios.post("/users/sign-up", ({ name: name, email:email, password:password }));
    
          if(!Array.isArray(data)) throw new Error("data should be an array and it is not")
          throwError(data)
          ev.target.reset();
  
    } catch (error) {
      console.error(error);
    }
  
  };
  
  
  function throwError(UserValidate: any) {
      if ( UserValidate.email == "" || UserValidate.name == "" || UserValidate.password == "") {
        document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
        return false;
      } else if (UserValidate.password.length < 8) {
        document.querySelector("#errorMsg").innerHTML = "Your password must include atleast 8 characters"
        return false;
      } else {
        alert("Successfully signed up");
        return true;
      }
  };