import React from "react";
import { useState } from "react";
import {Link } from "react-router-dom";
import { SetProduct } from "./setProduct"

const [error, setError] = useState<string | null>(null);
const [loginSuccses, setLoginSuccses] = useState<boolean>(false);
interface adminUser{
    email:string,
    password:string
}
const admins:Array<adminUser>=[
    {   email:"one@one.com",
        password: "123"
    },
    {
        email:"two@two.com",
        password:'123'
    }
]
interface loginProps{
    setError:Function,
    setLoginSuccses:Function,
    loginSuccses:Boolean
}
export const Login = ({setError, setLoginSuccses, loginSuccses}:loginProps) => {
    
    function handleLogin(ev: any) {
        ev.preventDefault();
        try {
          const email = ev.target.elements.email.value;
          const password = ev.target.elements.password.value;
            if(admins.find((admin)=>admin.password===password)){
                setLoginSuccses(true)
            }
        } 
        catch (error) {
          console.error(error);
        }
      }
      if (loginSuccses === true){
        return(
            //<SetProduct/>
            <div>
            you are an admin
        </div>
        )
      }
      else{
        <div>
            
            you are not an admin
        </div>
      }
     
}
