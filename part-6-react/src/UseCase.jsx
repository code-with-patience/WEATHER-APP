import { useEffect, useState } from "react";

export default function UseCase(){
    let URL="https://official-joke-api.appspot.com/random_joke";
    let[joke,setJoke]=useState({});
     let changeJoke=async()=>{
        let response=await fetch(URL);
        let result=await response.json();
        console.log(result);
        setJoke({setup :result.setup,punchline:result.punchline});
     }
     //if we want to show joke also for first time;
     useEffect(()=>{
        async function getFirstJoke() {
            let response=await fetch(URL);
            let result=await response.json();
            console.log(result);
            setJoke({setup :result.setup,punchline:result.punchline});
        }
        getFirstJoke();
    },[]);
        
    return (
        <>
        <h1>Joke</h1>
        <h3>{joke.setup}</h3>
        <h3>{joke.punchline}</h3>
        <button onMouseEnter={changeJoke}>New Joke!</button>
        </>
    );
}