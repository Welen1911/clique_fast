import { useState } from "react"

import { Button, Link } from "./Button"

const urlParams = new URLSearchParams(window.location.search)
const modality = urlParams.get("modality")

export const Crono = () => {
  
  let modaDecre = parseInt(modality)
  const [decre, setDecre] = useState()
  
  const handleClick = () => {
    setDecre(decre--)
    console.log(decre)
  }

  return (
        <div className="container">
          <div><h2>00:00:00</h2></div>
          <Button onClick={() => handleClick}>{modaDecre}</Button>
        </div>
   ) 
}