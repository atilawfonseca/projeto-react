import { useState } from "react";


const Formulario = () => {

    let [notaA, setNotaA] = useState(0);
    let [notaB, setNotaB] = useState(0);
    let [notaC, setNotaC] = useState(0);

    return(
        <>
        <form >
            <input type="number" placeholder="Digite sua primeira nota A" onChange={evento => setNotaA(evento.target.value)} />
            <input type="number" placeholder="Digite sua primeira nota B" onChange={evento => setNotaB(evento.target.value)} />
            <input type="number" placeholder="Digite sua primeira nota C" onChange={evento => setNotaC(evento.target.value)} />
        </form>

        {notaA}
        {notaB}
        {notaC}
        </>
    )
}

export default Formulario; 