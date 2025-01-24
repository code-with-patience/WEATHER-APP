import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Product(){
 
  let random=()=>{
      let ans=Math.floor(Math.random()*1000);
      console.log(ans);
      let num=ans;
      let sum=0;
      while(num!=0){
            let rem=num%10;
            console.log(`remainder :: ${rem}`);
            sum+=rem;
            num/=10;
      }
      console.log(sum);
  }
return(
    <div>
      <p onClick={random}>hi</p>
    </div>     
                 
);
}