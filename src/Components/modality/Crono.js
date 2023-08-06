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
  const [stop, setStop] = useState(false)

  const handleClick = () => {
    if (decre == 1) {
      setStop(true)
      console.log(stop)
    }
    setDecre(decre-1)
  } 
  

  return (
        <>
        <div className="container">
          <div><Cronometro stop={stop}></Cronometro></div>
          <Button className="btn btn-dark mb-3 mt-3" onClick={() => handleClick()} id="button">{decre}</Button>
        </div>
        </>
   ) 
}