import { useState,useEffect } from "react";

export default function Counter(){
    let[countx,setCountx]=useState(0);
    let[county,setCounty]=useState(0);
    
    let incCountx=()=>{
      setCountx((currCount)=>
         currCount+1
      );
    }
    let incCounty=()=>{
        setCounty((currCount)=>
           currCount+1
        );
      }
    useEffect(function(){
       console.log("this is side effect");
    },[countx]);
    return(
        <>
         <h3>count={countx}</h3>
         <button onClick={incCountx}>Increase</button>
         <br /><br />
         <h3>count={county}</h3>
         <button onClick={incCounty}>Increase</button>
        </>
    );
}