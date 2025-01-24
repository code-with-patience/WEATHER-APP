 import { useState } from "react";

export default function LikeButtons(){
    let [isLike,setIsLike]=useState(false);
    let clicked=()=>{
        // if(setIsLike(!isLike)){
        //     <i className="fa-solid fa-heart"></i>
        // }
        // else{
        //     <i className="fa-regular fa-heart"></i>
        // }
       setIsLike(!isLike);

    }
    return(
        <>
        <h1 onClick={clicked}>
            {/* {isLike.toString()} */}
           {isLike ? <i className="fa-solid fa-heart" style={{color:"red"}}></i> : <i className="fa-regular fa-heart"></i>}
           </h1>
        </>
    );
}