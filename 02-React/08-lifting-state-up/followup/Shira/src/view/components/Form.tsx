import React from "react";

interface FormProps{
  setName:Function
}

const Form = ({setName}:FormProps) =>{
  function handleForm(ev:any){
try {
  ev.preventDefault();
  setName(ev.target.elements.name.value)
} catch (error) {
  console.error(error)
}
  }
return(
  <div>
    <form onSubmit={handleForm}>
      <input type="text" name="name" placeholder="Name" />
      <input type="submit" value="Submit" />
    </form>
  </div>
)
}

export default Form;