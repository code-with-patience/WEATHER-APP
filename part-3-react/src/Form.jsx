function handleFormSbmt(event){
    event.preventDefault();
    console.log("Form submitted!")
}

export default function Form(){
   return(
    <form onSubmit={handleFormSbmt}>
        <label htmlFor="mail-id">Mail-id</label>
        &nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="abc@gmail.com" id="mail-id"/>
        <br/>
        <button >Submit</button>
    </form>
   );
}