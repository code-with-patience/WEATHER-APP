import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Tasks(){
   
      
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState(""); //this will be init only for once at starting;

    let updateTodo=(event)=>{
       console.log(event.target.value);//here target is input;
       setNewTodo(event.target.value);//this is used for re-render the component
    };
 
    let addTask=()=>{

        setTodos([...todos,{task:newTodo, id:uuidv4()}]);
         setNewTodo("");//reset to empty string after enter the input
       console.log("add task succsessfully!");
    };
    return(
        <div>
            <input type="text" placeholder="Enter task" onChange={updateTodo} value={newTodo}/>
            &nbsp;&nbsp;&nbsp;
            <button onClick={addTask}>Add task</button>
             <h1>Todo List</h1>
             <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
                ))} 
             </ul>
        </div>
    );
}