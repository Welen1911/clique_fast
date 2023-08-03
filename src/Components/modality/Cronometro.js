import { useState } from "react";

export const Cronometro = () => {

    const [tempo, setTempo] = useState("00:00:00")

    let hh = 0;
    let mm = 0;
    let ss = 0;
    const cronometro = () => {
        ss++;
        if (ss === 60) {
            mm++;
            ss = 0;
            if (mm === 60) {
                hh++;
                mm = 0;
            }
        }
    }

    setInterval(() => {
        cronometro()
        setTempo(`${hh >= 10 ? hh : "0" + hh}:${mm >= 10 ? mm : "0" + mm}:${ss >= 10 ? ss : "0" + ss}`)
    }, 100)

    return (
        <>
            <h2>{tempo}</h2>
        </>
    )
}

