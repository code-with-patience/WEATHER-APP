import { useState } from "react";
//  beconstruct an array
export default function Counter(){
//     let count=0;
//    function IncCount(){
//      count+=1;
//      console.log(count);
//    }
let [count,setCount]=useState(0);  

function IncCount(){
   setCount(count+1);
   console.log(count);
}

    return(
        <div>
            <h1>States in React</h1>
            {/* <button onClick={IncCount}>Increase count ={count}</button> */}
            {/* <h3>count={count}</h3> */}

             <button onClick={IncCount}> count {count}</button>
        </div>
    );
}