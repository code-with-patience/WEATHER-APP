import { useState } from "react";

export default function Form1(){
    let[name,setName]=useState({
        fullName:"",
        userName:"",
        password:""  
    });
    let inputChange=(event)=>{
        let fieldName=event.target.name;
        console.log(fieldName);
        let valueName=event.target.value;
        console.log(valueName);

        setName((currentData)=>{
            currentData[fieldName]=valueName;
            return {...currentData};
        });
    }
    let handleSubmit=(event)=>{
       event.preventDefault();
       console.log(name);
       setName({
        fullName:"",
        userName:"",
        password:"" 
       });
    };
    return(
        <form action="#" onSubmit={handleSubmit}>
                  <label htmlFor="fullname">Full name</label>  &nbsp;
                 <input type="text" placeholder="Full Name" value={name.fullName} id="fullname" name="fullName" onChange={inputChange}/>
                  <br />

                  <label htmlFor="username">User name</label>  &nbsp;
                 <input type="text" placeholder="User Name" value={name.userName} id="username" name="userName" onChange={inputChange}/>
                  <br />

                  <label htmlFor="passowd">Password</label>  &nbsp;
                 <input type="password" placeholder="password" value={name.password} id="password" name="password" onChange={inputChange}/>
                  <br />
                 <button>Submit</button>
        </form>
    );
}