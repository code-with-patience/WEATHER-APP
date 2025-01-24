import { useState } from "react";

export default function Comments(){
    let[data,setData]=useState({
        username:"",
        remarks:"",
        rating:5,
    });
   
    let inputChanges=(event)=>{
      setData((currentData)=>{
          return {...currentData,[event.target.name]:event.target.value};
      })
    }
    let handleSubmits=(event)=>{
        console.log(data);
       event.preventDefault();
    };
    return(
        <>
        <form action="#"  onSubmit={handleSubmits}>
            <input type="text" placeholder="username" value={data.username} name="username" onChange={inputChanges}/>
            <br /><br />

            <textarea placeholder="Remarks" value={data.remarks} name="remarks" onChange={inputChanges}></textarea>
            <br /><br />

            <input type="number" placeholder="rating" min={1} max={12} value={data.rating} name="rating" onChange={inputChanges}/>
            <br /><br />

            <button>Submit!</button>
        </form>
        </>
    );
}