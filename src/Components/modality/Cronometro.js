import { useState } from "react";




let [ss, mm, hh] = [0, 0, 0]
let [dSs, dMm, dHh] = ['', '', '']

export const Cronometro = ({stop}) => {
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
    if (!stop) {
        setInterval(() => {
            timer()
        }, 10);    
    }
    return (
        <>
            <div>
                <h2>{tempo}</h2>
            </div>
        </>
    )
}

