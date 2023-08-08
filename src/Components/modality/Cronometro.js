import { useState } from "react";

import { Button } from "./Button";

const urlParams = new URLSearchParams(window.location.search)
const modality = urlParams.get("modality")

let [ss, mm, hh] = [0, 0, 0]
let [dSs, dMm, dHh] = ['', '', '']
let cont = 0
export const Cronometro = () => {
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
        }
        setDecre(decre - 1)
    }

    const handleStop = () => {
        clearInterval(intervalo)
        intervalo = null
        cont++
    }

    const [tempo, setTempo] = useState("00:00:000")
    const atualizarDisplay = () => {
        hh < 10 ? dHh = "0" + hh : dHh = hh
        mm < 10 ? dMm = "0" + mm : dMm = mm
        ss < 100 ? dSs = "00" + ss : ss < 10 ? dSs = "0" + ss : dSs = ss
        setTempo(`${dHh}: ${dMm}: ${dSs}`)
    }

    const timer = () => {
        ss += 10
        if (ss == 1000) {
            mm++
            ss = 0
        }
        if (mm == 60) {
            hh++
            mm = 0
        }
        atualizarDisplay()
    }

    let intervalo = () => {
        setInterval(() => {
            timer()
        }, 10);
    }

    if (cont == 0) {
        intervalo()
    }



    intervalo()

    return (
        <>
            <div>
                <h2>{tempo}</h2>
                <Button className="btn btn-dark mb-3 mt-3" onClick={() => handleClick()} id="button">{decre}</Button>
                <Button className="btn btn-dark mb-3 mt-3" onClick={() => handleStop()} id="button">Parar</Button>
            </div>
        </>
    )
}

