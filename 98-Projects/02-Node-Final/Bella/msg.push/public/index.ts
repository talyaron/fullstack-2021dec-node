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


// async function handleAddUser(e) {
//   try {
//     e.preventDefault();
//     const name = e.target.elements.name.value;
//     console.log(name);
//     // @ts-ignore
//     const { data } = await axios.post("/users/user-add", { name });
//     renderUsers(data);
//     if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
//     e.target.reset();
//   } catch (error) {
//     console.error(error);
//   }
// }

async function validateLoginForm(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;
    
    console.log(name, password);
  
  // @ts-ignore
    const { data } = await axios.post("/users/login", { name, password });
    console.log(data)
  
  } catch (error) {
    console.error(error);
  }

};




function validateSignupForm(ev: any) {
  try {
    ev.preventDefault();
    const elements = ev.target.elements
    const email = elements.email.value;
    const name = elements.name.value;
    const password = elements.password.value;
  
    console.log(name, email, password);
    
        // @ts-ignore
        const { data } = await axios.post("/users/sign-up", { name, email, password });
  
        if(!Array.isArray(data)) throw new Error("data should be an array and it is not")
        // throwError(data)
        ev.target.reset();

  } catch (error) {
    console.error(error);
  }

};


// function throwError(UserValidate: any) {
//     if ( UserValidate.email == "" || UserValidate.name == "" || UserValidate.password == "") {
//       document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
//       return false;
//     } else if (UserValidate.password.length < 8) {
//       document.querySelector("#errorMsg").innerHTML = "Your password must include atleast 8 characters"
//       return false;
//     } else {
//       alert("Successfully signed up");
//       return true;
//     }
// };



// / Anonymous "self-invoking" function
// (function() {
//     const startingTime = new Date().getTime();
//     // Load the script
//     const script: any = document.createElement("SCRIPT");
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
//     script.type = 'text/javascript';
//     document.getElementsByTagName("head")[0].appendChild(script);

//     // Poll for jQuery to come into existance
//     const checkReady = function(callback) {
//             window.setTimeout(function() { checkReady(callback); }, 20);
//     };

//     // Start polling...
//     checkReady(function($) {
//         $(function() {
//             const endingTime = new Date().getTime();
//             const tookTime = endingTime - startingTime;
//             window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
//         });
//     });
//   });

// export const throwError = async (req, res) => {
//   try {
//     if (email == "" || name == "" || password == "") {
//       document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
//       return false;
//     } else if (password.length < 8) {
//       document.querySelector("#errorMsg").innerHTML = "Your password must include atleast 8 characters"
//       return false;
//     } else {
//       alert("Successfully signed up");
//       return true;
//     }
  

//   } catch (error) {
//     res.send({ error: error.message });
//   }
// };



  
  // // sign up
  // if (email == "" || name == "" || password == "") {
  //   document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
  //   return false;
  // } else if (password.length < 8) {
  //   document.querySelector("#errorMsg").innerHTML = "Your password must include atleast 8 characters"
  //   return false;
  // } else {
  //   alert("Successfully signed up");
  //   return true;
  // }

  
  // // login
  // if (name == "" || password == "") {
  //   document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
  //   return false;
  // } else if (password.length < 8) {
  //   document.querySelector("#errorMsg").innerHTML = "Your password must include at least 8 characters"
  //   return false;
  // } else {
  //   alert("Successfully logged in");
  //   return true;
  // }


// function goToLogin(userSigned) {
//       location.href = "./login.html";
//       console.log(userSigned);
//   };
// html += `<div class="screen__card-wrapper" id="${user.userId}">
// <h3 class="screen__title-h3__white">${user.name}</h3>
// <div class="screen__card-wrapper__actions">
//     <img onclick="handleUpdateUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src=" ./icons/pencil.svg " alt="edit ">
//     <img onclick="handleDeleteUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src="./icons/trash.svg " alt="delete ">
// </div>
// </div>`;

//   const root = document.querySelector('#root')
// root.innerHTML = html;
// }
