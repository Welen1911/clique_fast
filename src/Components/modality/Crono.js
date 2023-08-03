import { useState } from "react"

import { Button, Link } from "./Button"
import { Cronometro } from "./Cronometro"

const urlParams = new URLSearchParams(window.location.search)
const modality = urlParams.get("modality")

export const Crono = () => {
  let modaDecre
  try {
    modaDecre = parseInt(modality)
  } catch (e) {
    console.log("Erro ao converter para inteiro!")
  }
  const [decre, setDecre] = useState(modaDecre)
  
  const handleClick = () => {
    setDecre(decre-1)
  } 
  

  return (
        <>
        <div className="container">
          <div><Cronometro></Cronometro></div>
          <Button className="btn btn-dark mb-3 mt-3" onClick={() => handleClick()} id="button">{decre}</Button>
        </div>
        </>
   ) 
}