const btns = document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",()=>{
        alert("btn was clicked");
    })
}