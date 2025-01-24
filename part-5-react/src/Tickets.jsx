import TicketNum from "./TicketNum.jsx";

export default function Tickets({ticket}){
    return(
        <div>
           {ticket.map((num,index)=>(
            <TicketNum num={num} key={index}/>
))}
        </div>
    );
}