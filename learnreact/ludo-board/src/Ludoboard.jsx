import { useState } from "react";


export default function Ludoboard(){
    let [moves, setMoves] = useState({blue:0,red:0, yellow:0,green:0});
    let updateMoves =(color)=>{
        moves.color +=1;
        setMoves(...moves);
    }
    return (
        <>
        <h4>Game Begins!</h4>
        <p>Blue Moves = {moves.blue}</p>
        <button onClick={updateMoves}>+1</button>
        <p>Red Moves = {moves.red}</p>
        <button onClick={updateMoves}>+1</button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button onClick={updateMoves}>+1</button>
        <p>Green Moves = {moves.green}</p>
        <button onClick={updateMoves}>+1</button>
        </>
    )
}