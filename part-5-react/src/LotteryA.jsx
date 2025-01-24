// import { useState } from 'react'
// import {getTicket,sums} from './Ticket.js'
//  export default function LotteryA(){
//   let[ticket,setTicket]=useState([0,0,0]);
//   let onchange=()=>{
//     setTicket(getTicket(3));
//   }
//   let isWin=sums(ticket)===15;
//   console.log(isWin);
//     return(
//       <div>
//           <h1>Lottery Game!</h1>
//           <button onClick={onchange} >click!</button>
//          <h3 style={{border:"2px solid white", borderRadius:"10px"}}>
//          <span>{ticket[0]}</span>
//           <span>{ticket[1]}</span>
//           <span>{ticket[2]}</span>
//          </h3>
//           <h3>{isWin && "Congratulations! YOU WON"}</h3>
//       </div>
//     ); 
//   }