
function printBye(){
    console.log("Bye!");
}
function handledbl(){
     console.log("double clicked by you");
}
export default function Button(){
    function printHello(event){
        console.log("Hello!");
        console.log(event); 
    }
   return(
    <div>
        <button onClick={printHello}>Click me!</button>
        <p onMouseEnter={printBye}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button onDoubleClick={handledbl}>double click!</button>
    </div>
   );
}