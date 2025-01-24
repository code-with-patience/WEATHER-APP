import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function MarkAsDone(){
   
      let style={color:"red"};
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(), isDone:false}]);
    let [newTodo,setNewTodo]=useState(""); //this will be init only for once at starting;

    let updateTodo=(event)=>{
       console.log(event.target.value);//here target is input;
       setNewTodo(event.target.value);//this is used for re-render the component
    };
 
    let addTask=()=>{

         setTodos([...todos,{task:newTodo, id:uuidv4(), isDone:false}]);
         setNewTodo("");//reset to empty string after enter the input
         console.log("add task succsessfully!");
    };

    let done=(id)=>{
          console.log("done!");
          setTodos(todos.map((todo)=>{
            if(todo.id==id){
                return {...todo, isDone:true};
            }
            else{
                return todo;
            }
          }));
    };
    return(
        <div>
            <input type="text" placeholder="Enter task" onChange={updateTodo} value={newTodo}/>
            &nbsp;&nbsp;&nbsp;
            <button onClick={addTask}>Add task</button>
             <h1>Todo List</h1>
             <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span>
                        &nbsp;&nbsp;
                     <button onClick={()=>done(todo.id)}>MARK AS DONE</button></li>
                ))} 
             </ul>
        </div>
    );
}