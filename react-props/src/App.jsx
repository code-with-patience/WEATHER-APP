import "./App.css";
// import "./Activity.jsx"
// import List from  "./List.jsx";
// import Activity from "./Activity.jsx";


import AmazonCards from "./AmazonCards.jsx";
function App(){
  // return  <List/>;
  //  return (
  //  <>
  //   <Activity userName='MADHUR' textColor='yellow'/>
  //   <Activity userName='KHUSHI' textColor='gray'/>
  //   </>
  //  );
  // let style={color:"black"};
   return (
    <>
    <h2 color={{color:"black"}}>Blockbuster deals on Computer Accessories! Shop now</h2>
   <AmazonCards/>
   </>
  );
}  
export default App;