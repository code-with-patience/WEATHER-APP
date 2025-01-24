import { useState } from "react";
import Tickets from "./Tickets.jsx";
import {getTicket,sums} from './Ticket.js';

export default function Lotterys({n,winCondition}){
    let [ticket,setTicket]=useState([]);
    // let isWin=sums(ticket)===winningSum;
    let isWin=winCondition(ticket);

    let onchange=()=>{
        setTicket(getTicket(n));
      }
    return(
        <div>
             <h1>Lottery Game!</h1>
              <Tickets ticket={ticket}/>
             <button onClick={onchange}>Buy Ticket</button>
             <h3>{isWin && "Congratulations! YOU WON"}</h3>
        </div>
    );
}