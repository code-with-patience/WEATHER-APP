import { useState } from "react";

export default function LudoButtons(){
let[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
   let updateBlue=()=>{
    //  moves.blue+=1;
    //  setMoves({...moves});

    console.log(`moves.blue=${moves.blue}`);
       setMoves((preMoves)=>{
        return {...preMoves,blue: preMoves.blue+1}
       });
        };

        let updateRed=()=>{
    
            console.log(`moves.red=${moves.red}`);
               setMoves((preMoves)=>{
                return {...preMoves,red:preMoves.red+1}
               });
             };

        let updateYellow=()=>{
    
            console.log(`moves.yellow=${moves.yellow}`);
               setMoves((preMoves)=>{
                return {...preMoves,yellow:preMoves.yellow+1}
               });
             };

             let updateGreen=()=>{
    
                console.log(`moves.green=${moves.green}`);
                   setMoves((preMoves)=>{
                    return {...preMoves,green:preMoves.green+1}
                   });
                 };
    

    return(
        <div>
            <p>Blue moves: {moves.blue}</p>
            <button style={{backgroundColor:"blue", color:"black"}} onClick={updateBlue}>+1</button>
            <p>Red moves: {moves.red}</p>
            <button style={{backgroundColor:"red", color:"black"}} onClick={updateRed}>+1</button>
            <p>Yellow moves: {moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
            <p>Green moves: {moves.green}</p>
            <button style={{backgroundColor:"green", color:"black"}} onClick={updateGreen}>+1</button>
        </div>
    );
}