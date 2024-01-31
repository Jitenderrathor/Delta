import { useState } from "react";

export default function Form(){
    let [formData, setFormData] = useState({
        fullName:"",
        userName:"",
        passWord:"",
    })
    let handleInputChange= (event) =>{
        setFormData((currData)=>{
            return {...currData, [event.target.name]:event.target.value}
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName:"",
            userName:"",
            passWord:"",
        })
    }

    return (
        <>
        <label htmlFor="fullName"> Full Name </label>
        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange}/> <br />
        <label htmlFor="userName"> User Name </label>
        <input type="text" name="userName" id="userName" value={formData.userName} onChange={handleInputChange}/> <br />
        <label htmlFor="passWord"> Password </label>
        <input type="text" name="passWord" id="passWord" value={formData.passWord} onChange={handleInputChange}/> <br />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}