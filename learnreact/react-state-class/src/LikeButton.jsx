import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    function toggleLike(){
        setIsLiked(!isLiked);
    }
    let like  = {color:"red"}
    return(
       <>
        <button onClick={toggleLike}>
        {isLiked?(<i className="fa-sharp fa-solid fa-heart" style={like}></i>):(<i className="fa-sharp fa-regular fa-heart" ></i>)}

        </button>
        </>
        
    )
}