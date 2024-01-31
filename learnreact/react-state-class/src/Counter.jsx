import { useState } from "react";
export default function Counter(){
    let [count, setCount] = useState(0);
    function incCount(){
        setCount((count)=> count+1)
    }
    return(
       <>
        <button onClick={incCount}>Increase Count = {count}</button>
       </>
    )
}