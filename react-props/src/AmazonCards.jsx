import Cards from "./Cards.jsx"
export default function AmazonCards(){
    let styles={display:"flex",
          flexWrap:"wrap",
    };
    return(
         <div className="amazon" style={styles}>
            <Cards title="Logitech MX master" index={0}/>
            <Cards title="Apple pencil(2nd gen)" index={1}/>
            <Cards title="Zebronics" index={2}/>
            <Cards title="Sony tab" index={3}/>
         </div>
    );
}