

function renderUsers(users) {
    const html = users
      .map((user) => {
        console.log(user);
        return `<div>
                <form>
            
                </form>
            </div>`;
      })
      .join("");
    console.log(html);
  
    document.getElementById("users").innerHTML = html;
  }
  