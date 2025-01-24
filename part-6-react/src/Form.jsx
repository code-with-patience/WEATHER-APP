import { useState } from "react";

export default function Form(){
    let[name,setName]=useState("Madhur");
    let nameChange=(event)=>{
       console.log(event.target.value);
    setName(event.target.value);
    }
    return(
        <form action="#">
                  <label htmlFor="name">Full name</label>  &nbsp;
                 <input type="text" placeholder="Full Name" value={name} onChange={nameChange}/>
                  <br />
                 <button>Submit</button>
        </form>
    );
}