import { useState } from "react"

import { Button, Link } from "./Button"

export const Modality = () => {
  const [liberar, setLiberar] = useState("Selecione")
  const handleRadio = (num) => {
    setLiberar(num)
  }
  const handleClick = () => {
    
  }

  return (
        <div className="container">
            Selecione a modalidade: 
            <div className="form-check form-check-inline" style={{
                marginLeft: "10px"
            }}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" value="10" onClick={
              () => handleRadio(10)
            }/>
            
            <label className="form-check-label">10</label>
            
          </div>
          
          <div className="form-check form-check-inline" style={{
                marginLeft: "10px"
            }}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" value="10" onClick={
              () => handleRadio(30)
            }/>
            
            <label className="form-check-label">30</label>
            
          </div>

          <div className="form-check form-check-inline" style={{
                marginLeft: "10px"
            }}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" value="10" onClick={
              () => handleRadio(100)
            }/>
            
            <label className="form-check-label">100</label>
            
          </div>
          <br></br>
          <Link children={liberar}></Link>
        
        </div>
   ) 
}