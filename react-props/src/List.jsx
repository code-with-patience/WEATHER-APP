import Producti from "./Producti.jsx";
function List(){
    let options1=["fast","reliable"];
    let options2=["high-processor","long-capacity"];
    let options3=["flexible","hihgly grid"];
    return(
        <>
           {/* basically title is props here that contain some value */}
                
              <Producti title="Phone" Price={20000} features={options1}/>
              <Producti  title="Laptop" Price={40000} features={options2}/>
              <Producti  title="Mac-Book" Price={35000} features={options3}/>
        </>
    );
}
export default List;