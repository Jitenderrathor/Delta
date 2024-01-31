/* h1 = document.querySelector("h1");

function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

async function demo(){
    await colorChange("red", 1000);
    await colorChange("yellow", 1000);
    await colorChange("orange", 1000);
     colorChange("green", 1000);
} */

img = document.querySelector("img");

let url = "https://dog.ceo/api/breeds/image/random";

/* async function getImg(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.message);
        img.src = data.message;
    } catch (error) {
        console.log(error);
        img.alt.innerText = "No Image Found";
    }
} */
async function getImg(){
    try {
        let res = await axios.get(url);
        img.src = res.data.message;
    } catch (error) {
        console.log(error);
        img.alt.innerText = "No Image Found";
    }
}
// getImg();