// import App from './App.jsx';

function Producti({title,Price,features}){
  console.log(features);
  let styles={backgroundColor: Price>30000 ? "gray" : ""};
     return(
       <div style={styles}>
         <h1>{title}</h1>
         <p>Price:: {Price}</p>
         <p>Features:: {features}</p>
         {/* conditionals */}
         {Price>30000 ? <p>Discount of 5%</p> : null}
       </div>
    );
}
export default Producti;