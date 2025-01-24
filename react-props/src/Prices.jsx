
function Prices({oldPrice,newPrice}){
   let oldStyle={textDecoration: "line-through"};
   return(
   <div style={{backgroundColor:"yellow", height:"32px", borderBottomLeftRadius:"7px",  borderBottomRightRadius:"7px"}}>
       <span style={oldStyle}>{oldPrice}</span>
       &nbsp; &nbsp; &nbsp;
       <span>{newPrice}</span>
    </div>
   ); 
}
export default Prices;