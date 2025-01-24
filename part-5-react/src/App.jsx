
import './App.css'
// import LotteryA from './LotteryA.jsx';
// import TicketNum  from './TicketNum.jsx';
// import Tickets from './Tickets.jsx';
import Lotterys from './Lotterys.jsx';
function App() {
  let winCondition=(ticket)=>{
     return ticket.every((num)=>num===ticket[0]);
  }
  return(
      <div>
        {/* <LotteryA/> */}
        {/* <Tickets ticket={[0,1,2]}/> */}
        <Lotterys n={3} winCondition={winCondition}/>
      </div>
);
}

export default App
