import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Tasks(){
    // let [todos,setTodos]=useState(["sample task"]);
      
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState(""); //this will be init only for once at starting;

    let updateTodo=(event)=>{
       console.log(event.target.value);//here target is input;
       setNewTodo(event.target.value);//this is used for re-render the component
    };

    let addTask=()=>{
        // todos.push(newTodo);//newTodo contains updates value;
        //  setTodos([...todos]);
            //   OR
        // setTodos([...todos,newTodo]);

        setTodos((prevTodos)=>{
            return [...todos,{task:newTodo, id:uuidv4()}]
        });
         setNewTodo("");//reset to empty string after enter the input
       console.log("add task succsessfully!");
    };
    let deleteTask=(id)=>{
        //   console.log("task to be deleted");
        //   console.log(id);
        // let copy=todos.filter((todo)=>todo.id!=id)
        // console.log(copy);
         setTodos(todos.filter((todo)=>todo.id!=id));

    }

    let allUpper=()=>{
    //  let newArr=todos.map((todo)=>todo.task);
    //  console.log(newArr);
    setTodos(todos.map((todo)=>{
        return {...todo, task:todo.task.toUpperCase()};
    }));
    }
    return(
        <div>
            <input type="text" placeholder="Enter task" onChange={updateTodo} value={newTodo}/>
            &nbsp;&nbsp;&nbsp;
            <button onClick={addTask}>Add task</button>
             <h1>Todo List</h1>
             <ul>
                {/* this is for simple array */}
                {/* { todos.map((todo)=>(<li>{todo}</li>))} */}

                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;
                        {/* make deleteTask as a arrow function b/c it can create a copy of methods with some arguments instead of execute(deleteTask(todo.id)) the methods */}
                        <button onClick={()=>deleteTask(todo.id)}>delete</button>
                    </li>
                ))} 
             </ul>
             <button onClick={allUpper}>Uppercase</button>
        </div>
    );
}