import { useState } from "react"

export default function Lottery() {
    let [head, setHead] = useState("Lottery");
    let [lotnum, setLotNum] = useState(0);
    // Function to generate a random three-digit number
    function generateRandomThreeDigitNumber() {
        let newLotNum = Math.floor(Math.random() * 900) + 100
        setLotNum(newLotNum)// Generates a number between 100 and 999
        checkNumber(newLotNum);
    }
    function checkNumber(num){
       let checkNum =[...num.toString()].map(Number).reduce((acc, digit) => acc + digit, 0)
   setHead(checkNum === 15 ? "Lottery 'Congratulation' you won!" : "Try again!")
    }
    return (
        <>
            <h1>{head}</h1>
            <p>Lottery Ticket = {lotnum}</p>
            <button onClick={() => { generateRandomThreeDigitNumber()}}> Get New Ticket</button>
        </>
    )
}