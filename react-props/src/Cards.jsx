import Prices from "./Prices.jsx"
 function Cards({title,index}){

   let oldPrice=["$1234","$2345","$3456","$5678"];
   let newPrice=["$1000","$2000","$3400","$5500"];
   let Desc=[["800-DI","scalable"],["Portable","for i-pad"],["inititative-surface","better"],["2000-DPI","wireless"]];
 let styles={border:"5px solid black",
             borderRadius:"1rem",
             marginLeft:"1rem",
             height:"180px", width:"200px"
             
 };
    return (
        <div style={styles}>
        <h4>{title}</h4>
        <p>{Desc[index][0]}</p>
        <p>{Desc[index][1]}</p>
         <Prices oldPrice={oldPrice[index]} newPrice={newPrice[index]}/>
        </div>
    );
}
export default Cards;
